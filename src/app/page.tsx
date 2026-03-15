'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const techStack = [
  { name: 'Next.js', color: '#000000' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Blazor', color: '#512BD4' },
  { name: '.NET Core', color: '#512BD4' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'RabbitMQ', color: '#FF6600' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'CI/CD', color: '#1E6FD9' },
];

const serviceIcons = {
  web: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  mobile: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  game: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ai: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    { key: 'web', title: t.home.services.webTitle, desc: t.home.services.webDesc, icon: serviceIcons.web },
    { key: 'mobile', title: t.home.services.mobileTitle, desc: t.home.services.mobileDesc, icon: serviceIcons.mobile },
    { key: 'game', title: t.home.services.gameTitle, desc: t.home.services.gameDesc, icon: serviceIcons.game },
    { key: 'ai', title: t.home.services.aiTitle, desc: t.home.services.aiDesc, icon: serviceIcons.ai },
  ];

  const projects = [
    {
      title: t.projects.textManipulatorTitle,
      desc: t.projects.textManipulatorDesc,
      status: t.projects.statusLive,
      live: true,
      url: 'https://textmanipulator.com',
      tech: ['Next.js', 'Go'],
      color: '#1E6FD9',
    },
    {
      title: t.projects.airdropBotTitle,
      desc: t.projects.airdropBotDesc,
      status: t.projects.statusDev,
      live: false,
      url: 'https://airdropbotpro.com',
      tech: ['Node.js', 'Go', 'PostgreSQL'],
      color: '#7C3AED',
    },
    {
      title: t.projects.streeaTitle,
      desc: t.projects.streeaDesc,
      status: t.projects.statusDev,
      live: false,
      url: 'https://streea.com',
      tech: ['Next.js', '.NET Core', 'PostgreSQL', 'Redis'],
      color: '#059669',
    },
  ];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 50%, #1E3A6E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="pt-24 pb-28 px-4"
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(0,180,216,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(30,111,217,0.08)', pointerEvents: 'none' }} />

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(0,180,216,0.15)', color: '#00B4D8', border: '1px solid rgba(0,180,216,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            WowSyler Teknoloji
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            style={{ color: '#ffffff' }}
          >
            <span style={{ color: '#00B4D8' }}>Wow</span>
            <span style={{ color: '#ffffff' }}>Syler</span>
            <br />
            <span style={{ color: '#ffffff' }}>{t.home.heroTitleSub}</span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#94A3B8' }}>
            {t.home.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all"
              style={{ background: '#1E6FD9', color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1557B0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1E6FD9')}
            >
              {t.home.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm transition-all"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.key}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#EBF4FF', color: '#1E6FD9' }}
                >
                  {svc.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0A2342' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              {t.home.techTitle}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              {t.home.techSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  color: '#1A202C',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: tech.color }}
                />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0A2342' }}>
              {t.home.projectsTitle}
            </h2>
            <p className="text-lg" style={{ color: '#64748B' }}>{t.home.projectsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              >
                {/* Card top stripe */}
                <div className="h-1.5" style={{ background: project.color }} />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg" style={{ color: '#0A2342' }}>{project.title}</h3>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold ml-2 flex-shrink-0"
                      style={{
                        background: project.live ? '#DCFCE7' : '#FEF3C7',
                        color: project.live ? '#16A34A' : '#D97706',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>
                    {project.desc.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{ background: '#F1F5F9', color: '#475569' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: '#1E6FD9' }}
                    >
                      {t.projects.visitSite}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
              style={{ background: '#0A2342', color: '#ffffff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0D2D5A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0A2342')}
            >
              {t.home.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #1E6FD9 0%, #0A2342 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: '#ffffff' }}>
            {t.home.ctaSectionTitle}
          </h2>
          <p className="text-lg mb-8" style={{ color: '#93C5FD' }}>
            {t.home.ctaSectionSubtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all"
            style={{ background: '#00B4D8', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0096B7')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#00B4D8')}
          >
            {t.home.ctaContact}
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
