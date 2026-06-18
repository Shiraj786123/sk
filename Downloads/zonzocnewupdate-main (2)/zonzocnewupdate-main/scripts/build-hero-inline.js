const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/styles/service-hero.css');
const outPath = path.join(__dirname, '../src/styles/serviceHeroInline.js');

const css = fs.readFileSync(cssPath, 'utf8');

const out = css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\[data-sp-hero="1"\]\[data-sp-hero="1"\]/g, '[data-sp-hero="1"]')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

fs.writeFileSync(outPath, `export const HERO_CSS = ${JSON.stringify(out)};\n`);
console.log('Wrote', outPath);
