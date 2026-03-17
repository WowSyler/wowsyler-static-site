import type { MetadataRoute } from 'next';
import { SITEMAP_ENTRIES } from '@/lib/routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ENTRIES.map(({ url, changefreq, priority, alternates }) => ({
    url,
    lastModified,
    changeFrequency: changefreq,
    priority,
    alternates,
  }));
}
