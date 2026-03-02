'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SHIPPING_METHODS, FREE_SHIPPING_THRESHOLD } from '@/lib/constants';
import { formatPrice, cn } from '@/lib/utils';

export default function CheckoutShippingPage() {
  const router = useRouter();
  const { items, subtotal, isHydrated } = useCart();
  const { email, shippingAddress, shippingMethod, setShippingMethod } = useCheckout();

  useEffect(() => {
    if (!isHydrated) return;
    if (items.length === 0) {
      router.push('/cart');
    } else if (!email) {
      router.push('/checkout/information');
    }
  }, [items.length, email, isHydrated, router]);

  const qualifiesForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/checkout/payment');
  };

  if (!isHydrated || items.length === 0 || !email) return null;

  return (
    <Container className="py-10 md:py-14">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <CheckoutSteps currentStep="shipping" />

          {/* Contact & Address Summary */}
          <div className="mt-8 border border-near-black/15 divide-y divide-near-black/15">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-charcoal/60 w-16">Contact</span>
                <span className="font-sans text-sm text-near-black">{email}</span>
              </div>
              <Button href="/checkout/information" variant="ghost" size="sm">
                Change
              </Button>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-charcoal/60 w-16">Ship to</span>
                <span className="font-sans text-sm text-near-black">
                  {shippingAddress.address1}, {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                </span>
              </div>
              <Button href="/checkout/information" variant="ghost" size="sm">
                Change
              </Button>
            </div>
          </div>

          {/* Shipping Methods */}
          <form onSubmit={handleSubmit}>
            <section className="mt-8">
              <h2 className="font-serif text-xl text-near-black">Shipping Method</h2>
              <div className="mt-4 border border-near-black/15 divide-y divide-near-black/15">
                {SHIPPING_METHODS.map((method) => {
                  const isSelected = shippingMethod.id === method.id;
                  const price = method.id === 'standard' && qualifiesForFreeShipping
                    ? 0
                    : method.price;

                  return (
                    <label
                      key={method.id}
                      className={cn(
                        'flex items-center justify-between px-4 py-4 cursor-pointer transition-colors',
                        isSelected && 'bg-copper/5',
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          'w-4 h-4 rounded-full border-2 flex items-center justify-center',
                          isSelected ? 'border-copper' : 'border-near-black/20',
                        )}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-copper" />}
                        </div>
                        <div>
                          <span className="font-sans text-sm text-near-black">{method.name}</span>
                          <span className="ml-2 font-sans text-xs text-charcoal/60">{method.description}</span>
                        </div>
                      </div>
                      <span className="font-sans text-sm text-near-black">
                        {price === 0 ? 'Free' : formatPrice(price)}
                      </span>
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={isSelected}
                        onChange={() => setShippingMethod(method)}
                        className="sr-only"
                      />
                    </label>
                  );
                })}
              </div>
            </section>

            <div className="mt-8 flex items-center justify-between">
              <Button href="/checkout/information" variant="ghost" size="sm">
                Return to information
              </Button>
              <Button type="submit" variant="primary" size="lg">
                Continue to Payment
              </Button>
            </div>
          </form>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
}
