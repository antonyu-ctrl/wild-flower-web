import type { Product } from '@/types';

export interface ProductFilters {
  colors?: string[];
  materials?: string[];
  sizes?: string[];
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  return products.filter((product) => {
    // Filter by color slugs — match if product has ANY of the selected colors
    if (filters.colors && filters.colors.length > 0) {
      const productColorSlugs = product.colors.map((c) => c.slug);
      const hasMatchingColor = filters.colors.some((slug) =>
        productColorSlugs.includes(slug)
      );
      if (!hasMatchingColor) return false;
    }

    // Filter by material — match if product material includes the filter string
    if (filters.materials && filters.materials.length > 0) {
      const hasMatchingMaterial = filters.materials.some(
        (material) =>
          product.material.toLowerCase() === material.toLowerCase()
      );
      if (!hasMatchingMaterial) return false;
    }

    // Filter by sizes — match if product has ANY of the selected sizes
    if (filters.sizes && filters.sizes.length > 0) {
      const hasMatchingSize = filters.sizes.some((size) =>
        product.sizes.includes(size as Product['sizes'][number])
      );
      if (!hasMatchingSize) return false;
    }

    return true;
  });
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'newest':
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}
