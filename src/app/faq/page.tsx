'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 5–7 business days within the US. Express shipping arrives in 2–3 business days, and overnight shipping delivers by the next business day. International shipping times vary by destination.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders over $150 within the United States.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. You\'ll receive a tracking number via email as soon as your order ships. You can use it to follow your package every step of the way.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to select countries worldwide. International shipping rates are calculated at checkout based on your destination and package weight.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery for a full refund or exchange. Items must be unworn, unwashed, and in their original packaging with all tags attached.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email us at hello@wildflower.com with your order number and reason for return. We\'ll send you a prepaid return label within 24 hours.',
      },
      {
        q: 'Can I exchange for a different size?',
        a: 'Yes! We offer free exchanges within 30 days of delivery, subject to availability. Contact us and we\'ll arrange everything for you.',
      },
    ],
  },
  {
    category: 'Products & Care',
    questions: [
      {
        q: 'Are your products really handmade?',
        a: 'Yes, every Wild Flower piece is cut, sewn, and finished by hand in our Los Angeles atelier. Our artisans bring decades of experience in traditional craft techniques.',
      },
      {
        q: 'How should I care for my linen garments?',
        a: 'Machine wash cold on a gentle cycle and hang dry for best results. Linen naturally softens with every wash and develops a beautiful lived-in character over time. Avoid bleach and tumble drying on high heat.',
      },
      {
        q: 'Are your materials sustainably sourced?',
        a: 'We carefully source all our materials from ethical suppliers. Our linen comes from European flax farms, our cotton is GOTS-certified organic, and our leather is vegetable-tanned using traditional methods without harmful chemicals.',
      },
      {
        q: 'What does "vegetable-tanned leather" mean?',
        a: 'Vegetable tanning is a centuries-old method that uses natural tannins from bark and plants instead of chromium or other heavy metals. The resulting leather is more natural, develops a beautiful patina over time, and is far more environmentally friendly.',
      },
    ],
  },
  {
    category: 'General',
    questions: [
      {
        q: 'Do you have a physical store?',
        a: 'We\'re currently online only, but we occasionally host pop-up events and trunk shows in Los Angeles and beyond. Subscribe to our newsletter to be the first to hear about upcoming events.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Gift cards are coming soon! Sign up for our newsletter to be notified when they become available.',
      },
      {
        q: 'How can I contact you?',
        a: 'You can reach us at hello@wildflower.com or through our contact page. We respond to all inquiries within 24 hours during business days.',
      },
    ],
  },
];

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
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <div className="max-w-3xl mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          Everything you need to know about shopping with Wild Flower. Can&apos;t
          find what you&apos;re looking for?{' '}
          <a href="/contact" className="text-copper hover:underline">
            Get in touch
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
