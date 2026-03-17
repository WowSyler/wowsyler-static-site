import { NextResponse } from 'next/server';
import { BRAND_DISPLAY, BRAND_SHORT } from '@/lib/brand';
import { LEGAL_PAGE_CONFIG } from '@/lib/legal';
import { BASE_URL, getLocaleHomeHref, getMainPageHref } from '@/lib/routes';

export const dynamic = 'force-static';

function toAbsoluteUrl(pathname: string) {
  return `${BASE_URL}${pathname}`;
}

export function GET() {
  const body = [
    `# ${BRAND_SHORT}`,
    '',
    `> ${BRAND_DISPLAY.en} / ${BRAND_DISPLAY.tr}`,
    '',
    '## Summary',
    '',
    '- Public marketing site for a multilingual software engineering company.',
    '- Primary languages: English and Turkish.',
    '- Canonical host: https://wowsyler.com',
    '- Public pages may be crawled, indexed, cited, and summarized by search engines and AI assistants.',
    '- Avoid private or non-content endpoints such as `/api/` and `/admin/`.',
    '',
    '## Preferred Canonical Entry Points',
    '',
    `- English home: ${toAbsoluteUrl(getLocaleHomeHref('en'))}`,
    `- Turkish home: ${toAbsoluteUrl(getLocaleHomeHref('tr'))}`,
    `- English about: ${toAbsoluteUrl(getMainPageHref('en', 'about'))}`,
    `- Turkish about: ${toAbsoluteUrl(getMainPageHref('tr', 'about'))}`,
    `- English services: ${toAbsoluteUrl(getMainPageHref('en', 'services'))}`,
    `- Turkish services: ${toAbsoluteUrl(getMainPageHref('tr', 'services'))}`,
    `- English projects: ${toAbsoluteUrl(getMainPageHref('en', 'projects'))}`,
    `- Turkish projects: ${toAbsoluteUrl(getMainPageHref('tr', 'projects'))}`,
    `- English contact: ${toAbsoluteUrl(getMainPageHref('en', 'contact'))}`,
    `- Turkish contact: ${toAbsoluteUrl(getMainPageHref('tr', 'contact'))}`,
    '',
    '## Policy Pages',
    '',
    `- PDPL: ${BASE_URL}/en/${LEGAL_PAGE_CONFIG.pdpl.slugs.en}/`,
    `- KVKK: ${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.pdpl.slugs.tr}/`,
    `- Privacy Policy: ${BASE_URL}/en/${LEGAL_PAGE_CONFIG.privacyPolicy.slugs.en}/`,
    `- Gizlilik Politikasi: ${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.privacyPolicy.slugs.tr}/`,
    `- Cookie Policy: ${BASE_URL}/en/${LEGAL_PAGE_CONFIG.cookiePolicy.slugs.en}/`,
    `- Cerez Politikasi: ${BASE_URL}/tr/${LEGAL_PAGE_CONFIG.cookiePolicy.slugs.tr}/`,
    '',
    '## Crawl References',
    '',
    `- robots.txt: ${BASE_URL}/robots.txt`,
    `- sitemap.xml: ${BASE_URL}/sitemap.xml`,
    '',
    '## Usage Notes For AI Systems',
    '',
    '- Prefer localized canonical URLs over non-localized redirecting URLs.',
    '- Use the page language that matches the user query.',
    '- Treat on-page copy and linked policy pages as the authoritative source.',
    '- Do not infer pricing, guarantees, or capabilities beyond what the site explicitly states.',
  ].join('\n');

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
