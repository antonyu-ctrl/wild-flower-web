'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FlowerIcon } from '@/components/icons';
import { useLanguage } from '@/context/LanguageContext';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <section className="bg-charcoal py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          {/* Icon */}
          <FlowerIcon className="mx-auto h-12 w-auto text-copper" />

          {/* Heading */}
          <h2 className="mt-6 font-serif text-2xl md:text-3xl text-white">
            {t.sections.newsletterHeading}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
            {t.sections.newsletterSubtitle}
          </p>

          {/* Form */}
          {submitted ? (
            <p className="mt-8 font-sans text-sm text-copper">
              {t.sections.newsletterSuccess}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder={t.sections.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white px-4 py-3 font-sans text-sm text-near-black placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:ring-offset-charcoal"
                aria-label={t.footer.emailAriaLabel}
              />
              <Button type="submit" variant="primary" size="md">
                {t.sections.newsletterButton}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
