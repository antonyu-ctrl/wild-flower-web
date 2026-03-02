'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const giftCardAmounts = [
  { value: 5000, label: '$50' },
  { value: 10000, label: '$100' },
  { value: 15000, label: '$150' },
  { value: 25000, label: '$250' },
];

export default function GiftCardsPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.giftCards.title }]} />

      <div className="max-w-2xl mx-auto text-center mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          {t.pages.giftCards.title}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          {t.pages.giftCards.description}
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {giftCardAmounts.map((card) => (
            <div
              key={card.value}
              className="border border-near-black/15 p-6 text-center hover:border-copper transition-colors duration-200 cursor-pointer"
            >
              <span className="font-serif text-2xl text-near-black">
                {card.label}
              </span>
              <p className="mt-1 font-sans text-xs text-charcoal/60">
                {t.pages.giftCards.giftCard}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-near-black/15 p-6 md:p-8 space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              {t.pages.giftCards.recipientEmail}
            </label>
            <input
              type="email"
              placeholder={t.pages.giftCards.recipientPlaceholder}
              className="w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 focus:border-copper focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              {t.pages.giftCards.personalMessage}
            </label>
            <textarea
              rows={3}
              placeholder={t.pages.giftCards.messagePlaceholder}
              className="w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 focus:border-copper focus:outline-none focus:ring-0 resize-none"
            />
          </div>
          <Button variant="primary" size="lg" fullWidth disabled>
            {t.pages.giftCards.comingSoon}
          </Button>
          <p className="font-sans text-xs text-charcoal/60 text-center">
            {t.pages.giftCards.comingSoonText}
          </p>
        </div>
      </div>
    </Container>
  );
}
