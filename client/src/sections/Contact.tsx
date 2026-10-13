import { useState, type FormEvent } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiLoader,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/portfolio";
import type { ApiResponse, ContactPayload } from "../types";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { SocialIcon } from "../components/Icons";

type Status = "idle" | "loading" | "success" | "error";

const initialForm: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof ContactPayload, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(data.message);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  };

  const details = [
    { icon: <FiMail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <FiMapPin />, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or just want to say hi? Drop me a message and I'll get back to you soon."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            {details.map((detail) => (
              <div key={detail.label} className="card-surface flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-lg text-brand-600 dark:text-brand-300">
                  {detail.icon}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {detail.label}
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="focus-ring font-medium text-slate-800 hover:text-brand-600 dark:text-white dark:hover:text-brand-300"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="font-medium text-slate-800 dark:text-white">
                      {detail.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="card-surface p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Find me online
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-300"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="card-surface space-y-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  placeholder="Jane Doe"
                  onChange={(value) => update("name", value)}
                />
                <Field
                  label="Email address"
                  id="email"
                  type="email"
                  value={form.email}
                  placeholder="jane@example.com"
                  onChange={(value) => update("email", value)}
                />
              </div>
              <Field
                label="Subject"
                id="subject"
                value={form.subject}
                placeholder="Project inquiry"
                onChange={(value) => update("subject", value)}
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Tell me about your project..."
                  className="focus-ring w-full resize-none rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              {status === "success" && (
                <p className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <FiCheckCircle /> {feedback}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
                  <FiAlertCircle /> {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}

function Field({ label, id, value, placeholder, type = "text", onChange }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}
