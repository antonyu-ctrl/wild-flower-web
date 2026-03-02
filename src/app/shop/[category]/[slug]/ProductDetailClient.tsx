'use client';

import { useState, useCallback } from 'react';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { StarRating } from '@/components/ui/StarRating';
import { Accordion } from '@/components/ui/Accordion';
import { ProductImageGallery } from '@/components/product/ProductImageGallery';
import { ColorSwatches } from '@/components/product/ColorSwatches';
import { SizeSelector } from '@/components/product/SizeSelector';
import { AddToBagButton } from '@/components/product/AddToBagButton';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem, openDrawer } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.slug ?? ''
  );
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToBag = useCallback(() => {
    if (!selectedSize) return;

    // Find the matching variant
    const variant = product.variants.find(
      (v) => v.colorSlug === selectedColor && v.size === selectedSize
    );

    if (!variant || !variant.inStock) return;

    addItem({
      productId: product.id,
      variantId: variant.id,
      colorSlug: selectedColor,
      size: selectedSize as Product['sizes'][number],
      quantity: 1,
      priceAtAdd: product.price,
    });

    openDrawer();
  }, [product, selectedColor, selectedSize, addItem, openDrawer]);

  const canAddToBag = (() => {
    if (!selectedSize || !selectedColor) return false;
    const variant = product.variants.find(
      (v) => v.colorSlug === selectedColor && v.size === selectedSize
    );
    return variant?.inStock ?? false;
  })();

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16">
      {/* Left: Image gallery — 55% on desktop */}
      <div className="w-full md:w-[55%] flex-shrink-0">
        <ProductImageGallery
          images={product.images}
          productName={product.name}
        />
      </div>

      {/* Right: Product info — 45% on desktop */}
      <div className="w-full md:w-[45%]">
        <div className="md:sticky md:top-24">
          {/* Name */}
          <h1 className="font-serif text-2xl md:text-3xl text-near-black">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mt-2 flex items-center gap-3">
            <span className="font-sans text-lg text-near-black">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice != null &&
              product.compareAtPrice > product.price && (
                <span className="font-sans text-sm text-charcoal/50 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
          </div>

          {/* Rating */}
          <div className="mt-3">
            <StarRating rating={product.rating} count={product.reviewCount} />
          </div>

          {/* Description */}
          <p className="mt-5 font-sans text-sm leading-relaxed text-charcoal">
            {product.description}
          </p>

          {/* Color swatches */}
          {product.colors.length > 0 && (
            <div className="mt-6">
              <ColorSwatches
                colors={product.colors}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </div>
          )}

          {/* Size selector */}
          {product.sizes.length > 0 && (
            <div className="mt-6">
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
                variants={product.variants}
                selectedColor={selectedColor}
              />
            </div>
          )}

          {/* Add to Bag */}
          <div className="mt-8">
            <AddToBagButton
              price={product.price}
              onClick={handleAddToBag}
              disabled={!canAddToBag}
            />
            {!selectedSize && (
              <p className="mt-2 font-sans text-xs text-charcoal/60 text-center">
                Please select a size
              </p>
            )}
          </div>

          {/* Accordion sections */}
          <div className="mt-8 border-t border-near-black/10">
            <Accordion title="Details & Care" defaultOpen>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-copper flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Sustainability">
              <p>{product.sustainability}</p>
            </Accordion>

            <Accordion title="Shipping & Returns">
              <div className="space-y-3">
                <p>
                  Complimentary shipping on all orders over $150. Standard
                  shipping (5-7 business days) is free. Express shipping (2-3
                  business days) is available for $12.
                </p>
                <p>
                  We accept returns and exchanges within 30 days of delivery.
                  Items must be unworn, unwashed, and in original packaging with
                  tags attached. Return shipping is complimentary for US orders.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
