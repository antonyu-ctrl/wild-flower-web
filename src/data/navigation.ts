import type { NavLink } from '@/types';

export const headerNavLinks: NavLink[] = [
  {
    label: 'Shop',
    href: '/shop',
    i18nKey: 'shop',
    children: [
      { label: 'New Arrivals', href: '/shop/new-arrivals', i18nKey: 'newArrivals' },
      { label: 'Dresses', href: '/shop/dresses', i18nKey: 'dresses' },
      { label: 'Shoes', href: '/shop/shoes', i18nKey: 'shoes' },
      { label: 'Bags', href: '/shop/bags', i18nKey: 'bags' },
      { label: 'Accessories', href: '/shop/accessories', i18nKey: 'accessories' },
      { label: 'Sale', href: '/shop/sale', i18nKey: 'sale' },
    ],
  },
  {
    label: 'Our Story',
    href: '/our-story',
    i18nKey: 'ourStory',
  },
  {
    label: 'Journal',
    href: '/journal',
    i18nKey: 'journal',
  },
];

export const footerNavSections = [
  {
    title: 'Shop',
    i18nKey: 'shopTitle' as const,
    links: [
      { label: 'New Arrivals', href: '/shop/new-arrivals', i18nKey: 'newArrivals' },
      { label: 'Dresses', href: '/shop/dresses', i18nKey: 'dresses' },
      { label: 'Shoes', href: '/shop/shoes', i18nKey: 'shoes' },
      { label: 'Accessories', href: '/shop/accessories', i18nKey: 'accessories' },
      { label: 'Gift Cards', href: '/gift-cards', i18nKey: 'giftCards' },
    ] satisfies NavLink[],
  },
  {
    title: 'Help',
    i18nKey: 'helpTitle' as const,
    links: [
      { label: 'Shipping & Returns', href: '/shipping-returns', i18nKey: 'shippingReturns' },
      { label: 'Size Guide', href: '/size-guide', i18nKey: 'sizeGuide' },
      { label: 'FAQ', href: '/faq', i18nKey: 'faq' },
      { label: 'Contact Us', href: '/contact', i18nKey: 'contactUs' },
    ] satisfies NavLink[],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy', i18nKey: 'privacyPolicy' },
  { label: 'Terms of Service', href: '/terms-of-service', i18nKey: 'termsOfService' },
  { label: 'Cookie Policy', href: '/cookie-policy', i18nKey: 'cookiePolicy' },
];
