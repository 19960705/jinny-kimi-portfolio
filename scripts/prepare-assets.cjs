const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const projectOutput = path.join(root, "output", "playwright");
const destination = path.join(root, "assets", "projects");
const printDestination = path.join(root, "assets", "print");

fs.mkdirSync(destination, { recursive: true });
fs.mkdirSync(printDestination, { recursive: true });

const source = {
  kimiPeony: path.join(projectOutput, "kimi-peony.png"),
  kimiGrandma: path.join(projectOutput, "kimi-grandma.png"),
  infj: path.join(projectOutput, "infj-archive.png"),
  digitalPeony: path.join(projectOutput, "digital-peony.png"),
  productGrowth: path.join(projectOutput, "product-growth.png"),
  honglou: path.join(projectOutput, "honglou.png"),
  styleStudio: "/Users/mac/Documents/AI-Style-Studio/public/og.png",
  witch:
    "/Users/mac/Downloads/东方数据女巫_鼠标恶作剧_制作包_20260710/final/qc/contact-sheet-final.png",
  human:
    "/Users/mac/Downloads/人类验证失败_制作包_20260710/edit/outputs/人类验证失败_15秒连续版_take02_UI环境音_v1_封面.png",
  visualOne: path.join(root, "assets", "creamy-dream-porcelain.png"),
  visualTwo: path.join(root, "assets", "perfume-set.png"),
  visualThree: path.join(root, "assets", "product-shooting.png"),
  visualFour: path.join(root, "assets", "ai-visual-cover.png"),
  referenceOne:
    "/Users/mac/Documents/设计案例日报/assets/2026-07-03/candidate_53.png",
  referenceTwo:
    "/Users/mac/Documents/设计案例日报/assets/2026-07-13/01-Awwwards-Blackbook SaaS Dashboard Data Visualization.png",
  referenceThree:
    "/Users/mac/Documents/设计案例日报/assets/2026-07-24/06-PARFS-Luxury-Perfume-eCommerce-Checkout-Flow-UI-UX-Desi.jpg",
  referenceFour:
    "/Users/mac/Documents/设计案例日报/assets/2026-07-25/21-01-01.webp",
};

for (const [name, file] of Object.entries(source)) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing source asset: ${name} -> ${file}`);
  }
}

async function crop(file, width, height, position = "centre") {
  return sharp(file)
    .resize(width, height, { fit: "cover", position })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
}

async function single(file, output, position = "centre") {
  await sharp(file)
    .resize(1600, 1000, {
      fit: "cover",
      position,
      withoutEnlargement: false,
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(destination, output));
}

async function collage(files, output) {
  const gap = 14;
  const cellWidth = 793;
  const cellHeight = 493;
  const panels = await Promise.all(
    files.map((file) => crop(file, cellWidth, cellHeight)),
  );
  const composites = panels.map((input, index) => ({
    input,
    left: (index % 2) * (cellWidth + gap),
    top: Math.floor(index / 2) * (cellHeight + gap),
  }));

  await sharp({
    create: {
      width: cellWidth * 2 + gap,
      height: cellHeight * 2 + gap,
      channels: 3,
      background: "#f3efe7",
    },
  })
    .composite(composites)
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(destination, output));
}

async function duo(
  leftFile,
  rightFile,
  output,
  leftPosition = "centre",
  rightPosition = "centre",
) {
  const gap = 14;
  const panelWidth = 793;
  const panelHeight = 1000;
  const [left, right] = await Promise.all([
    crop(leftFile, panelWidth, panelHeight, leftPosition),
    crop(rightFile, panelWidth, panelHeight, rightPosition),
  ]);

  await sharp({
    create: {
      width: panelWidth * 2 + gap,
      height: panelHeight,
      channels: 3,
      background: "#f3efe7",
    },
  })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: panelWidth + gap, top: 0 },
    ])
    .webp({ quality: 83, effort: 5 })
    .toFile(path.join(destination, output));
}

async function main() {
  await sharp({
    create: {
      width: 96,
      height: 96,
      channels: 3,
      background: "#1557ff",
    },
  })
    .png()
    .toFile(path.join(root, "favicon.png"));
  await duo(
    source.kimiPeony,
    source.kimiGrandma,
    "kimi-web-duo.webp",
    "centre",
    "west",
  );
  await single(source.kimiPeony, "kimi-peony.webp", "north");
  await single(source.kimiGrandma, "kimi-grandma.webp", "west");
  await single(source.infj, "infj-midnight-archive.webp", "centre");
  await single(source.styleStudio, "ai-style-studio.webp", "centre");
  await single(source.digitalPeony, "digital-peony.webp", "centre");
  await duo(source.witch, source.human, "ai-short-films.webp");
  await single(source.productGrowth, "product-growth.webp", "north");
  await collage(
    [source.visualOne, source.visualTwo, source.visualThree, source.visualFour],
    "ecommerce-visual-system.webp",
  );
  await collage(
    [
      source.referenceOne,
      source.referenceTwo,
      source.referenceThree,
      source.referenceFour,
    ],
    "design-reference-automation.webp",
  );
  await single(source.honglou, "honglou-card-gallery.webp", "centre");
  for (const file of fs.readdirSync(destination).filter((name) => name.endsWith(".webp"))) {
    await sharp(path.join(destination, file))
      .resize(1200, 750, { fit: "cover" })
      .jpeg({ quality: 68, mozjpeg: true })
      .toFile(path.join(printDestination, file.replace(/\.webp$/, ".jpg")));
  }
  console.log(`Prepared project covers in ${destination}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
