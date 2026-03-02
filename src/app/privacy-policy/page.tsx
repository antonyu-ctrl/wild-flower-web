'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.privacyPolicy.title }]} />

      <div className="max-w-3xl mt-2 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black mb-2">
          {t.pages.privacyPolicy.title}
        </h1>
        <p className="font-sans text-xs text-charcoal/60 mb-10">
          {t.pages.privacyPolicy.lastUpdated}
        </p>

        <div className="prose-wf space-y-8">
          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.infoCollectTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.privacyPolicy.infoCollectIntro}</p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.infoCollect1}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.infoCollect2}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.infoCollect3}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.infoCollect4}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.howWeUseTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.privacyPolicy.howWeUseIntro}</p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.howWeUse1}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.howWeUse2}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.howWeUse3}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.howWeUse4}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.howWeUse5}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.dataProtectionTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.privacyPolicy.dataProtectionText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.sharingTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.privacyPolicy.sharingText}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.yourRightsTitle}
            </h2>
            <div className="space-y-3 font-sans text-sm leading-relaxed text-charcoal">
              <p>{t.pages.privacyPolicy.yourRightsIntro}</p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.yourRights1}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.yourRights2}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.yourRights3}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-copper mt-1">—</span>
                  {t.pages.privacyPolicy.yourRights4}
                </li>
              </ul>
              <p>
                {t.pages.privacyPolicy.yourRightsContact}{' '}
                <a href="mailto:hello@wildflower.com" className="text-copper hover:underline">
                  hello@wildflower.com
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-near-black mb-3">
              {t.pages.privacyPolicy.contactTitle}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal">
              {t.pages.privacyPolicy.contactText}{' '}
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
