export type ProjectKey = 'textManipulator' | 'airdropBot' | 'streea';

export interface ProjectDefinition {
  key: ProjectKey;
  url: string;
  live: boolean;
  tech: string[];
  color: string;
}

export const PROJECTS: ProjectDefinition[] = [
  {
    key: 'textManipulator',
    url: 'https://textmanipulator.com',
    live: true,
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
    live: false,
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
    live: false,
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
];
