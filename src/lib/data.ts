import {
  AppWindow,
  Briefcase,
  Code,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Server,
  Settings,
  Twitter,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const profile = {
  name: 'Alex Doe',
  title: 'Full-Stack Developer & AI Enthusiast',
  bio: 'A passionate developer with a knack for building beautiful, functional, and scalable web applications. Currently exploring the fascinating world of Generative AI to create smarter and more personalized user experiences.',
  email: 'hello@alexdoe.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  socialIcons: {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  },
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github: string;
    live: string;
  };
  image: (typeof PlaceHolderImages)[0];
};

export const projects: Project[] = [
  {
    title: 'QuantumLeap CRM',
    description: 'A comprehensive CRM platform designed for modern sales teams, featuring contact management, deal tracking, and automated workflows.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-one')!,
  },
  {
    title: 'EchoWave Social',
    description: 'A decentralized social media application focused on user privacy and data ownership, built with cutting-edge web3 technologies.',
    technologies: ['React', 'Vite', 'Solidity', 'ethers.js', 'IPFS'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-two')!,
  },
  {
    title: 'Aura Analytics',
    description: 'An analytics dashboard that provides real-time insights into user behavior and application performance, with customizable reports and alerts.',
    technologies: ['SvelteKit', 'Go', 'gRPC', 'ClickHouse', 'Grafana'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-three')!,
  },
  {
    title: 'Zenith E-Commerce',
    description: 'A headless e-commerce solution offering a fast, flexible, and rich shopping experience, integrated with multiple payment gateways.',
    technologies: ['Vue.js', 'Nuxt.js', 'Stripe', 'Shopify API', 'GraphQL'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-four')!,
  },
];

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: {
    name: string;
    level: number;
  }[];
};

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5 & CSS3', level: 98 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', level: 80 },
      { name: 'Python / Django', level: 70 },
      { name: 'Prisma / TypeORM', level: 85 },
      { name: 'REST & GraphQL APIs', level: 90 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: Settings,
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel / Netlify', level: 90 },
      { name: 'Figma', level: 80 },
    ],
  },
];

export type ExperienceItem = {
  type: 'work' | 'education';
  title: string;
  company: string;
  date: string;
  description: string;
  icon: LucideIcon;
};

export const experience: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'Stellar Solutions Inc.',
    date: 'Jan 2021 - Present',
    description: 'Led the development of a large-scale analytics dashboard. Mentored junior developers and improved code quality and deployment pipelines.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Innovatech Labs',
    date: 'Jun 2018 - Dec 2020',
    description: 'Developed and maintained features for a suite of SaaS products using React and Node.js. Contributed to a 20% improvement in application performance.',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'B.Sc. in Computer Science',
    company: 'University of Technology',
    date: 'Sep 2014 - May 2018',
    description: 'Graduated with honors. Specialized in human-computer interaction and artificial intelligence. President of the coding club.',
    icon: GraduationCap,
  },
];

export const navigation = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Generator', href: '#ai-generator' },
  { name: 'Contact', href: '#contact' },
];
