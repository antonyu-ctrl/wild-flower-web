'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from '@/components/icons';

const steps = [
  { key: 'information', label: 'Information', href: '/checkout/information' },
  { key: 'shipping', label: 'Shipping', href: '/checkout/shipping' },
  { key: 'payment', label: 'Payment', href: '/checkout/payment' },
] as const;

interface CheckoutStepsProps {
  currentStep: 'information' | 'shipping' | 'payment';
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <nav aria-label="Checkout progress" className="flex items-center gap-1 md:gap-2">
      <Link
        href="/cart"
        className="font-sans text-xs md:text-sm text-charcoal/60 hover:text-copper transition-colors"
      >
        Cart
      </Link>
      {steps.map((step, index) => {
        const isActive = step.key === currentStep;
        const isCompleted = index < currentIndex;

        return (
          <div key={step.key} className="flex items-center gap-1 md:gap-2">
            <ChevronRightIcon className="h-3 w-3 text-charcoal/30" />
            {isCompleted ? (
              <Link
                href={step.href}
                className="font-sans text-xs md:text-sm text-charcoal/60 hover:text-copper transition-colors"
              >
                {step.label}
              </Link>
            ) : (
              <span
                className={cn(
                  'font-sans text-xs md:text-sm',
                  isActive ? 'text-near-black font-medium' : 'text-charcoal/30',
                )}
              >
                {step.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
