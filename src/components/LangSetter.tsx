'use client';
import { useEffect } from 'react';

interface LangSetterProps {
  locale: string;
}

/**
 * Sets the `lang` attribute on the root `<html>` element to match the
 * current locale. This is necessary because Next.js static export requires
 * `<html>` to be in the root layout, which has no access to route params.
 */
export default function LangSetter({ locale }: LangSetterProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
