'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { useLanguage } from '@/context/LanguageContext';

export default function ShippingReturnsPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.shippingReturns.title }]} />

      <div className="max-w-3xl mt-2 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          {t.pages.shippingReturns.title}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          {t.pages.shippingReturns.intro}
        </p>
      </div>

      <div className="max-w-3xl space-y-12 pb-12">
        {/* Shipping */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">{t.pages.shippingReturns.shippingTitle}</h2>
          <div className="border border-near-black/15 divide-y divide-near-black/15">
            <div className="grid grid-cols-3 px-4 py-3 bg-cream-dark">
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">{t.pages.shippingReturns.methodHeader}</span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">{t.pages.shippingReturns.deliveryHeader}</span>
              <span className="font-sans text-xs uppercase tracking-widest text-charcoal">{t.pages.shippingReturns.costHeader}</span>
            </div>
            {[
              { method: t.pages.shippingReturns.standard, delivery: t.pages.shippingReturns.standardDelivery, cost: t.pages.shippingReturns.standardCost },
              { method: t.pages.shippingReturns.express, delivery: t.pages.shippingReturns.expressDelivery, cost: t.pages.shippingReturns.expressCost },
              { method: t.pages.shippingReturns.overnight, delivery: t.pages.shippingReturns.overnightDelivery, cost: t.pages.shippingReturns.overnightCost },
            ].map((row) => (
              <div key={row.method} className="grid grid-cols-3 px-4 py-3">
                <span className="font-sans text-sm text-near-black">{row.method}</span>
                <span className="font-sans text-sm text-charcoal">{row.delivery}</span>
                <span className="font-sans text-sm text-near-black">{row.cost}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>{t.pages.shippingReturns.freeShippingNote}</p>
            <p>{t.pages.shippingReturns.processingNote}</p>
            <p>{t.pages.shippingReturns.internationalNote}</p>
          </div>
        </section>

        {/* Returns */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">{t.pages.shippingReturns.returnsTitle}</h2>
          <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>
              {t.pages.shippingReturns.returnsText1}<strong className="text-near-black">{t.pages.shippingReturns.returnsText1Bold}</strong>{t.pages.shippingReturns.returnsText1End}
            </p>
            <p>
              {t.pages.shippingReturns.returnsText2Start}{' '}
              <a href="mailto:hello@wildflower.com" className="text-copper hover:underline">
                hello@wildflower.com
              </a>{' '}
              {t.pages.shippingReturns.returnsText2End}
            </p>
            <p>{t.pages.shippingReturns.returnsText3}</p>
          </div>
        </section>

        {/* Exchanges */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">{t.pages.shippingReturns.exchangesTitle}</h2>
          <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
            <p>{t.pages.shippingReturns.exchangesText1}</p>
            <p>{t.pages.shippingReturns.exchangesText2}</p>
          </div>
        </section>

        {/* Non-returnable */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">
            {t.pages.shippingReturns.nonReturnableTitle}
          </h2>
          <ul className="space-y-2 font-sans text-sm leading-relaxed text-charcoal">
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              {t.pages.shippingReturns.nonReturnable1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              {t.pages.shippingReturns.nonReturnable2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-copper mt-1">—</span>
              {t.pages.shippingReturns.nonReturnable3}
            </li>
          </ul>
        </section>

        <div className="border-t border-near-black/10 pt-8">
          <p className="font-sans text-sm text-charcoal">
            {t.pages.shippingReturns.questionsText}{' '}
            <a href="/contact" className="text-copper hover:underline">
              {t.pages.shippingReturns.questionsLink}
            </a>
            {t.pages.shippingReturns.questionsEnd}
          </p>
        </div>
      </div>
    </Container>
  );
}
