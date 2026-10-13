import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { SocialIcon } from "../components/Icons";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setRoleIndex((prev) => (prev + 1) % profile.roles.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="container-x grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="mt-4 h-9 overflow-hidden text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-400">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              <FiMail /> Let&apos;s work together
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-300"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="focus-ring text-xl text-slate-500 transition hover:-translate-y-0.5 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/40 to-accent-500/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/40 shadow-2xl backdrop-blur dark:bg-white/5">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-6 top-10 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-xs font-semibold shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/90"
            >
              <span className="block text-lg">5+</span>
              <span className="text-slate-500 dark:text-slate-400">
                Years Coding
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-12 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-xs font-semibold shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/90"
            >
              <span className="block text-lg">40+</span>
              <span className="text-slate-500 dark:text-slate-400">
                Projects
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-slate-500 md:flex dark:text-slate-400"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.span>
      </button>
    </section>
  );
}
