'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { FREE_SHIPPING_THRESHOLD } from '@/lib/constants';
import { MinusIcon, PlusIcon, TrashIcon, ArrowRightIcon } from '@/components/icons';

export default function CartPage() {
  const { items, subtotal, itemCount, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-near-black">
            Your Bag is Empty
          </h1>
          <p className="mt-4 font-sans text-sm text-charcoal">
            Looks like you haven&apos;t added anything to your bag yet. Explore our collections to find something you love.
          </p>
          <div className="mt-8">
            <Button href="/shop" variant="primary" size="lg">
              Continue Shopping
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  const shippingMessage = subtotal >= FREE_SHIPPING_THRESHOLD
    ? 'You qualify for free standard shipping!'
    : `Add ${formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping`;

  return (
    <Container className="py-10 md:py-14 lg:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-near-black">
        Your Bag
      </h1>
      <p className="mt-1 font-sans text-sm text-charcoal">
        {itemCount} {itemCount === 1 ? 'item' : 'items'}
      </p>

      <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-7">
          {/* Free shipping bar */}
          <div className="mb-6 p-3 bg-sage/10 border border-sage/20">
            <p className="font-sans text-xs text-sage text-center tracking-wide">
              {shippingMessage}
            </p>
          </div>

          <div className="divide-y divide-near-black/10">
            {items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              const color = product?.colors.find((c) => c.slug === item.colorSlug);
              if (!product) return null;
              const image = product.images[0];

              return (
                <div key={item.variantId} className="flex gap-4 md:gap-6 py-6 first:pt-0">
                  {/* Image */}
                  <Link
                    href={`/shop/${product.category}/${product.slug}`}
                    className="flex-shrink-0 w-24 h-32 md:w-28 md:h-36 relative bg-cream-dark overflow-hidden"
                  >
                    {image && (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 112px"
                      />
                    )}
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/shop/${product.category}/${product.slug}`}
                          className="font-serif text-base md:text-lg text-near-black hover:text-copper transition-colors duration-200"
                        >
                          {product.name}
                        </Link>
                        <div className="mt-1 font-sans text-xs text-charcoal space-x-2">
                          {color && <span>{color.name}</span>}
                          <span className="text-charcoal/30">/</span>
                          <span>Size {item.size}</span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-charcoal/60">
                          {product.material}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.variantId)}
                        aria-label={`Remove ${product.name}`}
                        className="flex-shrink-0 p-1.5 text-charcoal/40 hover:text-copper transition-colors duration-200"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-near-black/15">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex items-center justify-center w-8 h-8 text-charcoal hover:text-near-black transition-colors"
                        >
                          <MinusIcon className="h-3 w-3" />
                        </button>
                        <span className="flex items-center justify-center w-10 h-8 text-sm font-sans text-near-black border-x border-near-black/15">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex items-center justify-center w-8 h-8 text-charcoal hover:text-near-black transition-colors"
                        >
                          <PlusIcon className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm md:text-base text-near-black">
                        {formatPrice(item.priceAtAdd * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clear cart */}
          <div className="mt-4 pt-4 border-t border-near-black/10">
            <button
              onClick={clearCart}
              className="font-sans text-xs text-charcoal/50 hover:text-copper transition-colors duration-200 tracking-wide uppercase"
            >
              Clear Bag
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <div className="lg:sticky lg:top-24 bg-cream-dark p-6 md:p-8">
            <h2 className="font-serif text-xl text-near-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between font-sans text-sm">
                <span className="text-charcoal">Subtotal</span>
                <span className="text-near-black">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-sans text-sm">
                <span className="text-charcoal">Shipping</span>
                <span className="text-charcoal/60 text-xs">Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-sans text-sm">
                <span className="text-charcoal">Tax</span>
                <span className="text-charcoal/60 text-xs">Calculated at checkout</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-near-black/10 flex justify-between">
              <span className="font-serif text-lg text-near-black">Estimated Total</span>
              <span className="font-serif text-lg text-near-black">{formatPrice(subtotal)}</span>
            </div>

            <div className="mt-6">
              <Button href="/checkout/information" variant="primary" fullWidth size="lg">
                <span>Proceed to Checkout</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4">
              <Button href="/shop" variant="ghost" fullWidth size="sm">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
