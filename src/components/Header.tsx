'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLegalPageHref } from '@/lib/legal';
import { getAlternateUrl, getMainPageHref, type Locale } from '@/lib/routes';

export default function Header() {
  const { t, locale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [legalMenuOpen, setLegalMenuOpen] = useState(false);
  const legalMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  /** Navigate to the same page in the target locale. */
  function switchLocale(targetLocale: Locale) {
    const alternate = getAlternateUrl(pathname, targetLocale);
    router.push(alternate);
  }

  const navLinks = [
    { href: `/${locale}/`, label: t.nav.home },
    { href: getMainPageHref(locale, 'services'), label: t.nav.services },
    { href: getMainPageHref(locale, 'projects'), label: t.nav.projects },
    { href: getMainPageHref(locale, 'about'), label: t.nav.about },
    { href: getMainPageHref(locale, 'contact'), label: t.nav.contact },
  ];
  const legalLinks = [
    { href: getLegalPageHref(locale, 'pdpl'), label: t.legalPages.items.pdpl.navLabel },
    { href: getLegalPageHref(locale, 'privacyPolicy'), label: t.legalPages.items.privacyPolicy.navLabel },
    { href: getLegalPageHref(locale, 'cookiePolicy'), label: t.legalPages.items.cookiePolicy.navLabel },
    { href: getLegalPageHref(locale, 'legalInformation'), label: t.legalPages.items.legalInformation.navLabel },
  ];
  const normalizedPathname = pathname.replace(/\/$/, '');
  const isLegalRoute = legalLinks.some((link) => link.href.replace(/\/$/, '') === normalizedPathname);

  useEffect(() => {
    function handleDocumentMouseDown(event: MouseEvent) {
      if (legalMenuRef.current && !legalMenuRef.current.contains(event.target as Node)) {
        setLegalMenuOpen(false);
      }
    }

    function handleDocumentKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLegalMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleDocumentMouseDown);
    document.addEventListener('keydown', handleDocumentKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, []);

  return (
    <header
      style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}/`} className="flex-shrink-0">
            <Logo size={36} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#1E6FD9';
                  (e.currentTarget as HTMLAnchorElement).style.background = '#EBF4FF';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#4A5568';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative ml-2" ref={legalMenuRef}>
              <button
                type="button"
                onClick={() => setLegalMenuOpen((current) => !current)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
                style={{
                  color: legalMenuOpen || isLegalRoute ? '#1E6FD9' : '#4A5568',
                  background: legalMenuOpen || isLegalRoute ? '#EBF4FF' : 'transparent',
                }}
                aria-expanded={legalMenuOpen}
                aria-haspopup="menu"
              >
                {t.legalPages.sectionTitle}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {legalMenuOpen && (
                <div
                  className="absolute top-full right-0 pt-2 w-64"
                  role="menu"
                  aria-label={t.legalPages.sectionTitle}
                >
                  <div
                    className="rounded-2xl p-2"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
                    }}
                  >
                    {legalLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setLegalMenuOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                        style={{ color: '#334155' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#F8FAFC';
                          e.currentTarget.style.color = '#1E6FD9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#334155';
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right side: language toggle + mobile button */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex rounded-lg overflow-hidden border"
              style={{ borderColor: '#CBD5E0' }}
            >
              <button
                onClick={() => switchLocale('tr')}
                className="px-3 py-1.5 text-xs font-semibold transition-colors"
                aria-label="Türkçe"
                style={{
                  background: locale === 'tr' ? '#0A2342' : '#ffffff',
                  color: locale === 'tr' ? '#ffffff' : '#4A5568',
                }}
              >
                TR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className="px-3 py-1.5 text-xs font-semibold transition-colors"
                aria-label="English"
                style={{
                  background: locale === 'en' ? '#0A2342' : '#ffffff',
                  color: locale === 'en' ? '#ffffff' : '#4A5568',
                }}
              >
                EN
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#4A5568' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{ background: '#ffffff', borderColor: '#e2e8f0' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: '#4A5568' }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#EBF4FF';
                (e.currentTarget as HTMLAnchorElement).style.color = '#1E6FD9';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = '#4A5568';
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 pt-3 border-t" style={{ borderColor: '#E2E8F0' }}>
            <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748B' }}>
              {t.legalPages.sectionTitle}
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{ color: '#4A5568' }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#EBF4FF';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#1E6FD9';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#4A5568';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
