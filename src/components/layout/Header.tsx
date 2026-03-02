'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { headerNavLinks } from '@/data/navigation';
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  ChevronDownIcon,
} from '@/components/icons';
import { useCart } from '@/context/CartContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { itemCount, openDrawer } = useCart();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 150);
  };

  const shopLink = headerNavLinks.find((link) => link.label === 'Shop');
  const otherLinks = headerNavLinks.filter((link) => link.label !== 'Shop');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'border-b border-near-black/10',
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md'
            : 'bg-cream'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:items-center lg:h-16">
            {/* Left Nav */}
            <nav className="flex items-center gap-8">
              {/* Shop with Dropdown */}
              {shopLink && (
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setShopDropdownOpen((prev) => !prev)}
                    className={cn(
                      'flex items-center gap-1',
                      'text-xs tracking-[0.2em] uppercase font-sans',
                      'text-near-black hover:text-copper transition-colors duration-200'
                    )}
                  >
                    {shopLink.label}
                    <ChevronDownIcon
                      className={cn(
                        'h-3 w-3 transition-transform duration-200',
                        shopDropdownOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-2 w-48',
                      'bg-cream border border-near-black/10 shadow-sm',
                      'transition-all duration-200 origin-top',
                      shopDropdownOpen
                        ? 'opacity-100 scale-y-100 pointer-events-auto'
                        : 'opacity-0 scale-y-95 pointer-events-none'
                    )}
                  >
                    <div className="py-2">
                      {shopLink.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block px-4 py-2',
                            'text-xs tracking-[0.15em] uppercase font-sans',
                            'text-charcoal hover:text-copper hover:bg-cream-dark',
                            'transition-colors duration-150'
                          )}
                          onClick={() => setShopDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Other Nav Links */}
              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-xs tracking-[0.2em] uppercase font-sans',
                    'text-near-black hover:text-copper transition-colors duration-200'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="font-serif text-xl tracking-wider text-near-black hover:text-copper transition-colors duration-200"
              >
                Wild Flower
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center justify-end gap-5">
              <button
                aria-label="Search"
                className="text-near-black hover:text-copper transition-colors duration-200"
              >
                <SearchIcon className="h-[18px] w-[18px]" />
              </button>
              <Link
                href="/account"
                aria-label="Account"
                className="text-near-black hover:text-copper transition-colors duration-200"
              >
                <UserIcon className="h-[18px] w-[18px]" />
              </Link>
              <button
                onClick={openDrawer}
                aria-label="Shopping bag"
                className="relative text-near-black hover:text-copper transition-colors duration-200"
              >
                <ShoppingBagIcon className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-copper text-[10px] font-sans font-medium text-white">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="flex items-center justify-between h-14 lg:hidden">
            {/* Left: Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="text-near-black hover:text-copper transition-colors duration-200 -ml-1 p-1"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {/* Center: Logo */}
            <Link
              href="/"
              className="font-serif text-lg tracking-wider text-near-black"
            >
              Wild Flower
            </Link>

            {/* Right: Cart */}
            <button
              onClick={openDrawer}
              aria-label="Shopping bag"
              className="relative text-near-black hover:text-copper transition-colors duration-200 -mr-1 p-1"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-copper text-[10px] font-sans font-medium text-white">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-14 lg:h-16" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
