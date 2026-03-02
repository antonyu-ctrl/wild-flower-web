'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { useLanguage } from '@/context/LanguageContext';

export default function CookiePolicyPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.cookiePolicy.title }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          {t.pages.cookiePolicy.title}
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          {t.pages.cookiePolicy.lastUpdated}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.cookiePolicy.whatAreTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.cookiePolicy.whatAreText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.cookiePolicy.howWeUseTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.cookiePolicy.howWeUseIntro}</p>
            </div>
            <div className="mt-4 border border-near-black/15 divide-y divide-near-black/15">
              {[
                { type: t.pages.cookiePolicy.essential, purpose: t.pages.cookiePolicy.essentialPurpose, duration: t.pages.cookiePolicy.essentialDuration },
                { type: t.pages.cookiePolicy.functional, purpose: t.pages.cookiePolicy.functionalPurpose, duration: t.pages.cookiePolicy.functionalDuration },
                { type: t.pages.cookiePolicy.analytics, purpose: t.pages.cookiePolicy.analyticsPurpose, duration: t.pages.cookiePolicy.analyticsDuration },
                { type: t.pages.cookiePolicy.marketing, purpose: t.pages.cookiePolicy.marketingPurpose, duration: t.pages.cookiePolicy.marketingDuration },
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
              {t.pages.cookiePolicy.thirdPartyTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.cookiePolicy.thirdPartyText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.cookiePolicy.managingTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.cookiePolicy.managingText1}</p>
              <p>
                {t.pages.cookiePolicy.managingText2}{' '}
                <span className="text-near-black">{t.pages.cookiePolicy.managingLink}</span>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.cookiePolicy.updatesTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.cookiePolicy.updatesText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.cookiePolicy.contactTitle}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              {t.pages.cookiePolicy.contactText}{' '}
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
