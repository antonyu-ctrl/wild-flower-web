export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: 'summer-linen',
    name: 'Summer Linen Collection',
    slug: 'summer-linen-collection',
    description:
      'Light, breathable pieces crafted from premium European linen. Designed to keep you cool and elegant through the warmest months, each garment softens beautifully with every wash.',
    image: '/products/Looking_at_the_camera_2k_delpmaspu.png',
  },
  {
    id: 'new-arrivals',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description:
      'The latest additions to our collection. Fresh silhouettes, new colorways, and seasonal essentials handmade in our atelier.',
    image: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu.png',
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((collection) => collection.id === id);
}
