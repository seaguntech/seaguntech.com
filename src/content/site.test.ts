import { describe, expect, it } from 'vitest';

import {
  contact,
  normalizeProject,
  selectedProjects,
  services,
  siteContent,
} from './site';

describe('Seaguntech site content', () => {
  it('exposes the approved company identity and contact details', () => {
    expect(siteContent.name).toBe('Seaguntech');
    expect(siteContent.experience).toContain('10+');
    expect(contact.email).toBe('admin@seaguntech.com');
    expect(contact.consultationHref).toBe('#contact');
    expect(siteContent.hero.title).toBe('Build what matters. Ship with clarity.');
    expect(services).toHaveLength(4);
    expect(services.map((service) => service.title)).toEqual([
      'Strategy & Architecture',
      'Product Delivery',
      'Legacy Modernization',
      'Fractional CTO',
    ]);
    expect(siteContent.planningSteps).toEqual([
      'Understand',
      'Shape',
      'Sequence',
      'Ship with feedback',
    ]);
  });

  it('contains at least three public projects with render-safe metadata', () => {
    expect(selectedProjects.length).toBeGreaterThanOrEqual(3);
    expect(selectedProjects.every((project) => project.title.trim().length > 0)).toBe(true);
  });

  it('removes blank tags without inventing missing project fields', () => {
    const project = normalizeProject({
      title: 'Example project',
      description: '',
      tags: ['React', ' ', 'TypeScript'],
    });

    expect(project.tags).toEqual(['React', 'TypeScript']);
    expect(project.description).toBe('');
    expect(project.href).toBeUndefined();
  });

  it('describes technical discoverability without promising search outcomes', () => {
    const copy = siteContent.engineeringFoundations.join(' ').toLowerCase();

    expect(copy).toContain('semantic html');
    expect(copy).not.toMatch(/guaranteed rankings|guaranteed traffic|#1 ranking/);
  });
});
