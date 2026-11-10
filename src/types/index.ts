export type Platform = 'android' | 'ios';
export type DeviceMode = 'mobile' | 'tablet' | 'desktop';
export type ThemeMode = 'dark' | 'light';
export type TabId = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'more';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'react-native' | 'flutter' | 'iot-hardware' | 'enterprise';
  platforms: ('ios' | 'android' | 'web')[];
  thumbnail: string;
  heroImage?: string;
  role: string;
  period: string;
  company?: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    layers: { name: string; details: string }[];
  };
  technicalChallenges: {
    challenge: string;
    solution: string;
    impact: string;
  }[];
  implementationDetails: string[];
  technologies: string[];
  keyLearnings: string[];
  links?: {
    playStore?: string;
    appStore?: string;
    live?: string;
    github?: string;
  };
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType: string;
  summary: string;
  bullets: string[];
  stack: string[];
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears: string;
  iconName: string;
  highlight: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badge: string;
  credentialUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
}

export interface ToastNotification {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'info' | 'copied';
}
