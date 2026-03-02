'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';
import { headerNavLinks } from '@/data/navigation';
import {
  XIcon,
  ChevronDownIcon,
  InstagramIcon,
  PinterestIcon,
} from '@/components/icons';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [shopExpanded, setShopExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the close button for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset expanded state when closing
  useEffect(() => {
    if (!isOpen) {
      setShopExpanded(false);
    }
  }, [isOpen]);

  const shopLink = headerNavLinks.find((link) => link.label === 'Shop');
  const otherLinks = headerNavLinks.filter((link) => link.label !== 'Shop');

  const getNavLabel = (link: { label: string; i18nKey?: string }) =>
    link.i18nKey ? (t.nav as Record<string, string>)[link.i18nKey] ?? link.label : link.label;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-near-black/50 transition-opacity duration-300 lg:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed top-0 left-0 bottom-0 z-[70] w-full max-w-sm',
          'bg-cream flex flex-col',
          'transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-near-black/10">
          <span className="font-serif text-lg tracking-wider text-near-black">
            {SITE_NAME}
          </span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={t.header.closeMenu}
            className="text-near-black hover:text-copper transition-colors duration-200 -mr-1 p-1"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {/* Shop with expandable children */}
            {shopLink && (
              <li>
                <div className="flex items-center justify-between">
                  <Link
                    href={shopLink.href}
                    onClick={onClose}
                    className="font-serif text-2xl text-near-black hover:text-copper transition-colors duration-200 py-3"
                  >
                    {getNavLabel(shopLink)}
                  </Link>
                  {shopLink.children && (
                    <button
                      onClick={() => setShopExpanded((prev) => !prev)}
                      aria-label={
                        shopExpanded
                          ? t.header.collapseShopCategories
                          : t.header.expandShopCategories
                      }
                      className="p-2 text-charcoal hover:text-copper transition-colors duration-200"
                    >
                      <ChevronDownIcon
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          shopExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Shop Children */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    shopExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <ul className="pl-4 pb-2 space-y-1">
                    {shopLink.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            'block py-2',
                            'font-sans text-sm tracking-wide text-charcoal',
                            'hover:text-copper transition-colors duration-200'
                          )}
                        >
                          {getNavLabel(child)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )}

            {/* Other Links */}
            {otherLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-serif text-2xl text-near-black hover:text-copper transition-colors duration-200 py-3"
                >
                  {getNavLabel(link)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: Language Toggle, Social & Copyright */}
        <div className="px-6 py-6 border-t border-near-black/10">
          <div className="mb-4">
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-charcoal hover:text-copper transition-colors duration-200"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-charcoal hover:text-copper transition-colors duration-200"
            >
              <PinterestIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-charcoal/60 font-sans">
            &copy; {new Date().getFullYear()} {SITE_NAME}. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </>
  );
}
