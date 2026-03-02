'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/components/icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0,
  );

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  // Update height when content changes
  useEffect(() => {
    if (!isOpen) return;

    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setContentHeight(el.scrollHeight);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className={cn('border-b border-near-black/10', className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex w-full items-center justify-between py-4 text-left',
          'font-sans text-sm tracking-wide uppercase text-near-black',
          'transition-colors duration-200 hover:text-copper',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
        )}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={cn(
            'h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      <div
        style={{ height: contentHeight !== undefined ? `${contentHeight}px` : 'auto' }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={contentRef} className="pb-4 text-sm leading-relaxed text-charcoal">
          {children}
        </div>
      </div>
    </div>
  );
}
