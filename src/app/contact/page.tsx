'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 transition-colors duration-200 focus:border-copper focus:outline-none focus:ring-0';

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.contact.title }]} />

      <div className="max-w-3xl mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          {t.pages.contact.title}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          {t.pages.contact.description}
        </p>
      </div>

      <div className="max-w-3xl grid md:grid-cols-5 gap-10 md:gap-14 pb-12">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              {t.pages.contact.email}
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
              {t.pages.contact.hours}
            </h3>
            <p className="font-sans text-sm text-near-black">
              {t.pages.contact.hoursValue}
              <br />
              {t.pages.contact.hoursTime}
            </p>
          </div>
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              {t.pages.contact.atelier}
            </h3>
            <p className="font-sans text-sm text-near-black">
              {t.pages.contact.atelierName}
              <br />
              {t.pages.contact.atelierDistrict}
              <br />
              {t.pages.contact.atelierCity}
            </p>
            <p className="mt-2 font-sans text-xs text-charcoal/60">
              {t.pages.contact.byAppointment}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="border border-near-black/15 p-8 text-center">
              <h2 className="font-serif text-xl text-near-black mb-2">
                {t.pages.contact.messageSent}
              </h2>
              <p className="font-sans text-sm text-charcoal">
                {t.pages.contact.messageSentText}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                    {t.pages.contact.firstName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.pages.contact.firstNamePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                    {t.pages.contact.lastName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.pages.contact.lastNamePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  {t.pages.contact.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.pages.contact.emailPlaceholder}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  {t.pages.contact.subject}
                </label>
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    {t.pages.contact.subjectPlaceholder}
                  </option>
                  <option>{t.pages.contact.subjectOptions.orderInquiry}</option>
                  <option>{t.pages.contact.subjectOptions.sizingHelp}</option>
                  <option>{t.pages.contact.subjectOptions.returnsExchanges}</option>
                  <option>{t.pages.contact.subjectOptions.wholesale}</option>
                  <option>{t.pages.contact.subjectOptions.press}</option>
                  <option>{t.pages.contact.subjectOptions.other}</option>
                </select>
              </div>
              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
                  {t.pages.contact.message}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={t.pages.contact.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button type="submit" variant="primary" size="lg">
                {t.pages.contact.sendMessage}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
