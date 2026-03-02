'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Pagination } from '@/components/ui/Pagination';
import { SortDropdown } from '@/components/filters/SortDropdown';
import { getNewArrivals } from '@/data/products';
import { sortProducts } from '@/lib/filters';

const ITEMS_PER_PAGE = 9;

export default function NewArrivalsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortBy = searchParams.get('sort') ?? 'newest';
  const currentPage = Number(searchParams.get('page') ?? '1');

  const updateSearchParams = useCallback(
    (updates: Record<string, string | null>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
          newParams.delete(key);
        } else {
          newParams.set(key, value);
        }
      });

      const query = newParams.toString();
      router.push(`/shop/new-arrivals${query ? `?${query}` : ''}`, {
        scroll: false,
      });
    },
    [searchParams, router]
  );

  const handleSortChange = useCallback(
    (value: string) => {
      updateSearchParams({
        sort: value === 'newest' ? null : value,
        page: null,
      });
    },
    [updateSearchParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateSearchParams({
        page: page === 1 ? null : String(page),
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [updateSearchParams]
  );

  const allProducts = useMemo(() => getNewArrivals(), []);

  const sortedProducts = useMemo(
    () => sortProducts(allProducts, sortBy),
    [allProducts, sortBy]
  );

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const safePage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  const paginatedProducts = sortedProducts.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'New Arrivals' }]} />

      <div className="mt-2 mb-6 md:mb-8">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          New Arrivals
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal max-w-2xl">
          The latest additions to our collection. Fresh silhouettes, new
          colorways, and seasonal essentials handmade in our atelier.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-sm text-charcoal">
          Showing{' '}
          <span className="text-near-black font-medium">
            {sortedProducts.length}
          </span>{' '}
          Product{sortedProducts.length !== 1 ? 's' : ''}
        </p>
        <SortDropdown value={sortBy} onChange={handleSortChange} />
      </div>

      {paginatedProducts.length > 0 ? (
        <>
          <ProductGrid columns={3}>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>

          {totalPages > 1 && (
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-10 md:mt-12"
            />
          )}
        </>
      ) : (
        <div className="py-16 text-center">
          <p className="font-serif text-xl text-near-black mb-2">
            No new arrivals at the moment
          </p>
          <p className="font-sans text-sm text-charcoal">
            Check back soon for fresh additions to our collection.
          </p>
        </div>
      )}
    </Container>
  );
}
