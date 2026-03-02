export const SITE_NAME = 'Wild Flower';
export const SITE_TAGLINE = 'Handmade with Intention';
export const SITE_DESCRIPTION =
  'Artisan handmade fashion inspired by nature. Crafted with care for the modern bohemian spirit.';

export const COLORS = {
  cream: '#F8F6EA',
  copper: '#C4956A',
  copperLight: '#D4AD8A',
  copperDark: '#A67B52',
  sage: '#8B9A7B',
  terracotta: '#C67D5B',
  charcoal: '#3A3A3A',
  nearBlack: '#1A1A1A',
} as const;

export const PRODUCT_COLORS = [
  { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
  { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
  { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
  { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
  { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
  { name: 'Midnight', slug: 'midnight', hex: '#1A1A2E' },
  { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
  { name: 'Ivory', slug: 'ivory', hex: '#FFFFF0' },
] as const;

export const SIZES = ['XS', 'S', 'M', 'L', 'XL'] as const;

export const MATERIALS = [
  '100% Linen',
  'Organic Cotton',
  'Silk Blend',
  'Cotton & Lace',
  'Recycled Polyester',
  'Silk Velvet',
] as const;

export const MAX_CART_QUANTITY = 10;

export const SHIPPING_METHODS = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '5-7 business days',
    price: 0,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '2-3 business days',
    price: 1200,
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day',
    price: 2500,
  },
] as const;

export const FREE_SHIPPING_THRESHOLD = 15000;
