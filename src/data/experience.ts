export interface ClientProject {
  id: string;
  name: string;
  logo: string | null;
  tags: string[];
  desc: string;
}

export interface Job {
  id: string;
  company: string;
  logo: string | null;
  url: string | null;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
  projects: ClientProject[];
}

export const jobs: Job[] = [
  {
    id: 'kunai',
    company: 'Kunai',
    logo: 'https://logo.clearbit.com/kunai.io',
    url: 'https://kunai.io',
    role: 'Senior Associate · PwC',
    period: '2024 – Present',
    stack: ['React', 'TypeScript', 'Python', 'LangChain', 'RAG', 'AWS', 'Azure'],
    highlights: [
      'Senior engineer on secure, highly regulated projects for financial institutions, leading cross-functional teams to deliver high-quality software.',
      'Integrated AI-powered workflows and automations into internal tooling, reducing manual processes.',
    ],
    projects: [
      {
        id: 'capitalOne',
        name: 'Capital One',
        logo: 'https://logo.clearbit.com/capitalone.com',
        tags: ['DevSecOps', 'CI/CD', 'Compliance'],
        desc: 'Led development of an internal platform to automate security compliance and software delivery across the engineering organization, reducing manual review cycles and improving deployment standards.',
      },
      {
        id: 'pwc',
        name: 'PwC',
        logo: 'https://logo.clearbit.com/pwc.com',
        tags: ['AI Agents', 'RAG', 'LangChain'],
        desc: 'Principal architect of an AI-powered research and portfolio automation system; implemented RAG pipelines and LLM-driven agents to generate data-driven client analysis reports.',
      },
    ],
  },
  {
    id: 'wizeline',
    company: 'Wizeline',
    logo: 'https://logo.clearbit.com/wizeline.com',
    url: 'https://wizeline.com',
    role: 'Senior Software Engineer',
    period: '2020 – 2023',
    stack: ['React', 'Node.js', 'Angular', 'Python', 'Java', 'Apache Beam', 'GCP'],
    highlights: [
      'Worked on multiple projects for clients in North America as developer and consultant, delivering full-stack solutions and architectural improvements across cloud and mobile platforms.',
    ],
    projects: [
      {
        id: 'google',
        name: 'Google',
        logo: 'https://logo.clearbit.com/google.com',
        tags: ['Apache Beam', 'GCP Dataflow', 'Python', 'Java'],
        desc: 'Developed and optimized distributed data processing pipelines in Python and Java using Apache Beam on Google Cloud Dataflow, handling large-scale event streams.',
      },
      {
        id: 'baz',
        name: 'BAZ · Grupo Salinas',
        logo: 'https://logo.clearbit.com/gsalinas.com.mx',
        tags: ['React', 'Node.js', 'Fintech'],
        desc: 'Built full-stack features for a high-traffic fintech super-app (BAZ) using React and Node.js, serving millions of users across Mexico.',
      },
      {
        id: 'awr',
        name: 'American Water Resources',
        logo: 'https://logo.clearbit.com/americanwaterresources.com',
        tags: ['Angular', 'Node.js', 'CRM APIs'],
        desc: 'Designed and implemented a scalable plan-selling system with Angular and Node.js, integrating third-party payment and CRM APIs.',
      },
    ],
  },
  {
    id: 'purpura',
    company: 'Purpura Analytics',
    logo: null,
    url: null,
    role: 'Senior Full-Stack Developer',
    period: '2018 – 2020',
    stack: ['Angular', 'Vue.js', 'Ionic', 'Node.js', 'Laravel', 'MongoDB', 'MySQL'],
    highlights: [
      'Lead developer responsible for all client projects and their architectures.',
      'Created code guidelines and led team meetings and task management.',
      'Built web apps with Angular 4+, Vue.js, and mobile apps with Ionic.',
      'Designed and built REST APIs with Node.js and Laravel; database design with MongoDB and MySQL.',
    ],
    projects: [],
  },
  {
    id: 'creatima',
    company: 'Creatima',
    logo: null,
    url: null,
    role: 'Software Developer',
    period: '2016 – 2018',
    stack: ['PHP', 'Laravel', 'Angular', 'HTML5', 'CSS3', 'JavaScript'],
    highlights: [
      'Maintained legacy systems built with PHP Laravel and developed new SPAs.',
      'Delivered custom UI/UX websites and custom database reports per client.',
      'Built web apps with Angular 2+ and Laravel; websites with HTML5, CSS3, and JavaScript.',
    ],
    projects: [],
  },
];
