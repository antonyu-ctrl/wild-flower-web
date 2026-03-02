import Image from 'next/image';
import { SITE_TAGLINE } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      <div className="flex flex-col items-center text-center animate-[fadeIn_1.2s_ease-out]">
        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
          <Image
            src="/images/wild-flower-logo.png"
            alt="Wild Flower"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="mt-6 font-sans text-xs tracking-[0.3em] uppercase text-charcoal">
          {SITE_TAGLINE.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
