export const siteConfig = {
  name: 'Wild Flower',
  tagline: 'Handmade with Intention',
  description:
    'Artisan handmade fashion inspired by nature. Each piece is lovingly crafted by hand using natural fabrics and sustainable practices, designed for the modern woman who values beauty, comfort, and conscious living.',
  url: 'https://wildflower.com',
  email: 'hello@wildflower.com',
  phone: '+1 (323) 555-0172',
  address: {
    street: '142 Bloom Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90012',
    country: 'US',
  },
  social: {
    instagram: 'https://instagram.com/wildflower',
    pinterest: 'https://pinterest.com/wildflower',
  },
  seo: {
    title: 'Wild Flower — Handmade with Intention',
    description:
      'Discover artisan handmade fashion crafted from natural fabrics. Dresses, shoes, bags, and accessories designed for the modern bohemian spirit.',
    keywords: [
      'handmade fashion',
      'linen dresses',
      'sustainable clothing',
      'artisan fashion',
      'bohemian style',
      'natural fabrics',
      'slow fashion',
    ],
    ogImage: '/images/og-image.jpg',
  },
  currency: 'USD',
  locale: 'en-US',
} as const;
