const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const output = path.join(
  root,
  "deliverables",
  "Jinny-Lee-Kimi-Ambassador-Portfolio.pdf",
);

async function main() {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(pathToFileURL(path.join(root, "print.html")).href, {
    waitUntil: "load",
  });
  await page.waitForFunction(() => window.__PRINT_READY__ === true);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
  console.log(output);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
