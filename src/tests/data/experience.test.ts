import { describe, it, expect } from 'vitest';
import { jobs } from '../../data/experience';

describe('experience data', () => {
  it('exports 4 jobs', () => {
    expect(jobs).toHaveLength(4);
  });

  it('each job has all required fields', () => {
    for (const job of jobs) {
      expect(job).toHaveProperty('company');
      expect(job).toHaveProperty('role');
      expect(job).toHaveProperty('period');
      expect(Array.isArray(job.stack)).toBe(true);
      expect(Array.isArray(job.highlights)).toBe(true);
      expect(Array.isArray(job.projects)).toBe(true);
    }
  });

  it('first job is at Kunai', () => {
    expect(jobs[0].company).toBe('Kunai');
  });

  it('jobs with projects have all project fields', () => {
    for (const job of jobs) {
      for (const p of job.projects) {
        expect(p).toHaveProperty('name');
        expect(Array.isArray(p.tags)).toBe(true);
        expect(p).toHaveProperty('desc');
      }
    }
  });
});
