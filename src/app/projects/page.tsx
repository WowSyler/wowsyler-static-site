'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    key: 'textManipulator',
    url: 'https://textmanipulator.com',
    live: true,
    tech: ['Next.js', 'Go', 'REST API', 'Docker'],
    color: '#1E6FD9',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: 'airdropBot',
    url: 'https://airdropbotpro.com',
    live: false,
    tech: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Proxy'],
    color: '#7C3AED',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'streea',
    url: 'https://streea.com',
    live: false,
    tech: ['Next.js', '.NET Core', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
    color: '#059669',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  const projectData = [
    {
      ...projects[0],
      title: t.projects.textManipulatorTitle,
      desc: t.projects.textManipulatorDesc,
      long: t.projects.textManipulatorLong,
      status: t.projects.statusLive,
    },
    {
      ...projects[1],
      title: t.projects.airdropBotTitle,
      desc: t.projects.airdropBotDesc,
      long: t.projects.airdropBotLong,
      status: t.projects.statusDev,
    },
    {
      ...projects[2],
      title: t.projects.streeaTitle,
      desc: t.projects.streeaDesc,
      long: t.projects.streeaLong,
      status: t.projects.statusDev,
    },
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
            {t.projects.heroBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {t.projects.heroTitle}
          </h1>
          <p className="text-lg" style={{ color: '#94A3B8' }}>{t.projects.heroSubtitle}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {projectData.map((project, idx) => (
            <div
              key={project.key}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              {/* Top accent */}
              <div className="h-1.5" style={{ background: project.color }} />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${project.color}15`, color: project.color }}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ background: '#F1F5F9', color: '#64748B' }}
                      >
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: project.live ? '#DCFCE7' : '#FEF3C7',
                          color: project.live ? '#16A34A' : '#D97706',
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3" style={{ color: '#0A2342' }}>
                      {project.title}
                    </h2>

                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#475569' }}>
                      {project.desc}
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748B' }}>
                      {project.long}
                    </p>

                    {/* Tech badges */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#94A3B8' }}>
                        {t.projects.techStack}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                            style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {project.live && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                        style={{ background: project.color, color: '#ffffff' }}
                      >
                        {t.projects.visitSite}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
