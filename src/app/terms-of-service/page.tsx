import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Terms of Service — Wild Flower',
  description: 'Wild Flower terms of service — the terms and conditions governing your use of our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          Terms of Service
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          Last updated: March 1, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Agreement to Terms
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                By accessing or using the Wild Flower website
                (wildflower.com), you agree to be bound by these Terms of
                Service. If you do not agree with any part of these terms,
                please do not use our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Products & Pricing
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                All products are handmade and may feature slight variations in
                color, texture, and detail — this is a natural characteristic of
                artisan craftsmanship and not a defect.
              </p>
              <p>
                We strive to display product colors as accurately as possible,
                but monitor settings may cause slight variations. Prices are
                listed in US dollars and are subject to change without notice.
              </p>
              <p>
                We reserve the right to limit quantities, refuse orders, or
                cancel orders at our discretion, including in cases of pricing
                errors or suspected fraudulent activity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Orders & Payment
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                By placing an order, you represent that the information you
                provide is accurate and that you are authorized to use the
                payment method submitted. All payments are processed securely
                through our third-party payment provider.
              </p>
              <p>
                An order confirmation email does not constitute acceptance of
                your order. We reserve the right to cancel orders due to stock
                availability, payment issues, or other circumstances.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Intellectual Property
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                All content on this website — including text, images, logos,
                designs, and photography — is the property of Wild Flower and is
                protected by copyright and intellectual property laws. You may
                not reproduce, distribute, or use our content without prior
                written permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Limitation of Liability
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                Wild Flower shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of our website or
                purchase of our products. Our total liability shall not exceed
                the amount you paid for the product in question.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Governing Law
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                These terms are governed by and construed in accordance with the
                laws of the State of California, without regard to its conflict
                of law provisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Changes to Terms
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                We may update these terms from time to time. Changes will be
                posted on this page with an updated revision date. Your
                continued use of the website after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Contact
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              Questions about these terms? Contact us at{' '}
              <a href="mailto:hello@wildflower.com" className="text-copper hover:underline">
                hello@wildflower.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
