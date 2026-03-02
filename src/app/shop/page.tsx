'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { categories } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import { getCategoryName, getCategoryDescription } from '@/i18n/helpers';

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <Container className="py-12 md:py-16 lg:py-20">
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black">
          {t.pages.shop.title}
        </h1>
        <p className="mt-3 font-sans text-sm text-charcoal max-w-md mx-auto">
          {t.pages.shop.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map((category) => {
          const catName = getCategoryName(t, category.slug, category.name);
          const catDesc = getCategoryDescription(t, category.slug, category.description);

          return (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-dark"
            >
              <Image
                src={category.image}
                alt={catName}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-white">
                  {catName}
                </h2>
                <p className="mt-2 font-sans text-sm text-white/80 max-w-xs line-clamp-2">
                  {catDesc}
                </p>
                <span className="mt-4 inline-flex items-center font-sans text-xs tracking-widest uppercase text-white group-hover:text-copper-light transition-colors duration-200">
                  {t.pages.shop.shopCategory.replace('{name}', catName)}
                  <svg className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
