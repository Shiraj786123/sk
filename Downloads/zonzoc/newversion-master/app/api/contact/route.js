import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, company, message, service, project, budget } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
      <h3>New Message from Website</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ''}
      ${company ? `<p><b>Company:</b> ${company}</p>` : ''}
      ${service ? `<p><b>Service:</b> ${service}</p>` : ''}
      ${budget ? `<p><b>Budget:</b> $${budget}</p>` : ''}
      ${project ? `<p><b>Project:</b> ${project}</p>` : ''}
      ${message ? `<p><b>Message:</b> ${message}</p>` : ''}
    `;

    await transporter.sendMail({
      from: `"Zonzoctech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
