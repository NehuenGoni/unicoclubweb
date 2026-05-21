// Regenerates derived brand assets from the source PNGs in public/brand/.
// Run with: node scripts/generate-brand-assets.mjs
//
// Outputs (Next.js 16 file-based metadata convention — these live in src/app/):
//   src/app/favicon.ico        16/32/48 multi-res from Unico-logo-Iso-azul.png
//   src/app/icon.png           512x512 from Unico-logo-Iso-azul.png
//   src/app/apple-icon.png     180x180 (white isotype on #071230 — iOS strips transparency)
//   src/app/opengraph-image.png 1200x630 (white full logo on #071230 with beige accent glow)

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BRAND = path.join(ROOT, "public", "brand");
const OUT = path.join(ROOT, "src", "app");

const BG = "#071230";        // same as --bg-base (Unico marine blue)
const GLOW = "#D9C4A5";      // beige accent for OG image radial glow

const ISO_AZUL = path.join(BRAND, "Unico-logo-Iso-azul.png");
const ISO_BLANCO = path.join(BRAND, "Unico-logo-Iso-blanco.png");
const LOGO_BLANCO = path.join(BRAND, "Unico-logo-Blanco-1.png");

async function ensureOut() {
  await mkdir(OUT, { recursive: true });
}

async function generateIconPng() {
  const out = path.join(OUT, "icon.png");
  await sharp(ISO_AZUL).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(out);
  console.log("wrote", out);
}

async function generateFaviconIco() {
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map((s) =>
      sharp(ISO_AZUL)
        .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const ico = await pngToIco(buffers);
  const out = path.join(OUT, "favicon.ico");
  await writeFile(out, ico);
  console.log("wrote", out, `(${sizes.join("/")})`);
}

async function generateAppleIcon() {
  const out = path.join(OUT, "apple-icon.png");
  // White isotype centered with ~22% safe-area padding on a solid #071230 square.
  // iOS strips alpha, so we must bake the background in.
  const SIZE = 180;
  const INNER = Math.round(SIZE * 0.62);
  const isoBuf = await sharp(ISO_BLANCO).resize(INNER, INNER, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: BG },
  })
    .composite([{ input: isoBuf, gravity: "center" }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

async function generateOgImage() {
  const out = path.join(OUT, "opengraph-image.png");
  const W = 1200;
  const H = 630;
  // Radial beige glow as SVG layer behind the logo.
  const glowSvg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs>
        <radialGradient id="g" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stop-color="${GLOW}" stop-opacity="0.22"/>
          <stop offset="60%" stop-color="${GLOW}" stop-opacity="0.05"/>
          <stop offset="100%" stop-color="${GLOW}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>
  `);

  // Scale full logo to fit ~52% of canvas height while preserving aspect ratio.
  const logoHeight = Math.round(H * 0.52);
  const logoBuf = await sharp(LOGO_BLANCO)
    .resize({ height: logoHeight, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: W, height: H, channels: 4, background: BG },
  })
    .composite([
      { input: glowSvg, top: 0, left: 0 },
      { input: logoBuf, gravity: "center" },
    ])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

async function main() {
  // Sanity-check that all 3 source images exist before doing any work.
  for (const f of [ISO_AZUL, ISO_BLANCO, LOGO_BLANCO]) {
    await readFile(f);
  }
  await ensureOut();
  await generateFaviconIco();
  await generateIconPng();
  await generateAppleIcon();
  await generateOgImage();
  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
