'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon } from '@/components/icons';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getNewArrivals } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

export function NewArrivalsSection() {
  const { t } = useLanguage();
  const newArrivals = getNewArrivals().slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <Container>
        {/* Header row */}
        <div className="flex items-baseline justify-between mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-near-black">
            {t.sections.newArrivals}
          </h2>
          <Link
            href="/shop/new-arrivals"
            className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wide uppercase text-charcoal transition-colors duration-200 hover:text-copper"
          >
            {t.sections.viewAll}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Product grid */}
        <ProductGrid columns={4}>
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Container>
    </section>
  );
}
