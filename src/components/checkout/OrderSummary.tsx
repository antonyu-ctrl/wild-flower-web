'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useCheckout } from '@/context/CheckoutContext';
import { products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import { FREE_SHIPPING_THRESHOLD } from '@/lib/constants';
import { ChevronDownIcon } from '@/components/icons';

export function OrderSummary() {
  const { items, subtotal, itemCount } = useCart();
  const { shippingMethod } = useCheckout();
  const [isOpen, setIsOpen] = useState(false);

  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : shippingMethod.price;
  const tax = Math.round(subtotal * 0.0825);
  const total = subtotal + shippingCost + tax;

  return (
    <div className="bg-cream-dark p-6">
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between"
      >
        <span className="font-sans text-sm text-copper">
          {isOpen ? 'Hide' : 'Show'} order summary ({itemCount} {itemCount === 1 ? 'item' : 'items'})
        </span>
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg text-near-black">{formatPrice(total)}</span>
          <ChevronDownIcon className={cn('h-4 w-4 text-copper transition-transform', isOpen && 'rotate-180')} />
        </div>
      </button>

      {/* Items list */}
      <div className={cn('lg:block', isOpen ? 'block' : 'hidden')}>
        <div className="mt-4 lg:mt-0 space-y-4">
          {items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;
            const image = product.images[0];
            const color = product.colors.find((c) => c.slug === item.colorSlug);

            return (
              <div key={item.variantId} className="flex items-center gap-3">
                <div className="relative w-14 h-14 bg-cream rounded border border-near-black/10 flex-shrink-0 overflow-hidden">
                  {image && (
                    <Image
                      src={image.src}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  )}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-charcoal text-white text-[10px] font-sans flex items-center justify-center rounded-full">
                    {item.quantity}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm text-near-black truncate">{product.name}</p>
                  <p className="font-sans text-xs text-charcoal/60">
                    {color?.name} / {item.size}
                  </p>
                </div>
                <span className="font-sans text-sm text-near-black flex-shrink-0">
                  {formatPrice(item.priceAtAdd * item.quantity)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-near-black/10 space-y-2">
          <div className="flex justify-between font-sans text-sm">
            <span className="text-charcoal">Subtotal</span>
            <span className="text-near-black">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between font-sans text-sm">
            <span className="text-charcoal">Shipping</span>
            <span className="text-near-black">
              {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between font-sans text-sm">
            <span className="text-charcoal">Tax</span>
            <span className="text-near-black">{formatPrice(tax)}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-near-black/10 flex justify-between">
          <span className="font-serif text-lg text-near-black">Total</span>
          <span className="font-serif text-lg text-near-black">{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
