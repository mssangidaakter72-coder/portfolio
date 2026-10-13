import { fileURLToPath } from "node:url";
import path from "node:path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  ConfigError,
  ValidationError,
  sendContactEmail,
} from "./mailer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Server is running." });
});

app.post("/api/contact", async (req, res) => {
  try {
    const result = await sendContactEmail(req.body);
    res.status(200).json(result);
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
    res
      .status(500)
      .json({ ok: false, message: "Unable to send your message right now." });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
