import type { Project } from '../data/projects';

/**
 * Returns the subset of projects that match the given category.
 * When category is "all", the full list is returned unchanged.
 */
export function filterProjects(category: string, projects: Project[]): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}
