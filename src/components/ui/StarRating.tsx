'use client';

import { cn } from '@/lib/utils';
import { StarIcon } from '@/components/icons';

interface StarRatingProps {
  rating: number;
  count?: number;
  className?: string;
}

export function StarRating({ rating, count, className }: StarRatingProps) {
  const filledStars = Math.floor(Math.max(0, Math.min(5, rating)));
  const emptyStars = 5 - filledStars;

  return (
    <div className={cn('inline-flex items-center gap-0.5', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: filledStars }).map((_, i) => (
          <StarIcon key={`filled-${i}`} filled className="text-copper" />
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <StarIcon key={`empty-${i}`} className="text-copper/30" />
        ))}
      </div>
      {typeof count === 'number' && (
        <span className="ml-1.5 font-sans text-xs text-charcoal/60">
          ({count})
        </span>
      )}
    </div>
  );
}
