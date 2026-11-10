import type { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'contineu-ai',
    name: 'Contineu.ai',
    tagline: 'Industrial Facility Scanning & Defect Inspection with 360° Action Cameras',
    category: 'iot-hardware',
    platforms: ['android', 'ios'],
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop',
    role: 'Senior React Native Developer – IoT & Camera Integration',
    period: 'May 2025 — Present',
    company: 'Contineu AI',
    overview:
      'Contineu.ai is an enterprise mobile application designed for industrial facilities, manufacturing plants, and construction sites to automate site audits, defect inspection, and spatial asset documentation. The app bridges smartphones with high-end Insta360 X4 action cameras to capture 360-degree imagery, record spatial voice notes, and log defects with offline-first persistence.',
    problemStatement:
      'Field engineers inspecting industrial plants often work in environments without cellular coverage. Standard mobile cameras fail to capture full 360° context, and consumer camera apps cannot communicate programmatically with proprietary cloud defect management systems. The app needed to establish a stable, zero-latency hardware bridge to an external 360° camera, command remote captures, stream multi-gigabyte media without dropped packets, and persist critical defect audits offline.',
    solution:
      'Engineered a custom BLE + Wi-Fi hybrid communication bridge connecting the React Native mobile client to the Insta360 X4 camera. When the user initiates a site inspection, the app initiates a Bluetooth handshake to awaken and pair the camera, prompts an automatic high-speed 5GHz Wi-Fi direct connection, and communicates via Open Spherical Camera (OSC) APIs to trigger HDR photos and 8K 360° video bursts. Media is chunked and synchronized locally with an offline SQLite database and uploaded when connectivity resumes.',
    architecture: {
      title: 'Hybrid BLE & Wi-Fi Direct Camera Pipeline',
      description: 'Layered architecture separating physical hardware protocol logic from business workflow & UI.',
      layers: [
        { name: 'Hardware Abstraction Layer', details: 'Custom Kotlin Native Android Modules wrapping BLE GATT characteristics and Wi-Fi Direct sockets.' },
        { name: 'OSC Command Engine', details: 'Open Spherical Camera v2 HTTP REST client with keep-alive heartbeats and status polling.' },
        { name: 'Offline Storage & Queue', details: 'Local SQLite engine storing defect tags, coordinate pins, audio notes, and chunked transfer state.' },
        { name: 'Presentation & Defect Canvas', details: 'React Native 60fps gesture-driven canvas for tagging hotspots on 360° panoramas.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Dual-Radio Interference & Simultaneous Internet / Camera Wi-Fi',
        solution: 'Wrote native Android NetworkSpecifier routines allowing the phone to route camera OSC commands through the camera’s Wi-Fi network while simultaneously retaining 4G/5G cellular data for cloud synchronization.',
        impact: 'Zero connection drops during active inspections; uninterrupted background cloud upload.',
      },
      {
        challenge: 'Handling Multi-Gigabyte 360° Video Downloads Over Wi-Fi',
        solution: 'Implemented a chunked HTTP range request client with resume tokens and SHA-256 hash checks to recover seamlessly if the camera moves out of Wi-Fi range.',
        impact: '100% data integrity with zero file corruption on large inspection recordings.',
      },
      {
        challenge: 'Accurate Voice Note Defect Logging in Noisy Plant Environments',
        solution: 'Integrated low-latency audio capture with background compression and waveform visualization, linked directly to specific timestamp markers on the 360° media timeline.',
        impact: 'Enabled hands-free defect recording for engineers wearing safety equipment.',
      },
    ],
    implementationDetails: [
      'Developed native Kotlin modules for Bluetooth Low Energy peripheral discovery and GATT profile negotiation.',
      'Constructed OSC API client to configure shutter speed, ISO, HDR bracket mode, and capture triggering.',
      'Designed offline defect reporting workflow with voice memos, photo annotations, and severity classification.',
      'Built custom media file transfer queue with pause, resume, background worker processing, and battery-aware throttling.',
      'Integrated real-time telemetry display showing camera battery level, SD card storage remaining, and signal strength.',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Native Android (Kotlin)',
      'BLE 5.0 (GATT)',
      'Wi-Fi Direct',
      'Insta360 X4 SDK',
      'OSC Protocol',
      'SQLite',
      'Clean Architecture',
      'Audio Waveforms',
    ],
    keyLearnings: [
      'Mastered low-level Android network binding and socket handling across fragmented Android OEM OS variants.',
      'Refined asynchronous retry architectures for physical IoT devices operating in high radio-frequency interference zones.',
      'Deepened expertise in balancing battery consumption during continuous BLE scanning and Wi-Fi streaming.',
    ],
    links: {
      live: 'https://contineu.ai/',
    },
    stats: [
      { label: 'Capture Latency', value: '<250ms' },
      { label: 'Transfer Speed', value: '45 MB/s' },
      { label: 'Offline Reliability', value: '100%' },
    ],
  },
  {
    id: 'haenzel-kashmir',
    name: 'Haenzel Kashmir',
    tagline: 'Experiential Tourism & Curated Travel Booking Platform Across Kashmir Valley',
    category: 'react-native',
    platforms: ['ios', 'android'],
    thumbnail: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop',
    role: 'Lead Mobile Developer & UI/UX Architect',
    period: '2024 — 2025',
    overview:
      'Haenzel Kashmir is a mobile travel discovery and experiential tourism booking app celebrating the beauty, heritage, and wilderness of Kashmir. The app connects travelers with verified local hosts, houseboats on Dal Lake, alpine trekking expeditions in Gulmarg and Pahalgam, and artisanal cultural experiences.',
    problemStatement:
      'Most online travel aggregators treat Kashmir with generic package itineraries that miss authentic local guides, remote trail updates, and changing weather conditions in mountain passes. Travelers needed a modern, trustworthy, visually captivating app that provides custom day-by-day itineraries, instant verified bookings, and offline trail maps.',
    solution:
      'Built a rich, fluid React Native application with editorial-grade visual design, curated itineraries, seamless date & slot selection, multi-currency payment gateway integration, and interactive destination storytelling. Integrated local caching so travelers can access booking vouchers, emergency contacts, and maps even in remote Himalayan valleys without network reception.',
    architecture: {
      title: 'Content-Driven Booking Architecture',
      description: 'Dynamic server-driven UI architecture supporting seasonal travel campaigns and customized itineraries.',
      layers: [
        { name: 'UI & Animation Layer', details: 'Framer Motion & Reanimated 3 with shared element transitions and sticky glassmorphic navigation.' },
        { name: 'Booking & State Engine', details: 'Redux Toolkit with optimistic updates and local persistence for offline voucher access.' },
        { name: 'Payment & Checkout', details: 'Razorpay / Stripe SDKs with secure tokenization and instant SMS/WhatsApp ticket delivery.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Maintaining 60 FPS Scrolling with High-Resolution Visual Photography',
        solution: 'Implemented progressive image downsampling with FastImage, progressive WebP caching, and virtualized list windowing.',
        impact: 'Achieved zero frame drops on budget and mid-tier Android devices while scrolling image-dense travel catalogs.',
      },
      {
        challenge: 'Dynamic Itinerary Customization & Slot Availability Collisions',
        solution: 'Designed real-time optimistic seat locking via WebSocket heartbeats paired with a fallback polling mechanism.',
        impact: 'Eliminated double-booking scenarios during high-demand winter ski and summer tulip seasons.',
      },
    ],
    implementationDetails: [
      'Engineered bespoke destination cards with parallax scrolling and dynamic ambient background tints matching photo palettes.',
      'Created interactive booking modal with step-by-step traveler count, calendar picker, and custom add-on gear rentals.',
      'Implemented offline travel wallet allowing travelers to view PDF boarding passes and driver details offline.',
      'Integrated push notification triggers for weather advisories and altitude safety guidelines.',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'Reanimated 3',
      'FastImage',
      'Payment Gateway SDK',
      'Offline Caching',
      'Google Maps API',
    ],
    keyLearnings: [
      'Designed emotionally engaging consumer travel interfaces that drove higher booking conversion rates.',
      'Optimized image caching strategies for mobile devices operating on fluctuating 3G/4G mountain network bands.',
    ],
    stats: [
      { label: 'Booking Speed', value: '<3 steps' },
      { label: 'Image Load', value: 'Instant' },
      { label: 'Rating', value: '4.9 ★' },
    ],
  },
  {
    id: 'altigreen-companion',
    name: 'Altigreen Driver Companion',
    tagline: 'Electric Commercial Vehicle Telemetry & Fleet Management App',
    category: 'react-native',
    platforms: ['android'],
    thumbnail: 'https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?w=900&auto=format&fit=crop&q=60',
    heroImage: 'https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?w=1200&auto=format&fit=crop&q=80',
    role: 'Senior Mobile Developer',
    period: '2023 — 2024',
    company: 'BinaryVeda',
    overview:
      'The Altigreen Driver Companion is a mission-critical mobile application for commercial electric 3-wheeler (neEV) drivers and fleet operators. It delivers live battery State of Charge (SoC), remaining driving range, regenerative braking analytics, nearby fast-charger navigation, and trip earnings tracking.',
    problemStatement:
      'Commercial EV drivers experience significant range anxiety and need accurate, real-time vehicle telemetry on budget Android smartphones mounted on vibrating vehicle dashboards in extreme outdoor temperatures.',
    solution:
      'Built a high-contrast, driver-first UI engineered for single-tap navigation and glancing readouts. Streamlined real-time IoT vehicle CAN-bus telemetry via low-overhead MQTT / REST endpoints, ensuring drivers always know their true remaining kilometers and nearest available charging stations.',
    architecture: {
      title: 'Real-Time EV Telemetry Sync',
      description: 'Event-driven reactive state sync for live battery voltage, speed, and charging status.',
      layers: [
        { name: 'Telemetry Ingestion', details: 'Lightweight WebSocket/MQTT client parsing live CAN-bus packets from Altigreen cloud servers.' },
        { name: 'Driver Dashboard', details: 'High-contrast SVG gauge widgets with visual alerts for low battery and thermal warnings.' },
        { name: 'Charging Navigator', details: 'Mapbox integration showing compatible charging plugs and real-time bay availability.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Minimizing Battery Drain While Running Foreground Navigation & Telemetry',
        solution: 'Fine-tuned location polling intervals based on vehicle speed and utilized headless JS background services.',
        impact: 'Reduced device battery consumption by 35% during 10-hour commercial delivery shifts.',
      },
    ],
    implementationDetails: [
      'Crafted custom circular gauge components displaying battery percentage, motor temp, and eco-score.',
      'Integrated Google Play Store production release workflows with automated signed APK builds.',
      'Implemented driver shift logging, maintenance alerts, and one-tap roadside SOS assistance.',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase',
      'REST APIs',
      'Google Maps SDK',
      'Secure Storage',
      'Android Services',
    ],
    keyLearnings: [
      'Mastered the unique ergonomics of driver-facing applications where safety and instant legibility are paramount.',
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.altigreen.user&hl=en_IN',
    },
    stats: [
      { label: 'Active Drivers', value: '10K+' },
      { label: 'Play Store Rating', value: '4.7 ★' },
      { label: 'Telemetry Rate', value: 'Real-time' },
    ],
  },
  {
    id: 'amplispot',
    name: 'Amplispot',
    tagline: 'All-in-One Marketing Automation, Social Content & Asset Platform',
    category: 'react-native',
    platforms: ['android', 'ios'],
    thumbnail: 'https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=1600&auto=format&fit=crop',
    role: 'Mobile Engineer',
    period: '2023 — 2024',
    company: 'BinaryVeda',
    overview:
      'Amplispot is a marketing management mobile app that consolidates brand marketing activities into a single pocket app: professional website updates, social media publishing, curated email campaign dispatch, and access to a verified brand asset bank.',
    problemStatement:
      'Small and medium business owners struggled to juggle multiple social media platforms, design tools, and email clients, leading to inconsistent marketing and slow engagement.',
    solution:
      'Developed a responsive React Native app with unified calendar scheduling, template customization, instantaneous social multi-posting, and marketing analytics dashboards.',
    architecture: {
      title: 'Multi-Tenant Marketing Suite',
      description: 'Modular architecture separating social API connectors from template rendering and asset uploads.',
      layers: [
        { name: 'Template Canvas', details: 'Client-side text and logo overlay engine for marketing graphics.' },
        { name: 'Social Connectors', details: 'OAuth 2.0 integration for Facebook, Instagram, LinkedIn, and WhatsApp Business.' },
        { name: 'Media Cache', details: 'Cloudinary and Firebase storage synchronization for instant creative reuse.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Client-Side Social Media Asset Resizing & Encoding',
        solution: 'Implemented background image compression pipelines before upload, automatically adhering to social aspect ratios.',
        impact: 'Prevented failed uploads on slow connections and reduced image upload bandwidth by 60%.',
      },
    ],
    implementationDetails: [
      'Built multi-account social manager with token refresh handlers.',
      'Designed a large content bank browser with categorized filters and search.',
      'Implemented rich push notifications for scheduled post approvals.',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase Auth & Firestore',
      'REST APIs',
      'OAuth 2.0',
      'Redux',
    ],
    keyLearnings: [
      'Deepened skills in third-party social API authentication lifecycles and token persistence.',
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.amplispot.app&hl=en_IN',
    },
    stats: [
      { label: 'Posts Published', value: '500K+' },
      { label: 'Time Saved', value: '5 hrs/wk' },
    ],
  },
  {
    id: 'vybe-kotak',
    name: 'VYBE (Kotak Mahindra Bank)',
    tagline: 'Gen-Z & Youth Digital Banking App with Biometric Security',
    category: 'enterprise',
    platforms: ['ios', 'android'],
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop',
    role: 'Senior Feature Lead',
    period: '2022 — 2023',
    company: 'BinaryVeda',
    overview:
      'VYBE is Kotak Mahindra Bank’s youth-focused digital banking application, offering instant digital savings accounts, customized prepaid cards, peer-to-peer UPI payments, expense gamification, and merchant discounts.',
    problemStatement:
      'Traditional banking applications feel sluggish and intimidating to young digital natives. Kotak required a vibrant, ultra-snappy mobile app with rigorous banking-grade security, biometric unlock, and zero tolerance for transaction failures.',
    solution:
      'Led the architecture of core financial transaction workflows, hardened biometric login with Keychain / KeyStore cryptography, and refactored screen render paths to slash cold start load times by ~30%.',
    architecture: {
      title: 'Zero-Trust Secure Banking Architecture',
      description: 'End-to-end encrypted payload flow with hardware security module (HSM) attestation.',
      layers: [
        { name: 'Security & Keystore', details: 'Hardware-backed biometric authentication (FaceID / Fingerprint) with tamper detection.' },
        { name: 'GraphQL Gateway', details: 'Strongly typed GraphQL schema for banking balances, statements, and transaction limits.' },
        { name: 'Gamified UI', details: 'Custom animations and haptic feedback triggers for savings streaks and cashback rewards.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Sluggish Initial Load Times on Mid-Tier Phones',
        solution: 'Conducted rigorous Hermes bytecode profiling, removed heavy third-party polyfills, and deferred non-critical SDK initializations.',
        impact: 'Achieved a ~30% improvement in cold app startup time, jumping from 3.2s to 2.1s.',
      },
      {
        challenge: 'Strict Banking Regulatory Compliance & Root Detection',
        solution: 'Implemented hardware safety net attestation, SSL pinning, and memory scrubbing for sensitive debit card PINs.',
        impact: 'Passed all third-party banking penetration and vulnerability audits with zero critical flaws.',
      },
    ],
    implementationDetails: [
      'Developed interactive virtual debit card view with flip animation and encrypted CVV reveal.',
      'Implemented biometric transaction authorization with fallback PIN authentication.',
      'Collaborated closely with bank security engineers to establish zero-trust API gateways.',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'GraphQL',
      'OAuth 2.0 / JWT',
      'Biometric Crypto',
      'SSL Pinning',
      'Redux Toolkit',
    ],
    keyLearnings: [
      'Attained elite standards in financial security, enterprise compliance, and zero-compromise UX in banking.',
    ],
    stats: [
      { label: 'Startup Speedup', value: '~30%' },
      { label: 'Security Score', value: '100% Pass' },
      { label: 'Crash Rate', value: '<0.05%' },
    ],
  },
  {
    id: 'conversify',
    name: 'Conversify',
    tagline: 'Marketing Web & Mobile Analytics with Omnichannel Campaign Management',
    category: 'flutter',
    platforms: ['web', 'android', 'ios'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    role: 'Flutter & Full-Stack Mobile Engineer',
    period: '2023',
    company: 'BinaryVeda',
    overview:
      'Conversify is a cross-platform marketing intelligence suite engineered with Flutter Web and mobile. It provides marketing directors with real-time conversion funnels, campaign ROI metrics, automated audience segmentation, and live chat trigger automations.',
    problemStatement:
      'Marketing teams needed identical features across desktop browsers and mobile devices without maintaining two completely disjoint codebases.',
    solution:
      'Leveraged Flutter’s unified canvas rendering engine with Clean Architecture to ship responsive web and native mobile clients from a single Dart repository.',
    architecture: {
      title: 'Unified Flutter Multi-Platform Architecture',
      description: 'Single codebase powering web dashboards and native mobile apps.',
      layers: [
        { name: 'Clean Architecture (Domain/Data/Core)', details: 'Strict BLoC state management decoupling data repositories from presentation.' },
        { name: 'GraphQL Analytics Client', details: 'Real-time subscription streams for live marketing conversion events.' },
        { name: 'Responsive Layout Builders', details: 'Adaptive grids seamlessly scaling from phone viewports to 4K ultra-wide monitors.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Flutter Web First-Paint Load Time Optimization',
        solution: 'Employed HTML renderer builds with CanvasKit lazy-loading and deferred font assets.',
        impact: 'Halved web application initial bundle load time.',
      },
    ],
    implementationDetails: [
      'Built custom interactive time-series charts with interactive tooltips and date sliders.',
      'Implemented GraphQL queries with cached normalized stores for instantaneous screen navigation.',
      'Established Clean Architecture folder structure with comprehensive unit tests for use cases.',
    ],
    technologies: [
      'Flutter Web',
      'Dart',
      'BLoC Pattern',
      'Clean Architecture',
      'GraphQL',
      'Firebase',
      'Analytics',
    ],
    keyLearnings: [
      'Deep expertise in Flutter’s rendering pipeline on web environments and state isolation using BLoC.',
    ],
    links: {
      live: 'https://admin.conversifytech.com/',
    },
    stats: [
      { label: 'Code Sharing', value: '92%' },
      { label: 'Platforms', value: 'Web + Mobile' },
    ],
  },
  {
    id: 'dtdc-logistics',
    name: 'DTDC Smart Logistics',
    tagline: 'Enterprise Parcel Tracking & Delivery Fleet Companion',
    category: 'flutter',
    platforms: ['android'],
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?w=1200&auto=format&fit=crop&q=80',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?w=1600&auto=format&fit=crop&q=80',
    role: 'Flutter Developer',
    period: '2022',
    overview:
      'An enterprise companion app built for delivery partners and warehouse operations at DTDC, handling high-volume barcode scanning, consignment sorting, route planning, and digital proof-of-delivery (signature & photo).',
    problemStatement:
      'Delivery personnel work on tight schedules in basement hubs with intermittent connectivity. Manual barcode entry and lost offline updates led to delivery disputes and delayed tracking scans.',
    solution:
      'Engineered an offline-first Flutter application equipped with camera barcode scanning via ML Kit, local SQLite batch queues, and automatic background sync with DTDC’s central logistics servers.',
    architecture: {
      title: 'Offline-First Logistics Pipeline',
      description: 'SQLite persistence with transaction journaling and conflict-free background synchronizer.',
      layers: [
        { name: 'Hardware Barcode Scanner', details: 'Google ML Kit barcode engine processing up to 3 scans per second.' },
        { name: 'Batch Delivery Queue', details: 'Queued proof-of-delivery actions with digital signature vectors and geostamps.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'High-Volume Continuous Camera Barcode Scanning',
        solution: 'Implemented isolate-based background image frame analysis, keeping the UI thread strictly at 60fps.',
        impact: 'Cut consignment intake processing time by 40% per warehouse shift.',
      },
    ],
    implementationDetails: [
      'Integrated Google ML Kit Barcode Scanning with continuous batch mode.',
      'Created smooth signature capture canvas with vector bezier curve smoothing.',
      'Implemented automatic geofencing alerts when approaching parcel delivery stops.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Google ML Kit',
      'SQLite',
      'Clean Architecture',
      'Background Sync',
      'REST APIs',
    ],
    keyLearnings: [
      'Advanced knowledge in multi-threading with Dart isolates for high-throughput image processing.',
    ],
    stats: [
      { label: 'Daily Scans', value: '100K+' },
      { label: 'Offline Sync', value: 'Zero Loss' },
    ],
  },
  {
    id: 'livestock-agritech',
    name: 'Livestock Agri-Tech',
    tagline: 'Offline-First Cattle Health, Breeding & Farm Management System',
    category: 'flutter',
    platforms: ['android'],
    thumbnail: 'https://plus.unsplash.com/premium_photo-1668446123344-d7945fb07eaa?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://plus.unsplash.com/premium_photo-1668446123344-d7945fb07eaa?q=80&w=1600&auto=format&fit=crop',
    role: 'Mobile Developer',
    period: '2021 — 2022',
    company: 'Code Brew Labs',
    overview:
      'Livestock is an agricultural technology mobile platform empowering dairy farmers and livestock managers to track animal lineage, vaccination schedules, milk yields, and veterinary records in rural farming areas.',
    problemStatement:
      'Rural farming cooperatives often operate entirely outside 4G/5G cell towers. Data collected in fields must reliably synchronize without data loss once workers return to a Wi-Fi-enabled cooperative depot.',
    solution:
      'Engineered an offline-first mobile app using SQLite and differential sync queues. When connection is lost, all operations are written to local ledger tables with change vectors, resolving conflicts deterministically upon reconnection.',
    architecture: {
      title: 'Differential Offline-First Ledger',
      description: 'Local SQLite database acting as source of truth with background bi-directional synchronization.',
      layers: [
        { name: 'Local SQLite Ledger', details: 'Full relational schema tracking cattle tags, lactation cycles, and medical logs.' },
        { name: 'Sync Engine', details: 'Conflict-resolution engine applying vector clocks for server synchronization.' },
      ],
    },
    technicalChallenges: [
      {
        challenge: 'Multi-User Data Conflict Resolution',
        solution: 'Developed last-write-wins with manual discrepancy review for sensitive medical dosage records.',
        impact: 'Guaranteed 100% data audit compliance for livestock certifications.',
      },
    ],
    implementationDetails: [
      'Built RFID tag and QR tag reader integration for rapid animal identification.',
      'Created intuitive vaccination calendar with SMS alert triggers for rural veterinarians.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'SQLite',
      'Provider / BLoC',
      'Clean Architecture',
      'REST APIs',
    ],
    keyLearnings: [
      'Gained deep practical mastery of offline database replication and schema migrations in mobile apps.',
    ],
    stats: [
      { label: 'Animals Tracked', value: '50K+' },
      { label: 'Offline Uptime', value: '100%' },
    ],
  },
];
