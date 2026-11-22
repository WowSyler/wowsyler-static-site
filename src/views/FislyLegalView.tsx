'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RichText from '@/components/RichText';
import legalContent from '@/content/fisly/legal.json';
import { useLanguage } from '@/contexts/LanguageContext';
import { FISLY_PROVIDER, FISLY_SUPPORT_EMAIL, getFislyHref, type FislyLegalKey } from '@/lib/fisly';

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] };

type LegalDocument = { title: string; updated: string; party: string; blocks: Block[] };

const CARD_STYLE = {
  background: '#ffffff',
  border: '1px solid #E2E8F0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
} as const;

export default function FislyLegalView({ pageKey }: { pageKey: FislyLegalKey }) {
  const { t, locale } = useLanguage();
  const doc = legalContent[pageKey][locale] as LegalDocument;
  const otherKey: FislyLegalKey = pageKey === 'privacy' ? 'terms' : 'privacy';
  const otherLabel = otherKey === 'privacy' ? t.fisly.privacyLabel : t.fisly.termsLabel;

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <Header />

      <section
        style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 60%, #1E3A6E 100%)' }}
        className="pt-20 pb-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5" style={{ color: '#ffffff' }}>
            {doc.title}
          </h1>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#CBD5E0' }}
          >
            <span>{t.fisly.lastUpdatedLabel}</span>
            <span style={{ color: '#00B4D8' }}>{doc.updated}</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="rounded-2xl p-6 sm:p-10" style={CARD_STYLE}>
            <p className="text-sm leading-relaxed mb-2" style={{ color: '#475569' }}>
              <RichText text={doc.party} />
            </p>

            {doc.blocks.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4" style={{ color: '#0A2342' }}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={index} className="text-lg font-semibold mt-6 mb-3" style={{ color: '#0A2342' }}>
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'p') {
                return (
                  <p key={index} className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>
                    <RichText text={block.text} />
                  </p>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={index} className="space-y-3 mb-4">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#475569' }}>
                        <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#00B4D8' }} />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <div key={index} className="overflow-x-auto mb-4">
                  <table className="w-full text-sm text-left" style={{ color: '#475569' }}>
                    <thead>
                      <tr>
                        {block.head.map((cell) => (
                          <th
                            key={cell}
                            className="px-3 py-2 font-semibold"
                            style={{ color: '#0A2342', borderBottom: '2px solid #E2E8F0' }}
                          >
                            <RichText text={cell} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row) => (
                        <tr key={row.join('|')}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-3 py-2 align-top"
                              style={{ borderBottom: '1px solid #E2E8F0' }}
                            >
                              <RichText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </article>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={getFislyHref(locale)}
              className="rounded-xl px-4 py-3 text-sm font-semibold"
              style={{ background: '#0A2342', color: '#ffffff' }}
            >
              {t.fisly.backToApp}
            </Link>
            <Link href={getFislyHref(locale, otherKey)} className="rounded-xl px-4 py-3 text-sm font-medium" style={CARD_STYLE}>
              <span style={{ color: '#334155' }}>{otherLabel}</span>
            </Link>
            <a href={`mailto:${FISLY_SUPPORT_EMAIL}`} className="rounded-xl px-4 py-3 text-sm font-medium" style={CARD_STYLE}>
              <span style={{ color: '#1E6FD9' }}>{FISLY_SUPPORT_EMAIL}</span>
            </a>
          </div>
          <p className="mt-4 text-xs" style={{ color: '#64748B' }}>
            {t.fisly.providerLabel}: {FISLY_PROVIDER}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
