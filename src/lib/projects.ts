export type ProjectKey =
  | 'textManipulator'
  | 'airdropBot'
  | 'streea'
  | 'randevu'
  | 'inspectRelease'
  | 'dolap'
  | 'giderGelir'
  | 'glowScan'
  | 'chassis'
  | 'carParking'
  | 'cryptoBot'
  | 'mailPreview';

export type ProjectStatus = 'live' | 'dev' | 'planned';

export interface ProjectDefinition {
  key: ProjectKey;
  url?: string;
  status: ProjectStatus;
  tech: string[];
  color: string;
}

export const PROJECT_STATUS_STYLES: Record<ProjectStatus, { bg: string; fg: string }> = {
  live: { bg: '#DCFCE7', fg: '#16A34A' },
  dev: { bg: '#FEF3C7', fg: '#D97706' },
  planned: { bg: '#E0E7FF', fg: '#4F46E5' },
};

export const PROJECTS: ProjectDefinition[] = [
  {
    key: 'textManipulator',
    url: 'https://textmanipulator.com',
    status: 'live',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Go',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'Grafana',
      'Uptime Kuma',
    ],
    color: '#1E6FD9',
  },
  {
    key: 'airdropBot',
    url: 'https://airdropbotpro.com',
    status: 'dev',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'ASP.NET Core API',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Node.js',
      'Grafana',
      'Prometheus',
    ],
    color: '#7C3AED',
  },
  {
    key: 'streea',
    url: 'https://streea.com',
    status: 'dev',
    tech: [
      'Next.js',
      'Tailwind CSS',
      '.NET Core',
      'Python',
      'RabbitMQ',
      'PostgreSQL',
      'Redis',
      'Elasticsearch',
      'Grafana',
      'Prometheus',
    ],
    color: '#059669',
  },
  {
    key: 'randevu',
    status: 'dev',
    tech: [
      '.NET 10',
      'CQRS / MediatR',
      'Next.js 15',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Traefik',
      'Paddle',
      'Docker',
    ],
    color: '#0891B2',
  },
  {
    key: 'inspectRelease',
    status: 'dev',
    tech: [
      'Next.js 15',
      'React 19',
      'NestJS',
      'Playwright',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'BullMQ',
      'Cloudflare R2',
      'Claude AI',
    ],
    color: '#DB2777',
  },
  {
    key: 'dolap',
    status: 'dev',
    tech: [
      '.NET 10',
      'Next.js',
      'React Native',
      'Expo',
      'TypeScript',
      'PostgreSQL',
      'EF Core',
      'Claude AI',
      'Turborepo',
      'Docker',
    ],
    color: '#C026D3',
  },
  {
    key: 'giderGelir',
    status: 'dev',
    tech: [
      'React Native',
      'Expo',
      '.NET 10',
      'PostgreSQL',
      'Hangfire',
      'OCR + LLM',
      'SQLite',
      'Docker',
      'GitHub Actions',
    ],
    color: '#65A30D',
  },
  {
    key: 'glowScan',
    status: 'dev',
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      '.NET 8',
      'PostgreSQL',
      'Redis',
      'Cloudflare R2',
      'AI Skin Analysis',
      'IAP',
    ],
    color: '#E11D48',
  },
  {
    key: 'chassis',
    status: 'dev',
    tech: [
      'Unity 6',
      'C#',
      'URP',
      '.NET 10',
      'EF Core',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    color: '#EA580C',
  },
  {
    key: 'carParking',
    status: 'dev',
    tech: ['Unity', 'C#', 'Android', 'Vehicle Physics'],
    color: '#0D9488',
  },
  {
    key: 'cryptoBot',
    status: 'planned',
    tech: [
      'Next.js',
      '.NET Core',
      'Python',
      'PostgreSQL',
      'TimescaleDB',
      'RabbitMQ',
      'Redis',
    ],
    color: '#D97706',
  },
  {
    key: 'mailPreview',
    status: 'planned',
    tech: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Playwright',
      'PostgreSQL',
      'Redis',
      'Appium',
    ],
    color: '#4F46E5',
  },
];
