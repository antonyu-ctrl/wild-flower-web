'use client';

import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  type ReactNode,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { dictionaries, DEFAULT_LOCALE, type Locale, type TranslationDictionary } from '@/i18n';

interface LanguageContextValue {
  locale: Locale;
  t: TranslationDictionary;
  setLocale: (locale: Locale) => void;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleRaw, isHydrated] = useLocalStorage<Locale>('wild-flower-lang', DEFAULT_LOCALE);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleRaw(newLocale);
    },
    [setLocaleRaw]
  );

  const t = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, t, setLocale, isHydrated }),
    [locale, t, setLocale, isHydrated]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
