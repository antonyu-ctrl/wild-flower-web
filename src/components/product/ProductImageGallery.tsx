'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ProductImage } from '@/types';

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ensure we always have at least one image to display
  const displayImages =
    images.length > 0
      ? images
      : [
          {
            id: 'placeholder',
            src: '/products/placeholder.jpg',
            alt: productName,
          },
        ];

  const mainImage = displayImages[selectedIndex] ?? displayImages[0];

  return (
    <div className="w-full">
      {/* Desktop layout: thumbnails left + main image right */}
      <div className="hidden md:flex gap-4">
        {/* Vertical thumbnails */}
        {displayImages.length > 1 && (
          <div className="flex flex-col gap-3 flex-shrink-0">
            {displayImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'relative w-[70px] aspect-square overflow-hidden rounded-sm',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
                  index === selectedIndex
                    ? 'ring-2 ring-copper ring-offset-2 ring-offset-cream'
                    : 'opacity-70 hover:opacity-100'
                )}
                aria-label={`View image ${index + 1} of ${displayImages.length}`}
                aria-current={index === selectedIndex ? 'true' : undefined}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="70px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Main image */}
        <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-cream-dark rounded-sm">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 1024px) 55vw, 45vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Mobile layout: horizontal scroll of all images */}
      <div className="md:hidden">
        {displayImages.length === 1 ? (
          <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark rounded-sm">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {displayImages.map((image) => (
              <div
                key={image.id}
                className="relative flex-shrink-0 w-[85vw] aspect-[3/4] overflow-hidden bg-cream-dark rounded-sm snap-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="85vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Dot indicators for mobile */}
        {displayImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {displayImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-200',
                  index === selectedIndex
                    ? 'w-6 bg-copper'
                    : 'w-1.5 bg-near-black/20'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
