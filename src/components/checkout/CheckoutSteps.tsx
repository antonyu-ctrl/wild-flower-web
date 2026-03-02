'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from '@/components/icons';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
  { key: 'information', i18nKey: 'information' as const, href: '/checkout/information' },
  { key: 'shipping', i18nKey: 'shipping' as const, href: '/checkout/shipping' },
  { key: 'payment', i18nKey: 'payment' as const, href: '/checkout/payment' },
] as const;

interface CheckoutStepsProps {
  currentStep: 'information' | 'shipping' | 'payment';
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const { t } = useLanguage();
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <nav aria-label="Checkout progress" className="flex items-center gap-1 md:gap-2">
      <Link
        href="/cart"
        className="font-sans text-xs md:text-sm text-charcoal/60 hover:text-copper transition-colors"
      >
        {t.cart.cart}
      </Link>
      {steps.map((step, index) => {
        const isActive = step.key === currentStep;
        const isCompleted = index < currentIndex;
        const label = (t.checkout as Record<string, string>)[step.i18nKey] ?? step.key;

        return (
          <div key={step.key} className="flex items-center gap-1 md:gap-2">
            <ChevronRightIcon className="h-3 w-3 text-charcoal/30" />
            {isCompleted ? (
              <Link
                href={step.href}
                className="font-sans text-xs md:text-sm text-charcoal/60 hover:text-copper transition-colors"
              >
                {label}
              </Link>
            ) : (
              <span
                className={cn(
                  'font-sans text-xs md:text-sm',
                  isActive ? 'text-near-black font-medium' : 'text-charcoal/30',
                )}
              >
                {label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
