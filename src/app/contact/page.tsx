'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 transition-colors duration-200 focus:border-copper focus:outline-none focus:ring-0';

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="max-w-3xl mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Contact Us
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          We&apos;d love to hear from you. Whether you have a question about
          sizing, an order, or just want to say hello — we respond to every
          message within 24 hours.
        </p>
      </div>

      <div className="max-w-3xl grid md:grid-cols-5 gap-10 md:gap-14 pb-12">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              Email
            </h3>
            <a
              href="mailto:hello@wildflower.com"
              className="font-sans text-sm text-near-black hover:text-copper transition-colors duration-200"
            >
              hello@wildflower.com
            </a>
          </div>
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              Hours
            </h3>
            <p className="font-sans text-sm text-near-black">
              Monday – Friday
              <br />
              9:00 AM – 5:00 PM PST
            </p>
          </div>
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              Atelier
            </h3>
            <p className="font-sans text-sm text-near-black">
              Wild Flower Studio
              <br />
              Arts District
              <br />
              Los Angeles, CA
            </p>
            <p className="mt-2 font-sans text-xs text-charcoal/60">
              Visits by appointment only
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="border border-near-black/15 p-8 text-center">
              <h2 className="font-serif text-xl text-near-black mb-2">
                Message Sent
              </h2>
              <p className="font-sans text-sm text-charcoal">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  Subject
                </label>
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Order Inquiry</option>
                  <option>Sizing Help</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we help?"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
