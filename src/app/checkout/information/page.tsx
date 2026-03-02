'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function CheckoutInformationPage() {
  const router = useRouter();
  const { items, isHydrated } = useCart();
  const {
    email,
    shippingAddress,
    setEmail,
    setShippingAddress,
  } = useCheckout();

  const [form, setForm] = useState({
    email: email,
    firstName: shippingAddress.firstName,
    lastName: shippingAddress.lastName,
    address1: shippingAddress.address1,
    address2: shippingAddress.address2 || '',
    city: shippingAddress.city,
    state: shippingAddress.state,
    zipCode: shippingAddress.zipCode,
    phone: shippingAddress.phone,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isHydrated) return;
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items.length, isHydrated, router]);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
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
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.address1.trim()) newErrors.address1 = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.state.trim()) newErrors.state = 'State is required';
    if (!form.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setEmail(form.email);
    setShippingAddress({
      firstName: form.firstName,
      lastName: form.lastName,
      address1: form.address1,
      address2: form.address2,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
      country: 'US',
      phone: form.phone,
    });
    router.push('/checkout/shipping');
  };

  const inputClass = (field: string) =>
    `w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border px-3 py-3 transition-colors duration-200 focus:border-copper focus:outline-none focus:ring-0 ${
      errors[field] ? 'border-terracotta' : 'border-near-black/20'
    }`;

  if (!isHydrated || items.length === 0) return null;

  return (
    <Container className="py-10 md:py-14">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Form column */}
        <div className="lg:col-span-7">
          <CheckoutSteps currentStep="information" />

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Contact */}
            <section>
              <h2 className="font-serif text-xl text-near-black">Contact</h2>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={inputClass('email')}
                />
                {errors.email && <p className="mt-1 font-sans text-xs text-terracotta">{errors.email}</p>}
              </div>
            </section>

            {/* Shipping Address */}
            <section className="mt-8">
              <h2 className="font-serif text-xl text-near-black">Shipping Address</h2>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className={inputClass('firstName')}
                    />
                    {errors.firstName && <p className="mt-1 font-sans text-xs text-terracotta">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className={inputClass('lastName')}
                    />
                    {errors.lastName && <p className="mt-1 font-sans text-xs text-terracotta">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={form.address1}
                    onChange={(e) => updateField('address1', e.target.value)}
                    className={inputClass('address1')}
                  />
                  {errors.address1 && <p className="mt-1 font-sans text-xs text-terracotta">{errors.address1}</p>}
                </div>

                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={form.address2}
                  onChange={(e) => updateField('address2', e.target.value)}
                  className={inputClass('address2')}
                />

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      value={form.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className={inputClass('city')}
                    />
                    {errors.city && <p className="mt-1 font-sans text-xs text-terracotta">{errors.city}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      value={form.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className={inputClass('state')}
                    />
                    {errors.state && <p className="mt-1 font-sans text-xs text-terracotta">{errors.state}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="ZIP code"
                      value={form.zipCode}
                      onChange={(e) => updateField('zipCode', e.target.value)}
                      className={inputClass('zipCode')}
                    />
                    {errors.zipCode && <p className="mt-1 font-sans text-xs text-terracotta">{errors.zipCode}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="mt-1 font-sans text-xs text-terracotta">{errors.phone}</p>}
                </div>
              </div>
            </section>

            <div className="mt-8 flex items-center justify-between">
              <Button href="/cart" variant="ghost" size="sm">
                Return to cart
              </Button>
              <Button type="submit" variant="primary" size="lg">
                Continue to Shipping
              </Button>
            </div>
          </form>
        </div>

        {/* Order summary column */}
        <div className="hidden lg:block lg:col-span-5">
          <OrderSummary />
        </div>
      </div>
    </Container>
  );
}
