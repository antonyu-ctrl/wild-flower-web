import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getCategoryBySlug } from '@/data/categories';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { CompleteTheLook } from '@/components/product/CompleteTheLook';
import { ProductDetailClient } from './ProductDetailClient';

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { products } = await import('@/data/products');
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, slug } = await params;

  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(slug);

  if (!category || !product || product.category !== categorySlug) {
    notFound();
  }

  return (
    <Container className="py-4 md:py-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: category.name, href: `/shop/${categorySlug}` },
          { label: product.name },
        ]}
      />

      {/* Product detail section */}
      <section className="mt-4 md:mt-6">
        <ProductDetailClient product={product} />
      </section>

      {/* Complete the Look */}
      {product.relatedProductIds.length > 0 && (
        <section className="py-12 md:py-16 mt-8 border-t border-near-black/10">
          <CompleteTheLook productIds={product.relatedProductIds} />
        </section>
      )}
    </Container>
  );
}
