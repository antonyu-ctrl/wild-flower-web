'use client';

import { cn } from '@/lib/utils';
import type { ProductColor } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { getColorName } from '@/i18n/helpers';

interface ColorSwatchesProps {
  colors: ProductColor[];
  selectedColor: string;
  onColorChange: (slug: string) => void;
  className?: string;
}

export function ColorSwatches({
  colors,
  selectedColor,
  onColorChange,
  className,
}: ColorSwatchesProps) {
  const { t } = useLanguage();
  const selectedColorObj = colors.find((c) => c.slug === selectedColor);
  const selectedColorName = selectedColorObj
    ? getColorName(t, selectedColorObj.slug, selectedColorObj.name)
    : '';

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-3">
        {colors.map((color) => {
          const isActive = color.slug === selectedColor;
          return (
            <button
              key={color.slug}
              type="button"
              onClick={() => onColorChange(color.slug)}
              className={cn(
                'relative h-6 w-6 rounded-full transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
                isActive && 'ring-2 ring-copper ring-offset-2 ring-offset-cream'
              )}
              style={{ backgroundColor: color.hex }}
              aria-label={`${t.product.selectColor}: ${getColorName(t, color.slug, color.name)}`}
              aria-pressed={isActive}
            >
              {/* Border for light colors */}
              <span className="absolute inset-0 rounded-full border border-near-black/10" />
            </button>
          );
        })}
      </div>
      <p className="font-sans text-xs uppercase tracking-widest text-charcoal">
        {t.product.color}: <span className="text-near-black">{selectedColorName}</span>
      </p>
    </div>
  );
}
