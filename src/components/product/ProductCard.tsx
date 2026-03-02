'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { getProductName, getMaterialName } from '@/i18n/helpers';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const firstImage = product.images[0];
  const isNewArrival = product.tags.includes('new-arrival') || product.isNewArrival;
  const isOnSale = product.compareAtPrice != null && product.compareAtPrice > product.price;

  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="group block"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
        {firstImage && (
          <Image
            src={firstImage.src}
            alt={firstImage.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Badge */}
        {isNewArrival && (
          <div className="absolute left-3 top-3">
            <Badge variant="new">{t.product.new}</Badge>
          </div>
        )}

        {isOnSale && !isNewArrival && (
          <div className="absolute left-3 top-3">
            <Badge variant="sale">{t.product.sale}</Badge>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base text-near-black">
          {getProductName(t, product)}
        </h3>
        <p className="font-sans text-xs text-charcoal">
          {getMaterialName(t, product.material)}
        </p>
        <div className="flex items-center gap-2 pt-0.5">
          {isOnSale ? (
            <>
              <span className="font-sans text-sm text-terracotta">
                {formatPrice(product.price)}
              </span>
              <span className="font-sans text-sm text-charcoal/50 line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            </>
          ) : (
            <span className="font-sans text-sm text-near-black">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
