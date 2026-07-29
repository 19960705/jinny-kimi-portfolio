const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const server = path.join(dist, "server");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(client, { recursive: true });
fs.mkdirSync(server, { recursive: true });

const files = [
  "index.html",
  "styles.css",
  "data.js",
  "script.js",
  "print.html",
  "print.css",
  "print.js",
  "favicon.png",
];

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(client, file));
}

fs.cpSync(path.join(root, "assets", "projects"), path.join(client, "assets", "projects"), {
  recursive: true,
});
fs.cpSync(path.join(root, "assets", "print"), path.join(client, "assets", "print"), {
  recursive: true,
});
fs.cpSync(path.join(root, "assets", "media"), path.join(client, "assets", "media"), {
  recursive: true,
});
fs.cpSync(path.join(root, "deliverables"), path.join(client, "deliverables"), {
  recursive: true,
});

const worker = `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`;
fs.writeFileSync(path.join(server, "index.js"), worker);

console.log(`Built static site into ${dist}`);
