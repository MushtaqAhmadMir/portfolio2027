export interface ProfileData {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  experienceYears: string;
  specialization: string;
  location: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
    subtext: string;
  };
  headline: string;
  description: string;
  avatarUrl: string;
  resumeUrl: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phoneFormatted?: string;
    locationDisplay: string;
  };
  stats: {
    label: string;
    value: string;
    sub: string;
  }[];
  techHighlights: string[];
  about: {
    intro: string;
    journey: string;
    philosophy: string;
    problemSolving: string;
    whatIBuild: string[];
    interests: string[];
  };
  nativeCapabilities: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export const PROFILE_DATA: ProfileData = {
  name: 'Mushtaq Ahmad Mir',
  shortName: 'Mushtaq Mir',
  tagline: 'Senior Mobile App Developer (React Native & Flutter)',
  role: 'Senior Mobile Application Developer',
  experienceYears: '6+ Years',
  specialization: 'React Native & Flutter Specialist',
  location: 'Bangalore, India (Open to Remote / Relocation)',
  availability: {
    status: 'available',
    label: 'Available for Opportunities',
    subtext: 'Open to Senior / Lead Mobile Developer roles & high-impact projects',
  },
  headline: 'Building Impactful Mobile Experiences.',
  description:
    'I build scalable, high-performance mobile applications that solve real-world problems through thoughtful engineering and exceptional user experiences. Specialized in hardware-integrated apps, camera SDKs, and offline-first mobile systems.',
  avatarUrl: '/assets/mushtaq_avatar.jpg',
  resumeUrl: '/assets/resume.pdf',
  contact: {
    email: 'mushtaq11917632@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mushtaqahmadmir/',
    github: 'https://github.com/mushtaqahmadmir',
    phoneFormatted: '+91 (India)',
    locationDisplay: 'Bangalore / Remote',
  },
  stats: [
    { label: 'Experience', value: '6+ Yrs', sub: 'Mobile Engineering' },
    { label: 'Apps Shipped', value: '15+', sub: 'Production Releases' },
    { label: 'Active Users', value: '1M+', sub: 'Global Reach' },
    { label: 'Crash-Free', value: '99.9%', sub: 'Target Metric' },
  ],
  techHighlights: [
    'React Native',
    'Flutter',
    'Native Android (Kotlin)',
    'BLE & Wi-Fi IoT',
    'Insta360 & OSC Camera SDKs',
    'Clean Architecture',
    'Offline-First Sync',
    'Performance Optimization',
  ],
  about: {
    intro:
      'I am a passionate Senior Mobile Application Developer with over 6 years of hands-on experience building enterprise-grade, high-performance iOS and Android applications. My core expertise sits at the intersection of sleek mobile interfaces and deep native hardware integrations.',
    journey:
      'My journey in mobile engineering began with a curiosity for building software that lives right in users’ pockets. Over the years, I progressed from standalone client apps to architecting complex industrial IoT platforms communicating over Bluetooth Low Energy, Wi-Fi Direct, and Open Spherical Camera (OSC) APIs with advanced 360° action cameras like the Insta360 X4. Having engineered products for prominent brands like Kotak Mahindra Bank, Contineu AI, Altigreen, and DTDC, I have honed the craft of building scalable, resilient, and crash-proof mobile software.',
    philosophy:
      'I believe great mobile apps must be two things: instantly responsive and obsessively reliable. A user should never wonder if a button was pressed, suffer dropped frame rates, or lose critical inspection data when a connection drops in the field. I architect code with Clean Architecture, strict separation of concerns, and offline-first guarantees.',
    problemSolving:
      'When faced with complex technical roadblocks—such as high-throughput raw byte streams over Bluetooth or memory leaks during high-resolution 360° video transfers—I dissect issues down to the native thread level, write custom JNI/Native Modules where cross-platform bridges fall short, and profile memory allocations using Android Profiler and Xcode Instruments.',
    whatIBuild: [
      'Enterprise IoT & Camera Control apps (BLE + Wi-Fi Direct + OSC protocols)',
      'High-security fintech & banking applications (OAuth 2.0, biometric crypto, instant sync)',
      'Field inspection & defect management tools with offline-first synchronization',
      'Fluid 60fps design systems with micro-animations & platform-native ergonomics',
    ],
    interests: [
      'Exploring spatial computing & mobile edge AI',
      'Drone videography & landscape photography',
      'Optimizing mobile CI/CD pipelines & Fastlane automation',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
  nativeCapabilities: [
    {
      title: '6+ Years Mobile Experience',
      desc: 'Proven track record of architecting, building, and deploying cross-platform and native apps from scratch to production.',
      icon: 'Award',
    },
    {
      title: 'Cross-Platform Mastery',
      desc: 'Deep fluency in both React Native (TypeScript, Hermes, TurboModules) and Flutter (Dart, BLoC, Riverpod).',
      icon: 'Layers',
    },
    {
      title: 'Native Android & iOS Bridge',
      desc: 'Comfortable writing custom Kotlin/Java native modules, JNI, and Swift code when standard packages reach their limits.',
      icon: 'Cpu',
    },
    {
      title: 'Camera SDK & IoT Integrations',
      desc: 'Expertise in Insta360 X4 SDK, Open Spherical Camera (OSC) APIs, dual-band Wi-Fi streaming, and BLE 5.0 peripherals.',
      icon: 'Camera',
    },
    {
      title: 'Performance Optimization',
      desc: 'Hermes bytecode tuning, JS bundle splitting, memory leak elimination, render cycle minimization, and 60fps animations.',
      icon: 'Zap',
    },
    {
      title: 'Offline-First Architecture',
      desc: 'Resilient local database sync (SQLite, WatermelonDB), background worker queues, and conflict resolution algorithms.',
      icon: 'WifiOff',
    },
  ],
};
