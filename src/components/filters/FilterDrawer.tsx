'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { XIcon } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { FilterSidebar } from '@/components/filters/FilterSidebar';
import { useLanguage } from '@/context/LanguageContext';
import type { ProductFilters } from '@/lib/filters';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  resultCount: number;
}

export function FilterDrawer({
  isOpen,
  onClose,
  category,
  filters,
  onFilterChange,
  resultCount,
}: FilterDrawerProps) {
  const { t } = useLanguage();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClearAll = () => {
    onFilterChange({ colors: [], materials: [], sizes: [] });
  };

  const hasActiveFilters =
    (filters.colors?.length ?? 0) > 0 ||
    (filters.materials?.length ?? 0) > 0 ||
    (filters.sizes?.length ?? 0) > 0;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-near-black/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 flex flex-col',
          'max-h-[85vh] rounded-t-2xl bg-cream shadow-xl',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label={t.filters.title}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-near-black/15" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-near-black/10">
          <h2 className="font-sans text-sm uppercase tracking-widest text-near-black">
            {t.filters.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-near-black hover:text-copper transition-colors"
            aria-label={t.filters.closeFilters}
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Filter content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <FilterSidebar
            category={category}
            filters={filters}
            onFilterChange={onFilterChange}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-near-black/10 px-4 py-4 flex items-center gap-4">
          <Button
            variant="primary"
            fullWidth
            onClick={onClose}
          >
            {t.filters.showResults.replace('{count}', String(resultCount))}
          </Button>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearAll}
              className="font-sans text-xs tracking-wide text-charcoal underline underline-offset-4 hover:text-copper transition-colors whitespace-nowrap"
            >
              {t.filters.clearAll}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
