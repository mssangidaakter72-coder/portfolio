import { FiArrowUpRight } from "react-icons/fi";
import { navItems, profile } from "../data/portfolio";
import { SocialIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:border-white/10 dark:bg-slate-950/60">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold">{profile.name}</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="focus-ring text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Get in touch
          </h4>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-300"
          >
            {profile.email}
            <FiArrowUpRight />
          </a>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {profile.location}
          </p>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-300"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row dark:text-slate-400">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript &amp; Node.js.</p>
        </div>
      </div>
    </footer>
  );
}
