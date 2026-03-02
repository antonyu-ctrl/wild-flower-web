export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  slug: string;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export type ProductCategory = 'dresses' | 'shoes' | 'bags' | 'accessories';

export interface ProductVariant {
  id: string;
  colorSlug: string;
  size: Size;
  sku: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number; // in cents
  compareAtPrice?: number;
  material: string;
  description: string;
  colors: ProductColor[];
  sizes: Size[];
  variants: ProductVariant[];
  images: ProductImage[];
  rating: number;
  reviewCount: number;
  tags: string[];
  details: string[];
  sustainability: string;
  isFeatured: boolean;
  isNewArrival: boolean;
  collectionIds: string[];
  relatedProductIds: string[];
  createdAt: string;
}
