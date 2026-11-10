import type { BlogPost, CertificationItem, EducationItem } from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science & Mobile Application Engineering',
    institution: 'Lovely Professional University',
    period: '2019 — 2021',
    location: 'Punjab, India',
    highlights: [
      'Advanced Software Engineering, Distributed Systems & Database Architecture.',
      'Specialized research in Cross-Platform Mobile Frameworks & Real-time State Synchronization.',
      'Graduated with distinction and leadership awards in university tech symposiums.',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science & Software Development',
    institution: 'Punjabi University',
    period: '2016 — 2019',
    location: 'Punjab, India',
    highlights: [
      'Foundational algorithms, Object-Oriented Programming (Java, C++), Data Structures, and RDBMS.',
      'Built first native Android mobile applications using Java and SQLite.',
      'Active coordinator in collegiate coding contests and technical workshops.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Advanced React Native Architecture & Performance',
    issuer: 'Meta / Specialized Mobile Certification',
    year: '2024',
    badge: 'React Native Expert',
  },
  {
    name: 'Flutter & Dart: Production Engineering with Clean Architecture',
    issuer: 'Google Developer Group & Certified Course',
    year: '2023',
    badge: 'Flutter Master',
  },
  {
    name: 'Native Android SDK & Kotlin Coroutines Mastery',
    issuer: 'Android Developers Community',
    year: '2022',
    badge: 'Android Native Specialist',
  },
  {
    name: 'IoT Wireless Protocols: BLE 5.0 & Wi-Fi Direct in Mobile Systems',
    issuer: 'Embedded Mobile Systems Institute',
    year: '2024',
    badge: 'IoT Hardware Integrator',
  },
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'bridging-insta360-react-native',
    title: 'How I Built a BLE + Wi-Fi Hybrid Bridge to Command Insta360 Cameras in React Native',
    excerpt:
      'A deep dive into bypassing Android dual-radio limitations, communicating over OSC v2 HTTP protocols, and downloading 8K 360° videos with zero packet drops.',
    readTime: '6 min read',
    date: 'Jan 2026',
    tags: ['React Native', 'BLE', 'Insta360', 'Kotlin', 'IoT'],
    content:
      'Connecting a mobile app to an external action camera requires solving a fundamental hardware constraint: the phone must stay connected to cellular internet while simultaneously communicating with the camera over local Wi-Fi. In this article, I break down how custom Kotlin NetworkSpecifier routines solved this dual-radio dilemma...',
  },
  {
    id: 'offline-first-mobile-architecture',
    title: 'Offline-First Mobile Architecture: Lessons Learned Shipping to Remote Fields',
    excerpt:
      'Designing SQLite and differential ledger synchronization queues that ensure zero data loss when workers operate deep underground or in remote valleys.',
    readTime: '5 min read',
    date: 'Nov 2025',
    tags: ['Clean Architecture', 'SQLite', 'Offline-First', 'State Management'],
    content:
      'When your users are industrial plant auditors or livestock farmers without 4G connectivity, offline-first is not a luxury—it is the entire application. We explore change vectors, transaction rollbacks, and deterministic conflict resolution...',
  },
  {
    id: 'slashing-startup-time-react-native',
    title: 'How We Slashed Cold Startup Times by 30% in Kotak Mahindra Bank’s VYBE App',
    excerpt:
      'Hermes bytecode compilation, deferring heavy financial SDKs, and eliminating unneeded polyfills to deliver an instant banking experience.',
    readTime: '4 min read',
    date: 'Aug 2024',
    tags: ['Performance', 'Hermes', 'React Native', 'Fintech'],
    content:
      'Startup latency kills user conversion in fintech. By running CPU flame-graphs on low-end test devices, we identified non-critical third-party SDK initializations blocking the main JS thread and deferred them safely into background workers...',
  },
];
