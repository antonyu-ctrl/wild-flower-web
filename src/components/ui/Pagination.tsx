'use client';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [1];

  if (current > 3) {
    pages.push('ellipsis');
  }

  const rangeStart = Math.max(2, current - 1);
  const rangeEnd = Math.min(total - 1, current + 1);

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push('ellipsis');
  }

  pages.push(total);

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const baseButton = cn(
    'inline-flex items-center justify-center font-sans text-sm transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
  );

  const navButton = cn(
    baseButton,
    'gap-1.5 px-3 py-2 text-xs tracking-wide uppercase',
  );

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-1', className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={cn(
          navButton,
          isFirstPage
            ? 'text-near-black/25 cursor-not-allowed'
            : 'text-near-black hover:text-copper',
        )}
        aria-label="Go to previous page"
      >
        <ChevronLeftIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-1 mx-2">
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="inline-flex h-9 w-9 items-center justify-center font-sans text-sm text-charcoal/50"
                aria-hidden
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              disabled={isActive}
              className={cn(
                baseButton,
                'h-9 w-9 rounded-none border',
                isActive
                  ? 'border-copper bg-copper text-white cursor-default'
                  : 'border-near-black/10 bg-cream text-near-black hover:border-copper hover:text-copper',
              )}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={cn(
          navButton,
          isLastPage
            ? 'text-near-black/25 cursor-not-allowed'
            : 'text-near-black hover:text-copper',
        )}
        aria-label="Go to next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </button>
    </nav>
  );
}
