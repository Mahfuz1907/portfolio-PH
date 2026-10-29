export interface Project {
  id: string
  title: string,
  imageUrl: string
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
    avatarUrl: string
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
    preferredName: "Mahfuz",
    title: "Frontend Web Developer",
    shortBio:
      "Passionate Frontend Web Developer with a solid foundation in Electrical and Computer Engineering from RUET, staying in Rajshahi. I specialize in crafting high-performance user interfaces, scalable frontend architectures, and fluid digital experiences with React, Next.js, TypeScript, and Tailwind CSS.",
    location: "Rajshahi, Bangladesh",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    department: "Electrical and Computer Engineering (ECE)",
    duration: "2022 – Present",
    degree: "B.Sc. in Electrical and Computer Engineering",
    email: "mahfuztamim1907@gmail.com",
    phone: "01580569928",
    whatsapp: "01613371907",
    whatsappLink:
      "https://wa.me/8801613371907?text=Hello%20Mahfuzul!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect.",
    resumeUrl: "/MD_Mahfuzul_Alam_Resume.pdf",
    github: "https://github.com/Mahfuz1907",
    linkedin: "https://www.linkedin.com/in/md-mahfuzul-alam-tamim/",
    twitter: "https://x.com/mahfuz_tamim",
    avatarUrl: "/Photo.jpg",
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
          level: "Proficient",
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
          level: "Proficient",
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
        {
          name: "Netlify",
          level: "Advanced",
          iconName: "Globe",
          description: "Static site hosting, continuous deployment, serverless functions",
          color: "text-green-500",
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
      id: "BazarDor",
      title: "BazarDor – Check the price of daily commodities in Bangladesh",
      imageUrl: '/image-1.png',
      tagline:
        "A real-time commodity price tracking web application for Bangladesh, featuring live market data, historical trends, and user-friendly search and filter capabilities.",
      category: "Full-Stack Web App",
      mainStack: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Better Auth",
        "Hero UI",
      ],
      tags: ["Full-Stack", "WebSockets", "Collaboration", "Productivity"],
      briefDescription:
        "BazarDor enables users to track real-time commodity prices in Bangladesh, providing live market data, historical trends, and user-friendly search and filter capabilities.",
      detailedDescription:
        "BazarDor bridges the gap between traditional commodity trading and modern digital platforms. Built using Next.js App Router for the frontend and a scalable Node.js/Express service for WebSocket events, the platform empowers users to view price fluctuations with syntax highlighting, comment on specific items, manage shopping lists with smooth drag-and-drop transitions, and sync updates across teammates instantaneously without page reloads.",
      keyFeatures: [
        "Live Commodity Price Tracking: Real-time updates on commodity prices across different markets in Bangladesh.",
        "Historical Price Trends: Interactive charts and graphs to visualize price changes over time.",
        "User-Friendly Search & Filter: Advanced search capabilities to find specific commodities quickly.",
        "Collaborative Shopping Lists: Create and share shopping lists with team members, with real-time updates.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring a seamless user experience.",
      ],
      challenges: [
        "Real-Time Data Synchronization: Implemented WebSocket connections to ensure that all users see the same data simultaneously, handling potential race conditions and ensuring data integrity.",
        "Scalable Backend Architecture: Designed a Node.js and Express backend capable of handling high-frequency data updates and multiple concurrent users without performance degradation.",
        "User Authentication & Security: Integrated BetterAuth for secure user authentication, ensuring that user data and preferences are protected.",
      ],
      improvements: [
        "Enhanced Data Analytics: Implement machine learning algorithms to predict future commodity price trends based on historical data.",
        "Mobile App Development: Create a native mobile application to provide users with push notifications for price changes and updates.",
        "Integration with E-Commerce Platforms: Allow users to directly purchase commodities through integrated e-commerce solutions.",
      ],
      liveUrl: "https://b14-a-07-ph.vercel.app/",
      githubClientUrl: "https://github.com/Mahfuz1907/B14-A-07-PH",
      featured: true,
      mockupType: "collaboration",
    },
    {
      id: "Bangla News 24",
      title: "Bangla News 24 – Real-Time News Aggregator",
      imageUrl: '/image-2.png',
      tagline:
        "A real-time news aggregation platform that curates and delivers the latest news articles from multiple Bangladeshi sources, with categorization, search, and personalized feeds.",
      category: "News & Media",
      mainStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Hero UI",
        "Better Auth",
      ],
      tags: ["News & Media", "Real-Time", "Personalization", "Full-Stack"],
      briefDescription:
        "A real-time news aggregation platform that curates and delivers the latest news articles from multiple Bangladeshi sources, with categorization, search, and personalized feeds.",
      detailedDescription:
        "Bangla News 24 was crafted to deliver an ultra-fast, smooth news browsing journey. Combining Next.js server-side rendering for SEO-optimized news pages with Redux Toolkit for client-side state preservation, it handles high-volume news browsing with instant faceted filtering. On the backend, an Express and MongoDB layer manages news articles, user preferences, and secure authentication.",
      keyFeatures: [
        "Real-Time News Aggregation: Fetches and displays the latest news articles from multiple Bangladeshi sources in real-time.",
        "Categorization & Search: Allows users to filter news by categories and search for specific topics or keywords.",
        "Personalized Feeds: Users can customize their news feed based on interests and reading history.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring a seamless user experience.",
        "Secure User Authentication: Utilizes BetterAuth for secure login and user data protection.",
      ],
      challenges: [
        "Handling High-Frequency Updates: Implemented efficient data fetching and caching strategies to manage real-time news updates without overwhelming the client or server.",
        "Scalable Backend Design: Designed a robust backend architecture using Node.js and MongoDB to handle large volumes of news articles and user interactions.",
        "SEO Optimization: Leveraged Next.js server-side rendering to ensure that news articles are indexed properly by search engines for better visibility.",
      ],
      improvements: [
        "AI-Powered News Summarization: Integrate natural language processing to provide concise summaries of news articles for quick reading.",
        "Push Notifications: Implement a notification system to alert users of breaking news or updates in their selected categories.",
        "Social Media Integration: Allow users to share news articles directly to social media platforms and engage with content through comments and likes.",
      ],
      liveUrl: "https://bangla-news-24-nine.vercel.app/",
      githubClientUrl: "https://github.com/Mahfuz1907/bangla-news-24",
      featured: true,
      mockupType: "collaboration",
    },
    {
      id: "FitLog",
      title: "FitLog – Explore Best Workouts & Build Your Fitness Journey",
      imageUrl: '/image-3.png',
      tagline:
        "A comprehensive fitness web application that provides users with curated workout routines, progress tracking, and personalized fitness plans to achieve their health goals.",
      category: "Health & Fitness",
      mainStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      tags: ["Health & Fitness", "Workout Tracking", "Personalized Plans", "Full-Stack"],
      briefDescription:
        "FitLog is a comprehensive fitness web application that provides users with curated workout routines, progress tracking, and personalized fitness plans to achieve their health goals.",
      detailedDescription:
        "FitLog was developed to help users explore the best workouts and build their fitness journey. The application provides curated workout routines, progress tracking, and personalized fitness plans to achieve health goals.",
      keyFeatures: [
        "Curated Workout Routines: Access a library of workout routines tailored to different fitness levels and goals.",
        "Progress Tracking: Monitor your fitness progress over time with visual charts and statistics.",
        "Personalized Fitness Plans: Receive customized workout plans based on user preferences and goals.",
        "Responsive Design: Optimized for both desktop and mobile devices, ensuring a seamless user experience.",
        "Secure User Authentication: Utilizes secure authentication methods to protect user data and preferences.",
      ],
      challenges: [
        "Data Management & Scalability: Designed a robust backend architecture using Node.js and MongoDB to handle user data, workout routines, and progress tracking efficiently.",
        "User Experience Optimization: Focused on creating an intuitive and engaging user interface with Tailwind CSS and responsive design principles.",
        "Personalization Algorithms: Implemented algorithms to generate personalized fitness plans based on user input and progress data.",
      ],
      improvements: [
        "Integration with Wearable Devices: Allow users to sync their fitness data from wearable devices for more accurate progress tracking.",
        "AI-Powered Workout Recommendations: Use machine learning to provide smarter workout suggestions based on user performance and preferences.",
        "Community Features: Introduce social features such as forums, challenges, and leaderboards to foster a supportive fitness community.",
      ],
      liveUrl: "https://b14-a06.vercel.app/",
      githubClientUrl: "https://github.com/Mahfuz1907/B14-A06",
      featured: false,
      mockupType: "healthcare",
    },
  ],

  contact: {
    email: "mahfuztamim1907@gmail.com",
    phone: "+8801580569928",
    whatsappNumber: "+8801613371907",
    whatsappUrl:
      "https://wa.me/8801613371907?text=Hi%20Mahfuzul,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
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
