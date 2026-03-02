'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsOfServicePage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.termsOfService.title }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          {t.pages.termsOfService.title}
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          {t.pages.termsOfService.lastUpdated}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.agreementTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.agreementText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.productsTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.productsText1}</p>
              <p>{t.pages.termsOfService.productsText2}</p>
              <p>{t.pages.termsOfService.productsText3}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.ordersTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.ordersText1}</p>
              <p>{t.pages.termsOfService.ordersText2}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.ipTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.ipText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.liabilityTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.liabilityText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.governingTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.governingText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.changesTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.termsOfService.changesText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.termsOfService.contactTitle}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              {t.pages.termsOfService.contactText}{' '}
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
