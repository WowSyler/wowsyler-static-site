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
  const [locale, setLocaleState] = useState<Locale>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved === 'en' || saved === 'tr') setLocaleState(saved);
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  };

  // Use default locale until mounted to avoid hydration mismatch
  const activeLocale = mounted ? locale : 'tr';
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
