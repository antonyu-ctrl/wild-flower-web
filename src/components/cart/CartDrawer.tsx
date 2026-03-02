'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { XIcon, ShoppingBagIcon } from '@/components/icons';
import CartItem from './CartItem';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, subtotal, itemCount } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDrawerOpen, closeDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[80] bg-near-black/50 transition-opacity duration-300',
          isDrawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[90] w-full max-w-md',
          'bg-cream flex flex-col',
          'transition-transform duration-300 ease-in-out',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-near-black/10 flex-shrink-0">
          <h2 className="font-serif text-lg text-near-black">Shopping Bag</h2>
          <button
            onClick={closeDrawer}
            aria-label="Close shopping bag"
            className="text-near-black hover:text-copper transition-colors duration-200 -mr-1 p-1"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBagIcon className="h-12 w-12 text-charcoal/30 mb-4" />
            <p className="font-serif text-lg text-near-black mb-2">
              Your bag is empty
            </p>
            <p className="text-sm text-charcoal mb-6">
              Discover our handcrafted collection and find something you love.
            </p>
            <Link
              href="/shop"
              onClick={closeDrawer}
              className={cn(
                'inline-block px-8 py-3',
                'bg-near-black text-cream',
                'text-xs font-sans tracking-[0.2em] uppercase',
                'hover:bg-charcoal',
                'transition-colors duration-200'
              )}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6">
              <div className="divide-y divide-near-black/10">
                {items.map((item) => (
                  <CartItem key={item.variantId} item={item} />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-near-black/10 px-6 py-5">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-charcoal uppercase tracking-wide">
                  Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </span>
                <span className="font-serif text-lg text-near-black">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="text-xs text-charcoal/60 mb-4 font-sans">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className={cn(
                    'block w-full text-center px-6 py-3',
                    'bg-near-black text-cream',
                    'text-xs font-sans tracking-[0.2em] uppercase',
                    'hover:bg-charcoal',
                    'transition-colors duration-200'
                  )}
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className={cn(
                    'block w-full text-center px-6 py-3',
                    'bg-transparent text-near-black',
                    'border border-near-black/20',
                    'text-xs font-sans tracking-[0.2em] uppercase',
                    'hover:border-near-black/40',
                    'transition-colors duration-200'
                  )}
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
