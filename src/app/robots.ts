import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/routes';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const allow = '/';
  const disallow = ['/admin', '/api/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow,
        disallow,
      },
      {
        userAgent: ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User'],
        allow,
        disallow,
      },
      {
        userAgent: ['ClaudeBot', 'Claude-SearchBot', 'Claude-User'],
        allow,
        disallow,
      },
      {
        userAgent: ['PerplexityBot', 'Perplexity-User', 'CCBot'],
        allow,
        disallow,
      },
      {
        userAgent: 'Google-Extended',
        allow,
        disallow,
      },
    ],
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
