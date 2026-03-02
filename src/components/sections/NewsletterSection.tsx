'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FlowerIcon } from '@/components/icons';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
            Join Our Garden
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
            Receive 10% off your first order and be the first to know about new
            collections and seasonal inspirations.
          </p>

          {/* Form */}
          {submitted ? (
            <p className="mt-8 font-sans text-sm text-copper">
              Thank you for subscribing! Check your inbox for your welcome gift.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white px-4 py-3 font-sans text-sm text-near-black placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:ring-offset-charcoal"
                aria-label="Email address"
              />
              <Button type="submit" variant="primary" size="md">
                SUBSCRIBE
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
