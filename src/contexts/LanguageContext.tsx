'use client';
import React, { createContext, useContext, useState } from 'react';
import en from '@/translations/en.json';
import tr from '@/translations/tr.json';

type Locale = 'en' | 'tr';
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
  /** Locale derived from the URL segment — provided by the [locale] layout. */
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = 'tr' }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
  };

  const t = locale === 'en' ? en : tr;

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
