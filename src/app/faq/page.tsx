'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-near-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-sm text-near-black pr-4 group-hover:text-copper transition-colors duration-200">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className={cn(
            'h-4 w-4 text-charcoal/60 flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <p className="font-sans text-sm leading-relaxed text-charcoal pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const { t } = useLanguage();

  const faqs = [
    {
      category: t.pages.faq.categories.ordersShipping,
      questions: [
        { q: t.pages.faq.questions.shippingTime, a: t.pages.faq.questions.shippingTimeAnswer },
        { q: t.pages.faq.questions.freeShipping, a: t.pages.faq.questions.freeShippingAnswer },
        { q: t.pages.faq.questions.trackOrder, a: t.pages.faq.questions.trackOrderAnswer },
        { q: t.pages.faq.questions.internationalShipping, a: t.pages.faq.questions.internationalShippingAnswer },
      ],
    },
    {
      category: t.pages.faq.categories.returnsExchanges,
      questions: [
        { q: t.pages.faq.questions.returnPolicy, a: t.pages.faq.questions.returnPolicyAnswer },
        { q: t.pages.faq.questions.startReturn, a: t.pages.faq.questions.startReturnAnswer },
        { q: t.pages.faq.questions.exchangeSize, a: t.pages.faq.questions.exchangeSizeAnswer },
      ],
    },
    {
      category: t.pages.faq.categories.productsCare,
      questions: [
        { q: t.pages.faq.questions.handmade, a: t.pages.faq.questions.handmadeAnswer },
        { q: t.pages.faq.questions.linenCare, a: t.pages.faq.questions.linenCareAnswer },
        { q: t.pages.faq.questions.sustainableMaterials, a: t.pages.faq.questions.sustainableMaterialsAnswer },
        { q: t.pages.faq.questions.vegetableTanned, a: t.pages.faq.questions.vegetableTannedAnswer },
      ],
    },
    {
      category: t.pages.faq.categories.general,
      questions: [
        { q: t.pages.faq.questions.physicalStore, a: t.pages.faq.questions.physicalStoreAnswer },
        { q: t.pages.faq.questions.giftCardsAvailable, a: t.pages.faq.questions.giftCardsAvailableAnswer },
        { q: t.pages.faq.questions.contactUs, a: t.pages.faq.questions.contactUsAnswer },
      ],
    },
  ];

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.footer.faq }]} />

      <div className="max-w-3xl mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          {t.pages.faq.title}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          {t.pages.faq.description}{' '}
          <a href="/contact" className="text-copper hover:underline">
            {t.pages.faq.getInTouch}
          </a>
          .
        </p>
      </div>

      <div className="max-w-3xl space-y-10 pb-12">
        {faqs.map((section) => (
          <section key={section.category}>
            <h2 className="font-serif text-xl text-near-black mb-4">
              {section.category}
            </h2>
            <div className="border-t border-near-black/10">
              {section.questions.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
