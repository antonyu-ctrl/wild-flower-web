import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface CollectionBannerProps {
  title?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function CollectionBanner({
  title = 'The Summer Linen Collection',
  href = '/shop/collections/summer-linen-collection',
  imageSrc = '/products/Looking_at_the_camera_2k_delpmaspu.png',
  imageAlt = 'Woman in a golden field wearing linen dress',
}: CollectionBannerProps) {
  return (
    <section className="relative aspect-[4/3] md:aspect-[16/7] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white max-w-xl">
          {title}
        </h2>
        <div className="mt-6">
          <Button
            href={href}
            variant="secondary"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-near-black"
          >
            Shop Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
