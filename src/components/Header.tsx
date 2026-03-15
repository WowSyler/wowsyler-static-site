'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/projects', label: t.nav.projects },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
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
          </nav>

          {/* Right side: language toggle + mobile button */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex rounded-lg overflow-hidden border"
              style={{ borderColor: '#CBD5E0' }}
            >
              <button
                onClick={() => setLocale('tr')}
                className="px-3 py-1.5 text-xs font-semibold transition-colors"
                style={{
                  background: locale === 'tr' ? '#0A2342' : '#ffffff',
                  color: locale === 'tr' ? '#ffffff' : '#4A5568',
                }}
              >
                TR
              </button>
              <button
                onClick={() => setLocale('en')}
                className="px-3 py-1.5 text-xs font-semibold transition-colors"
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
        </div>
      )}
    </header>
  );
}
