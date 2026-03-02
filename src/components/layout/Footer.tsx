'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { footerNavSections, legalLinks } from '@/data/navigation';
import { InstagramIcon, PinterestIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="border-t border-near-black/10 bg-cream">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl tracking-wider text-near-black hover:text-copper transition-colors duration-200"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-charcoal max-w-xs">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-charcoal hover:text-copper transition-colors duration-200"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                className="text-charcoal hover:text-copper transition-colors duration-200"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav Sections (Shop, Help) */}
          {footerNavSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-near-black font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal hover:text-copper transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-near-black font-medium mb-4">
              Stay in Touch
            </h3>
            <p className="text-sm text-charcoal mb-4">
              Join our community for early access, styling inspiration, and
              stories from our atelier.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className={cn(
                  'w-full px-3 py-2.5',
                  'bg-transparent border border-near-black/20',
                  'text-sm font-sans text-near-black placeholder:text-charcoal/50',
                  'focus:outline-none focus:border-copper',
                  'transition-colors duration-200'
                )}
              />
              <button
                type="submit"
                className={cn(
                  'w-full px-4 py-2.5',
                  'bg-near-black text-cream',
                  'text-xs font-sans tracking-[0.2em] uppercase',
                  'hover:bg-charcoal',
                  'transition-colors duration-200'
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-near-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-charcoal/60 font-sans">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-charcoal/60 hover:text-copper transition-colors duration-200 font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
