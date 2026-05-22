import { describe, it, expect } from 'vitest';
import { projects, categories, langColor } from '../../data/projects';

describe('projects data', () => {
  it('exports 8 projects', () => {
    expect(projects).toHaveLength(8);
  });

  it('each project has all required fields', () => {
    for (const p of projects) {
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('url');
      expect(p).toHaveProperty('description');
      expect(p).toHaveProperty('language');
      expect(typeof p.stars).toBe('number');
      expect(Array.isArray(p.tags)).toBe(true);
      expect(p).toHaveProperty('category');
      expect(typeof p.featured).toBe('boolean');
      expect(p).toHaveProperty('year');
    }
  });

  it('at least one project is featured', () => {
    expect(projects.some((p) => p.featured)).toBe(true);
  });

  it('categories includes all, ai, web, tools', () => {
    const ids = categories.map((c) => c.id);
    expect(ids).toContain('all');
    expect(ids).toContain('ai');
    expect(ids).toContain('web');
    expect(ids).toContain('tools');
  });

  it('langColor has a TypeScript entry', () => {
    expect(langColor['TypeScript']).toBeDefined();
  });
});
