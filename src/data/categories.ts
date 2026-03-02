export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: 'Dresses',
    slug: 'dresses',
    description:
      'Flowing silhouettes crafted from natural linen, organic cotton, and silk. Each dress is cut and sewn by hand in our Los Angeles atelier.',
    image: '/products/Change_it_to_portrait_2k_delpmaspu.png',
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    description:
      'Handcrafted footwear made from vegetable-tanned leather and natural materials. Designed for everyday comfort with artisan detail.',
    image: '/products/placeholder.jpg',
  },
  {
    name: 'Bags',
    slug: 'bags',
    description:
      'Hand-woven and hand-stitched bags using sustainably sourced materials. Functional beauty for every occasion.',
    image: '/products/placeholder.jpg',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description:
      'Delicate handcrafted jewelry and accessories made from ethically sourced metals, natural stones, and artisan clay.',
    image: '/products/placeholder.jpg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
