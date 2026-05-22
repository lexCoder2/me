export interface Project {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  tags: string[];
  category: 'ai' | 'web' | 'tools';
  featured: boolean;
  year: string;
}

export interface Category {
  id: string;
  label: string;
}

export const projects: Project[] = [
  {
    name: 'lxDIG-MCP',
    url: 'https://github.com/lexCoder2/lxDIG-MCP',
    description:
      'Dynamic Intelligence Graph (DIG) MCP server for AI coding agents. Persistent code knowledge graph with hybrid Graph + Vector + BM25 retrieval, agent memory, multi-agent coordination, and impact-scoped test selection. Works with Claude Code, VS Code Copilot, and Cursor.',
    language: 'TypeScript',
    stars: 4,
    tags: ['MCP', 'LLM', 'RAG', 'Knowledge Graph', 'AI Agents', 'Memgraph', 'Tree-sitter'],
    category: 'ai',
    featured: true,
    year: '2026',
  },
  {
    name: 'lxDIG-visual',
    url: 'https://github.com/lexCoder2/lxDIG-visual',
    description:
      'Interactive code graph explorer and codebase visualization tool for the lxDIG platform. Renders dependency graphs, architecture layers, and call edges as a live, navigable canvas.',
    language: 'TypeScript',
    stars: 2,
    tags: ['React 19', 'D3', 'Force Graphs', 'Memgraph', 'Code Intelligence'],
    category: 'ai',
    featured: true,
    year: '2026',
  },
  {
    name: 'touch-grass-js',
    url: 'https://github.com/lexCoder2/touch-grass-js',
    description:
      'A fun CLI reminder for developers to go outside and touch grass. Installable as an npx command or VS Code extension with ASCII art and wellness tips.',
    language: 'TypeScript',
    stars: 2,
    tags: ['CLI', 'npx', 'VS Code Extension', 'Node.js', 'Wellness'],
    category: 'tools',
    featured: false,
    year: '2026',
  },
  {
    name: 'POSDic',
    url: 'https://github.com/lexCoder2/POSDic',
    description:
      'Point-of-Sale system with integrated product dictionary and inventory management. Built with TypeScript and a modern stack for real-time retail operations.',
    language: 'TypeScript',
    stars: 0,
    tags: ['POS', 'TypeScript', 'Full-Stack', 'Inventory'],
    category: 'web',
    featured: false,
    year: '2025–2026',
  },
  {
    name: 'camtrack',
    url: 'https://github.com/lexCoder2/camtrack',
    description:
      'Camera tracking application built with TypeScript. Provides real-time device tracking and monitoring capabilities.',
    language: 'TypeScript',
    stars: 0,
    tags: ['TypeScript', 'Camera', 'Tracking', 'Real-time'],
    category: 'tools',
    featured: false,
    year: '2025',
  },
  {
    name: 'concepto-shop',
    url: 'https://github.com/lexCoder2/concepto-shop',
    description:
      'Full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard. Built with PHP and a modern front-end.',
    language: 'PHP',
    stars: 0,
    tags: ['E-commerce', 'PHP', 'Full-Stack', 'Admin Dashboard'],
    category: 'web',
    featured: false,
    year: '2025',
  },
  {
    name: 'tiendadic + tiendaApi',
    url: 'https://github.com/lexCoder2/tiendadic',
    description:
      'Full-stack store application with separate front-end (tiendadic) and REST API (tiendaApi). Both built with TypeScript, following clean architecture principles.',
    language: 'TypeScript',
    stars: 0,
    tags: ['TypeScript', 'REST API', 'Full-Stack', 'Node.js'],
    category: 'web',
    featured: false,
    year: '2024',
  },
  {
    name: 'angular-referenec-template-extention',
    url: 'https://github.com/lexCoder2/angular-referenec-template-extention',
    description:
      'VS Code extension providing Angular template reference completions and snippet helpers, published to the marketplace.',
    language: 'TypeScript',
    stars: 0,
    tags: ['VS Code Extension', 'Angular', 'TypeScript', 'Developer Tools'],
    category: 'tools',
    featured: false,
    year: '2020',
  },
];

export const categories: Category[] = [
  { id: 'all',   label: 'All' },
  { id: 'ai',    label: 'AI / MCP' },
  { id: 'web',   label: 'Web Apps' },
  { id: 'tools', label: 'Dev Tools' },
];

export const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f0db4f',
  Python:     '#3572a5',
  PHP:        '#8892be',
  Dart:       '#00b4ab',
  HTML:       '#e34c26',
};
