'use client';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { PROJECTS, PROJECT_STATUS_STYLES, type ProjectKey, type ProjectStatus } from '@/lib/projects';

export default function ProjectsView() {
  const { t } = useLanguage();

  const statusLabels: Record<ProjectStatus, string> = {
    live: t.projects.statusLive,
    dev: t.projects.statusDev,
    planned: t.projects.statusPlanned,
  };

  const projectContent: Record<
    ProjectKey,
    {
      title: string;
      desc: string;
      long: string;
      icon: ReactNode;
    }
  > = {
    textManipulator: {
      title: t.projects.textManipulatorTitle,
      desc: t.projects.textManipulatorDesc,
      long: t.projects.textManipulatorLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    airdropBot: {
      title: t.projects.airdropBotTitle,
      desc: t.projects.airdropBotDesc,
      long: t.projects.airdropBotLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    streea: {
      title: t.projects.streeaTitle,
      desc: t.projects.streeaDesc,
      long: t.projects.streeaLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
    randevu: {
      title: t.projects.randevuTitle,
      desc: t.projects.randevuDesc,
      long: t.projects.randevuLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    inspectRelease: {
      title: t.projects.inspectReleaseTitle,
      desc: t.projects.inspectReleaseDesc,
      long: t.projects.inspectReleaseLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    dolap: {
      title: t.projects.dolapTitle,
      desc: t.projects.dolapDesc,
      long: t.projects.dolapLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    giderGelir: {
      title: t.projects.giderGelirTitle,
      desc: t.projects.giderGelirDesc,
      long: t.projects.giderGelirLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
    },
    glowScan: {
      title: t.projects.glowScanTitle,
      desc: t.projects.glowScanDesc,
      long: t.projects.glowScanLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8V6a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2M7 20H5a2 2 0 01-2-2v-2m6-6h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0" />
        </svg>
      ),
    },
    chassis: {
      title: t.projects.chassisTitle,
      desc: t.projects.chassisDesc,
      long: t.projects.chassisLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    carParking: {
      title: t.projects.carParkingTitle,
      desc: t.projects.carParkingDesc,
      long: t.projects.carParkingLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
        </svg>
      ),
    },
    cryptoBot: {
      title: t.projects.cryptoBotTitle,
      desc: t.projects.cryptoBotDesc,
      long: t.projects.cryptoBotLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    mailPreview: {
      title: t.projects.mailPreviewTitle,
      desc: t.projects.mailPreviewDesc,
      long: t.projects.mailPreviewLong,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  };

  const projectData = PROJECTS.map((project) => ({
    ...project,
    ...projectContent[project.key],
    status: statusLabels[project.status],
    statusStyle: PROJECT_STATUS_STYLES[project.status],
  }));

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
                          background: project.statusStyle.bg,
                          color: project.statusStyle.fg,
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
                    {project.url && (
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
