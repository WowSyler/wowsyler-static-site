'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceConfig = [
  {
    key: 'web',
    color: '#1E6FD9',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'mobile',
    color: '#7C3AED',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'game',
    color: '#059669',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    key: 'ai',
    color: '#D97706',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    key: 'backend',
    color: '#DC2626',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    key: 'devops',
    color: '#0891B2',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function ServicesView() {
  const { t, locale } = useLanguage();

  const services = [
    { title: t.services.webTitle, desc: t.services.webDesc, features: t.services.webFeatures },
    { title: t.services.mobileTitle, desc: t.services.mobileDesc, features: t.services.mobileFeatures },
    { title: t.services.gameTitle, desc: t.services.gameDesc, features: t.services.gameFeatures },
    { title: t.services.aiTitle, desc: t.services.aiDesc, features: t.services.aiFeatures },
    { title: t.services.backendTitle, desc: t.services.backendDesc, features: t.services.backendFeatures },
    { title: t.services.devopsTitle, desc: t.services.devopsDesc, features: t.services.devopsFeatures },
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section
        style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 60%, #1E3A6E 100%)' }}
        className="pt-20 pb-24 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(0,180,216,0.15)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {t.services.heroBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {t.services.heroTitle}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            {t.services.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((svc, i) => {
            const cfg = serviceConfig[i];
            return (
              <div
                key={cfg.key}
                className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
              >
                {/* Top stripe */}
                <div className="h-1.5" style={{ background: cfg.color }} />
                <div className="p-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${cfg.color}12`, color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#0A2342' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>{svc.desc}</p>

                  <ul className="space-y-2">
                    {svc.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm" style={{ color: '#475569' }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${cfg.color}15`, color: cfg.color }}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 mx-4 mb-20 rounded-3xl max-w-5xl lg:mx-auto"
        style={{ background: 'linear-gradient(135deg, #0A2342, #1E3A6E)' }}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: '#ffffff' }}>
            {t.services.ctaTitle}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            {t.services.ctaText}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all"
            style={{ background: '#00B4D8', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0096B7')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#00B4D8')}
          >
            {t.services.ctaBtn}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
