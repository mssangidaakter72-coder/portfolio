import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few of the products I've designed, built and shipped. Each one links to a live demo and its source code."
        />

        <Reveal className="mt-14 pb-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {featured.map((project) => (
              <SwiperSlide key={project.id} className="h-auto pb-2">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        {more.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {more.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12 text-center">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-300"
          >
            See more on GitHub <FiArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
