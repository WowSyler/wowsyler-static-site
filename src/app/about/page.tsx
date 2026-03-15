'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const techGroups = [
  { label: 'Frontend', items: ['Next.js', 'Angular', 'Blazor', 'React', 'TypeScript'] },
  { label: 'Backend', items: ['.NET Core', 'Go', 'Node.js', 'Python'] },
  { label: 'Database', items: ['PostgreSQL', 'Redis', 'RabbitMQ'] },
  { label: 'DevOps', items: ['Docker', 'Docker Compose', 'CI/CD', 'Self-hosted', 'Cloud'] },
  { label: 'AI', items: ['AI Agents', 'LLM Integration', 'Automation'] },
];

const valueIcons = [
  <svg key="quality" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="innovation" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="transparency" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  <svg key="ownership" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  <svg key="collaboration" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="delivery" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const valueColors = ['#1E6FD9', '#7C3AED', '#059669', '#DC2626', '#D97706', '#0891B2'];

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { title: t.about.values.qualityTitle, desc: t.about.values.qualityDesc },
    { title: t.about.values.innovationTitle, desc: t.about.values.innovationDesc },
    { title: t.about.values.transparencyTitle, desc: t.about.values.transparencyDesc },
    { title: t.about.values.ownershipTitle, desc: t.about.values.ownershipDesc },
    { title: t.about.values.collaborationTitle, desc: t.about.values.collaborationDesc },
    { title: t.about.values.deliveryTitle, desc: t.about.values.deliveryDesc },
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
            {t.about.heroBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {t.about.heroTitle}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0A2342' }}>
                {t.about.storyTitle}
              </h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: '#475569' }}>{t.about.storyText1}</p>
                <p className="text-base leading-relaxed" style={{ color: '#475569' }}>{t.about.storyText2}</p>
                <p className="text-base leading-relaxed" style={{ color: '#475569' }}>{t.about.storyText3}</p>
              </div>
            </div>

            {/* Mission card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, #0A2342, #1E3A6E)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,180,216,0.2)', color: '#00B4D8' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                {t.about.missionTitle}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                {t.about.missionText}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[['3', t.about.statsProjects], ['5+', t.about.statsTech], ['2', t.about.statsLanguages]].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#00B4D8' }}>{num}</p>
                    <p className="text-xs mt-1" style={{ color: '#64748B' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              {t.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${valueColors[i]}15`, color: valueColors[i] }}
                >
                  {valueIcons[i]}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0A2342' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              {t.about.expertiseTitle}
            </h2>
            <p className="text-lg" style={{ color: '#64748B' }}>{t.about.expertiseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl p-6"
                style={{ background: '#ffffff', border: '1px solid #E2E8F0' }}
              >
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: '#0A2342' }}>
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: '#EBF4FF', color: '#1E6FD9' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
