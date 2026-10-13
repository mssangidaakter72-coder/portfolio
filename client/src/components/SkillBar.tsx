import { motion } from "framer-motion";
import type { Skill } from "../types";
import { SkillIcon } from "./Icons";

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          <SkillIcon name={skill.icon} className="text-lg" />
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
