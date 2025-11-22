import {
  Briefcase,
  Coffee,
  GraduationCap,
  Heart,
  Award,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const profile = {
  name: 'alief',
  title: 'Head Barista & Coffee Artisan',
  bio: 'A passionate barista with a deep love for the art and science of coffee. Dedicated to crafting the perfect cup and creating memorable experiences for every customer.',
  email: 'hello@alief.coffee',
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
    title: 'The Morning Grind Blog',
    description: 'A personal blog where I share brewing guides, coffee bean reviews, and my thoughts on the coffee industry. Built to connect with fellow coffee lovers.',
    technologies: ['Contentful', 'Markdown', 'SEO', 'Photography'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-one')!,
  },
  {
    title: 'Latte Art Lookbook App',
    description: 'A mobile-first web app showcasing a gallery of my best latte art. Includes tips and video tutorials for aspiring latte artists.',
    technologies: ['React', 'Vite', 'PWA', 'Video Editing'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-two')!,
  },
  {
    title: 'Cafe Workflow Optimizer',
    description: 'A Notion-based system to track inventory, manage staff schedules, and streamline daily operations for a busy coffee shop.',
    technologies: ['Notion API', 'Automation', 'Inventory Management'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-three')!,
  },
  {
    title: 'Local Roaster Collab',
    description: 'A pop-up event series in collaboration with local roasters to highlight unique single-origin beans and brewing methods.',
    technologies: ['Event Planning', 'Social Media Marketing', 'Community Building'],
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
    name: 'Coffee Brewing',
    icon: Coffee,
    skills: [
      { name: 'Espresso Extraction & Dialing-In', level: 95 },
      { name: 'Pour-Over (V60, Chemex)', level: 90 },
      { name: 'Aeropress & French Press', level: 85 },
      { name: 'Cold Brew Science', level: 90 },
      { name: 'Manual & Automatic Grinders', level: 98 },
    ],
  },
  {
    name: 'Latte Art',
    icon: Heart,
    skills: [
      { name: 'Milk Steaming & Microfoam', level: 95 },
      { name: 'Heart & Tulip Patterns', level: 90 },
      { name: 'Rosetta & Swan Patterns', level: 80 },
      { name: 'Free Pouring Techniques', level: 85 },
    ],
  },
  {
    name: 'Customer Service',
    icon: Award,
    skills: [
      { name: 'Coffee Knowledge & Education', level: 95 },
      { name: 'Order Management (POS Systems)', level: 90 },
      { name: 'Building Customer Rapport', level: 100 },
      { name: 'Upselling & Recommendations', level: 85 },
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
    title: 'Head Barista',
    company: 'The Daily Grind',
    date: 'Jan 2021 - Present',
    description: 'Leading a team of baristas, curating the coffee menu, and maintaining quality standards. Responsible for training and inventory management.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Barista',
    company: 'Artisan Roast Cafe',
    date: 'Jun 2018 - Dec 2020',
    description: 'Honed my skills in espresso preparation and latte art. Developed a strong understanding of different brewing methods and customer preferences.',
    icon: Coffee,
  },
  {
    type: 'education',
    title: 'Certified Barista',
    company: 'Specialty Coffee Association (SCA)',
    date: 'May 2018',
    description: 'Completed the SCA Barista Skills Foundation and Intermediate levels, covering coffee origins, brewing, and sensory skills.',
    icon: GraduationCap,
  },
];

export const navigation = [
  { name: 'Creations', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#experience' },
  { name: 'AI Generator', href: '#ai-generator' },
  { name: 'Contact', href: '#contact' },
];
