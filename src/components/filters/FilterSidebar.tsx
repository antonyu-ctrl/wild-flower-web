'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/Checkbox';
import { PRODUCT_COLORS, SIZES } from '@/lib/constants';
import { getProductsByCategory } from '@/data/products';
import type { ProductFilters } from '@/lib/filters';

interface FilterSidebarProps {
  category: string;
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  className?: string;
}

export function FilterSidebar({
  category,
  filters,
  onFilterChange,
  className,
}: FilterSidebarProps) {
  // Derive available colors and materials from category products
  const categoryProducts = useMemo(
    () => getProductsByCategory(category),
    [category]
  );

  const availableColors = useMemo(() => {
    const colorSlugs = new Set<string>();
    categoryProducts.forEach((p) =>
      p.colors.forEach((c) => colorSlugs.add(c.slug))
    );
    return PRODUCT_COLORS.filter((c) => colorSlugs.has(c.slug));
  }, [categoryProducts]);

  const availableMaterials = useMemo(() => {
    const materials = new Set<string>();
    categoryProducts.forEach((p) => materials.add(p.material));
    return Array.from(materials).sort();
  }, [categoryProducts]);

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    categoryProducts.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
    return SIZES.filter((s) => sizes.has(s));
  }, [categoryProducts]);

  const toggleColor = (slug: string) => {
    const current = filters.colors ?? [];
    const next = current.includes(slug)
      ? current.filter((c) => c !== slug)
      : [...current, slug];
    onFilterChange({ ...filters, colors: next });
  };

  const toggleMaterial = (material: string) => {
    const current = filters.materials ?? [];
    const next = current.includes(material)
      ? current.filter((m) => m !== material)
      : [...current, material];
    onFilterChange({ ...filters, materials: next });
  };

  const toggleSize = (size: string) => {
    const current = filters.sizes ?? [];
    const next = current.includes(size)
      ? current.filter((s) => s !== size)
      : [...current, size];
    onFilterChange({ ...filters, sizes: next });
  };

  return (
    <aside className={cn('w-full', className)}>
      {/* Color filter */}
      {availableColors.length > 0 && (
        <div className="pb-6">
          <h3 className="font-sans text-xs uppercase tracking-widest text-near-black mb-4">
            Color
          </h3>
          <div className="space-y-3">
            {availableColors.map((color) => (
              <label
                key={color.slug}
                className="group flex items-center gap-3 cursor-pointer select-none"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={filters.colors?.includes(color.slug) ?? false}
                    onChange={() => toggleColor(color.slug)}
                    className="peer sr-only"
                  />
                  <div
                    className={cn(
                      'h-[18px] w-[18px] rounded-[3px] border transition-colors duration-200',
                      'flex items-center justify-center',
                      filters.colors?.includes(color.slug)
                        ? 'border-copper bg-copper'
                        : 'border-near-black/25 bg-cream group-hover:border-copper/60',
                      'peer-focus-visible:ring-2 peer-focus-visible:ring-copper peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-cream'
                    )}
                  >
                    {filters.colors?.includes(color.slug) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 text-white"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  className="h-4 w-4 rounded-full border border-near-black/10 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-sans text-sm text-near-black leading-none">
                  {color.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-near-black/10" />

      {/* Material filter */}
      {availableMaterials.length > 0 && (
        <div className="py-6">
          <h3 className="font-sans text-xs uppercase tracking-widest text-near-black mb-4">
            Material
          </h3>
          <div className="space-y-3">
            {availableMaterials.map((material) => (
              <Checkbox
                key={material}
                id={`material-${material}`}
                label={material}
                checked={filters.materials?.includes(material) ?? false}
                onChange={() => toggleMaterial(material)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-near-black/10" />

      {/* Size filter */}
      {availableSizes.length > 0 && (
        <div className="py-6">
          <h3 className="font-sans text-xs uppercase tracking-widest text-near-black mb-4">
            Size
          </h3>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => {
              const isActive = filters.sizes?.includes(size) ?? false;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleSize(size)}
                  className={cn(
                    'inline-flex items-center justify-center font-sans text-xs tracking-wide',
                    'h-9 min-w-[2.5rem] px-3 border transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
                    isActive
                      ? 'border-copper bg-cream text-near-black'
                      : 'border-near-black/15 bg-transparent text-near-black hover:border-copper/60'
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
