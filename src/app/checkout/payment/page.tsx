'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { formatPrice } from '@/lib/utils';
import { FREE_SHIPPING_THRESHOLD } from '@/lib/constants';

export default function CheckoutPaymentPage() {
  const router = useRouter();
  const { items, subtotal, clearCart, isHydrated } = useCart();
  const { email, shippingAddress, shippingMethod, setOrderNumber, setStep } = useCheckout();

  const [form, setForm] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isHydrated) return;
    if (items.length === 0 && !isProcessing) {
      router.push('/cart');
    } else if (!email) {
      router.push('/checkout/information');
    }
  }, [items.length, email, isProcessing, isHydrated, router]);

  const updateField = (field: string, value: string) => {
    let formatted = value;
    if (field === 'cardNumber') {
      formatted = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    }
    if (field === 'expiry') {
      formatted = value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '$1/$2').slice(0, 5);
    }
    if (field === 'cvv') {
      formatted = value.replace(/\D/g, '').slice(0, 4);
    }
    setForm((prev) => ({ ...prev, [field]: formatted }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.cardNumber.trim() || form.cardNumber.replace(/\s/g, '').length < 16)
      newErrors.cardNumber = 'Valid card number is required';
    if (!form.cardName.trim()) newErrors.cardName = 'Name on card is required';
    if (!form.expiry.trim() || !/^\d{2}\/\d{2}$/.test(form.expiry))
      newErrors.expiry = 'Valid expiry (MM/YY) is required';
    if (!form.cvv.trim() || form.cvv.length < 3) newErrors.cvv = 'Valid CVV is required';
    return newErrors;
  };

  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : shippingMethod.price;
  const tax = Math.round(subtotal * 0.0825);
  const total = subtotal + shippingCost + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderNum = `WF-${Date.now().toString(36).toUpperCase()}`;
    setOrderNumber(orderNum);
    setStep('confirmation');
    clearCart();
    router.push('/checkout/confirmation');
  };

  const inputClass = (field: string) =>
    `w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border px-3 py-3 transition-colors duration-200 focus:border-copper focus:outline-none focus:ring-0 ${
      errors[field] ? 'border-terracotta' : 'border-near-black/20'
    }`;

  if (!isHydrated || (items.length === 0 && !isProcessing) || !email) return null;

  return (
    <Container className="py-10 md:py-14">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <CheckoutSteps currentStep="payment" />

          {/* Summary bar */}
          <div className="mt-8 border border-near-black/15 divide-y divide-near-black/15">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-charcoal/60 w-16">Contact</span>
                <span className="font-sans text-sm text-near-black">{email}</span>
              </div>
              <Button href="/checkout/information" variant="ghost" size="sm">Change</Button>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-charcoal/60 w-16">Ship to</span>
                <span className="font-sans text-sm text-near-black truncate">
                  {shippingAddress.address1}, {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                </span>
              </div>
              <Button href="/checkout/information" variant="ghost" size="sm">Change</Button>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-charcoal/60 w-16">Method</span>
                <span className="font-sans text-sm text-near-black">
                  {shippingMethod.name} · {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                </span>
              </div>
              <Button href="/checkout/shipping" variant="ghost" size="sm">Change</Button>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <h2 className="font-serif text-xl text-near-black">Payment</h2>
            <p className="mt-1 font-sans text-xs text-charcoal/60">
              All transactions are secure and encrypted. (Demo — no real payment)
            </p>

            <div className="mt-6 border border-near-black/15 p-4 md:p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-sm text-near-black font-medium">Credit Card</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-5 bg-blue-700 rounded text-white text-[8px] font-bold flex items-center justify-center">VISA</div>
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-[8px] font-bold flex items-center justify-center">MC</div>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Card number"
                  value={form.cardNumber}
                  onChange={(e) => updateField('cardNumber', e.target.value)}
                  className={inputClass('cardNumber')}
                />
                {errors.cardNumber && <p className="mt-1 font-sans text-xs text-terracotta">{errors.cardNumber}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name on card"
                  value={form.cardName}
                  onChange={(e) => updateField('cardName', e.target.value)}
                  className={inputClass('cardName')}
                />
                {errors.cardName && <p className="mt-1 font-sans text-xs text-terracotta">{errors.cardName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) => updateField('expiry', e.target.value)}
                    className={inputClass('expiry')}
                  />
                  {errors.expiry && <p className="mt-1 font-sans text-xs text-terracotta">{errors.expiry}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={(e) => updateField('cvv', e.target.value)}
                    className={inputClass('cvv')}
                  />
                  {errors.cvv && <p className="mt-1 font-sans text-xs text-terracotta">{errors.cvv}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Button href="/checkout/shipping" variant="ghost" size="sm">
                Return to shipping
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay ${formatPrice(total)}`
                )}
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
