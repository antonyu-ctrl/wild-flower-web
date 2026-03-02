import { en, type TranslationDictionary } from './en';
import { ko } from './ko';

export type Locale = 'en' | 'ko';

export type { TranslationDictionary };

export const dictionaries: Record<Locale, TranslationDictionary> = {
  en,
  ko,
};

export const DEFAULT_LOCALE: Locale = 'en';
