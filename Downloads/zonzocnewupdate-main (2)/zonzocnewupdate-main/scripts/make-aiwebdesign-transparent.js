const path = require('path');
const sharp = require('sharp');

const sourcePath = path.join(__dirname, '../public/images/aiwebdesign-source.png');
const outputPath = path.join(__dirname, '../public/images/aiwebdesign.png');

/** Only pure black/near-black — keep all colored objects unchanged */
function isBackground(r, g, b) {
  const maxC = Math.max(r, g, b);
  const minC = Math.min(r, g, b);
  const spread = maxC - minC;

  if (maxC >= 32) return false;
  if (spread >= 14) return false;
  if (b >= 6 && b >= r) return false;
  if (g >= 12 && g >= r) return false;
  if (r >= 10 && r >= g && spread >= 6) return false;

  return maxC <= 24;
}

async function main() {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let idx = 0; idx < width * height; idx++) {
    const i = idx * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    out[i + 3] = isBackground(r, g, b) ? 0 : 255;
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  let fg = 0;
  for (let i = 3; i < out.length; i += channels) {
    if (out[i] === 255) fg++;
  }
  console.log(`Saved ${outputPath} (${width}x${height}) — objects ${Math.round(fg / (width * height) * 100)}%`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
