export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frameworks',
    items: [
      { name: 'React',             level: 'Advanced' },
      { name: 'Angular',           level: 'Advanced' },
      { name: 'Node.js / Express', level: 'Advanced' },
      { name: 'FastAPI',           level: '' },
      { name: 'LangChain',         level: '' },
      { name: 'LangGraph',         level: '' },
      { name: 'Vue.js',            level: '' },
      { name: 'Laravel',           level: '' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Python',     level: 'Advanced' },
      { name: 'HTML5',      level: 'Advanced' },
      { name: 'CSS3',       level: 'Advanced' },
      { name: 'Java',       level: '' },
      { name: 'SQL',        level: '' },
      { name: 'PHP',        level: '' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Generative AI',                        level: 'Advanced' },
      { name: 'Large Language Models (LLM)',           level: 'Advanced' },
      { name: 'RAG (Retrieval-Augmented Generation)',  level: 'Advanced' },
      { name: 'Prompt Engineering',                   level: 'Advanced' },
      { name: 'AI Agents',                            level: 'Advanced' },
      { name: 'OpenAI API',                           level: '' },
      { name: 'Claude (MCP, Agent Orchestration)',    level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (Lambda, S3, EC2, API Gateway)', level: 'Advanced' },
      { name: 'Azure',           level: '' },
      { name: 'Docker',          level: '' },
      { name: 'CI/CD Pipelines', level: 'Advanced' },
      { name: 'Jenkins',         level: '' },
      { name: 'Firebase',        level: '' },
      { name: 'Redis',           level: '' },
      { name: 'Webpack',         level: '' },
      { name: 'SASS',            level: '' },
      { name: 'Git',             level: 'Advanced' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB',    level: 'Advanced' },
      { name: 'PostgreSQL', level: '' },
      { name: 'MySQL',      level: '' },
      { name: 'NoSQL',      level: '' },
    ],
  },
  {
    category: 'Process & Leadership',
    items: [
      { name: 'Agile',                  level: 'Advanced' },
      { name: 'Scrum',                  level: 'Advanced' },
      { name: 'Kanban',                 level: '' },
      { name: 'Technical Leadership',   level: 'Advanced' },
      { name: 'Team Management',        level: 'Advanced' },
      { name: 'Stakeholder Management', level: '' },
      { name: 'Jira',                   level: '' },
    ],
  },
];
