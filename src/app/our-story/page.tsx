'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function OurStoryPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.nav.ourStory }]} />

      {/* Hero */}
      <div className="mt-2 mb-12 md:mb-16 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-5xl text-near-black leading-tight">
          {t.pages.ourStory.heroTitle1}
          <br />
          {t.pages.ourStory.heroTitle2}
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-charcoal">
          {t.pages.ourStory.heroText}
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
          <Image
            src="/products/Looking_at_the_camera_2k_delpmaspu.png"
            alt="Wild Flower artisan at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-near-black mb-4">
            {t.pages.ourStory.atelierTitle}
          </h2>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-charcoal">
            <p>{t.pages.ourStory.atelierText1}</p>
            <p>{t.pages.ourStory.atelierText2}</p>
            <p>{t.pages.ourStory.atelierText3}</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="border-t border-near-black/10 pt-12 md:pt-16 mb-16 md:mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-near-black text-center mb-10 md:mb-14">
          {t.pages.ourStory.valuesTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {[
            { title: t.pages.ourStory.value1Title, text: t.pages.ourStory.value1Text },
            { title: t.pages.ourStory.value2Title, text: t.pages.ourStory.value2Text },
            { title: t.pages.ourStory.value3Title, text: t.pages.ourStory.value3Text },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="font-serif text-lg text-near-black mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-charcoal">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-cream-dark py-12 md:py-16 px-6 md:px-12 text-center mb-16 md:mb-20">
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-serif text-xl md:text-2xl text-near-black italic leading-relaxed">
            &ldquo;{t.pages.ourStory.quote}&rdquo;
          </p>
          <footer className="mt-6 font-sans text-xs uppercase tracking-widest text-charcoal">
            {t.pages.ourStory.quoteAuthor}
          </footer>
        </blockquote>
      </div>

      {/* CTA */}
      <div className="text-center pb-12 md:pb-16">
        <h2 className="font-serif text-2xl text-near-black mb-3">
          {t.pages.ourStory.ctaTitle}
        </h2>
        <p className="font-sans text-sm text-charcoal mb-6">
          {t.pages.ourStory.ctaText}
        </p>
        <Button href="/shop" variant="primary" size="lg">
          {t.pages.ourStory.ctaButton}
        </Button>
      </div>
    </Container>
  );
}
