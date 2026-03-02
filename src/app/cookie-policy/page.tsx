import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Cookie Policy — Wild Flower',
  description: 'Wild Flower cookie policy — how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Cookie Policy' }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          Cookie Policy
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          Last updated: March 1, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              What Are Cookies?
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                Cookies are small text files that are stored on your device when
                you visit a website. They help the website remember your
                preferences and improve your browsing experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              How We Use Cookies
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>We use the following types of cookies:</p>
            </div>
            <div className="mt-4 border border-near-black/15 divide-y divide-near-black/15">
              {[
                {
                  type: 'Essential',
                  purpose: 'Required for the website to function. These enable core features like shopping cart, checkout, and account access.',
                  duration: 'Session / 1 year',
                },
                {
                  type: 'Functional',
                  purpose: 'Remember your preferences such as language, currency, and recently viewed products.',
                  duration: '1 year',
                },
                {
                  type: 'Analytics',
                  purpose: 'Help us understand how visitors interact with our website so we can improve the experience.',
                  duration: '2 years',
                },
                {
                  type: 'Marketing',
                  purpose: 'Used to show you relevant ads and measure the effectiveness of our marketing campaigns.',
                  duration: '90 days',
                },
              ].map((cookie) => (
                <div key={cookie.type} className="px-4 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-sm text-near-black font-medium">
                      {cookie.type}
                    </span>
                    <span className="font-sans text-xs text-charcoal/60">
                      {cookie.duration}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    {cookie.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Third-Party Cookies
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                Some cookies are set by third-party services that appear on our
                pages. We use services like analytics platforms and payment
                processors that may set their own cookies. We do not control
                these cookies — please refer to the respective third-party
                privacy policies for more information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Managing Cookies
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                You can control and manage cookies through your browser
                settings. Most browsers allow you to refuse or delete cookies.
                Please note that disabling essential cookies may affect the
                functionality of our website, including the ability to add items
                to your cart or complete checkout.
              </p>
              <p>
                To learn more about cookies and how to manage them, visit{' '}
                <span className="text-near-black">aboutcookies.org</span>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Updates to This Policy
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>
                We may update this cookie policy from time to time to reflect
                changes in technology or regulation. Any updates will be posted
                on this page with a revised date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              Contact
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              If you have questions about our use of cookies, contact us at{' '}
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
