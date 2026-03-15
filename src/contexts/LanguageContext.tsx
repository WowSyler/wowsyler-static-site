'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '@/translations/en';
import { tr } from '@/translations/tr';

type Locale = 'en' | 'tr';
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ locale: Locale; mounted: boolean }>({
    locale: 'tr',
    mounted: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    const locale: Locale = (saved === 'en' || saved === 'tr') ? saved : 'tr';
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading localStorage is a genuine side-effect requiring useEffect for SSR safety
    setState({ locale, mounted: true });
  }, []);

  const setLocale = (l: Locale) => {
    setState((prev) => ({ ...prev, locale: l }));
    localStorage.setItem('locale', l);
  };

  // Use default locale until mounted to avoid hydration mismatch
  const activeLocale = state.mounted ? state.locale : 'tr';
  const t = activeLocale === 'en' ? en : tr;

  return (
    <LanguageContext.Provider value={{ locale: activeLocale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
