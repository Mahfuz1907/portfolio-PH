export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  mainStack: string[]
  tags: string[]
  briefDescription: string
  detailedDescription: string
  keyFeatures: string[]
  challenges: string[]
  improvements: string[]
  liveUrl: string
  githubClientUrl: string
  githubServerUrl?: string
  featured: boolean
  mockupType: "collaboration" | "ecommerce" | "kanban" | "healthcare"
}

export interface SkillItem {
  name: string
  level: "Advanced" | "Proficient" | "Familiar"
  iconName: string
  description: string
  color: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: string
  skills: SkillItem[]
}

export interface PortfolioData {
  personal: {
    name: string
    preferredName: string
    title: string
    shortBio: string
    location: string
    institution: string
    department: string
    duration: string
    degree: string
    email: string
    phone: string
    whatsapp: string
    whatsappLink: string
    resumeUrl: string
    github: string
    linkedin: string
    twitter: string
    availableForHire: boolean
  }
  about: {
    journey: string[]
    techPhilosophy: { title: string; description: string }[]
    personalityAndHobbies: { title: string; description: string; icon: string }[]
    stats: { label: string; value: string }[]
  }
  skills: SkillCategory[]
  education: {
    institution: string
    institutionShort: string
    department: string
    duration: string
    degree: string
    location: string
    status: string
    description: string
    keyCoursework: string[]
    highlights: string[]
  }
  projects: Project[]
  contact: {
    email: string
    phone: string
    whatsappNumber: string
    whatsappUrl: string
    location: string
    availability: string
  }
  navLinks: { label: string; href: string }[]
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "MD. Mahfuzul Alam",
    preferredName: "Mahfuzul",
    title: "Frontend Web Developer",
    shortBio:
      "Passionate Frontend Web Developer with a solid foundation in Electrical and Computer Engineering from RUET, staying in Rajshahi. I specialize in crafting high-performance user interfaces, scalable frontend architectures, and fluid digital experiences with React, Next.js, TypeScript, and Tailwind CSS.",
    location: "Rajshahi, Bangladesh",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    department: "Electrical and Computer Engineering (ECE)",
    duration: "2022 – Present",
    degree: "B.Sc. in Electrical and Computer Engineering",
    email: "mahfuztamim1907@gmail.com",
    phone: "+880 1580-569928",
    whatsapp: "+8801613371907",
    whatsappLink:
      "https://wa.me/8801613371907?text=Hello%20Mahfuzul!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect.",
    resumeUrl: "/MD_Mahfuzul_Alam_Resume.pdf",
    github: "https://github.com/Mahfuz1907",
    linkedin: "https://www.linkedin.com/in/md-mahfuzul-alam-tamim/",
    twitter: "https://x.com/mahfuz_tamim",
    availableForHire: true,
  },

  about: {
    journey: [
      "My fascination with programming began during my early academic years when I wrote my first line of C code. Seeing algorithms solve mathematical problems in milliseconds sparked a deep curiosity about computer systems. Joining the Department of Electrical and Computer Engineering (ECE) at Rajshahi University of Engineering & Technology (RUET) in 2022 elevated this curiosity into a systematic engineering discipline.",
      "As I mastered core computer science principles—ranging from low-level data structures and computer architecture to database management—I discovered the dynamic world of web development. I fell in love with the immediate feedback loop of modern frontends and the intricate challenges of distributed backend architectures.",
      "Over the past several years, I have transformed from building simple scripts into architecting full-stack web platforms using React, Next.js, TypeScript, and Node.js. My development philosophy revolves around clean architecture, accessible user interfaces, strict type safety, and writing maintainable code that scales gracefully under real-world workloads.",
    ],
    techPhilosophy: [
      {
        title: "Frontend Excellence",
        description:
          "Deeply enthusiastic about React and Next.js (App Router, Server Components). I strive to build fluid, accessible, and ultra-responsive UIs with Tailwind CSS and Radix/Shadcn primitives.",
      },
      {
        title: "Robust Backend Systems",
        description:
          "Architecting RESTful APIs, WebSocket microservices, and secure authentication flows using Node.js, Express, MongoDB, and relational databases like PostgreSQL.",
      },
      {
        title: "Engineering Rigor",
        description:
          "Applying RUET ECE analytical thinking: algorithmic optimization, clean code patterns, automated type safety with TypeScript, and seamless version control workflows.",
      },
    ],
    personalityAndHobbies: [
      {
        title: "Community Mentoring & Tech Clubs",
        description:
          "Active member of the RUET computing community, helping peers navigate web development fundamentals and organizing campus tech workshops.",
        icon: "Users",
      },
      {
        title: "Problem Solving & Algorithmic Practice",
        description:
          "Consistently honing data structures and algorithmic thinking on competitive programming platforms and exploring computer architecture nuances.",
        icon: "Code2",
      },
      {
        title: "Photography & Visual Design",
        description:
          "Passionate about golden-hour street and architectural photography around the RUET campus and Rajshahi city, which feeds my keen eye for UI/UX details.",
        icon: "Camera",
      },
      {
        title: "Espresso & Coffee Brewing",
        description:
          "Dedicated coffee enthusiast who enjoys experimenting with manual pour-over ratios and aeropress techniques to fuel long coding sessions.",
        icon: "Coffee",
      },
    ],
    stats: [
      { label: "Years Coding", value: "1.5+" },
      { label: "Completed Projects", value: "10+" },
      { label: "RUET ECE Batch", value: "'20" },
      { label: "Tech Stacks Mastered", value: "5+" },
    ],
  },

  skills: [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and high-performance interfaces with modern React ecosystems.",
      icon: "Layout",
      skills: [
        {
          name: "React.js",
          level: "Advanced",
          iconName: "Atom",
          description: "Component architecture, hooks, context, state optimization, custom hooks",
          color: "text-sky-500",
        },
        {
          name: "Next.js",
          level: "Advanced",
          iconName: "Globe",
          description: "App Router, Server Components, SSR/SSG, Server Actions, Route Handlers",
          color: "text-foreground",
        },
        {
          name: "TypeScript",
          level: "Advanced",
          iconName: "FileCode2",
          description: "Strict type safety, generics, interfaces, union types, full-stack contracts",
          color: "text-blue-500",
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          iconName: "Palette",
          description: "Utility-first design, custom configurations, responsive layouts, animations",
          color: "text-cyan-500",
        },
        {
          name: "HTML5 & Semantic UI",
          level: "Advanced",
          iconName: "Code",
          description: "Semantic structures, SEO best practices, accessibility (a11y) standards",
          color: "text-orange-500",
        },
        {
          name: "CSS3 & Modern Layouts",
          level: "Advanced",
          iconName: "Sparkles",
          description: "CSS Grid, Flexbox, keyframe animations, glassmorphism, responsive breakpoints",
          color: "text-indigo-500",
        },
        {
          name: "Shadcn UI",
          level: "Advanced",
          iconName: "Component",
          description: "Accessible headless primitives, customizable themeable design systems",
          color: "text-emerald-500",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      description:
        "DevOps, version control, build workflows, and developer productivity tools.",
      icon: "Wrench",
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          iconName: "GitBranch",
          description: "Branching workflows, interactive rebasing, pull requests, merge conflict resolution",
          color: "text-orange-600",
        },
        {
          name: "VS Code & DevTools",
          level: "Advanced",
          iconName: "Terminal",
          description: "Advanced debugging, network inspection, performance profiling, linting",
          color: "text-blue-600",
        },
        {
          name: "Vercel & Cloud Hosting",
          level: "Advanced",
          iconName: "Cloud",
          description: "CI/CD automated pipelines, preview environments, DNS and edge deployment",
          color: "text-foreground",
        },
      ],
    },
  ],

  education: {
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    institutionShort: "RUET",
    department: "Electrical and Computer Engineering (ECE)",
    duration: "2022 – Present",
    degree: "Bachelor of Science in Electrical and Computer Engineering (B.Sc. in ECE)",
    location: "Kazla, Rajshahi-6204, Bangladesh",
    status: "Undergraduate Student (Currently Enrolled)",
    description:
      "RUET is one of Bangladesh's premier public engineering universities. Through the Electrical and Computer Engineering (ECE) curriculum, I have built a rigorous engineering mindset combining theoretical computer science, electronic system design, and software engineering methodologies.",
    keyCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++ & Java)",
      "Database Management Systems (DBMS)",
      "Computer Networks & Protocols",
      "Software Engineering & System Design",
      "Microprocessors & Assembly Language",
      "Computer Architecture & Design",
      "Operating Systems",
      "Discrete Mathematics & Numerical Methods",
      "Digital Signal Processing",
      "VLSI Design",
    ],
    highlights: [
      "Built a solid foundation in computational complexity, algorithm design, and system-level optimization.",
      "Collaborated on multidisciplinary engineering projects spanning software applications and hardware-software interfacing.",
      "Active participant in department programming contests, hackathons, and technical symposiums.",
      "Maintained consistent academic focus while actively building production-grade web applications.",
    ],
  },

  projects: [
    {
      id: "devpulse",
      title: "DevPulse – Real-Time Developer Collaboration & Code Review Hub",
      tagline:
        "A full-stack collaborative platform for software engineering teams featuring live code review, interactive Kanban boards, and real-time team synchronization.",
      category: "Full-Stack Web App",
      mainStack: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
        "Shadcn UI",
      ],
      tags: ["Full-Stack", "WebSockets", "Collaboration", "Productivity"],
      briefDescription:
        "DevPulse enables distributed developer teams to coordinate agile sprints, review pull-request code snippets collaboratively in real-time, and execute shared markdown workbooks with live cursor presence.",
      detailedDescription:
        "DevPulse bridges the gap between agile issue tracking and real-time code discussion. Built using Next.js App Router for the frontend and a scalable Node.js/Express service for WebSocket events, the platform empowers developers to review code snippets with syntax highlighting, comment on specific lines, manage Kanban cards with smooth drag-and-drop transitions, and sync project updates across teammates instantaneously without page reloads.",
      keyFeatures: [
        "Real-Time Multi-User Synchronization: Live cursor tracking and instantaneous board updates using Socket.io rooms.",
        "Interactive Kanban Sprint Board: Drag-and-drop task management with customizable columns, priority tags, and assignee filtering.",
        "Collaborative Code Reviewer: Syntax-highlighted code block viewer with inline threaded comments and resolution status.",
        "Granular Team Permissions: Role-Based Access Control (Admin, Collaborator, Reviewer) backed by JWT authorization.",
        "Responsive Dark/Light UI: Fully themeable interface crafted with Tailwind CSS and Radix UI primitives.",
      ],
      challenges: [
        "Concurrent Board State Synchronization: Overcame potential race conditions and overwrites when multiple team members modified card orders simultaneously. Solved by implementing optimistic UI updates on the frontend paired with server-side sequence numbers and conflict resolution vectors.",
        "High-Frequency Socket Management: Prevented Node.js event-loop clogging and socket memory leaks during intense collaborative sessions by isolating room broadcasts and debouncing cursor position packets.",
        "Optimized MongoDB Aggregation: Designed compound indices for rapid retrieval of hierarchical discussion threads, ensuring sub-20ms database query response times even with deep reply trees.",
      ],
      improvements: [
        "AI-Powered Code Reviewer: Integrate Gemini API / LLM assistance to automatically inspect submitted code snippets for potential security flaws and performance anti-patterns.",
        "WebRTC Voice & Screen Sharing: Implement lightweight peer-to-peer audio and screen sharing rooms directly inside the collaborative code inspection panel.",
        "GitHub & GitLab Bi-directional Sync: Auto-sync project board tasks with GitHub Issues and automate status updates on merged Pull Requests.",
      ],
      liveUrl: "https://devpulse-hub.vercel.app",
      githubClientUrl: "https://github.com/developer/devpulse-client",
      githubServerUrl: "https://github.com/developer/devpulse-server",
      featured: true,
      mockupType: "collaboration",
    },
    {
      id: "shopsphere",
      title: "ShopSphere – High-Performance Modern E-Commerce Platform",
      tagline:
        "Scalable e-commerce web application featuring instantaneous dynamic filtering, real-time inventory locking, and end-to-end Stripe payment processing.",
      category: "E-Commerce & Fintech",
      mainStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Stripe",
        "Node.js",
        "MongoDB",
      ],
      tags: ["E-Commerce", "Stripe Checkout", "State Management", "Full-Stack"],
      briefDescription:
        "An enterprise-ready e-commerce storefront engineered for speed and conversion, featuring sub-second catalog search, persistent cart drawer, secure checkout, and comprehensive admin order tracking.",
      detailedDescription:
        "ShopSphere was crafted to deliver an ultra-fast, smooth online shopping journey. Combining Next.js server-side rendering for SEO-optimized product pages with Redux Toolkit for client-side state preservation, it handles high-volume catalog browsing with instant faceted filtering. On the backend, an Express and MongoDB layer manages product inventory, user wishlists, discount promo coupons, and secure Stripe webhook listeners.",
      keyFeatures: [
        "Instant Dynamic Catalog Filtering: Filter products seamlessly by category, price spectrum, brand, and customer ratings without full-page reloads.",
        "Secure Stripe Payment Gateway: Flawless checkout pipeline with payment intents, webhooks, and multi-card support.",
        "Persistent Interactive Cart Drawer: Synchronizes cart items across browser tabs using local storage hydration and Redux state slices.",
        "Comprehensive Admin Dashboard: Manage product inventories, upload product images, process shipments, and visualize revenue analytics.",
        "Image Optimization: Leveraging Next.js responsive image components and Cloudinary CDN for blazing-fast visual assets.",
      ],
      challenges: [
        "Preventing Flash Sale Inventory Overselling: Handled concurrent checkout attempts during high traffic by implementing atomic MongoDB updates ($inc with conditions) to ensure an item's quantity never dips below zero.",
        "Idempotent Webhook Processing: Prevented duplicate fulfillment of orders caused by duplicate Stripe webhook retries by persisting unique payment event IDs in an audit ledger table.",
        "State Reconciliation Across Tabs: Created cross-tab synchronization listeners so modifying items in one tab reflects instantly without discrepancies in other open windows.",
      ],
      improvements: [
        "Personalized Recommendation Engine: Implement collaborative filtering to recommend complementary items based on customer cart patterns.",
        "Offline PWA Support: Enable Progressive Web App caching so users can browse previously viewed catalog collections even during offline commutes.",
        "Multi-Currency & Geolocation: Automatically detect customer country to display localized pricing and regional tax calculations.",
      ],
      liveUrl: "https://shopsphere-store.vercel.app",
      githubClientUrl: "https://github.com/developer/shopsphere-client",
      githubServerUrl: "https://github.com/developer/shopsphere-server",
      featured: true,
      mockupType: "ecommerce",
    },
    {
      id: "taskflow-ai",
      title: "TaskFlow AI – Intelligent Kanban Project & Sprint Suite",
      tagline:
        "Productivity powerhouse combining fluid Kanban boards with generative AI task decomposition and real-time team velocity analytics.",
      category: "Productivity & AI",
      mainStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API",
      ],
      tags: ["AI Tools", "Agile", "TypeScript", "Analytics"],
      briefDescription:
        "An intelligent project management workspace that leverages generative AI to turn broad project briefs into actionable sprint tasks, integrated with Kanban boards and productivity analytics.",
      detailedDescription:
        "TaskFlow AI was developed to eradicate planning fatigue in agile engineering teams. Developers and project managers can create sprint goals and click 'Break Down with AI' to automatically generate technical subtasks, acceptance criteria, and time estimates. The application features customizable column workflows, priority matrices, burndown velocity charts, and comprehensive team workload views.",
      keyFeatures: [
        "AI Task Breakdown: Transforms user stories into actionable subtasks with one click via streaming AI completions.",
        "Smooth Drag-and-Drop Workflow: Move tasks between backlog, in-progress, review, and done states with visual feedback.",
        "Productivity Velocity Charts: Real-time visual metrics tracking completed story points and sprint burndown trends.",
        "Priority Matrix Tags: Visual tagging system (Urgent, High, Medium, Low) with custom label colors and due-date alerts.",
        "Markdown Notes & Export: Rich text task descriptions supporting markdown previews and sprint report PDF exports.",
      ],
      challenges: [
        "Seamless Drag-and-Drop Math: Eliminated layout jitter and unexpected card reordering on responsive touch screens by computing floating point order indices (Lexorank style).",
        "Handling AI Streaming Without UI Freezing: Streamed generative text chunks cleanly into active modal dialogs without triggering re-render cascades across the parent Kanban board.",
        "Complex Burndown Aggregations: Optimized MongoDB pipelines to compute daily completion metrics across thousands of historical task logs in under 35ms.",
      ],
      improvements: [
        "Two-Way GitHub Issues Sync: Automatically create and sync GitHub issues when tasks are updated or marked completed.",
        "Automated Slack / Discord Standup Bot: Post daily sprint summaries directly to engineering team channels every morning.",
        "Voice-to-Task Dictation: Enable hands-free task creation using Web Speech API with automatic categorization.",
      ],
      liveUrl: "https://taskflow-ai.vercel.app",
      githubClientUrl: "https://github.com/developer/taskflow-client",
      githubServerUrl: "https://github.com/developer/taskflow-server",
      featured: true,
      mockupType: "kanban",
    },
    {
      id: "apexhealth",
      title: "ApexHealth – Telemedicine & Patient Consultation Portal",
      tagline:
        "Secure digital healthcare platform facilitating specialist doctor discovery, appointment scheduling, and encrypted video consultations.",
      category: "Healthcare & WebRTC",
      mainStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "WebRTC",
        "JWT",
      ],
      tags: ["Telemedicine", "WebRTC", "Full-Stack", "Security"],
      briefDescription:
        "A patient-first healthcare web portal providing real-time doctor appointment booking, secure peer-to-peer video consultations, and digital prescription history.",
      detailedDescription:
        "ApexHealth solves healthcare accessibility bottlenecks by providing a unified digital gateway for patients and certified physicians. Patients can filter specialists by department, review ratings, book appointment slots, and engage in WebRTC video calls with in-session chat. Physicians enjoy a dedicated doctor portal to view their daily schedule, take clinical consultation notes, and issue digital prescriptions.",
      keyFeatures: [
        "Real-Time Slot Scheduling: Interactive calendar with dynamic slot availability preventing overlapping reservations.",
        "Encrypted WebRTC Video Rooms: Low-latency peer-to-peer video consultations with integrated text chat and mute controls.",
        "Physician & Patient Portals: Dedicated distinct user flows tailored for clinical consultations and patient records.",
        "Digital Prescription Vault: Downloadable PDF prescriptions with doctor signature verification and medicine dosages.",
        "Accessible Mobile-First Interface: Fully WCAG compliant with high-contrast text and clear touch targets for older patients.",
      ],
      challenges: [
        "NAT Traversal & Firewall Fallback: Overcame connection drops across restrictive mobile networks by orchestrating reliable STUN/TURN fallback signaling channels.",
        "Timezone Reconciliation: Handled international time conversions between doctors and traveling patients using standardized UTC database timestamps and client-side locale normalization.",
        "Medical Data Security & Privacy: Ensured HIPAA-aligned privacy practices by encrypting patient health records and restricting access through strict JWT route middleware.",
      ],
      improvements: [
        "AI Prescription OCR: Implement image processing to automatically digitize physical prescription notes and check for medicine conflicts.",
        "Automated SMS & WhatsApp Alerts: Send automated appointment reminder links 30 minutes prior to consultations.",
        "Integration with Hospital EHRs: Establish HL7/FHIR compliant data exchange with local diagnostic laboratories.",
      ],
      liveUrl: "https://apexhealth-care.vercel.app",
      githubClientUrl: "https://github.com/developer/apexhealth-client",
      githubServerUrl: "https://github.com/developer/apexhealth-server",
      featured: false,
      mockupType: "healthcare",
    },
  ],

  contact: {
    email: "mahfuzul.alam.dev@gmail.com",
    phone: "+880 1712-345678",
    whatsappNumber: "+8801712345678",
    whatsappUrl:
      "https://wa.me/8801712345678?text=Hi%20Mahfuzul,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
    location: "Rajshahi, Bangladesh",
    availability: "Open to frontend web developer roles, contracts, and engineering opportunities.",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
}
