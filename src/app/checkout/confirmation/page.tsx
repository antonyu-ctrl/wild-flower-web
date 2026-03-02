'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/context/CheckoutContext';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CheckIcon } from '@/components/icons';

export default function CheckoutConfirmationPage() {
  const router = useRouter();
  const { orderNumber, email, shippingAddress, shippingMethod, reset } = useCheckout();

  useEffect(() => {
    if (!orderNumber) {
      router.push('/shop');
    }
  }, [orderNumber, router]);

  const handleContinueShopping = () => {
    reset();
    router.push('/shop');
  };

  if (!orderNumber) return null;

  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-sage flex items-center justify-center">
            <CheckIcon className="h-8 w-8 text-sage" />
          </div>
        </div>

        <h1 className="mt-6 font-serif text-3xl md:text-4xl text-near-black">
          Thank You!
        </h1>
        <p className="mt-2 font-sans text-sm text-charcoal">
          Your order has been placed successfully.
        </p>

        {/* Order Details Card */}
        <div className="mt-8 border border-near-black/15 text-left">
          <div className="px-6 py-4 bg-cream-dark border-b border-near-black/10">
            <p className="font-sans text-xs text-charcoal/60 uppercase tracking-wide">
              Order Number
            </p>
            <p className="mt-1 font-serif text-xl text-near-black">
              {orderNumber}
            </p>
          </div>

          <div className="px-6 py-4 space-y-4">
            <div>
              <p className="font-sans text-xs text-charcoal/60 uppercase tracking-wide">
                Confirmation will be sent to
              </p>
              <p className="mt-1 font-sans text-sm text-near-black">{email}</p>
            </div>

            <div className="border-t border-near-black/10 pt-4">
              <p className="font-sans text-xs text-charcoal/60 uppercase tracking-wide">
                Shipping Address
              </p>
              <p className="mt-1 font-sans text-sm text-near-black">
                {shippingAddress.firstName} {shippingAddress.lastName}
              </p>
              <p className="font-sans text-sm text-charcoal">
                {shippingAddress.address1}
                {shippingAddress.address2 && `, ${shippingAddress.address2}`}
              </p>
              <p className="font-sans text-sm text-charcoal">
                {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
              </p>
            </div>

            <div className="border-t border-near-black/10 pt-4">
              <p className="font-sans text-xs text-charcoal/60 uppercase tracking-wide">
                Shipping Method
              </p>
              <p className="mt-1 font-sans text-sm text-near-black">
                {shippingMethod.name} — {shippingMethod.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={handleContinueShopping} variant="primary" size="lg">
            Continue Shopping
          </Button>
        </div>

        <p className="mt-8 font-sans text-xs text-charcoal/40">
          Need help? Contact us at hello@wildflower.com
        </p>
      </div>
    </Container>
  );
}
