const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = path.join(__dirname, '../public/images/aiwebdesign.png');
const outputPath = inputPath;

const COLOR_START = { r: 0, g: 48, b: 112 };   // #003070
const COLOR_END = { r: 0, g: 68, b: 143 };     // #00448f

function gradientAt(x, y, width, height) {
  const t = Math.max(0, Math.min(1, (x + y) / (width + height - 2 || 1)));
  return {
    r: Math.round(COLOR_START.r + (COLOR_END.r - COLOR_START.r) * t),
    g: Math.round(COLOR_START.g + (COLOR_END.g - COLOR_START.g) * t),
    b: Math.round(COLOR_START.b + (COLOR_END.b - COLOR_START.b) * t),
  };
}

function screenBlend(fg, bg) {
  return {
    r: 255 - Math.round(((255 - fg.r) * (255 - bg.r)) / 255),
    g: 255 - Math.round(((255 - fg.g) * (255 - bg.g)) / 255),
    b: 255 - Math.round(((255 - fg.b) * (255 - bg.b)) / 255),
  };
}

async function main() {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(data.length);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const fg = { r: data[i], g: data[i + 1], b: data[i + 2] };
      const bg = gradientAt(x, y, width, height);
      const blended = screenBlend(fg, bg);

      out[i] = blended.r;
      out[i + 1] = blended.g;
      out[i + 2] = blended.b;
      out[i + 3] = data[i + 3];
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`Updated ${outputPath} (${width}x${height}) with hero gradient background`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
