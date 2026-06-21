const path = require('path');
const sharp = require('sharp');

const assetsDir =
  'C:\\Users\\HP\\.cursor\\projects\\c-Users-HP-Downloads-zonzocnewupdate-main-2-zonzocnewupdate-main\\assets';
const sourcePath = path.join(
  assetsDir,
  'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e6def166dd8ea60a442d564a88ede8ee_images_Aioptimization-019b2018-2fef-407f-a7b1-04aa7449f982.png',
);
const outputPath = path.join(__dirname, '../public/images/aioptimization.png');

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

function whiteToAlpha(r, g, b) {
  const minC = Math.min(r, g, b);
  const maxC = Math.max(r, g, b);
  const spread = maxC - minC;

  if (minC >= 246 && spread <= 16) return 0;
  if (minC >= 228 && spread <= 24) {
    const t = (minC - 228) / (246 - 228);
    return Math.round((1 - Math.min(1, Math.max(0, t))) * 255);
  }

  return 255;
}

function decontaminateFromWhite(r, g, b, a) {
  if (a <= 0) return [0, 0, 0, 0];
  if (a >= 255) return [r, g, b, a];

  const af = a / 255;
  const nr = Math.round((r - (1 - af) * 255) / af);
  const ng = Math.round((g - (1 - af) * 255) / af);
  const nb = Math.round((b - (1 - af) * 255) / af);

  return [clamp(nr), clamp(ng), clamp(nb), a];
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
    const a = whiteToAlpha(r, g, b);
    const [nr, ng, nb, na] = decontaminateFromWhite(r, g, b, a);

    out[i] = nr;
    out[i + 1] = ng;
    out[i + 2] = nb;
    out[i + 3] = na;
  }

  await sharp(out, { raw: { width, height, channels } })
    .trim({ threshold: 1 })
    .resize(720, 720, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(`Saved ${outputPath} (${meta.width}x${meta.height}) with white-edge cleanup`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
