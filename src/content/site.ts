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
  founderNote:
    'Seaguntech is a new agency built on more than a decade of hands-on software delivery for international teams.',
  planningSteps: ['Understand', 'Shape', 'Sequence', 'Ship with feedback'] as const,
  engineeringFoundations: [
    'Semantic HTML',
    'Metadata and share previews',
    'Structured content and crawlability',
    'Performance-minded delivery',
  ] as const,
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
  consultationHref: '#contact',
  portfolio: 'https://projects.quangpham.dev/',
} as const;

export const selectedProjects: readonly ProjectRecord[] = [
  {
    title: 'Glo Yoga & Meditation Platform',
    description:
      'An online yoga and meditation platform with thousands of professionally filmed classes for people worldwide.',
    tags: ['Next.js', 'React', 'TypeScript'],
    href: 'https://glo.com/',
  },
  {
    title: 'Restful Mind App',
    description:
      'A mobile product focused on meditation, mindfulness, relaxation, and better sleep.',
    tags: ['React Native', 'TypeScript', 'React Query', 'Zustand'],
    href: 'https://apps.apple.com/vn/app/the-restful-mind/id6738620498',
  },
  {
    title: 'Early Bird App',
    description:
      "An iOS and Android product helping families invest in their children's financial futures.",
    tags: ['React Native', 'TypeScript', 'Redux'],
    href: 'https://apps.apple.com/us/app/earlybird-invest-celebrate/id1517808320',
  },
  {
    title: 'Centz Web System',
    description:
      'A web system with core flows including authentication, homepage, support, and FAQ across web and mobile.',
    tags: ['React', 'TypeScript', 'Redux Saga'],
    href: 'https://mycentz.com/home',
  },
];

export function normalizeProject(record: ProjectRecord): ProjectRecord {
  return {
    ...record,
    tags: record.tags.filter((tag) => tag.trim().length > 0),
  };
}
