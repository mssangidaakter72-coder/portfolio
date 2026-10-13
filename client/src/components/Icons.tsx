import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDribbble,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa6";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiJest,
  SiFigma,
} from "react-icons/si";
import { FaServer, FaCodeBranch } from "react-icons/fa6";
import type { SocialLink } from "../types";

const socialIcons: Record<SocialLink["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
  email: FaEnvelope,
  website: FaGlobe,
};

const skillIcons: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  vite: SiVite,
  node: SiNodedotjs,
  express: SiExpress,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  api: FaServer,
  git: SiGit,
  docker: SiDocker,
  jest: SiJest,
  figma: SiFigma,
  cicd: FaCodeBranch,
};

export function SocialIcon({
  name,
  className,
}: {
  name: SocialLink["icon"];
  className?: string;
}) {
  const Icon = socialIcons[name] ?? FaGlobe;
  return <Icon className={className} aria-hidden />;
}

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = skillIcons[name] ?? FaServer;
  return <Icon className={className} aria-hidden />;
}
