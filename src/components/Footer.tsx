'use client';
import Link from 'next/link';
import { LEGAL_COMPANY_NAME } from '@/lib/brand';
import { getLegalPageHref } from '@/lib/legal';
import { getMainPageHref } from '@/lib/routes';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '@/lib/contact';

export default function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  const legalLinks = [
    { href: getLegalPageHref(locale, 'pdpl'), label: t.legalPages.items.pdpl.navLabel },
    { href: getLegalPageHref(locale, 'privacyPolicy'), label: t.legalPages.items.privacyPolicy.navLabel },
    { href: getLegalPageHref(locale, 'cookiePolicy'), label: t.legalPages.items.cookiePolicy.navLabel },
    { href: getLegalPageHref(locale, 'legalInformation'), label: t.legalPages.items.legalInformation.navLabel },
  ];

  return (
    <footer style={{ background: '#0A2342', color: '#CBD5E0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}/`} className="inline-flex">
              <Logo size={36} variant="light" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: '#94A3B8' }}>
              {t.footer.tagline}
            </p>
            {PUBLIC_CONTACT_MAILTO && (
              <div className="mt-5 flex items-center gap-2">
                <svg className="w-4 h-4" style={{ color: '#00B4D8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={PUBLIC_CONTACT_MAILTO}
                  className="text-sm hover:underline"
                  style={{ color: '#00B4D8' }}
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#E2E8F0' }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: `/${locale}/`, label: t.nav.home },
                { href: getMainPageHref(locale, 'about'), label: t.nav.about },
                { href: getMainPageHref(locale, 'projects'), label: t.nav.projects },
                { href: getMainPageHref(locale, 'contact'), label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#94A3B8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#E2E8F0' }}>
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5">
              {[
                t.footer.webDev,
                t.footer.mobileDev,
                t.footer.gameDev,
                t.footer.aiAgents,
                t.footer.devops,
              ].map((s) => (
                <li key={s}>
                  <Link
                    href={getMainPageHref(locale, 'services')}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#94A3B8' }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#E2E8F0' }}>
              {t.legalPages.sectionTitle}
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#94A3B8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid #1E3A5F' }}
        >
          <p className="text-xs" style={{ color: '#64748B' }}>
            &copy; {year} {LEGAL_COMPANY_NAME}. {t.footer.rights}
          </p>
          {PUBLIC_CONTACT_EMAIL && (
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: '#00B4D8' }} />
              <span className="text-xs" style={{ color: '#64748B' }}>
                {PUBLIC_CONTACT_EMAIL}
              </span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
