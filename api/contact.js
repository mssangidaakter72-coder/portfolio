import {
  ConfigError,
  ValidationError,
  sendContactEmail,
} from "../server/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;
    const result = await sendContactEmail(body);
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ ok: false, message: error.message });
    }
    if (error instanceof ConfigError) {
      console.error(error.message);
      return res
        .status(503)
        .json({ ok: false, message: "Email service is temporarily unavailable." });
    }
    console.error("Contact form error:", error);
    return res
      .status(500)
      .json({ ok: false, message: "Unable to send your message right now." });
  }
}
