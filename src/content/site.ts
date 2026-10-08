export type Service = {
  readonly title: string;
  readonly description: string;
};

export type ProjectRecord = {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly href?: string;
};

export const siteContent = {
  name: 'Seaguntech',
  experience: '10+ years building software across JP · SG · US · UK',
  hero: {
    title: 'Build what matters. Ship with clarity.',
    description:
      'Technology consulting for teams turning complex ideas into dependable software.',
  },
} as const;

export const services: readonly Service[] = [
  {
    title: 'Strategy & Architecture',
    description:
      'Turn uncertainty into a practical technical direction, plan, and sequence of decisions.',
  },
  {
    title: 'Product Delivery',
    description:
      'Design and build software that moves from a validated idea to dependable production delivery.',
  },
  {
    title: 'Legacy Modernization',
    description:
      'Reduce risk in existing systems while creating a measured path toward better delivery.',
  },
  {
    title: 'Fractional CTO',
    description:
      'Bring senior technical judgment to product, team, architecture, and delivery decisions.',
  },
];

export const contact = {
  email: 'admin@seaguntech.com',
  portfolio: 'https://projects.quangpham.dev/',
} as const;

export const selectedProjects: readonly ProjectRecord[] = [];

export function normalizeProject(record: ProjectRecord): ProjectRecord {
  return {
    ...record,
    tags: record.tags.filter((tag) => tag.trim().length > 0),
  };
}
