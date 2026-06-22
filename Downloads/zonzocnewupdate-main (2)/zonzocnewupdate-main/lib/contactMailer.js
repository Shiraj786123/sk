import nodemailer from 'nodemailer';

const DEFAULT_RECIPIENT = 'info@zonzoctech.com';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function field(label, value) {
  if (value === undefined || value === null || value === '') return '';
  return `<p><b>${label}:</b> ${escapeHtml(value)}</p>`;
}

function validatePayload(payload = {}) {
  const name = payload.name?.trim();
  const email = payload.email?.trim();

  if (!name || !email) {
    const error = new Error('Name and email are required');
    error.code = 'INVALID_PAYLOAD';
    throw error;
  }

  return { name, email };
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim() || process.env.EMAIL_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim() || process.env.EMAIL_PASS?.trim();
  const host = process.env.SMTP_HOST?.trim() || process.env.EMAIL_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT || 465);

  if (!host || !user || !pass) {
    const error = new Error(
      'Email is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to .env.local, then restart npm run dev.'
    );
    error.code = 'EMAIL_NOT_CONFIGURED';
    throw error;
  }

  return { host, port, user, pass };
}

function createMailTransporter() {
  const { host, port, user, pass } = getSmtpConfig();

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    ...(port === 587 ? { requireTLS: true } : {}),
  });
}

function mapSmtpError(error) {
  if (error.code === 'EAUTH') {
    const err = new Error(
      'SMTP login failed. Check SMTP_USER and SMTP_PASS (use an App Password if on Gmail/Google Workspace).'
    );
    err.code = 'EMAIL_SEND_FAILED';
    return err;
  }

  if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
    const err = new Error(
      'Could not connect to the mail server. Check SMTP_HOST and SMTP_PORT in your env settings.'
    );
    err.code = 'EMAIL_SEND_FAILED';
    return err;
  }

  return error;
}

export async function sendContactEmail(payload = {}) {
  const { name, email } = validatePayload(payload);
  const { user } = getSmtpConfig();
  const transporter = createMailTransporter();
  const recipient =
    process.env.SMTP_TO?.trim() ||
    process.env.EMAIL_TO?.trim() ||
    DEFAULT_RECIPIENT;
  const message = payload.message?.trim() || payload.project?.trim() || '';

  const html = `
    <h3>New Message from Zonzoctech Website</h3>
    ${field('Name', name)}
    ${field('Email', email)}
    ${field('Phone', payload.phone)}
    ${field('Company', payload.company)}
    ${field('Service', payload.service)}
    ${field('Budget', payload.budget ? `$${payload.budget}` : '')}
    ${field('Project / Message', message)}
  `;

  try {
    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        payload.phone ? `Phone: ${payload.phone}` : '',
        payload.company ? `Company: ${payload.company}` : '',
        payload.service ? `Service: ${payload.service}` : '',
        payload.budget ? `Budget: $${payload.budget}` : '',
        message ? `Message: ${message}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    });
  } catch (error) {
    throw mapSmtpError(error);
  }
}
