'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { LEGAL_COMPANY_NAME } from '@/lib/brand';
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '@/lib/contact';
import { getLegalPageHref, LEGAL_PAGE_KEYS, type LegalPageKey } from '@/lib/legal';
import { BASE_URL, getMainPageHref } from '@/lib/routes';

type LegalPageViewProps = {
  pageKey: LegalPageKey;
};

export default function LegalPageView({ pageKey }: LegalPageViewProps) {
  const { t, locale } = useLanguage();

  const pages = {
    pdpl: t.legalPages.items.pdpl,
    privacyPolicy: t.legalPages.items.privacyPolicy,
    cookiePolicy: t.legalPages.items.cookiePolicy,
    legalInformation: t.legalPages.items.legalInformation,
  };

  const page = pages[pageKey];
  const sections = page.sections.map((section) => ({
    title: section.title,
    paragraphs: section.paragraphs,
    bullets: 'bullets' in section ? section.bullets : undefined,
  }));
  const relatedPages = LEGAL_PAGE_KEYS.filter((key) => key !== pageKey).map((key) => ({
    key,
    href: getLegalPageHref(locale, key),
    label: pages[key].navLabel,
  }));

  const contactPageHref = getMainPageHref(locale, 'contact');
  const contactHref = PUBLIC_CONTACT_MAILTO ?? contactPageHref;
  const contactLabel = PUBLIC_CONTACT_EMAIL || t.legalPages.contactCta;
  const websiteLabel = BASE_URL.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Header />

      <section
        style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 60%, #1E3A6E 100%)' }}
        className="pt-20 pb-24 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(0,180,216,0.15)',
              color: '#00B4D8',
              border: '1px solid rgba(0,180,216,0.3)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {page.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {page.title}
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: '#94A3B8' }}>
            {page.subtitle}
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#CBD5E0' }}
          >
            <span>{t.legalPages.lastUpdatedLabel}</span>
            <span style={{ color: '#00B4D8' }}>{t.legalPages.updatedAt}</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 flex flex-col gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl p-8"
                style={{
                  background: '#ffffff',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A2342' }}>
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {(section.paragraphs ?? []).map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: '#475569' }}>
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: '#00B4D8' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="rounded-2xl p-7"
              style={{
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <h3 className="text-lg font-bold mb-5" style={{ color: '#0A2342' }}>
                {t.legalPages.companyCardTitle}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748B' }}>
                    {t.legalPages.companyNameLabel}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#0F172A' }}>
                    {LEGAL_COMPANY_NAME}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748B' }}>
                    {t.legalPages.websiteLabel}
                  </p>
                  <a
                    href={BASE_URL}
                    className="text-sm font-medium hover:underline"
                    style={{ color: '#1E6FD9' }}
                  >
                    {websiteLabel}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748B' }}>
                    {t.legalPages.emailLabel}
                  </p>
                  <a
                    href={contactHref}
                    className="text-sm font-medium hover:underline"
                    style={{ color: '#1E6FD9' }}
                  >
                    {contactLabel}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-7"
              style={{ background: 'linear-gradient(135deg, #0A2342, #1E3A6E)', color: '#ffffff' }}
            >
              <h3 className="text-lg font-bold mb-3">{t.legalPages.contactTitle}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#CBD5E0' }}>
                {t.legalPages.contactText}
              </p>
              <Link
                href={contactPageHref}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: '#00B4D8', color: '#0A2342' }}
              >
                {t.legalPages.contactCta}
              </Link>
            </div>

            <div
              className="rounded-2xl p-7"
              style={{
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: '#0A2342' }}>
                {t.legalPages.relatedTitle}
              </h3>
              <div className="flex flex-col gap-2">
                {relatedPages.map((relatedPage) => (
                  <Link
                    key={relatedPage.key}
                    href={relatedPage.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                    style={{ background: '#F8FAFC', color: '#334155', border: '1px solid #E2E8F0' }}
                  >
                    {relatedPage.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
