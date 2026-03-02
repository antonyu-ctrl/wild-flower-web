import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Shipping & Returns — Wild Flower',
  description:
    'Free shipping on orders over $150. Easy 30-day returns on all Wild Flower products.',
};

export default function ShippingReturnsPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Shipping & Returns' }]} />

      <div className="max-w-3xl mt-2 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Shipping & Returns
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          We want you to love your Wild Flower purchase. Here&apos;s everything
          you need to know about getting your order to you — and what to do if
          it&apos;s not quite right.
        </p>
      </div>

      <div className="max-w-3xl space-y-12 pb-12">
        {/* Shipping */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">Shipping</h2>
          <div className="border border-near-black/15 divide-y divide-near-black/15">
            <div className="grid grid-cols-3 px-4 py-3 bg-cream-dark">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">Method</span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">Delivery</span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">Cost</span>
            </div>
            {[
              { method: 'Standard Shipping', delivery: '5–7 business days', cost: '$8.00' },
              { method: 'Express Shipping', delivery: '2–3 business days', cost: '$15.00' },
              { method: 'Overnight Shipping', delivery: '1 business day', cost: '$25.00' },
            ].map((row) => (
              <div key={row.method} className="grid grid-cols-3 px-4 py-3">
                <span className="font-sans text-sm text-near-black">{row.method}</span>
                <span className="font-sans text-sm text-charcoal">{row.delivery}</span>
                <span className="font-sans text-sm text-near-black">{row.cost}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>
              <strong className="text-near-black">Free shipping</strong> on all
              orders over $150 (standard shipping within the US).
            </p>
            <p>
              Orders are processed within 1–2 business days. You&apos;ll receive a
              tracking number via email once your order ships.
            </p>
            <p>
              International shipping is available to select countries. Rates are
              calculated at checkout based on destination and package weight.
            </p>
          </div>
        </section>

        {/* Returns */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">Returns</h2>
          <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>
              We accept returns within <strong className="text-near-black">30 days</strong> of
              delivery for a full refund or exchange. Items must be unworn,
              unwashed, and in their original packaging with all tags attached.
            </p>
            <p>
              To initiate a return, email us at{' '}
              <a href="mailto:hello@wildflower.com" className="text-copper hover:underline">
                hello@wildflower.com
              </a>{' '}
              with your order number and reason for return. We&apos;ll send you a
              prepaid return label within 24 hours.
            </p>
            <p>
              Refunds are processed within 5–7 business days of receiving the
              returned item. The original shipping cost is non-refundable unless
              the return is due to a defect or error on our part.
            </p>
          </div>
        </section>

        {/* Exchanges */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">Exchanges</h2>
          <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>
              Need a different size or color? We&apos;re happy to exchange your
              item. Contact us within 30 days of delivery and we&apos;ll arrange a
              free exchange, subject to availability.
            </p>
            <p>
              Exchange shipments are sent via standard shipping at no additional
              cost.
            </p>
          </div>
        </section>

        {/* Non-returnable */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">
            Non-Returnable Items
          </h2>
          <ul className="space-y-2 font-sans text-sm leading-relaxed text-charcoal">
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              Gift cards
            </li>
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              Items marked as final sale
            </li>
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              Items that have been altered, worn, or washed
            </li>
          </ul>
        </section>

        <div className="border-t border-near-black/10 pt-8">
          <p className="font-sans text-sm text-charcoal">
            Questions about your order?{' '}
            <a href="/contact" className="text-copper hover:underline">
              Contact us
            </a>{' '}
            — we&apos;re here to help.
          </p>
        </div>
      </div>
    </Container>
  );
}
