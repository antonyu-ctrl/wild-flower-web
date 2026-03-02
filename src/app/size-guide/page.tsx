'use client';

import { Container } from '@/components/ui/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { useLanguage } from '@/context/LanguageContext';

export default function SizeGuidePage() {
  const { t } = useLanguage();

  return (
    <Container className="py-4 md:py-6">
      <Breadcrumb items={[{ label: t.pages.sizeGuide.title }]} />

      <div className="max-w-3xl mt-2 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-near-black">
          {t.pages.sizeGuide.title}
        </h1>
        <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal">
          {t.pages.sizeGuide.intro}
        </p>
      </div>

      <div className="max-w-3xl space-y-12 pb-12">
        {/* Dresses */}
        <section>
          <h2 className="font-serif text-xl text-near-black mb-6">{t.pages.sizeGuide.dresses}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-near-black/15">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.sizeHeader}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.bust}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.waist}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.hip}</th>
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
          <h2 className="font-serif text-xl text-near-black mb-6">{t.pages.sizeGuide.shoes}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-near-black/15">
              <thead>
                <tr className="bg-cream-dark">
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.sizeHeader}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.usSize}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.euSize}</th>
                  <th className="font-sans text-xs uppercase tracking-widest text-charcoal text-left px-4 py-3 border-b border-near-black/15">{t.pages.sizeGuide.footLength}</th>
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
            {t.pages.sizeGuide.howToMeasure}
          </h2>
          <div className="space-y-4 font-sans text-sm leading-relaxed text-charcoal">
            <div>
              <strong className="text-near-black">{t.pages.sizeGuide.bust}</strong> — {t.pages.sizeGuide.bustInstruction}
            </div>
            <div>
              <strong className="text-near-black">{t.pages.sizeGuide.waist}</strong> — {t.pages.sizeGuide.waistInstruction}
            </div>
            <div>
              <strong className="text-near-black">{t.pages.sizeGuide.hip}</strong> — {t.pages.sizeGuide.hipInstruction}
            </div>
            <div>
              <strong className="text-near-black">{t.pages.sizeGuide.footLength}</strong> — {t.pages.sizeGuide.footLengthInstruction}
            </div>
          </div>
        </section>

        <div className="border-t border-near-black/10 pt-8">
          <p className="font-sans text-sm text-charcoal">
            {t.pages.sizeGuide.unsure}{' '}
            <a href="/contact" className="text-copper hover:underline">
              {t.pages.sizeGuide.contactLink}
            </a>
            {t.pages.sizeGuide.unsureEnd}
          </p>
        </div>
      </div>
    </Container>
  );
}
