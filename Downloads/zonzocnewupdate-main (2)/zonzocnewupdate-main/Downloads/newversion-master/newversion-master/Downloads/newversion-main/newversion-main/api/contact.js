import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, message, service, project, budget } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let emailBody = `
      <h3>New Message from Website</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
      ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
      ${service ? `<p><b>Service:</b> ${service}</p>` : ""}
      ${budget ? `<p><b>Budget:</b> $${budget}</p>` : ""}
      ${project ? `<p><b>Project:</b> ${project}</p>` : ""}
      ${message ? `<p><b>Message:</b> ${message}</p>` : ""}
    `;

    await transporter.sendMail({
      from: `"Zonzoctech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: emailBody,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ error: "Email sending failed" });
  }
}