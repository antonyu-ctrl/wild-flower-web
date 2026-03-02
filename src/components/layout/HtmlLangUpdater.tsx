'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/** Syncs the <html lang> attribute with the selected locale */
export default function HtmlLangUpdater() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
