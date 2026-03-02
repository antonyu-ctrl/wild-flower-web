'use client';

import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { useLanguage } from '@/context/LanguageContext';

interface CompleteTheLookProps {
  productIds: string[];
}

export function CompleteTheLook({ productIds }: CompleteTheLookProps) {
  const { t } = useLanguage();
  const relatedProducts = productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section>
      <h2 className="font-serif text-2xl italic text-near-black mb-6 md:mb-8">
        {t.product.completeTheLook}
      </h2>

      {/* Desktop: grid, Mobile: horizontally scrollable */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product!.id} product={product!} />
        ))}
      </div>

      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2">
        {relatedProducts.map((product) => (
          <div
            key={product!.id}
            className="flex-shrink-0 w-[60vw] snap-start"
          >
            <ProductCard product={product!} />
          </div>
        ))}
      </div>
    </section>
  );
}
