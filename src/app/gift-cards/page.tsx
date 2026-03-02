import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Gift Cards — Wild Flower',
  description:
    'Give the gift of handmade fashion. Wild Flower gift cards are delivered instantly by email.',
};

const giftCardAmounts = [
  { value: 5000, label: '$50' },
  { value: 10000, label: '$100' },
  { value: 15000, label: '$150' },
  { value: 25000, label: '$250' },
];

export default function GiftCardsPage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Gift Cards' }]} />

      <div className="max-w-2xl mx-auto text-center mt-2 mb-10 md:mb-14">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Gift Cards
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          Not sure what to choose? Let them pick their own handmade treasure.
          Our gift cards are delivered instantly by email and never expire.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {giftCardAmounts.map((card) => (
            <div
              key={card.value}
              className="border border-near-black/15 p-6 text-center hover:border-copper transition-colors duration-200 cursor-pointer"
            >
              <span className="font-serif text-2xl text-near-black">
                {card.label}
              </span>
              <p className="mt-1 font-sans text-xs text-charcoal/60">
                Gift Card
              </p>
            </div>
          ))}
        </div>

        <div className="border border-near-black/15 p-6 md:p-8 space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              Recipient&apos;s Email
            </label>
            <input
              type="email"
              placeholder="friend@example.com"
              className="w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 focus:border-copper focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label className="block font-sans text-xs uppercase tracking-widest text-charcoal mb-2">
              Personal Message (optional)
            </label>
            <textarea
              rows={3}
              placeholder="Add a note..."
              className="w-full bg-cream font-sans text-sm text-near-black placeholder:text-charcoal/40 border border-near-black/20 px-3 py-3 focus:border-copper focus:outline-none focus:ring-0 resize-none"
            />
          </div>
          <Button variant="primary" size="lg" fullWidth disabled>
            Coming Soon
          </Button>
          <p className="font-sans text-xs text-charcoal/60 text-center">
            Gift cards will be available soon. Sign up for our newsletter to be
            notified.
          </p>
        </div>
      </div>
    </Container>
  );
}
