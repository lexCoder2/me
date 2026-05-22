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
      { name: 'Generative AI',                        level: '' },
      { name: 'Large Language Models (LLM)',           level: '' },
      { name: 'RAG (Retrieval-Augmented Generation)',  level: '' },
      { name: 'Prompt Engineering',                   level: '' },
      { name: 'AI Agents',                            level: '' },
      { name: 'OpenAI API',                           level: '' },
      { name: 'Claude (MCP, Agent Orchestration)',    level: '' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (Lambda, S3, EC2, API Gateway)', level: '' },
      { name: 'Azure',           level: '' },
      { name: 'Docker',          level: '' },
      { name: 'CI/CD Pipelines', level: '' },
      { name: 'Jenkins',         level: '' },
      { name: 'Firebase',        level: '' },
      { name: 'Redis',           level: '' },
      { name: 'Webpack',         level: '' },
      { name: 'SASS',            level: '' },
      { name: 'Git',             level: '' },
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
      { name: 'Agile',                  level: '' },
      { name: 'Scrum',                  level: '' },
      { name: 'Kanban',                 level: '' },
      { name: 'Technical Leadership',   level: '' },
      { name: 'Team Management',        level: '' },
      { name: 'Stakeholder Management', level: '' },
      { name: 'Jira',                   level: '' },
    ],
  },
];
