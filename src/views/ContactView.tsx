'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactView() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site: show success state (integrate with a form service like Formspree for real submissions)
    setSubmitted(true);
  };

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
            {t.contact.heroBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {t.contact.heroTitle}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <h2 className="text-2xl font-bold mb-7" style={{ color: '#0A2342' }}>
                {t.contact.formTitle}
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {submitted && (
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold"
                    style={{ background: 'rgba(0,180,216,0.12)', color: '#0A2342', border: '1px solid rgba(0,180,216,0.4)' }}
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t.contact.successMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#374151' }}
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #D1D5DB',
                        background: '#F9FAFB',
                        color: '#1A202C',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E6FD9')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#D1D5DB')}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: '#374151' }}
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #D1D5DB',
                        background: '#F9FAFB',
                        color: '#1A202C',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E6FD9')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#D1D5DB')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#374151' }}
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      border: '1px solid #D1D5DB',
                      background: '#F9FAFB',
                      color: '#1A202C',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E6FD9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#D1D5DB')}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#374151' }}
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={6}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      border: '1px solid #D1D5DB',
                      background: '#F9FAFB',
                      color: '#1A202C',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E6FD9')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#D1D5DB')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: '#1E6FD9', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#1557B0')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#1E6FD9')}
                >
                  {t.contact.submitBtn}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="rounded-2xl p-7"
              style={{ background: '#0A2342', color: '#ffffff' }}
            >
              <h3 className="text-lg font-bold mb-3">{t.contact.infoTitle}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                {t.contact.infoText}
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: t.contact.emailLabel2,
                    value: 'info@wowsyler.com',
                    href: 'mailto:info@wowsyler.com',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: t.contact.responseTime,
                    value: t.contact.responseTimeVal,
                    href: null,
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: t.contact.location,
                    value: t.contact.locationVal,
                    href: null,
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(0,180,216,0.15)', color: '#00B4D8' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#64748B' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium" style={{ color: '#00B4D8' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: '#E2E8F0' }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative card */}
            <div
              className="rounded-2xl p-7"
              style={{ background: 'linear-gradient(135deg, #1E6FD9, #00B4D8)' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                {t.contact.readyTitle}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {t.contact.readyText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
