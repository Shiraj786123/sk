const path = require('path');
const sharp = require('sharp');

const assetsDir =
  'C:\\Users\\HP\\.cursor\\projects\\c-Users-HP-Downloads-zonzocnewupdate-main-2-zonzocnewupdate-main\\assets';
const outDir = path.join(__dirname, '../public/images');

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

async function removeBlackBackground(inputPath) {
  const { data, info } = await sharp(inputPath)
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

  return sharp(out, { raw: { width, height, channels } }).png().toBuffer();
}

async function processHero(sourceName, targetName, targetWidth, targetHeight) {
  const sourcePath = path.join(assetsDir, sourceName);
  const outputPath = path.join(outDir, targetName);

  const transparent = await removeBlackBackground(sourcePath);

  await sharp(transparent)
    .resize(targetWidth, targetHeight, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(`✓ ${targetName} ← ${sourceName.slice(-40)} (${meta.width}x${meta.height})`);
}

const replacements = [
  {
    source:
      'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e6def166dd8ea60a442d564a88ede8ee_images_44-1-17bff85b-cf58-4cad-8c6d-1abf848f948c.png',
    target: 'ecommerce.png',
    width: 683,
    height: 365,
  },
  {
    source:
      'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e6def166dd8ea60a442d564a88ede8ee_images_22-3243effd-4bd8-47f2-965b-bd97f168d336.png',
    target: 'fullstack.png',
    width: 500,
    height: 500,
  },
  {
    source:
      'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e6def166dd8ea60a442d564a88ede8ee_images_55-0067104f-7155-4df1-906e-cc372c028e2d.png',
    target: 'seoservices.png',
    width: 500,
    height: 500,
  },
  {
    source:
      'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e6def166dd8ea60a442d564a88ede8ee_images_33-1-9232c16f-b6ec-4c07-b93a-faec6efee991.png',
    target: 'aioptimization.png',
    width: 500,
    height: 500,
  },
];

async function main() {
  for (const item of replacements) {
    await processHero(item.source, item.target, item.width, item.height);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
