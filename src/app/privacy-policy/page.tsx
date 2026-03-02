import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy — Wild Flower',
  description: 'Wild Flower privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          Privacy Policy
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          Last updated: March 1, 2026
        </p>

        <div className="prose-wf space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Information We Collect
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                When you visit our website or make a purchase, we collect
                certain information to process your order and improve your
                shopping experience. This includes:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Contact information (name, email address, shipping address)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Payment information (processed securely through our payment provider)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Browsing data (pages visited, products viewed, device information)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Communication preferences and newsletter subscriptions
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              How We Use Your Information
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>We use the information we collect to:</p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Process and fulfill your orders
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Send order confirmations and shipping updates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Respond to your questions and support requests
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Send marketing communications (only with your consent)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Improve our website, products, and services
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Data Protection
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                We implement industry-standard security measures to protect your
                personal information. Payment data is encrypted and processed
                through PCI-compliant payment providers — we never store your
                full credit card details on our servers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Sharing Your Information
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                We never sell your personal information. We share data only with
                trusted service providers who help us operate our business
                (payment processors, shipping carriers, email service
                providers), and only to the extent necessary to provide our
                services to you.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Your Rights
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>You have the right to:</p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Access the personal data we hold about you
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Request correction of inaccurate information
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Request deletion of your personal data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  Opt out of marketing communications at any time
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hello@wildflower.com" className="text-copper hover:underline">
                  hello@wildflower.com
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Contact Us
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              If you have questions about this privacy policy or how we handle
              your data, please contact us at{' '}
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
