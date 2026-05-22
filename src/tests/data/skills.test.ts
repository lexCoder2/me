import { describe, it, expect } from 'vitest';
import { skillGroups } from '../../data/skills';

describe('skills data', () => {
  it('exports 6 skill groups', () => {
    expect(skillGroups).toHaveLength(6);
  });

  it('each group has category and items array', () => {
    for (const group of skillGroups) {
      expect(typeof group.category).toBe('string');
      expect(group.category.length).toBeGreaterThan(0);
      expect(Array.isArray(group.items)).toBe(true);
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it('each skill item has name and level fields', () => {
    for (const group of skillGroups) {
      for (const item of group.items) {
        expect(typeof item.name).toBe('string');
        expect(typeof item.level).toBe('string');
      }
    }
  });

  it('includes a Frameworks group', () => {
    expect(skillGroups.map((g) => g.category)).toContain('Frameworks');
  });
});
