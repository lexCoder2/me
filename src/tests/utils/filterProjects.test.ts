import { describe, it, expect } from 'vitest';
import { filterProjects } from '../../utils/filterProjects';
import type { Project } from '../../data/projects';

const mockProjects: Project[] = [
  { name: 'A', url: '', description: '', language: 'TypeScript', stars: 0, tags: [], category: 'ai',    featured: true,  year: '2026' },
  { name: 'B', url: '', description: '', language: 'TypeScript', stars: 0, tags: [], category: 'web',   featured: false, year: '2025' },
  { name: 'C', url: '', description: '', language: 'PHP',        stars: 1, tags: [], category: 'tools', featured: false, year: '2025' },
  { name: 'D', url: '', description: '', language: 'TypeScript', stars: 2, tags: [], category: 'ai',    featured: false, year: '2024' },
];

describe('filterProjects', () => {
  it('returns all projects when category is "all"', () => {
    expect(filterProjects('all', mockProjects)).toHaveLength(4);
  });

  it('returns only ai projects', () => {
    const result = filterProjects('ai', mockProjects);
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.category === 'ai')).toBe(true);
  });

  it('returns only web projects', () => {
    const result = filterProjects('web', mockProjects);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('B');
  });

  it('returns only tools projects', () => {
    const result = filterProjects('tools', mockProjects);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('C');
  });

  it('returns an empty array for an unknown category', () => {
    expect(filterProjects('unknown', mockProjects)).toHaveLength(0);
  });

  it('does not mutate the original array', () => {
    const copy = [...mockProjects];
    filterProjects('ai', mockProjects);
    expect(mockProjects).toEqual(copy);
  });
});
