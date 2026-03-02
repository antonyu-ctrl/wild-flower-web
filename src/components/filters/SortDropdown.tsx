'use client';

import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/components/icons';
import { useLanguage } from '@/context/LanguageContext';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SortDropdown({ value, onChange, className }: SortDropdownProps) {
  const { t } = useLanguage();

  const sortOptions = [
    { value: 'newest', label: t.filters.sortNewest },
    { value: 'price-asc', label: t.filters.sortPriceLow },
    { value: 'price-desc', label: t.filters.sortPriceHigh },
    { value: 'name-asc', label: t.filters.sortNameAZ },
  ];

  const currentLabel =
    sortOptions.find((opt) => opt.value === value)?.label ?? t.filters.sortNewest;

  return (
    <div className={cn('relative inline-flex items-center', className)}>
      <span className="font-sans text-xs tracking-wide text-charcoal mr-2 whitespace-nowrap">
        {t.filters.sortBy}:
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'appearance-none bg-transparent pr-6 py-1',
            'font-sans text-xs tracking-wide text-near-black',
            'cursor-pointer border-none outline-none',
            'focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded'
          )}
          aria-label={`${t.filters.sortBy} ${currentLabel}`}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-near-black pointer-events-none" />
      </div>
    </div>
  );
}
