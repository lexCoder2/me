export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    blog: 'Blog',
    toggleMenu: 'Toggle menu',
    toggleTheme: 'Toggle color theme',
  },
  hero: {
    badge: 'Available for opportunities',
    greeting: "Hi, I'm",
    role: 'Senior Full-Stack Developer',
    tagline:
      'I build fast, secure, and thoughtful web experiences — and I love every layer of the stack.',
    statsYears: 'yrs',
    cta: {
      contact: 'Get in touch',
      blog: 'Read the blog',
      resume: 'Download Resume',
    },
    scrollLabel: 'Scroll to about section',
  },
  about: {
    label: 'About me',
    title: 'A bit of background',
    p1: `Senior Full-Stack Engineer with 10+ years building scalable web applications, REST APIs, and cloud-native systems across fintech, healthcare, and enterprise sectors. Using <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong>, and <strong>Python</strong>, I've worked across the full stack — from database design to cloud infrastructure on <strong>Azure</strong> and <strong>AWS</strong>.`,
    p2: `In recent years I've become an expert in generative AI: designing secure, production-ready LLM workflows, building MCP servers, and orchestrating multi-agent systems. I care a lot about code quality, security, and delivering things that actually work in the real world.`,
    p3: `I thrive in cross-functional teams, value clear communication, and care deeply about security, code quality, and delivering software that genuinely works at scale.`,
    labels: {
      location: 'Location',
      email: 'Email',
      education: 'Education',
    },
    meta: {
      location: 'Cuauhtémoc, Mexico City, MX',
      email: 'hi@iarodriguez.com',
      education: 'Software Engineering — IPN, ESIME',
    },
  },
  experience: {
    label: 'Work history',
    title: 'Experience',
    clientProjects: 'Client projects',
    stackLabel: 'Tech stack',
    kunai: {
      highlights: [
        'Senior engineer on secure, highly regulated projects for financial institutions, leading cross-functional teams to deliver high-quality software.',
        'Integrated AI-powered workflows and automations into internal tooling, reducing manual processes.',
      ],
      projects: {
        capitalOne: {
          desc: 'Led development of an internal platform to automate security compliance and software delivery across the engineering organization, reducing manual review cycles and improving deployment standards.',
        },
        pwc: {
          desc: 'Principal architect of an AI-powered research and portfolio automation system; implemented RAG pipelines and LLM-driven agents to generate data-driven client analysis reports.',
        },
      },
    },
    wizeline: {
      highlights: [
        'Worked on multiple projects for clients in North America as developer and consultant, delivering full-stack solutions and architectural improvements across cloud and mobile platforms.',
      ],
      projects: {
        google: {
          desc: 'Developed and optimized distributed data processing pipelines in Python and Java using Apache Beam on Google Cloud Dataflow, handling large-scale event streams.',
        },
        baz: {
          desc: 'Built full-stack features for a high-traffic fintech super-app (BAZ) using React and Node.js, serving millions of users across Mexico.',
        },
        awr: {
          desc: 'Designed and implemented a scalable plan-selling system with Angular and Node.js, integrating third-party payment and CRM APIs.',
        },
      },
    },
    purpura: {
      highlights: [
        'Lead developer responsible for all client projects and their architectures.',
        'Created code guidelines and led team meetings and task management.',
        'Built web apps with Angular 4+, Vue.js, and mobile apps with Ionic.',
        'Designed and built REST APIs with Node.js and Laravel; database design with MongoDB and MySQL.',
      ],
      projects: {},
    },
    creatima: {
      highlights: [
        'Maintained legacy systems built with PHP Laravel and developed new SPAs.',
        'Delivered custom UI/UX websites and custom database reports per client.',
        'Built web apps with Angular 2+ and Laravel; websites with HTML5, CSS3, and JavaScript.',
      ],
      projects: {},
    },
  },
  education: {
    label: 'Academic background',
    title: 'Education',
    school: 'Instituto Politécnico Nacional',
    faculty: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME)',
    degree: 'B.E. Electronic & Communications',
    specialty: 'Software Engineering specialty',
  },
  skills: {
    label: 'What I work with',
    title: 'Skills',
    advancedNote: 'Advanced proficiency',
    categories: {
      Frameworks: 'Frameworks',
      Languages: 'Languages',
      'AI / ML': 'AI / ML',
      'Cloud & DevOps': 'Cloud & DevOps',
      Databases: 'Databases',
      'Process & Leadership': 'Process & Leadership',
    } as Record<string, string>,
  },
  projects: {
    label: 'Open Source',
    title: 'GitHub Projects',
    filterAll: 'All',
    filterAi: 'AI / MCP',
    filterWeb: 'Web Apps',
    filterTools: 'Dev Tools',
    viewAll: 'View all repositories on GitHub',
    featured: 'Featured',
    starsLabel: 'stars',
    descriptions: {
      'lxDIG-MCP':
        'Dynamic Intelligence Graph (DIG) MCP server for AI coding agents. Persistent code knowledge graph with hybrid Graph + Vector + BM25 retrieval, agent memory, multi-agent coordination, and impact-scoped test selection. Works with Claude Code, VS Code Copilot, and Cursor.',
      'lxDIG-visual':
        'Interactive code graph explorer and codebase visualization tool for the lxDIG platform. Renders dependency graphs, architecture layers, and call edges as a live, navigable canvas.',
      'touch-grass-js':
        'A fun CLI reminder for developers to go outside and touch grass. Installable as an npx command or VS Code extension with ASCII art and wellness tips.',
      POSDic:
        'Point-of-Sale system with integrated product dictionary and inventory management. Built with TypeScript and a modern stack for real-time retail operations.',
      camtrack:
        'Camera tracking application built with TypeScript. Provides real-time device tracking and monitoring capabilities.',
      'concepto-shop':
        'Full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard. Built with PHP and a modern front-end.',
      'tiendadic + tiendaApi':
        'Full-stack store application with separate front-end (tiendadic) and REST API (tiendaApi). Both built with TypeScript, following clean architecture principles.',
      'angular-referenec-template-extention':
        'VS Code extension providing Angular template reference completions and snippet helpers, published to the marketplace.',
    } as Record<string, string>,
  },
  contact: {
    label: "Let's talk",
    title: 'Get in touch',
    intro:
      "Open to new opportunities, collaborations, and interesting conversations. The best way to reach me is by email — I'll get back to you promptly.",
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: "What's on your mind?",
      submit: 'Send message',
    },
    items: {
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Location',
    },
  },
  blog: {
    label: 'Writing',
    title: 'Blog',
    intro:
      "Notes, opinions, and deep-dives from over 10 years on the stack. I write about what I'm actually building — not what sounds good in theory.",
    readPost: 'Read post',
    noPosts: 'No posts yet. Check back soon.',
    backLink: '← All posts',
  },
  footer: {
    builtWith: 'Built with',
  },
  meta: {
    description:
      'Irwin Rodriguez — Senior Full-Stack Developer with 10+ years of experience in React, Angular, Node.js, Python, AI/LLM workflows, and cloud infrastructure.',
    blogDescription:
      "Articles on full-stack development, AI/LLM engineering, distributed systems, and lessons from working with some of the world's largest tech teams.",
    homeTitle: 'Irwin Rodriguez — Senior Full-Stack Developer',
  },
};
