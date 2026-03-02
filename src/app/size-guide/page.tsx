import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Size Guide — Wild Flower',
  description:
    'Find your perfect fit with our detailed size guide for dresses, shoes, bags, and accessories.',
};

export default function SizeGuidePage() {
  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: 'Size Guide' }]} />

      <div className="max-w-3xl mt-2 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          Size Guide
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          Our pieces are designed with a relaxed, comfortable fit. Use the
          measurements below to find your ideal size. When in between sizes, we
          recommend sizing up for a more relaxed drape.
        </p>
      </div>

      <div className="max-w-3xl space-y-12 pb-12">
        {/* Dresses */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">Dresses</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-near-black/15">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Size</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Bust</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Waist</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Hip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-near-black/15">
                {[
                  { size: 'XS', bust: '31–32"', waist: '24–25"', hip: '34–35"' },
                  { size: 'S', bust: '33–34"', waist: '26–27"', hip: '36–37"' },
                  { size: 'M', bust: '35–36"', waist: '28–29"', hip: '38–39"' },
                  { size: 'L', bust: '37–39"', waist: '30–32"', hip: '40–42"' },
                  { size: 'XL', bust: '40–42"', waist: '33–35"', hip: '43–45"' },
                ].map((row) => (
                  <tr key={row.size}>
                    <td className="font-sans text-sm text-near-black font-medium px-4 py-3">{row.size}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.bust}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.waist}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shoes */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">Shoes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-near-black/15">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Size</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">US Size</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">EU Size</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">Foot Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-near-black/15">
                {[
                  { size: 'S', us: '5–6', eu: '35–36', length: '8.5–9.0"' },
                  { size: 'M', us: '7–8', eu: '37–38', length: '9.25–9.75"' },
                  { size: 'L', us: '9–10', eu: '39–40', length: '10.0–10.5"' },
                ].map((row) => (
                  <tr key={row.size}>
                    <td className="font-sans text-sm text-near-black font-medium px-4 py-3">{row.size}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.us}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.eu}</td>
                    <td className="font-sans text-sm text-charcoal px-4 py-3">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Measure */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">
            How to Measure
          </h2>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-charcoal">
            <div>
              <strong className="text-near-black">Bust</strong> — Measure around
              the fullest part of your bust, keeping the tape level.
            </div>
            <div>
              <strong className="text-near-black">Waist</strong> — Measure around
              your natural waistline, the narrowest part of your torso.
            </div>
            <div>
              <strong className="text-near-black">Hip</strong> — Measure around
              the fullest part of your hips, about 8 inches below your waist.
            </div>
            <div>
              <strong className="text-near-black">Foot Length</strong> — Stand on
              a piece of paper and trace your foot. Measure from the heel to the
              tip of your longest toe.
            </div>
          </div>
        </section>

        <div className="border-t border-near-black/10 pt-8">
          <p className="font-sans text-sm text-charcoal">
            Still unsure about sizing?{' '}
            <a href="/contact" className="text-copper hover:underline">
              Contact us
            </a>{' '}
            and we&apos;ll help you find the perfect fit.
          </p>
        </div>
      </div>
    </Container>
  );
}
