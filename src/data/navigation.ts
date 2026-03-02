import type { NavLink } from '@/types';

export const headerNavLinks: NavLink[] = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'New Arrivals', href: '/shop/new-arrivals' },
      { label: 'Dresses', href: '/shop/dresses' },
      { label: 'Shoes', href: '/shop/shoes' },
      { label: 'Bags', href: '/shop/bags' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'Sale', href: '/shop/sale' },
    ],
  },
  {
    label: 'Our Story',
    href: '/our-story',
  },
  {
    label: 'Journal',
    href: '/journal',
  },
];

export const footerNavSections = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '/shop/new-arrivals' },
      { label: 'Dresses', href: '/shop/dresses' },
      { label: 'Shoes', href: '/shop/shoes' },
      { label: 'Accessories', href: '/shop/accessories' },
      { label: 'Gift Cards', href: '/gift-cards' },
    ] satisfies NavLink[],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '/shipping-returns' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ] satisfies NavLink[],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];
