'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { CARPARKING_COLOR, CARPARKING_PROVIDER, CARPARKING_SUPPORT_EMAIL, getCarParkingHref } from '@/lib/carparking';

const CARD_STYLE = {
  background: '#ffffff',
  border: '1px solid #E2E8F0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
} as const;

export default function CarParkingView() {
  const { t, locale } = useLanguage();
  const f = t.carparking;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Header />

      <section
        style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 60%, #1E3A6E 100%)' }}
        className="pt-20 pb-24 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(13,148,136,0.2)', color: '#5EEAD4', border: '1px solid rgba(94,234,212,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {f.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: '#ffffff' }}>
            {f.title}
          </h1>
          <p className="text-xl font-semibold mb-5" style={{ color: '#5EEAD4' }}>
            {f.tagline}
          </p>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8" style={{ color: '#CBD5E0' }}>
            {f.intro}
          </p>
          <div
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#E2E8F0' }}
          >
            {f.storeSoon}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {f.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(13,148,136,0.2)', color: '#5EEAD4', border: '1px solid rgba(94,234,212,0.35)' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2342' }}>
            {f.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl p-6" style={CARD_STYLE}>
                <div className="w-10 h-1.5 rounded-full mb-4" style={{ background: CARPARKING_COLOR }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0A2342' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2342' }}>
              {f.faqTitle}
            </h2>
            <div className="flex flex-col gap-4">
              {f.faq.map((item) => (
                <div key={item.q} className="rounded-2xl p-6" style={CARD_STYLE}>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#0A2342' }}>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg, #0A2342, #1E3A6E)', color: '#ffffff' }}>
              <h2 className="text-lg font-bold mb-3">{f.supportTitle}</h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#CBD5E0' }}>
                {f.supportText}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#94A3B8' }}>
                {f.supportEmailLabel}
              </p>
              <a href={`mailto:${CARPARKING_SUPPORT_EMAIL}`} className="text-base font-semibold hover:underline" style={{ color: '#5EEAD4' }}>
                {CARPARKING_SUPPORT_EMAIL}
              </a>
            </div>

            <div className="rounded-2xl p-7" style={CARD_STYLE}>
              <h2 className="text-lg font-bold mb-4" style={{ color: '#0A2342' }}>
                {f.legalTitle}
              </h2>
              <div className="flex flex-col gap-2">
                <Link
                  href={getCarParkingHref(locale, 'privacy')}
                  className="rounded-xl px-4 py-3 text-sm font-medium"
                  style={{ background: '#F8FAFC', color: '#334155', border: '1px solid #E2E8F0' }}
                >
                  {f.privacyLabel}
                </Link>
              </div>
              <p className="text-xs mt-4" style={{ color: '#64748B' }}>
                {f.providerLabel}: {CARPARKING_PROVIDER}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
