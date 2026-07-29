const { chromium } = require("playwright");

const baseUrl = process.env.PORTFOLIO_URL || "http://127.0.0.1:4176";
const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function inspect(browser, name, viewport) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`console: ${message.text()}`);
    }
  });

  const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
  if (!response || !response.ok()) {
    throw new Error(`${name}: page failed to load`);
  }

  await page.waitForFunction(() => window.__PORTFOLIO_READY__ === true);
  await page.evaluate(async () => {
    const images = [...document.images];
    images.forEach((image) => {
      image.loading = "eager";
    });
    await Promise.all(
      images.map((image) =>
        image.decode ? image.decode().catch(() => undefined) : Promise.resolve(),
      ),
    );
  });
  const report = await page.evaluate(() => {
    const images = [...document.images];
    const links = [...document.querySelectorAll("a[href]")];
    const missingAlt = images.filter((image) => !image.alt.trim()).length;
    const brokenImages = images.filter(
      (image) => !image.complete || image.naturalWidth === 0,
    ).length;
    const emptyLinks = links.filter((link) => !link.getAttribute("href")).length;
    const overflow = document.documentElement.scrollWidth - window.innerWidth;
    return {
      title: document.title,
      projects: document.querySelectorAll("[data-project-card]").length,
      missingAlt,
      brokenImages,
      emptyLinks,
      overflow,
    };
  });

  const firstDetails = page.locator("details").first();
  await firstDetails.locator("summary").click();
  if (!(await firstDetails.evaluate((node) => node.open))) {
    throw new Error(`${name}: case details did not open`);
  }

  await page.keyboard.press("Tab");
  const activeTag = await page.evaluate(() => document.activeElement?.tagName);
  if (!activeTag) {
    throw new Error(`${name}: keyboard focus path unavailable`);
  }

  if (report.projects !== 9) {
    throw new Error(`${name}: expected 9 projects, received ${report.projects}`);
  }
  if (
    report.missingAlt ||
    report.brokenImages ||
    report.emptyLinks ||
    report.overflow > 1 ||
    errors.length
  ) {
    throw new Error(`${name}: ${JSON.stringify({ report, errors })}`);
  }

  await page.close();
  return { name, ...report, consoleErrors: errors.length };
}

async function main() {
  const browser = await chromium.launch({ executablePath, headless: true });
  try {
    const reports = [];
    reports.push(await inspect(browser, "desktop", { width: 1440, height: 1000 }));
    reports.push(await inspect(browser, "mobile", { width: 390, height: 844 }));
    console.log(JSON.stringify(reports, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
