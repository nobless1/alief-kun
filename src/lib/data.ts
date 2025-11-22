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
  title: 'Barista Junior & Pecinta Kopi',
  bio: `Seorang barista junior yang antusias, dengan semangat besar untuk belajar seni dan ilmu kopi. Berkomitmen untuk menyajikan kopi terbaik dan memberikan pengalaman menyenangkan bagi pelanggan.`,
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
    title: 'Blog The Morning Grind',
    description: 'Blog pribadi tempat saya berbagi panduan menyeduh, ulasan biji kopi, dan pemikiran saya tentang industri kopi. Dibangun untuk terhubung dengan sesama pecinta kopi.',
    technologies: ['Contentful', 'Markdown', 'SEO', 'Fotografi'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-one')!,
  },
  {
    title: 'Aplikasi Latte Art Lookbook',
    description: 'Aplikasi web mobile-first yang menampilkan galeri seni latte terbaik saya. Termasuk tips dan tutorial video untuk calon seniman latte.',
    technologies: ['React', 'Vite', 'PWA', 'Penyuntingan Video'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-two')!,
  },
  {
    title: 'Pengoptimal Alur Kerja Kafe',
    description: 'Sistem berbasis Notion untuk melacak inventaris, mengelola jadwal staf, dan merampingkan operasi harian untuk kedai kopi yang sibuk.',
    technologies: ['Notion API', 'Otomatisasi', 'Manajemen Inventaris'],
    links: {
      github: '#',
      live: '#',
    },
    image: PlaceHolderImages.find((img) => img.id === 'project-three')!,
  },
  {
    title: 'Kolaborasi Roaster Lokal',
    description: 'Serangkaian acara pop-up bekerja sama dengan roaster lokal untuk menyoroti biji kopi single-origin yang unik dan metode penyeduhan.',
    technologies: ['Perencanaan Acara', 'Pemasaran Media Sosial', 'Pembangunan Komunitas'],
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
    name: 'Penyeduhan Kopi',
    icon: Coffee,
    skills: [
      { name: 'Ekstraksi Espresso & Dialing-In', level: 95 },
      { name: 'Pour-Over (V60, Chemex)', level: 90 },
      { name: 'Aeropress & French Press', level: 85 },
      { name: 'Ilmu Cold Brew', level: 90 },
      { name: 'Penggiling Manual & Otomatis', level: 98 },
    ],
  },
  {
    name: 'Seni Latte',
    icon: Heart,
    skills: [
      { name: 'Steaming Susu & Microfoam', level: 95 },
      { name: 'Pola Hati & Tulip', level: 90 },
      { name: 'Pola Rosetta & Angsa', level: 80 },
      { name: 'Teknik Free Pouring', level: 85 },
    ],
  },
  {
    name: 'Pelayanan Pelanggan',
    icon: Award,
    skills: [
      { name: 'Pengetahuan & Edukasi Kopi', level: 95 },
      { name: 'Manajemen Pesanan (Sistem POS)', level: 90 },
      { name: 'Membangun Hubungan Baik dengan Pelanggan', level: 100 },
      { name: 'Upselling & Rekomendasi', level: 85 },
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
    title: 'Barista',
    company: 'The Daily Grind',
    date: 'Jan 2022 - Sekarang',
    description: 'Menyiapkan dan menyajikan minuman kopi berkualitas. Membantu pelatihan barista baru dan memastikan kepuasan pelanggan.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Asisten Barista',
    company: 'Artisan Roast Cafe',
    date: 'Jun 2021 - Des 2021',
    description: 'Mendukung tim barista, mempelajari dasar-dasar espresso dan menjaga kebersihan area kerja. Mulai belajar teknik seni latte.',
    icon: Coffee,
  },
  {
    type: 'education',
    title: 'Barista Bersertifikat',
    company: 'Specialty Coffee Association (SCA)',
    date: 'Mei 2021',
    description: 'Menyelesaikan tingkat Foundation Keterampilan Barista SCA, mencakup dasar-dasar asal-usul kopi, penyeduhan, dan kebersihan.',
    icon: GraduationCap,
  },
];

export const navigation = [
  { name: 'Kreasi', href: '#projects' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Perjalanan', href: '#experience' },
  { name: 'Generator AI', href: '#ai-generator' },
  { name: 'Kontak', href: '#contact' },
];
