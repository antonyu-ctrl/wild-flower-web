import { HeroSection } from '@/components/sections/HeroSection';
import { CollectionBanner } from '@/components/sections/CollectionBanner';
import { NewArrivalsSection } from '@/components/sections/NewArrivalsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionBanner />
      <NewArrivalsSection />
      <NewsletterSection />
    </>
  );
}
