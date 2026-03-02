import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Our Story — Wild Flower',
  description:
    'Learn about Wild Flower — an artisan fashion brand creating handmade clothing, shoes, bags, and accessories inspired by nature.',
};

export default function OurStoryPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Our Story' }]} />

      {/* Hero */}
      <div className="mt-2 mb-12 md:mb-16 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-5xl text-near-black leading-tight">
          Rooted in Craft,
          <br />
          Blooming with Purpose
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-charcoal">
          Wild Flower began with a simple belief: that beautiful things should be
          made with care, from materials that honor the earth, by hands that are
          fairly compensated for their artistry.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
        <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
          <Image
            src="/products/Looking_at_the_camera_2k_delpmaspu.png"
            alt="Wild Flower artisan at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-near-black mb-4">
            From Atelier to You
          </h2>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-charcoal">
            <p>
              Every Wild Flower piece is cut, sewn, and finished by hand in our
              Los Angeles atelier. We work in small batches, giving each garment
              the time and attention it deserves.
            </p>
            <p>
              Our team of artisans brings decades of combined experience in
              traditional dressmaking, leather craft, embroidery, and natural
              dyeing. Many of our techniques have been passed down through
              generations — we simply carry them forward with modern sensibility.
            </p>
            <p>
              We don&apos;t chase trends. Instead, we create timeless pieces that
              you&apos;ll reach for season after season, garments that get softer,
              richer, and more beautiful with every wear.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="border-t border-near-black/10 pt-12 md:pt-16 mb-16 md:mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-near-black text-center mb-10 md:mb-14">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {[
            {
              title: 'Thoughtful Materials',
              text: 'We source premium European linen, GOTS-certified organic cotton, peace silk, and vegetable-tanned leather. Every material is chosen for its beauty, durability, and minimal environmental footprint.',
            },
            {
              title: 'Artisan Craftsmanship',
              text: 'Hand-stitched seams, hand-embroidered details, hand-dyed fabrics. In a world of mass production, we believe the human touch is what transforms cloth into something meaningful.',
            },
            {
              title: 'Honest Sustainability',
              text: 'We use compostable packaging, practice zero-waste pattern cutting, and build garments designed to last for years — not weeks. Sustainability isn&apos;t a marketing story for us; it&apos;s how we make things.',
            },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="font-serif text-lg text-near-black mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-charcoal">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-cream-dark py-12 md:py-16 px-6 md:px-12 text-center mb-16 md:mb-20">
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-serif text-xl md:text-2xl text-near-black italic leading-relaxed">
            &ldquo;We make clothes the way they used to be made — slowly,
            carefully, and with love. The only difference is we do it with
            tomorrow in mind.&rdquo;
          </p>
          <footer className="mt-6 font-sans text-xs uppercase tracking-widest text-charcoal">
            — The Wild Flower Team
          </footer>
        </blockquote>
      </div>

      {/* CTA */}
      <div className="text-center pb-12 md:pb-16">
        <h2 className="font-serif text-2xl text-near-black mb-3">
          Explore Our Collection
        </h2>
        <p className="font-sans text-sm text-charcoal mb-6">
          Each piece tells a story. Find yours.
        </p>
        <Button href="/shop" variant="primary" size="lg">
          Shop Now
        </Button>
      </div>
    </Container>
  );
}
