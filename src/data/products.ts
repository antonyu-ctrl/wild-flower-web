import type { Product } from '@/types';

export const products: Product[] = [
  // ─── DRESSES ──────────────────────────────────────────────────────────────────

  {
    id: 'prod-1',
    slug: 'the-meadow-dress',
    name: 'The Meadow Dress',
    category: 'dresses',
    price: 18500,
    material: 'Natural Linen',
    description:
      'Our signature Meadow Dress in premium European linen. A graceful bow-tie neckline flows into a relaxed A-line silhouette, finished with hand-stitched detailing along the bodice. The kind of dress that feels like a Sunday morning — unhurried and beautiful.',
    colors: [
      { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-1-1', colorSlug: 'natural-white', size: 'XS', sku: 'MED-NW-XS', inStock: true },
      { id: 'var-1-2', colorSlug: 'natural-white', size: 'S', sku: 'MED-NW-S', inStock: true },
      { id: 'var-1-3', colorSlug: 'natural-white', size: 'M', sku: 'MED-NW-M', inStock: true },
      { id: 'var-1-4', colorSlug: 'natural-white', size: 'L', sku: 'MED-NW-L', inStock: true },
      { id: 'var-1-5', colorSlug: 'natural-white', size: 'XL', sku: 'MED-NW-XL', inStock: false },
      { id: 'var-1-6', colorSlug: 'sage-green', size: 'S', sku: 'MED-SG-S', inStock: true },
      { id: 'var-1-7', colorSlug: 'sage-green', size: 'M', sku: 'MED-SG-M', inStock: true },
      { id: 'var-1-8', colorSlug: 'sage-green', size: 'L', sku: 'MED-SG-L', inStock: true },
      { id: 'var-1-9', colorSlug: 'dusty-rose', size: 'S', sku: 'MED-DR-S', inStock: true },
      { id: 'var-1-10', colorSlug: 'dusty-rose', size: 'M', sku: 'MED-DR-M', inStock: true },
    ],
    images: [
      {
        id: 'img-1-1',
        src: '/products/Change_it_to_portrait_2k_delpmaspu.png',
        alt: 'The Meadow Dress in Natural White — front view with bow-tie neckline',
      },
    ],
    rating: 4.8,
    reviewCount: 42,
    tags: ['linen', 'bow-tie', 'a-line', 'handmade', 'summer'],
    details: [
      'Crafted from 100% premium European linen',
      'Hand-stitched bow-tie neckline detail',
      'Relaxed A-line silhouette falls just below the knee',
      'Side seam pockets',
      'Machine wash cold, hang dry — softens with every wash',
    ],
    sustainability:
      'Made from OEKO-TEX certified European linen grown without irrigation. Cut and sewn by hand in our Los Angeles atelier. Shipped in compostable packaging.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['summer-linen', 'new-arrivals'],
    relatedProductIds: ['prod-2', 'prod-4', 'prod-5'],
    createdAt: '2025-12-01T00:00:00Z',
  },

  {
    id: 'prod-2',
    slug: 'sienna-wrap-dress',
    name: 'Sienna Wrap Dress',
    category: 'dresses',
    price: 14500,
    material: 'Organic Cotton',
    description:
      'A flattering wrap silhouette in soft organic cotton with a linen apron overlay. The Sienna cinches at the waist with hand-tied sashes and drapes effortlessly for an easy, put-together look that takes you from morning errands to evening dinners.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-2-1', colorSlug: 'natural-linen', size: 'XS', sku: 'SWD-NL-XS', inStock: true },
      { id: 'var-2-2', colorSlug: 'natural-linen', size: 'S', sku: 'SWD-NL-S', inStock: true },
      { id: 'var-2-3', colorSlug: 'natural-linen', size: 'M', sku: 'SWD-NL-M', inStock: true },
      { id: 'var-2-4', colorSlug: 'natural-linen', size: 'L', sku: 'SWD-NL-L', inStock: true },
      { id: 'var-2-5', colorSlug: 'terracotta', size: 'S', sku: 'SWD-TC-S', inStock: true },
      { id: 'var-2-6', colorSlug: 'terracotta', size: 'M', sku: 'SWD-TC-M', inStock: true },
      { id: 'var-2-7', colorSlug: 'terracotta', size: 'L', sku: 'SWD-TC-L', inStock: false },
      { id: 'var-2-8', colorSlug: 'charcoal', size: 'S', sku: 'SWD-CH-S', inStock: true },
      { id: 'var-2-9', colorSlug: 'charcoal', size: 'M', sku: 'SWD-CH-M', inStock: true },
    ],
    images: [
      {
        id: 'img-2-1',
        src: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu.png',
        alt: 'Sienna Wrap Dress in Natural Linen — walking view showing apron drape',
      },
      {
        id: 'img-2-2',
        src: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu (1).png',
        alt: 'Sienna Wrap Dress in Natural Linen — alternate angle showing waist tie',
      },
    ],
    rating: 4.7,
    reviewCount: 38,
    tags: ['wrap', 'organic-cotton', 'apron', 'handmade', 'everyday'],
    details: [
      'Made from GOTS-certified organic cotton with linen apron overlay',
      'Adjustable wrap closure with hand-tied sashes',
      'Midi length with gentle A-line skirt',
      'Coconut shell buttons at the shoulder',
      'Machine wash cold, tumble dry low',
    ],
    sustainability:
      'GOTS-certified organic cotton sourced from family farms in India. Dyed with low-impact, AZO-free dyes. Zero-waste pattern cutting minimizes fabric waste.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['summer-linen', 'new-arrivals'],
    relatedProductIds: ['prod-1', 'prod-3', 'prod-5'],
    createdAt: '2025-12-05T00:00:00Z',
  },

  {
    id: 'prod-3',
    slug: 'midnight-silk-slip',
    name: 'Midnight Silk Slip',
    category: 'dresses',
    price: 22500,
    material: 'Silk Blend',
    description:
      'A floor-length tiered slip dress in luxurious silk blend with a gentle drape that catches the light as you move. The Midnight features delicate spaghetti straps and cascading tiers that create a sense of effortless movement. Perfect for summer evenings and special occasions.',
    colors: [
      { name: 'Midnight', slug: 'midnight', hex: '#1A1A2E' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
      { name: 'Ivory', slug: 'ivory', hex: '#FFFFF0' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-3-1', colorSlug: 'midnight', size: 'XS', sku: 'MSS-MN-XS', inStock: true },
      { id: 'var-3-2', colorSlug: 'midnight', size: 'S', sku: 'MSS-MN-S', inStock: true },
      { id: 'var-3-3', colorSlug: 'midnight', size: 'M', sku: 'MSS-MN-M', inStock: true },
      { id: 'var-3-4', colorSlug: 'midnight', size: 'L', sku: 'MSS-MN-L', inStock: true },
      { id: 'var-3-5', colorSlug: 'midnight', size: 'XL', sku: 'MSS-MN-XL', inStock: true },
      { id: 'var-3-6', colorSlug: 'dusty-rose', size: 'S', sku: 'MSS-DR-S', inStock: true },
      { id: 'var-3-7', colorSlug: 'dusty-rose', size: 'M', sku: 'MSS-DR-M', inStock: true },
      { id: 'var-3-8', colorSlug: 'ivory', size: 'S', sku: 'MSS-IV-S', inStock: false },
      { id: 'var-3-9', colorSlug: 'ivory', size: 'M', sku: 'MSS-IV-M', inStock: true },
    ],
    images: [
      {
        id: 'img-3-1',
        src: '/products/Walking_toward_the_camera_2k_delpmaspu.png',
        alt: 'Midnight Silk Slip in Midnight — full-length tiered silhouette',
      },
    ],
    rating: 4.9,
    reviewCount: 27,
    tags: ['silk', 'slip-dress', 'tiered', 'evening', 'special-occasion'],
    details: [
      'Crafted from a luxurious silk-cotton blend (70% silk, 30% cotton)',
      'Adjustable spaghetti straps with hand-finished edges',
      'Five cascading tiers with French seam construction',
      'Hidden side zip for easy dressing',
      'Dry clean recommended — includes garment care bag',
    ],
    sustainability:
      'Peace silk sourced from ethical sericulture farms. Blended with organic cotton for durability. Each dress requires over 12 hours of handwork from our artisan team.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-1', 'prod-4', 'prod-6'],
    createdAt: '2025-12-10T00:00:00Z',
  },

  {
    id: 'prod-4',
    slug: 'hawthorn-lace-midi',
    name: 'Hawthorn Lace Midi',
    category: 'dresses',
    price: 19500,
    material: 'Cotton & Lace',
    description:
      'Romantic cotton midi with intricate handmade lace detailing at the bodice and hem. The Hawthorn balances structure and softness with a fitted waist that releases into a full skirt. A dress for garden parties, long lunches, and those days when you want to feel extraordinary.',
    colors: [
      { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-4-1', colorSlug: 'natural-white', size: 'XS', sku: 'HLM-NW-XS', inStock: true },
      { id: 'var-4-2', colorSlug: 'natural-white', size: 'S', sku: 'HLM-NW-S', inStock: true },
      { id: 'var-4-3', colorSlug: 'natural-white', size: 'M', sku: 'HLM-NW-M', inStock: true },
      { id: 'var-4-4', colorSlug: 'natural-white', size: 'L', sku: 'HLM-NW-L', inStock: true },
      { id: 'var-4-5', colorSlug: 'natural-white', size: 'XL', sku: 'HLM-NW-XL', inStock: false },
      { id: 'var-4-6', colorSlug: 'sage-green', size: 'S', sku: 'HLM-SG-S', inStock: true },
      { id: 'var-4-7', colorSlug: 'sage-green', size: 'M', sku: 'HLM-SG-M', inStock: true },
      { id: 'var-4-8', colorSlug: 'sage-green', size: 'L', sku: 'HLM-SG-L', inStock: true },
    ],
    images: [
      {
        id: 'img-4-1',
        src: '/products/Change_it_to_portrait_2k_delpmaspu.png',
        alt: 'Hawthorn Lace Midi in Natural White — showing lace bodice detail',
      },
    ],
    rating: 4.6,
    reviewCount: 19,
    tags: ['lace', 'cotton', 'midi', 'romantic', 'handmade'],
    details: [
      'Body crafted from breathable organic cotton poplin',
      'Hand-crocheted cotton lace at bodice and hemline',
      'Fitted waist with invisible back zip',
      'Full midi skirt with deep side pockets',
      'Machine wash cold on gentle cycle, lay flat to dry',
    ],
    sustainability:
      'Organic cotton poplin paired with handmade lace from a women-led cooperative in Portugal. Fully biodegradable natural fibers. Compostable at end of life.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['summer-linen', 'new-arrivals'],
    relatedProductIds: ['prod-1', 'prod-3', 'prod-6'],
    createdAt: '2025-12-15T00:00:00Z',
  },

  {
    id: 'prod-5',
    slug: 'botanical-print-wrap',
    name: 'Botanical Print Wrap',
    category: 'dresses',
    price: 13000,
    compareAtPrice: 16500,
    material: 'Recycled Polyester',
    description:
      'A layered wrap dress with a subtle botanical print, made from recycled ocean-bound plastics transformed into a silky, flowing fabric. The multi-tiered skirt moves beautifully while the wrap bodice adjusts to flatter every figure. Proof that sustainability and style are natural companions.',
    colors: [
      { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-5-1', colorSlug: 'natural-white', size: 'XS', sku: 'BPW-NW-XS', inStock: true },
      { id: 'var-5-2', colorSlug: 'natural-white', size: 'S', sku: 'BPW-NW-S', inStock: true },
      { id: 'var-5-3', colorSlug: 'natural-white', size: 'M', sku: 'BPW-NW-M', inStock: true },
      { id: 'var-5-4', colorSlug: 'natural-white', size: 'L', sku: 'BPW-NW-L', inStock: true },
      { id: 'var-5-5', colorSlug: 'sage-green', size: 'S', sku: 'BPW-SG-S', inStock: true },
      { id: 'var-5-6', colorSlug: 'sage-green', size: 'M', sku: 'BPW-SG-M', inStock: true },
      { id: 'var-5-7', colorSlug: 'sage-green', size: 'L', sku: 'BPW-SG-L', inStock: false },
      { id: 'var-5-8', colorSlug: 'terracotta', size: 'S', sku: 'BPW-TC-S', inStock: true },
      { id: 'var-5-9', colorSlug: 'terracotta', size: 'M', sku: 'BPW-TC-M', inStock: true },
    ],
    images: [
      {
        id: 'img-5-1',
        src: '/products/Looking_at_the_camera_2k_delpmaspu.png',
        alt: 'Botanical Print Wrap in Natural White — layered tiered silhouette',
      },
    ],
    rating: 4.5,
    reviewCount: 31,
    tags: ['botanical', 'wrap', 'recycled', 'sustainable', 'layered'],
    details: [
      'Made from 100% recycled ocean-bound polyester',
      'Hand-printed botanical motif using water-based inks',
      'Adjustable wrap bodice with internal button anchor',
      'Three-tier flowing skirt with raw-edge finishing',
      'Machine wash cold, hang dry — wrinkle-resistant fabric',
    ],
    sustainability:
      'Each dress removes approximately 25 plastic bottles from ocean-bound waste. Fabric is GRS-certified recycled polyester. Printed with non-toxic, water-based botanical inks.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['summer-linen', 'new-arrivals'],
    relatedProductIds: ['prod-1', 'prod-2', 'prod-4'],
    createdAt: '2025-12-20T00:00:00Z',
  },

  {
    id: 'prod-6',
    slug: 'evening-velvet-gown',
    name: 'Evening Velvet Gown',
    category: 'dresses',
    price: 27500,
    material: 'Silk Velvet',
    description:
      'A statement piece in sumptuous silk velvet. The Evening Velvet Gown features a structured vest bodice layered over a crisp white artisan blouse, creating a striking contrast of textures. The rich, jewel-toned velvet catches light with every movement. For the woman who enters a room and owns it.',
    colors: [
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
      { name: 'Midnight', slug: 'midnight', hex: '#1A1A2E' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    variants: [
      { id: 'var-6-1', colorSlug: 'terracotta', size: 'XS', sku: 'EVG-TC-XS', inStock: true },
      { id: 'var-6-2', colorSlug: 'terracotta', size: 'S', sku: 'EVG-TC-S', inStock: true },
      { id: 'var-6-3', colorSlug: 'terracotta', size: 'M', sku: 'EVG-TC-M', inStock: true },
      { id: 'var-6-4', colorSlug: 'terracotta', size: 'L', sku: 'EVG-TC-L', inStock: true },
      { id: 'var-6-5', colorSlug: 'midnight', size: 'S', sku: 'EVG-MN-S', inStock: true },
      { id: 'var-6-6', colorSlug: 'midnight', size: 'M', sku: 'EVG-MN-M', inStock: true },
      { id: 'var-6-7', colorSlug: 'midnight', size: 'L', sku: 'EVG-MN-L', inStock: false },
      { id: 'var-6-8', colorSlug: 'dusty-rose', size: 'S', sku: 'EVG-DR-S', inStock: true },
      { id: 'var-6-9', colorSlug: 'dusty-rose', size: 'M', sku: 'EVG-DR-M', inStock: true },
    ],
    images: [
      {
        id: 'img-6-1',
        src: '/products/Korean_girl_with_short_hairsitting_on_the_chair_ou_delpmaspu.png',
        alt: 'Evening Velvet Gown in Terracotta — vest bodice with white blouse layering',
      },
    ],
    rating: 4.9,
    reviewCount: 15,
    tags: ['velvet', 'silk', 'evening', 'gown', 'statement', 'layered'],
    details: [
      'Vest bodice crafted from 100% silk velvet',
      'Includes matching hand-finished cotton blouse with poet sleeves',
      'Structured bodice with hand-sewn boning',
      'Full-length skirt with concealed side zip',
      'Dry clean only — silk velvet requires professional care',
    ],
    sustainability:
      'Silk velvet woven on traditional looms in Varanasi, India, supporting multi-generational weaving families. Cotton blouse made from organic long-staple cotton. Fair Trade certified production.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-3', 'prod-4', 'prod-1'],
    createdAt: '2026-01-05T00:00:00Z',
  },

  // ─── SHOES ────────────────────────────────────────────────────────────────────

  {
    id: 'prod-7',
    slug: 'heritage-lace-up-boots',
    name: 'Heritage Lace-Up Boots',
    category: 'shoes',
    price: 16500,
    material: 'Vegetable-Tanned Leather & Canvas',
    description:
      'Rugged yet refined lace-up boots combining rich brown vegetable-tanned leather with forest green canvas panels. Hand-stitched with brass eyelets and a sturdy stacked sole, these boots are built to last a lifetime and only get better with age.',
    colors: [
      { name: 'Brown & Forest', slug: 'brown-forest', hex: '#6B4226' },
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-7-1', colorSlug: 'brown-forest', size: 'S', sku: 'HLB-BF-S', inStock: true },
      { id: 'var-7-2', colorSlug: 'brown-forest', size: 'M', sku: 'HLB-BF-M', inStock: true },
      { id: 'var-7-3', colorSlug: 'brown-forest', size: 'L', sku: 'HLB-BF-L', inStock: true },
      { id: 'var-7-4', colorSlug: 'charcoal', size: 'S', sku: 'HLB-CH-S', inStock: true },
      { id: 'var-7-5', colorSlug: 'charcoal', size: 'M', sku: 'HLB-CH-M', inStock: true },
      { id: 'var-7-6', colorSlug: 'charcoal', size: 'L', sku: 'HLB-CH-L', inStock: false },
    ],
    images: [
      {
        id: 'img-7-1',
        src: '/products/shoes1.png',
        alt: 'Heritage Lace-Up Boots in Brown & Forest — leather and canvas with brass eyelets',
      },
    ],
    rating: 4.7,
    reviewCount: 23,
    tags: ['boots', 'leather', 'canvas', 'handcrafted', 'heritage'],
    details: [
      'Handcrafted from vegetable-tanned Italian leather with waxed canvas panels',
      'Solid brass eyelets and hardware throughout',
      'Stacked leather sole with natural rubber heel insert',
      'Full leather lining with cushioned insole',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'Vegetable-tanned in Tuscany using centuries-old bark tanning methods — no chromium or heavy metals. Waxed organic canvas panels. Fully repairable and resoleable.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['autumn-collection'],
    relatedProductIds: ['prod-8', 'prod-13', 'prod-14'],
    createdAt: '2025-10-15T00:00:00Z',
  },

  {
    id: 'prod-8',
    slug: 'suede-mary-jane-heels',
    name: 'Suede Mary Jane Heels',
    category: 'shoes',
    price: 13500,
    material: 'Italian Suede',
    description:
      'Classic Mary Jane heels reimagined in sumptuous Italian suede with a stacked wooden heel. The double-button strap and rounded toe create a vintage silhouette that pairs beautifully with everything from flowing dresses to tailored trousers.',
    colors: [
      { name: 'Crimson', slug: 'crimson', hex: '#8B1A1A' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-8-1', colorSlug: 'crimson', size: 'S', sku: 'SMJ-CR-S', inStock: true },
      { id: 'var-8-2', colorSlug: 'crimson', size: 'M', sku: 'SMJ-CR-M', inStock: true },
      { id: 'var-8-3', colorSlug: 'crimson', size: 'L', sku: 'SMJ-CR-L', inStock: true },
      { id: 'var-8-4', colorSlug: 'dusty-rose', size: 'S', sku: 'SMJ-DR-S', inStock: true },
      { id: 'var-8-5', colorSlug: 'dusty-rose', size: 'M', sku: 'SMJ-DR-M', inStock: true },
      { id: 'var-8-6', colorSlug: 'dusty-rose', size: 'L', sku: 'SMJ-DR-L', inStock: false },
    ],
    images: [
      {
        id: 'img-8-1',
        src: '/products/shoes2.png',
        alt: 'Suede Mary Jane Heels in Crimson — double-button strap with wooden heel',
      },
    ],
    rating: 4.6,
    reviewCount: 18,
    tags: ['heels', 'suede', 'mary-jane', 'vintage', 'handcrafted'],
    details: [
      'Premium Italian suede with satin-smooth finish',
      'Double-button adjustable strap for secure fit',
      'Stacked natural wood heel (2.5" height)',
      'Leather-lined with cushioned insole',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'Italian suede from a family-run tannery using traditional methods. Stacked wooden heels sourced from sustainably managed forests. Fully resoleable construction.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-7', 'prod-13', 'prod-14'],
    createdAt: '2025-12-20T00:00:00Z',
  },

  {
    id: 'prod-13',
    slug: 'embroidered-buckle-boots',
    name: 'Embroidered Buckle Boots',
    category: 'shoes',
    price: 18500,
    material: 'Leather & Linen',
    description:
      'A stunning fusion of materials — rich chocolate leather meets natural linen panels adorned with hand-embroidered floral motifs. The brass buckle closure and chunky wooden sole give these boots a distinctive artisan character that turns every walk into a statement.',
    colors: [
      { name: 'Chocolate & Natural', slug: 'chocolate-natural', hex: '#4A2C17' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-13-1', colorSlug: 'chocolate-natural', size: 'S', sku: 'EBB-CN-S', inStock: true },
      { id: 'var-13-2', colorSlug: 'chocolate-natural', size: 'M', sku: 'EBB-CN-M', inStock: true },
      { id: 'var-13-3', colorSlug: 'chocolate-natural', size: 'L', sku: 'EBB-CN-L', inStock: true },
    ],
    images: [
      {
        id: 'img-13-1',
        src: '/products/shoes3.png',
        alt: 'Embroidered Buckle Boots — leather and linen with hand-embroidered florals and brass buckle',
      },
    ],
    rating: 4.9,
    reviewCount: 12,
    tags: ['boots', 'embroidered', 'floral', 'leather', 'artisan', 'new-arrival'],
    details: [
      'Vegetable-tanned leather panels with natural linen inserts',
      'Hand-embroidered floral motifs — each pair is unique',
      'Solid brass buckle closure',
      'Chunky natural wood sole with rubber grip',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'Vegetable-tanned leather paired with organic linen. Embroidery done by hand in our atelier using naturally dyed threads. Built to be repaired and resoled for years of wear.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['new-arrivals', 'autumn-collection'],
    relatedProductIds: ['prod-7', 'prod-8', 'prod-14'],
    createdAt: '2026-01-10T00:00:00Z',
  },

  {
    id: 'prod-14',
    slug: 'daisy-linen-mary-janes',
    name: 'Daisy Linen Mary Janes',
    category: 'shoes',
    price: 11000,
    material: 'Linen & Cotton Lace',
    description:
      'Charming Mary Jane flats in soft lavender linen, trimmed with delicate cotton lace and adorned with hand-embroidered daisy sprigs. The low wooden heel and cushioned insole make these a comfortable choice for long days spent wandering gardens and markets.',
    colors: [
      { name: 'Lavender', slug: 'lavender', hex: '#9B8FAE' },
      { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-14-1', colorSlug: 'lavender', size: 'S', sku: 'DLM-LV-S', inStock: true },
      { id: 'var-14-2', colorSlug: 'lavender', size: 'M', sku: 'DLM-LV-M', inStock: true },
      { id: 'var-14-3', colorSlug: 'lavender', size: 'L', sku: 'DLM-LV-L', inStock: true },
      { id: 'var-14-4', colorSlug: 'natural-white', size: 'S', sku: 'DLM-NW-S', inStock: true },
      { id: 'var-14-5', colorSlug: 'natural-white', size: 'M', sku: 'DLM-NW-M', inStock: true },
      { id: 'var-14-6', colorSlug: 'natural-white', size: 'L', sku: 'DLM-NW-L', inStock: false },
    ],
    images: [
      {
        id: 'img-14-1',
        src: '/products/shoes4.png',
        alt: 'Daisy Linen Mary Janes in Lavender — linen flats with embroidered daisies and lace trim',
      },
    ],
    rating: 4.8,
    reviewCount: 21,
    tags: ['mary-jane', 'linen', 'embroidered', 'daisy', 'lace', 'flats'],
    details: [
      'Soft lavender linen body with cotton lace edging',
      'Hand-embroidered daisy motifs on toe and sides',
      'Low stacked wooden heel (1" height)',
      'Cushioned leather insole for all-day comfort',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'European linen dyed with low-impact plant-based dyes. Handmade cotton lace trim. Embroidery uses naturally dyed silk threads. Packaged in recycled kraft tissue.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals', 'summer-linen'],
    relatedProductIds: ['prod-8', 'prod-7', 'prod-13'],
    createdAt: '2026-01-15T00:00:00Z',
  },

  // ─── BAGS ─────────────────────────────────────────────────────────────────────

  {
    id: 'prod-9',
    slug: 'wildflower-linen-tote',
    name: 'Wildflower Linen Tote',
    category: 'bags',
    price: 6500,
    compareAtPrice: 8500,
    material: 'Organic Linen',
    description:
      'A beautiful everyday tote in soft lavender linen, featuring hand-embroidered Queen Anne\'s lace wildflowers and delicate cotton lace trim with a natural wooden button closure. Roomy enough for all your daily essentials with a soft, lived-in character.',
    colors: [
      { name: 'Lavender', slug: 'lavender', hex: '#9B8FAE' },
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-9-1', colorSlug: 'lavender', size: 'M', sku: 'WLT-LV-M', inStock: true },
      { id: 'var-9-2', colorSlug: 'natural-linen', size: 'M', sku: 'WLT-NL-M', inStock: true },
    ],
    images: [
      {
        id: 'img-9-1',
        src: '/products/bag1.png',
        alt: 'Wildflower Linen Tote in Lavender — embroidered wildflowers with lace trim',
      },
    ],
    rating: 4.8,
    reviewCount: 34,
    tags: ['tote', 'linen', 'embroidered', 'wildflower', 'lace'],
    details: [
      'Soft organic linen body with hand-embroidered wildflower motif',
      'Delicate cotton lace trim along the opening',
      'Natural wooden button closure',
      'Lace-trimmed shoulder straps for comfortable carry',
      'Approximate dimensions: 14" W x 12" H x 4" D',
    ],
    sustainability:
      'European flax linen grown without pesticides. Hand-embroidered by artisans in our atelier. Cotton lace trim from a women-led cooperative. Fully biodegradable materials.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-10', 'prod-15', 'prod-16'],
    createdAt: '2025-08-10T00:00:00Z',
  },

  {
    id: 'prod-10',
    slug: 'garden-crossbody',
    name: 'Garden Crossbody',
    category: 'bags',
    price: 8500,
    material: 'Canvas & Leather',
    description:
      'A charming crossbody bucket bag in deep green canvas with hand-embroidered botanical details and rich brown leather trim. The adjustable leather strap lets you wear it as a shoulder bag or crossbody. Perfectly sized for essentials with a magnetic snap closure.',
    colors: [
      { name: 'Forest Green', slug: 'forest-green', hex: '#2D4A2D' },
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-10-1', colorSlug: 'forest-green', size: 'M', sku: 'GCB-FG-M', inStock: true },
      { id: 'var-10-2', colorSlug: 'terracotta', size: 'M', sku: 'GCB-TC-M', inStock: true },
    ],
    images: [
      {
        id: 'img-10-1',
        src: '/products/bag2.png',
        alt: 'Garden Crossbody in Forest Green — canvas bucket bag with embroidered botanicals and leather trim',
      },
    ],
    rating: 4.7,
    reviewCount: 26,
    tags: ['crossbody', 'canvas', 'leather', 'embroidered', 'botanical'],
    details: [
      'Waxed organic canvas with hand-embroidered botanical motifs',
      'Vegetable-tanned leather trim and adjustable strap',
      'Magnetic snap closure with cotton lining',
      'Interior slip pocket for phone or keys',
      'Approximate dimensions: 9" W x 10" H x 5" D',
    ],
    sustainability:
      'Organic waxed canvas with vegetable-tanned leather accents. Embroidered by hand using naturally dyed threads. Built to develop character and age gracefully over years of use.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-9', 'prod-15', 'prod-16'],
    createdAt: '2025-12-25T00:00:00Z',
  },

  {
    id: 'prod-15',
    slug: 'artisan-leather-tote',
    name: 'Artisan Leather Tote',
    category: 'bags',
    price: 17500,
    material: 'Full-Grain Leather',
    description:
      'A sophisticated tote handcrafted from full-grain leather with solid brass hardware. The structured silhouette holds its shape beautifully while the detachable crossbody strap adds versatility. This is the bag that goes everywhere — from the studio to dinner.',
    colors: [
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
      { name: 'Cognac', slug: 'cognac', hex: '#8B5A2B' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-15-1', colorSlug: 'charcoal', size: 'M', sku: 'ALT-CH-M', inStock: true },
      { id: 'var-15-2', colorSlug: 'cognac', size: 'M', sku: 'ALT-CG-M', inStock: true },
    ],
    images: [
      {
        id: 'img-15-1',
        src: '/products/bag3.png',
        alt: 'Artisan Leather Tote in Charcoal — full-grain leather with brass hardware',
      },
    ],
    rating: 4.9,
    reviewCount: 41,
    tags: ['tote', 'leather', 'full-grain', 'brass', 'structured'],
    details: [
      'Full-grain vegetable-tanned leather develops rich patina',
      'Solid brass rivets, buckles, and zipper hardware',
      'Detachable crossbody strap with brass clips',
      'Cotton canvas lining with interior zip pocket',
      'Approximate dimensions: 13" W x 12" H x 5" D',
    ],
    sustainability:
      'Vegetable-tanned leather from a family-run Tuscan tannery. Solid brass hardware — never plated, never plastic. Built for decades of daily use and fully repairable.',
    isFeatured: true,
    isNewArrival: false,
    collectionIds: ['autumn-collection'],
    relatedProductIds: ['prod-9', 'prod-10', 'prod-16'],
    createdAt: '2025-09-01T00:00:00Z',
  },

  {
    id: 'prod-16',
    slug: 'minimalist-leather-tote',
    name: 'Minimalist Leather Tote',
    category: 'bags',
    price: 14500,
    material: 'Vegetable-Tanned Leather',
    description:
      'Pure simplicity in warm honey-toned vegetable-tanned leather. This clean-lined tote is designed to be your everyday companion, developing a unique patina that tells the story of your days. No excess hardware, no fuss — just beautiful leather and thoughtful construction.',
    colors: [
      { name: 'Honey', slug: 'honey', hex: '#D4943A' },
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-16-1', colorSlug: 'honey', size: 'M', sku: 'MLT-HN-M', inStock: true },
      { id: 'var-16-2', colorSlug: 'natural-linen', size: 'M', sku: 'MLT-NL-M', inStock: true },
    ],
    images: [
      {
        id: 'img-16-1',
        src: '/products/bag4.png',
        alt: 'Minimalist Leather Tote in Honey — clean-lined vegetable-tanned leather',
      },
    ],
    rating: 4.7,
    reviewCount: 52,
    tags: ['tote', 'leather', 'minimalist', 'everyday', 'vegetable-tanned'],
    details: [
      'Premium vegetable-tanned leather in warm honey tone',
      'Hand-stitched reinforced handles',
      'Unlined interior with natural leather finish',
      'Develops unique patina with use',
      'Approximate dimensions: 14" W x 13" H x 4" D',
    ],
    sustainability:
      'Vegetable-tanned using traditional methods — no chromium or heavy metals. Minimal design means minimal waste in production. Built to last a lifetime with proper leather care.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-15', 'prod-9', 'prod-10'],
    createdAt: '2025-07-15T00:00:00Z',
  },

  {
    id: 'prod-17',
    slug: 'wool-envelope-tote',
    name: 'Wool Envelope Tote',
    category: 'bags',
    price: 9500,
    material: 'Felted Wool & Leather',
    description:
      'A striking tote in rich crimson felted wool with a distinctive envelope fold-over design. Contrasting leather handles and a front pocket with linen lining add function to this eye-catching silhouette. Perfect for adding a pop of color to winter and autumn outfits.',
    colors: [
      { name: 'Crimson', slug: 'crimson', hex: '#8B1A1A' },
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-17-1', colorSlug: 'crimson', size: 'M', sku: 'WET-CR-M', inStock: true },
      { id: 'var-17-2', colorSlug: 'charcoal', size: 'M', sku: 'WET-CH-M', inStock: true },
    ],
    images: [
      {
        id: 'img-17-1',
        src: '/products/bag5.png',
        alt: 'Wool Envelope Tote in Crimson — felted wool with leather straps and envelope fold',
      },
    ],
    rating: 4.5,
    reviewCount: 19,
    tags: ['tote', 'wool', 'felted', 'envelope', 'winter', 'new-arrival'],
    details: [
      'Hand-felted wool body in vibrant crimson',
      'Vegetable-tanned leather handles and button snap closure',
      'White linen lining with front pocket',
      'Envelope fold-over design for secure closure',
      'Approximate dimensions: 15" W x 14" H x 3" D',
    ],
    sustainability:
      'Ethically sourced wool felted by hand. Vegetable-tanned leather handles. No synthetic materials — fully natural and biodegradable. Handmade in small batches.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals', 'autumn-collection'],
    relatedProductIds: ['prod-9', 'prod-15', 'prod-16'],
    createdAt: '2026-01-20T00:00:00Z',
  },

  // ─── ACCESSORIES ──────────────────────────────────────────────────────────────

  {
    id: 'prod-11',
    slug: 'crimson-styling-set',
    name: 'Crimson Styling Set',
    category: 'accessories',
    price: 7500,
    compareAtPrice: 9500,
    material: 'Wool, Leather & Pearl',
    description:
      'A curated styling set in rich crimson — a soft wool scarf with fringed edges, a compact pebbled leather crossbody, and a delicate freshwater pearl bracelet. Each piece works beautifully on its own or layered together for a polished, coordinated look.',
    colors: [
      { name: 'Crimson', slug: 'crimson', hex: '#8B1A1A' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-11-1', colorSlug: 'crimson', size: 'M', sku: 'CSS-CR-M', inStock: true },
    ],
    images: [
      {
        id: 'img-11-1',
        src: '/products/accessories1.png',
        alt: 'Crimson Styling Set — wool scarf, leather crossbody bag, and pearl bracelet flat lay',
      },
    ],
    rating: 4.8,
    reviewCount: 29,
    tags: ['set', 'scarf', 'bracelet', 'pearl', 'styling', 'gift'],
    details: [
      'Soft felted wool scarf with hand-fringed edges (68" x 20")',
      'Compact pebbled leather crossbody with gold-tone zipper',
      'Freshwater pearl bracelet on elastic cord',
      'Gift-ready packaging included',
      'Each piece also sold separately',
    ],
    sustainability:
      'Ethically sourced wool, vegetable-tanned leather, and sustainably harvested freshwater pearls. Packaged in reusable organic cotton gift wrap.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['gift-sets'],
    relatedProductIds: ['prod-12', 'prod-18', 'prod-19'],
    createdAt: '2025-06-01T00:00:00Z',
  },

  {
    id: 'prod-12',
    slug: 'botanical-hair-clip',
    name: 'Botanical Hair Clip',
    category: 'accessories',
    price: 3800,
    material: 'Driftwood & Silk Flowers',
    description:
      'A one-of-a-kind hair clip fashioned from natural driftwood, wrapped with brass wire and adorned with hand-crafted silk flowers and leaves. This wearable piece of art brings a touch of woodland magic to every hairstyle.',
    colors: [
      { name: 'Natural', slug: 'natural', hex: '#B5A08A' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-12-1', colorSlug: 'natural', size: 'M', sku: 'BHC-NA-M', inStock: true },
    ],
    images: [
      {
        id: 'img-12-1',
        src: '/products/accessories2.png',
        alt: 'Botanical Hair Clip — driftwood with handcrafted silk flowers and brass wire',
      },
    ],
    rating: 4.9,
    reviewCount: 37,
    tags: ['hair-clip', 'botanical', 'driftwood', 'silk', 'handcrafted'],
    details: [
      'Natural driftwood base — each piece is unique',
      'Hand-sculpted silk flowers with realistic detail',
      'Brass wire wrapping with secure clasp mechanism',
      'Suitable for half-up styles, buns, and ponytails',
      'Arrives in a reusable cotton muslin pouch',
    ],
    sustainability:
      'Foraged driftwood from California beaches. Silk flowers hand-dyed with plant-based dyes. Brass wire is recycled. Each clip is truly one-of-a-kind.',
    isFeatured: true,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-11', 'prod-18', 'prod-19'],
    createdAt: '2026-01-01T00:00:00Z',
  },

  {
    id: 'prod-18',
    slug: 'dried-flower-brooch',
    name: 'Dried Flower Brooch',
    category: 'accessories',
    price: 2800,
    material: 'Dried Flowers & Lace',
    description:
      'A delicate brooch featuring a miniature bouquet of preserved baby\'s breath, wrapped in vintage-style lace and tied with natural jute twine. Pin it to a lapel, hat, or bag for an instant touch of botanical charm.',
    colors: [
      { name: 'Natural White', slug: 'natural-white', hex: '#F0EBE3' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-18-1', colorSlug: 'natural-white', size: 'M', sku: 'DFB-NW-M', inStock: true },
    ],
    images: [
      {
        id: 'img-18-1',
        src: '/products/accessories3.png',
        alt: 'Dried Flower Brooch — baby\'s breath bouquet with lace and jute twine on linen',
      },
    ],
    rating: 4.6,
    reviewCount: 22,
    tags: ['brooch', 'dried-flowers', 'lace', 'botanical', 'vintage'],
    details: [
      'Preserved baby\'s breath that lasts for years',
      'Vintage-style cotton lace wrapping',
      'Natural jute twine bow detail',
      'Secure brass pin backing',
      'Approximate size: 3" long x 2" wide',
    ],
    sustainability:
      'Made from naturally preserved flowers — no chemical dyes or treatments. Biodegradable materials throughout. Handmade in our LA studio in small batches.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals'],
    relatedProductIds: ['prod-12', 'prod-11', 'prod-19'],
    createdAt: '2026-02-01T00:00:00Z',
  },

  {
    id: 'prod-19',
    slug: 'summer-styling-collection',
    name: 'Summer Styling Collection',
    category: 'accessories',
    price: 12500,
    material: 'Straw, Rose Quartz & Leather',
    description:
      'Everything you need for effortless summer style — a hand-woven straw hat with dried flower accent, a rose quartz pendant necklace with matching drop earrings, all styled to complement our linen dresses and espadrilles. A complete look in one thoughtfully curated set.',
    colors: [
      { name: 'Natural', slug: 'natural', hex: '#B5A08A' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-19-1', colorSlug: 'natural', size: 'M', sku: 'SSC-NA-M', inStock: true },
    ],
    images: [
      {
        id: 'img-19-1',
        src: '/products/accessories4.png',
        alt: 'Summer Styling Collection — straw hat, rose quartz jewelry, and styling flat lay',
      },
    ],
    rating: 4.7,
    reviewCount: 15,
    tags: ['set', 'hat', 'jewelry', 'rose-quartz', 'summer', 'styling'],
    details: [
      'Hand-woven natural straw hat with dried flower accent',
      'Rose quartz pendant on black leather cord',
      'Matching rose quartz drop earrings on sterling silver hooks',
      'Gift-ready presentation in organic cotton box',
      'Hat: one size fits most (adjustable inner band)',
    ],
    sustainability:
      'Sustainably harvested straw hand-woven by artisans. Ethically sourced rose quartz from small-scale mines. Sterling silver from recycled sources. Zero-plastic packaging.',
    isFeatured: false,
    isNewArrival: true,
    collectionIds: ['new-arrivals', 'summer-linen', 'gift-sets'],
    relatedProductIds: ['prod-11', 'prod-12', 'prod-18'],
    createdAt: '2026-02-10T00:00:00Z',
  },

  {
    id: 'prod-20',
    slug: 'heirloom-locket-set',
    name: 'Heirloom Locket Set',
    category: 'accessories',
    price: 6500,
    compareAtPrice: 8500,
    material: 'Brass & Cotton Lace',
    description:
      'A vintage-inspired set featuring a botanical pressed-flower locket on an antiqued brass chain, paired with a hand-crocheted cotton lace bow. The locket opens to reveal a tiny preserved flower, making it a meaningful keepsake or a perfect gift.',
    colors: [
      { name: 'Antique Brass', slug: 'antique-brass', hex: '#8B7355' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-20-1', colorSlug: 'antique-brass', size: 'M', sku: 'HLS-AB-M', inStock: true },
    ],
    images: [
      {
        id: 'img-20-1',
        src: '/products/accessories5.png',
        alt: 'Heirloom Locket Set — antiqued brass botanical locket with cotton lace bow',
      },
    ],
    rating: 4.8,
    reviewCount: 33,
    tags: ['locket', 'necklace', 'lace', 'bow', 'vintage', 'gift', 'botanical'],
    details: [
      'Antiqued brass locket with real pressed flower inside',
      'Long brass chain (28" length) — adjustable',
      'Hand-crocheted cotton lace bow brooch/hair clip',
      'Matching brass ring with pressed flower also included',
      'Arrives in a vintage-style keepsake box',
    ],
    sustainability:
      'Recycled brass findings. Pressed flowers from our garden. Hand-crocheted cotton lace from organic thread. Each set is handmade — no two are exactly alike.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['gift-sets'],
    relatedProductIds: ['prod-12', 'prod-18', 'prod-19'],
    createdAt: '2025-11-01T00:00:00Z',
  },
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function getNewArrivals(): Product[] {
  return products.filter((product) => product.isNewArrival);
}

export function getSaleProducts(): Product[] {
  return products.filter(
    (product) => product.compareAtPrice && product.compareAtPrice > product.price
  );
}
