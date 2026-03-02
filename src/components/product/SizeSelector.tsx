'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { Size, ProductVariant } from '@/types';

interface SizeSelectorProps {
  sizes: Size[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
  variants: ProductVariant[];
  selectedColor?: string;
  className?: string;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  variants,
  selectedColor,
  className,
}: SizeSelectorProps) {
  // Determine which sizes are in stock for the currently selected color
  const sizeStockMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    sizes.forEach((size) => {
      if (selectedColor) {
        // Check if any variant with this size and color is in stock
        const variant = variants.find(
          (v) => v.size === size && v.colorSlug === selectedColor
        );
        map[size] = variant?.inStock ?? false;
      } else {
        // If no color selected, check if any variant with this size is in stock
        const variant = variants.find((v) => v.size === size && v.inStock);
        map[size] = !!variant;
      }
    });
    return map;
  }, [sizes, variants, selectedColor]);

  return (
    <div className={className}>
      <p className="font-sans text-xs uppercase tracking-widest text-near-black mb-3">
        Size
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const isActive = size === selectedSize;
          const inStock = sizeStockMap[size] ?? true;

          return (
            <button
              key={size}
              type="button"
              onClick={() => inStock && onSizeChange(size)}
              disabled={!inStock}
              className={cn(
                'inline-flex items-center justify-center font-sans text-xs tracking-wide',
                'h-10 min-w-[2.75rem] px-4 border transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
                isActive
                  ? 'border-copper bg-cream text-near-black'
                  : inStock
                    ? 'border-near-black/15 bg-transparent text-near-black hover:border-copper/60'
                    : 'border-near-black/10 bg-transparent text-near-black/30 line-through cursor-not-allowed'
              )}
              aria-label={`Size ${size}${!inStock ? ' - out of stock' : ''}`}
              aria-pressed={isActive}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
