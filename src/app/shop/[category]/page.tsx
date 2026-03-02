'use client';

import { Suspense, useState, useMemo, useCallback } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';
import { FilterIcon } from '@/components/icons';
import { FilterSidebar } from '@/components/filters/FilterSidebar';
import { FilterDrawer } from '@/components/filters/FilterDrawer';
import { SortDropdown } from '@/components/filters/SortDropdown';
import { getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { filterProducts, sortProducts } from '@/lib/filters';
import type { ProductFilters } from '@/lib/filters';

const ITEMS_PER_PAGE = 6;

export default function CategoryPage() {
  return (
    <Suspense>
      <CategoryContent />
    </Suspense>
  );
}

function CategoryContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const categorySlug = params.category as string;
  const category = getCategoryBySlug(categorySlug);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Read filter state from URL search params
  const filters: ProductFilters = useMemo(() => {
    const colorsParam = searchParams.get('color');
    const materialsParam = searchParams.get('material');
    const sizesParam = searchParams.get('size');

    return {
      colors: colorsParam ? colorsParam.split(',').filter(Boolean) : [],
      materials: materialsParam ? materialsParam.split(',').filter(Boolean) : [],
      sizes: sizesParam ? sizesParam.split(',').filter(Boolean) : [],
    };
  }, [searchParams]);

  const sortBy = searchParams.get('sort') ?? 'newest';
  const currentPage = Number(searchParams.get('page') ?? '1');

  // Update URL with new params
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
      router.push(`/shop/${categorySlug}${query ? `?${query}` : ''}`, {
        scroll: false,
      });
    },
    [searchParams, router, categorySlug]
  );

  const handleFilterChange = useCallback(
    (newFilters: ProductFilters) => {
      updateSearchParams({
        color:
          newFilters.colors && newFilters.colors.length > 0
            ? newFilters.colors.join(',')
            : null,
        material:
          newFilters.materials && newFilters.materials.length > 0
            ? newFilters.materials.join(',')
            : null,
        size:
          newFilters.sizes && newFilters.sizes.length > 0
            ? newFilters.sizes.join(',')
            : null,
        page: null, // Reset to page 1 when filters change
      });
    },
    [updateSearchParams]
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

  if (!category) {
    notFound();
  }

  // Get category products, apply filters and sorting
  const allCategoryProducts = useMemo(
    () => getProductsByCategory(categorySlug),
    [categorySlug]
  );

  const filteredProducts = useMemo(
    () => filterProducts(allCategoryProducts, filters),
    [allCategoryProducts, filters]
  );

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortBy),
    [filteredProducts, sortBy]
  );

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const safePage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  const paginatedProducts = sortedProducts.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  return (
    <Container className="py-4 md:py-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: category.name }]}
      />

      {/* Page header */}
      <div className="mt-2 mb-6 md:mb-8">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Handmade {category.name}
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal max-w-2xl">
          {category.description}
        </p>
      </div>

      {/* Mobile controls */}
      <div className="flex items-center justify-between mb-6 md:hidden">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsFilterDrawerOpen(true)}
        >
          <FilterIcon className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <SortDropdown value={sortBy} onChange={handleSortChange} />
      </div>

      {/* Desktop layout: sidebar + grid */}
      <div className="flex gap-8 lg:gap-12">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-56 lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <FilterSidebar
              category={categorySlug}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Results bar (desktop) */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <p className="font-sans text-sm text-charcoal">
              Showing{' '}
              <span className="text-near-black font-medium">
                {sortedProducts.length}
              </span>{' '}
              Product{sortedProducts.length !== 1 ? 's' : ''}
            </p>
            <SortDropdown value={sortBy} onChange={handleSortChange} />
          </div>

          {/* Results count (mobile) */}
          <p className="font-sans text-xs text-charcoal mb-4 md:hidden">
            Showing {sortedProducts.length} Product
            {sortedProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Product grid or empty state */}
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
                No products found
              </p>
              <p className="font-sans text-sm text-charcoal mb-6">
                Try adjusting your filters to find what you are looking for.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  handleFilterChange({ colors: [], materials: [], sizes: [] })
                }
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        category={categorySlug}
        filters={filters}
        onFilterChange={handleFilterChange}
        resultCount={sortedProducts.length}
      />
    </Container>
  );
}
