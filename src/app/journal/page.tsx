import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Journal — Wild Flower',
  description:
    'Stories from our atelier — styling guides, artisan spotlights, and reflections on slow fashion.',
};

const posts = [
  {
    slug: 'the-art-of-linen',
    title: 'The Art of Linen: From Flax Field to Finished Garment',
    excerpt:
      'Follow the journey of our signature linen — from family-run flax farms in Belgium to the hand-cut patterns in our Los Angeles atelier.',
    image: '/products/Change_it_to_portrait_2k_delpmaspu.png',
    date: '2026-02-15',
    category: 'Behind the Craft',
  },
  {
    slug: 'spring-styling-guide',
    title: 'Spring Styling: Five Ways to Wear the Meadow Dress',
    excerpt:
      'Our best-selling Meadow Dress is more versatile than you think. Here are five looks that take it from morning market to evening garden party.',
    image: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu.png',
    date: '2026-02-01',
    category: 'Styling',
  },
  {
    slug: 'meet-our-embroidery-artisan',
    title: 'Meet Maria: The Hands Behind Our Embroidery',
    excerpt:
      'Maria has been embroidering since she was eight years old. Now she brings her decades of expertise to every Wild Flower piece that passes through her hands.',
    image: '/products/shoes3.png',
    date: '2026-01-20',
    category: 'Artisan Spotlight',
  },
  {
    slug: 'caring-for-natural-fibers',
    title: 'A Guide to Caring for Natural Fibers',
    excerpt:
      'Linen, cotton, silk, wool — each natural fiber has its own personality. Learn how to wash, dry, and store your Wild Flower pieces so they last for years.',
    image: '/products/bag1.png',
    date: '2026-01-10',
    category: 'Care Guide',
  },
  {
    slug: 'slow-fashion-wardrobe',
    title: 'Building a Slow Fashion Wardrobe: Where to Start',
    excerpt:
      'Transitioning to a more intentional wardrobe doesn\'t happen overnight. Here\'s our honest guide to making the shift — one thoughtful piece at a time.',
    image: '/products/accessories4.png',
    date: '2025-12-28',
    category: 'Slow Fashion',
  },
  {
    slug: 'winter-layering',
    title: 'Winter Layering with Natural Fabrics',
    excerpt:
      'Staying warm doesn\'t mean sacrificing style or sustainability. Discover how to layer our wool, linen, and cotton pieces for the colder months.',
    image: '/products/bag5.png',
    date: '2025-12-15',
    category: 'Styling',
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function JournalPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Journal' }]} />

      <div className="mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Journal
        </h1>
        <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal max-w-2xl">
          Stories from our atelier — styling inspiration, artisan spotlights,
          and reflections on making things the slow way.
        </p>
      </div>

      {/* Featured Post */}
      <Link href={`/journal/${posts[0].slug}`} className="group block mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="relative aspect-[4/3] md:aspect-[4/5] bg-cream-dark overflow-hidden">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-widest text-copper mb-3">
              {posts[0].category}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-near-black mb-4 group-hover:text-copper transition-colors duration-200">
              {posts[0].title}
            </h2>
            <p className="font-sans text-sm leading-relaxed text-charcoal mb-4">
              {posts[0].excerpt}
            </p>
            <span className="font-sans text-xs text-charcoal/60">
              {formatDate(posts[0].date)}
            </span>
          </div>
        </div>
      </Link>

      {/* Post Grid */}
      <div className="border-t border-near-black/10 pt-10 md:pt-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] bg-cream-dark overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-copper">
                {post.category}
              </span>
              <h3 className="mt-2 font-serif text-lg text-near-black group-hover:text-copper transition-colors duration-200">
                {post.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal line-clamp-2">
                {post.excerpt}
              </p>
              <span className="mt-3 block font-sans text-xs text-charcoal/60">
                {formatDate(post.date)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
