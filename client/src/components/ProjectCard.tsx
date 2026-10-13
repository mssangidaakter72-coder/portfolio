import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card-surface flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-800 transition hover:bg-brand-500 hover:text-white"
          >
            <FiGithub />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-800 transition hover:bg-brand-500 hover:text-white"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-slate-200 pt-4 text-sm font-semibold dark:border-white/10">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-brand-600 hover:underline dark:text-brand-300"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-slate-600 hover:underline dark:text-slate-300"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
