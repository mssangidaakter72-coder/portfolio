import { FiMapPin, FiCheckCircle } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const highlights = [
  "Pixel-perfect, responsive interfaces",
  "Clean, typed and testable code",
  "Performance & accessibility first",
  "End-to-end product delivery",
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into reliable products"
          description="A quick snapshot of who I am and how I work."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}

            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <FiCheckCircle className="shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4 self-start">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="card-surface p-6 text-center transition hover:-translate-y-1 hover:border-brand-500/40"
              >
                <div className="font-display text-3xl font-extrabold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
            <div className="card-surface col-span-2 flex items-center gap-3 p-5">
              <FiMapPin className="text-xl text-brand-500" />
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">
                  Based in {profile.location}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Open to remote &amp; hybrid roles worldwide
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
