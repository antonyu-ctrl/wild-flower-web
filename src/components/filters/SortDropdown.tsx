'use client';

import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/components/icons';

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
] as const;

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SortDropdown({ value, onChange, className }: SortDropdownProps) {
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === value)?.label ?? 'Newest Arrivals';

  return (
    <div className={cn('relative inline-flex items-center', className)}>
      <span className="font-sans text-xs tracking-wide text-charcoal mr-2 whitespace-nowrap">
        Sort by:
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
          aria-label={`Sort by ${currentLabel}`}
        >
          {SORT_OPTIONS.map((option) => (
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
