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

function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

const age = calculateAge('2004-09-09');

export const profile = {
  name: 'alief',
  title: 'Kepala Barista & Pengrajin Kopi',
  bio: `Seorang barista berumur ${age} tahun yang bersemangat dengan kecintaan mendalam pada seni dan ilmu kopi. Berdedikasi untuk menciptakan cangkir yang sempurna dan pengalaman yang tak terlupakan bagi setiap pelanggan.`,
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
    title: 'Kepala Barista',
    company: 'The Daily Grind',
    date: 'Jan 2021 - Sekarang',
    description: 'Memimpin tim barista, menyusun menu kopi, dan menjaga standar kualitas. Bertanggung jawab atas pelatihan dan manajemen inventaris.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Barista',
    company: 'Artisan Roast Cafe',
    date: 'Jun 2018 - Des 2020',
    description: 'Mengasah keterampilan saya dalam persiapan espresso dan seni latte. Mengembangkan pemahaman yang kuat tentang berbagai metode penyeduhan dan preferensi pelanggan.',
    icon: Coffee,
  },
  {
    type: 'education',
    title: 'Barista Bersertifikat',
    company: 'Specialty Coffee Association (SCA)',
    date: 'Mei 2018',
    description: 'Menyelesaikan tingkat Foundation dan Intermediate Keterampilan Barista SCA, mencakup asal-usul kopi, penyeduhan, dan keterampilan sensorik.',
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
