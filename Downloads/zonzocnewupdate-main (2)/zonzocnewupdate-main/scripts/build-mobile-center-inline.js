const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/styles/service-mobile-center.css');
const outPath = path.join(__dirname, '../src/styles/serviceMobileCenterInline.js');

const css = fs.readFileSync(cssPath, 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

fs.writeFileSync(outPath, `export const MOBILE_CENTER_CSS = ${JSON.stringify(css)};\n`);
console.log('Wrote', outPath);
