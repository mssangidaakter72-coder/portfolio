export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "dribbble" | "email" | "website";
}

export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  bio: string;
  about: string[];
  location: string;
  email: string;
  availability: string;
  avatar: string;
  resumeUrl: string;
  socials: SocialLink[];
  stats: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
}
