import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class ValidationError extends Error {}

export class ConfigError extends Error {}

export function validateContact(payload) {
  const name = String(payload?.name ?? "").trim();
  const email = String(payload?.email ?? "").trim();
  const subject = String(payload?.subject ?? "").trim();
  const message = String(payload?.message ?? "").trim();

  if (name.length < 2) {
    throw new ValidationError("Please enter your name (at least 2 characters).");
  }
  if (!EMAIL_REGEX.test(email)) {
    throw new ValidationError("Please enter a valid email address.");
  }
  if (message.length < 10) {
    throw new ValidationError("Your message should be at least 10 characters.");
  }
  if (message.length > 5000) {
    throw new ValidationError("Your message is too long (max 5000 characters).");
  }

  return {
    name,
    email,
    subject: subject || `New message from ${name}`,
    message,
  };
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new ConfigError(
      "Email service is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.",
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: String(SMTP_SECURE ?? "true") === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendContactEmail(payload) {
  const { name, email, subject, message } = validateContact(payload);
  const transporter = getTransporter();
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to,
    replyTo: `"${name}" <${email}>`,
    subject,
    text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#1f2937">
        <h2 style="margin:0 0 8px">New contact form submission</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${name}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${email}</p>
        <p style="margin:0 0 16px"><strong>Subject:</strong> ${subject}</p>
        <p style="white-space:pre-wrap;margin:0">${message}</p>
      </div>
    `,
  });

  return { ok: true, message: "Thanks! Your message has been sent." };
}
