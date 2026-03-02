'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { getProductName, getColorName } from '@/i18n/helpers';
import { products } from '@/data/products';
import { MinusIcon, PlusIcon, TrashIcon } from '@/components/icons';
import type { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { t } = useLanguage();

  const product = products.find((p) => p.id === item.productId);
  const color = product?.colors.find((c) => c.slug === item.colorSlug);

  if (!product) return null;

  const image = product.images[0];
  const translatedName = getProductName(t, product);
  const translatedColor = color ? getColorName(t, color.slug, color.name) : '';

  return (
    <div className="flex gap-4 py-4">
      {/* Thumbnail */}
      <Link
        href={`/shop/${product.slug}`}
        className="flex-shrink-0 w-20 h-24 relative bg-cream-dark overflow-hidden"
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="w-full h-full bg-cream-dark" />
        )}
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/shop/${product.slug}`}
              className="font-serif text-sm text-near-black hover:text-copper transition-colors duration-200 line-clamp-1"
            >
              {translatedName}
            </Link>
            <div className="mt-1 flex items-center gap-2 text-xs text-charcoal font-sans">
              {translatedColor && <span>{translatedColor}</span>}
              {translatedColor && <span className="text-charcoal/30">/</span>}
              <span>{item.size}</span>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item.variantId)}
            aria-label={`${t.cart.remove} ${translatedName}`}
            className="flex-shrink-0 p-1 text-charcoal/50 hover:text-copper transition-colors duration-200"
          >
            <TrashIcon className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Quantity & Price */}
        <div className="mt-3 flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center border border-near-black/15">
            <button
              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
              aria-label={t.cart.decreaseQuantity}
              className={cn(
                'flex items-center justify-center w-7 h-7',
                'text-charcoal hover:text-near-black',
                'transition-colors duration-150'
              )}
            >
              <MinusIcon className="h-3 w-3" />
            </button>
            <span className="flex items-center justify-center w-8 h-7 text-xs font-sans text-near-black border-x border-near-black/15">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
              aria-label={t.cart.increaseQuantity}
              className={cn(
                'flex items-center justify-center w-7 h-7',
                'text-charcoal hover:text-near-black',
                'transition-colors duration-150'
              )}
            >
              <PlusIcon className="h-3 w-3" />
            </button>
          </div>

          {/* Price */}
          <span className="font-sans text-sm text-near-black">
            {formatPrice(item.priceAtAdd * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
