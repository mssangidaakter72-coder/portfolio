import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { certifications, education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Academic & professional growth"
          description="Where I studied and the credentials I've earned along the way."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
              <FiBookOpen className="text-brand-500" /> Education
            </h3>
            <div className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-white/10">
              {education.map((item, index) => (
                <Reveal key={item.degree} delay={index * 0.1}>
                  <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-white dark:bg-slate-950" />
                  <div className="card-surface p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-bold">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
              <FiAward className="text-brand-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Reveal key={cert.name} delay={index * 0.1}>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring card-surface group flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-brand-500/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                      <FiAward />
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                    <FiExternalLink className="mt-1 text-slate-400 transition group-hover:text-brand-500" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
