import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, basename } from "path";

const SRC = new URL("../public/images/", import.meta.url).pathname
  .slice(1)
  .replace(/%20/g, " ");
const MAX_W = 2560;
const QUALITY = 82;

const files = readdirSync(SRC).filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const src = join(SRC, file);
  const name = basename(file, extname(file));
  const dest = join(SRC, `${name}.jpg`);

  process.stdout.write(`${file} → `);
  const before = (statSync(src).size / 1024 / 1024).toFixed(1);

  await sharp(src)
    .resize({ width: MAX_W, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(dest + ".tmp");

  const after = (statSync(dest + ".tmp").size / 1024 / 1024).toFixed(1);
  renameSync(dest + ".tmp", dest);

  // remove original PNG only if it's different from the output
  if (src !== dest) {
    const { unlinkSync } = await import("fs");
    unlinkSync(src);
  }

  console.log(`${before} MB → ${after} MB`);
}

console.log("\nDone.");
