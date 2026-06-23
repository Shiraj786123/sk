/**
 * Run: node scripts/test-smtp.js
 * Tests SMTP credentials from .env.local before using contact forms.
 */
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('Missing .env.local — create it in the project root.');
    process.exit(1);
  }

  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

async function main() {
  loadEnvLocal();

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.SMTP_TO || 'info@zonzoctech.com';

  console.log('SMTP test');
  console.log('  Host:', host);
  console.log('  Port:', port);
  console.log('  User:', user);
  console.log('  Pass length:', pass?.length || 0, '(should be 16)');
  console.log('  Send to:', to);
  console.log('');

  if (!user || !pass) {
    console.error('FAIL: SMTP_USER and SMTP_PASS must be set in .env.local');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    ...(port === 587 ? { requireTLS: true } : {}),
  });

  try {
    await transporter.verify();
    console.log('SUCCESS: Login OK');

    const info = await transporter.sendMail({
      from: user,
      to,
      subject: 'ZonzocTech SMTP test',
      text: 'If you see this in your inbox, contact forms will work.',
    });

    console.log('SUCCESS: Test email sent —', info.messageId);
    console.log('Check inbox:', to);
  } catch (error) {
    console.error('FAIL:', error.code || 'ERROR');
    if (error.response) console.error(error.response);

    if (error.code === 'EAUTH') {
      console.error('');
      console.error('Google rejected the login. Fix:');
      console.error('  1. Sign in to', user, 'in an incognito window');
      console.error('  2. https://myaccount.google.com/apppasswords');
      console.error('  3. Create a NEW App Password for Mail');
      console.error('  4. Update SMTP_PASS in .env.local (no spaces)');
      console.error('  5. Restart npm run dev');
      console.error('');
      console.error('If App Passwords are missing, your Workspace admin must enable them.');
    }

    process.exit(1);
  }
}

main();
