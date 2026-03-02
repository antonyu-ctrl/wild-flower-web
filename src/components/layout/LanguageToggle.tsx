'use client';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 font-sans text-[11px] tracking-[0.1em] uppercase">
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'px-1 py-0.5 transition-colors duration-200',
          locale === 'en'
            ? 'text-near-black font-medium'
            : 'text-charcoal/40 hover:text-copper'
        )}
      >
        EN
      </button>
      <span className="text-charcoal/30">|</span>
      <button
        onClick={() => setLocale('ko')}
        className={cn(
          'px-1 py-0.5 transition-colors duration-200',
          locale === 'ko'
            ? 'text-near-black font-medium'
            : 'text-charcoal/40 hover:text-copper'
        )}
      >
        KO
      </button>
    </div>
  );
}
