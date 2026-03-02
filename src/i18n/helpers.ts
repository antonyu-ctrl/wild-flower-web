import type { TranslationDictionary } from './en';
import type { Product } from '@/types';

/** Get translated product name, falling back to original */
export function getProductName(t: TranslationDictionary, product: Product): string {
  return t.productData[product.id]?.name || product.name;
}

/** Get translated product description, falling back to original */
export function getProductDescription(t: TranslationDictionary, product: Product): string {
  return t.productData[product.id]?.description || product.description;
}

/** Get translated product details, falling back to original */
export function getProductDetails(t: TranslationDictionary, product: Product): string[] {
  return t.productData[product.id]?.details || product.details;
}

/** Get translated product sustainability text, falling back to original */
export function getProductSustainability(t: TranslationDictionary, product: Product): string {
  return t.productData[product.id]?.sustainability || product.sustainability;
}

/** Get translated color name by slug, falling back to original */
export function getColorName(t: TranslationDictionary, colorSlug: string, fallback: string): string {
  return t.colorNames[colorSlug] || fallback;
}

/** Get translated material name, falling back to original */
export function getMaterialName(t: TranslationDictionary, material: string): string {
  return t.materialNames[material] || material;
}

/** Get translated category name by slug, falling back to original */
export function getCategoryName(t: TranslationDictionary, slug: string, fallback: string): string {
  return t.categoryData[slug]?.name || fallback;
}

/** Get translated category description by slug, falling back to original */
export function getCategoryDescription(t: TranslationDictionary, slug: string, fallback: string): string {
  return t.categoryData[slug]?.description || fallback;
}

/** Get translated shipping method name */
export function getShippingMethodName(t: TranslationDictionary, id: string, fallback: string): string {
  return t.shippingMethods[id]?.name || fallback;
}

/** Get translated shipping method description */
export function getShippingMethodDescription(t: TranslationDictionary, id: string, fallback: string): string {
  return t.shippingMethods[id]?.description || fallback;
}
