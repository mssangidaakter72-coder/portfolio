import { skillGroups } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import SkillBar from "../components/SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="My tech stack"
          description="The tools and technologies I use to design, build and ship modern web applications."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.1}
              className="card-surface p-6"
            >
              <h3 className="mb-5 font-display text-lg font-bold">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
