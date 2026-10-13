import avatar from "../assets/avatar.svg";
import projectTaskflow from "../assets/projects/taskflow.svg";
import projectShopfront from "../assets/projects/shopfront.svg";
import projectDevblog from "../assets/projects/devblog.svg";
import projectAnalytics from "../assets/projects/analytics.svg";

import type {
  Certification,
  EducationItem,
  NavItem,
  Profile,
  Project,
  SkillGroup,
} from "../types";

/* ------------------------------------------------------------------ *
 * EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO.
 * Everything below is placeholder content - swap in your own details.
 * ------------------------------------------------------------------ */

export const profile: Profile = {
  name: "Alex Morgan",
  roles: ["Full-Stack Web Developer", "React & TypeScript Specialist", "Node.js Engineer"],
  tagline: "I build fast, accessible and delightful web experiences.",
  bio: "I'm a full-stack web developer who turns ideas into production-ready products using React, TypeScript and Node.js.",
  about: [
    "I'm a full-stack web developer with 5+ years of experience crafting modern web applications. I care deeply about clean architecture, performance and accessibility.",
    "My toolkit centers on React and TypeScript on the frontend and Node.js with Express on the backend. I love turning ambiguous problems into simple, elegant interfaces that people actually enjoy using.",
    "When I'm not shipping features, I contribute to open source, write technical articles and mentor junior developers.",
  ],
  location: "San Francisco, CA",
  email: "hello@alexmorgan.dev",
  availability: "Available for freelance & full-time roles",
  avatar,
  resumeUrl: "/resume.html",
  socials: [
    { label: "GitHub", url: "https://github.com/your-github", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-linkedin", icon: "linkedin" },
    { label: "Twitter", url: "https://twitter.com/your-handle", icon: "twitter" },
    { label: "Dribbble", url: "https://dribbble.com/your-handle", icon: "dribbble" },
    { label: "Email", url: "mailto:hello@alexmorgan.dev", icon: "email" },
  ],
  stats: [
    { label: "Years of experience", value: "5+" },
    { label: "Projects delivered", value: "40+" },
    { label: "Happy clients", value: "25+" },
    { label: "Open-source stars", value: "1.2k" },
  ],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "react", color: "#61DAFB" },
      { name: "TypeScript", level: 92, icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", level: 94, icon: "javascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind", color: "#38BDF8" },
      { name: "Vite", level: 85, icon: "vite", color: "#646CFF" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js", level: 90, icon: "node", color: "#339933" },
      { name: "Express", level: 88, icon: "express", color: "#828282" },
      { name: "PostgreSQL", level: 82, icon: "postgres", color: "#4169E1" },
      { name: "MongoDB", level: 80, icon: "mongodb", color: "#47A248" },
      { name: "REST APIs", level: 90, icon: "api", color: "#8B5CF6" },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 93, icon: "git", color: "#F05032" },
      { name: "Docker", level: 75, icon: "docker", color: "#2496ED" },
      { name: "Jest & Testing", level: 80, icon: "jest", color: "#C21325" },
      { name: "Figma", level: 78, icon: "figma", color: "#F24E1E" },
      { name: "CI / CD", level: 82, icon: "cicd", color: "#22D3EE" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "A collaborative project management app with real-time boards, drag-and-drop tasks and team roles.",
    image: projectTaskflow,
    tags: ["React", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL"],
    demoUrl: "https://example.com/taskflow-demo",
    repoUrl: "https://github.com/your-github/taskflow",
    featured: true,
  },
  {
    id: "shopfront",
    title: "ShopFront",
    description:
      "A headless e-commerce storefront with cart, Stripe checkout and an admin dashboard for inventory.",
    image: projectShopfront,
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    demoUrl: "https://example.com/shopfront-demo",
    repoUrl: "https://github.com/your-github/shopfront",
    featured: true,
  },
  {
    id: "devblog",
    title: "DevBlog CMS",
    description:
      "A markdown-powered blogging platform with authentication, comments and full-text search.",
    image: projectDevblog,
    tags: ["React", "Express", "MongoDB", "JWT"],
    demoUrl: "https://example.com/devblog-demo",
    repoUrl: "https://github.com/your-github/devblog",
    featured: true,
  },
  {
    id: "analytics",
    title: "PulseBoard",
    description:
      "A real-time analytics dashboard that visualizes product metrics with interactive charts.",
    image: projectAnalytics,
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    demoUrl: "https://example.com/pulseboard-demo",
    repoUrl: "https://github.com/your-github/pulseboard",
    featured: false,
  },
];

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "State University",
    period: "2015 - 2019",
    description:
      "Graduated with honors. Focused on software engineering, algorithms and web technologies.",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Code Academy",
    period: "2019 - 2020",
    description:
      "Intensive 6-month program covering modern JavaScript, React and Node.js with real client projects.",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    credentialUrl: "https://www.credly.com/your-credential",
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    year: "2023",
    credentialUrl: "https://coursera.org/verify/your-credential",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    credentialUrl: "https://freecodecamp.org/certification/your-handle",
  },
];
