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
    slug: 'artisan-leather-slide',
    name: 'Artisan Leather Slide',
    category: 'shoes',
    price: 12000,
    material: 'Vegetable-Tanned Leather',
    description:
      'A timeless leather slide handcrafted from vegetable-tanned Italian leather. The wide crossover strap is shaped by hand over a contoured footbed for all-day comfort. These slides develop a rich patina over time, becoming uniquely yours with every wear.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-7-1', colorSlug: 'natural-linen', size: 'S', sku: 'ALS-NL-S', inStock: true },
      { id: 'var-7-2', colorSlug: 'natural-linen', size: 'M', sku: 'ALS-NL-M', inStock: true },
      { id: 'var-7-3', colorSlug: 'natural-linen', size: 'L', sku: 'ALS-NL-L', inStock: true },
      { id: 'var-7-4', colorSlug: 'terracotta', size: 'S', sku: 'ALS-TC-S', inStock: true },
      { id: 'var-7-5', colorSlug: 'terracotta', size: 'M', sku: 'ALS-TC-M', inStock: true },
      { id: 'var-7-6', colorSlug: 'terracotta', size: 'L', sku: 'ALS-TC-L', inStock: false },
      { id: 'var-7-7', colorSlug: 'charcoal', size: 'S', sku: 'ALS-CH-S', inStock: true },
      { id: 'var-7-8', colorSlug: 'charcoal', size: 'M', sku: 'ALS-CH-M', inStock: true },
    ],
    images: [
      {
        id: 'img-7-1',
        src: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu.png',
        alt: 'Artisan Leather Slide in Natural — crossover strap detail',
      },
    ],
    rating: 4.7,
    reviewCount: 23,
    tags: ['leather', 'slides', 'handcrafted', 'vegetable-tanned', 'italian'],
    details: [
      'Handcrafted from vegetable-tanned Italian leather',
      'Wide crossover strap molds to the foot over time',
      'Contoured cork and latex footbed for arch support',
      'Leather sole with natural rubber heel insert',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'Vegetable-tanned in Tuscany using centuries-old bark tanning methods — no chromium or heavy metals. Cork footbed is sustainably harvested. Fully repairable and resoleable.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-8', 'prod-1', 'prod-2'],
    createdAt: '2025-10-15T00:00:00Z',
  },

  {
    id: 'prod-8',
    slug: 'woven-sandals',
    name: 'Woven Sandals',
    category: 'shoes',
    price: 8500,
    material: 'Natural Raffia',
    description:
      'Lightweight sandals hand-woven from natural raffia by artisans in Madagascar. The intricate basket-weave pattern creates a texture that is both casual and refined. A comfortable leather-lined footbed and flexible sole make these your go-to warm-weather shoe.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
    ],
    sizes: ['S', 'M', 'L'],
    variants: [
      { id: 'var-8-1', colorSlug: 'natural-linen', size: 'S', sku: 'WSD-NL-S', inStock: true },
      { id: 'var-8-2', colorSlug: 'natural-linen', size: 'M', sku: 'WSD-NL-M', inStock: true },
      { id: 'var-8-3', colorSlug: 'natural-linen', size: 'L', sku: 'WSD-NL-L', inStock: true },
      { id: 'var-8-4', colorSlug: 'sage-green', size: 'S', sku: 'WSD-SG-S', inStock: true },
      { id: 'var-8-5', colorSlug: 'sage-green', size: 'M', sku: 'WSD-SG-M', inStock: true },
      { id: 'var-8-6', colorSlug: 'sage-green', size: 'L', sku: 'WSD-SG-L', inStock: false },
    ],
    images: [
      {
        id: 'img-8-1',
        src: '/products/Looking_at_the_camera_2k_delpmaspu.png',
        alt: 'Woven Sandals in Natural — showing raffia basket-weave texture',
      },
    ],
    rating: 4.4,
    reviewCount: 16,
    tags: ['raffia', 'woven', 'sandals', 'handmade', 'summer'],
    details: [
      'Hand-woven from sustainably harvested natural raffia',
      'Vegetable-tanned leather lining and insole',
      'Flexible natural rubber outsole',
      'Adjustable buckle closure at ankle',
      'Sizes: S (5-6), M (7-8), L (9-10)',
    ],
    sustainability:
      'Raffia sustainably harvested in Madagascar, supporting local communities and reforestation efforts. Hand-woven by a women-led artisan cooperative. Fully biodegradable materials.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-7', 'prod-9', 'prod-10'],
    createdAt: '2025-09-20T00:00:00Z',
  },

  // ─── BAGS ─────────────────────────────────────────────────────────────────────

  {
    id: 'prod-9',
    slug: 'market-basket',
    name: 'Market Basket',
    category: 'bags',
    price: 6500,
    material: 'Handwoven Seagrass',
    description:
      'A classic open-top market basket hand-woven from sustainably harvested seagrass. Reinforced with leather handles and a cotton lining, this basket is equally at home at the farmers market, the beach, or slung over your arm on a summer stroll. Each basket takes a full day to weave by hand.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-9-1', colorSlug: 'natural-linen', size: 'M', sku: 'MKB-NL-M', inStock: true },
      { id: 'var-9-2', colorSlug: 'terracotta', size: 'M', sku: 'MKB-TC-M', inStock: true },
    ],
    images: [
      {
        id: 'img-9-1',
        src: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu (1).png',
        alt: 'Market Basket in Natural — showing seagrass weave and leather handles',
      },
    ],
    rating: 4.8,
    reviewCount: 34,
    tags: ['basket', 'seagrass', 'market', 'handwoven', 'summer'],
    details: [
      'Hand-woven from sustainably harvested seagrass',
      'Reinforced vegetable-tanned leather handles',
      'Organic cotton interior lining with small pocket',
      'Approximate dimensions: 14" W x 10" H x 6" D',
      'Spot clean only — natural material will age beautifully',
    ],
    sustainability:
      'Seagrass sustainably harvested from managed wetlands in Vietnam. Woven by a fair-trade artisan cooperative. Leather handles use vegetable-tanned offcuts, minimizing waste.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-10', 'prod-7', 'prod-8'],
    createdAt: '2025-08-10T00:00:00Z',
  },

  {
    id: 'prod-10',
    slug: 'linen-tote',
    name: 'Linen Tote',
    category: 'bags',
    price: 4500,
    material: 'Organic Linen',
    description:
      'An everyday carryall in heavyweight organic linen with reinforced stitching and roomy interior. The Linen Tote features an internal zip pocket for valuables and long shoulder straps for comfortable carrying. Simple, sturdy, and endlessly versatile.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
      { name: 'Charcoal', slug: 'charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-10-1', colorSlug: 'natural-linen', size: 'M', sku: 'LTB-NL-M', inStock: true },
      { id: 'var-10-2', colorSlug: 'sage-green', size: 'M', sku: 'LTB-SG-M', inStock: true },
      { id: 'var-10-3', colorSlug: 'charcoal', size: 'M', sku: 'LTB-CH-M', inStock: true },
    ],
    images: [
      {
        id: 'img-10-1',
        src: '/products/Korean_girl_with_black_hairis_walking_in_the_city__delpmaspu.png',
        alt: 'Linen Tote in Natural Linen — showing full bag with shoulder straps',
      },
    ],
    rating: 4.6,
    reviewCount: 48,
    tags: ['tote', 'linen', 'everyday', 'organic', 'carryall'],
    details: [
      'Made from heavyweight OEKO-TEX certified organic linen',
      'Reinforced double-stitched seams throughout',
      'Internal zip pocket and open organizer pocket',
      'Long shoulder straps with 12" drop',
      'Approximate dimensions: 16" W x 14" H x 5" D',
    ],
    sustainability:
      'European flax linen grown without pesticides or irrigation. OEKO-TEX Standard 100 certified. Sewn in our Los Angeles studio with zero-waste pattern cutting. Machine washable — lasts for years.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: ['summer-linen'],
    relatedProductIds: ['prod-9', 'prod-11', 'prod-12'],
    createdAt: '2025-07-15T00:00:00Z',
  },

  // ─── ACCESSORIES ──────────────────────────────────────────────────────────────

  {
    id: 'prod-11',
    slug: 'selene-gold-drops',
    name: 'Selene Gold Drops',
    category: 'accessories',
    price: 5500,
    material: '14k Gold Plated',
    description:
      'Delicate drop earrings hand-formed from recycled brass and finished with a lustrous 14k gold plate. The organic, slightly irregular teardrop shape catches the light from every angle — a quiet statement piece that elevates any outfit from simple to considered.',
    colors: [
      { name: 'Natural Linen', slug: 'natural-linen', hex: '#E8DFD0' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-11-1', colorSlug: 'natural-linen', size: 'M', sku: 'SGD-NL-M', inStock: true },
      { id: 'var-11-2', colorSlug: 'dusty-rose', size: 'M', sku: 'SGD-DR-M', inStock: true },
    ],
    images: [
      {
        id: 'img-11-1',
        src: '/products/Change_it_to_portrait_2k_delpmaspu.png',
        alt: 'Selene Gold Drops — teardrop earrings showing organic gold finish',
      },
    ],
    rating: 4.8,
    reviewCount: 29,
    tags: ['earrings', 'gold', 'drops', 'handformed', 'recycled'],
    details: [
      'Hand-formed from 100% recycled brass',
      'Finished with 14k gold plating (nickel-free)',
      'Hypoallergenic stainless steel ear hooks',
      'Each pair is slightly unique due to handmade process',
      'Arrives in a reusable organic cotton jewelry pouch',
    ],
    sustainability:
      'Crafted from 100% recycled brass sourced from post-industrial waste. 14k gold plating is cadmium and nickel free. Packaged in compostable boxes with organic cotton pouches.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: [],
    relatedProductIds: ['prod-12', 'prod-1', 'prod-3'],
    createdAt: '2025-06-01T00:00:00Z',
  },

  {
    id: 'prod-12',
    slug: 'clay-earrings',
    name: 'Clay Earrings',
    category: 'accessories',
    price: 4500,
    material: 'Handcrafted Polymer Clay',
    description:
      'Lightweight statement earrings hand-sculpted from premium polymer clay. Each pair features a unique terrazzo-inspired pattern created by layering and blending colored clays before shaping. The organic arch silhouette frames the face beautifully and feels weightless to wear.',
    colors: [
      { name: 'Terracotta', slug: 'terracotta', hex: '#C67D5B' },
      { name: 'Sage Green', slug: 'sage-green', hex: '#8B9A7B' },
      { name: 'Dusty Rose', slug: 'dusty-rose', hex: '#D4A0A0' },
    ],
    sizes: ['M'],
    variants: [
      { id: 'var-12-1', colorSlug: 'terracotta', size: 'M', sku: 'CLE-TC-M', inStock: true },
      { id: 'var-12-2', colorSlug: 'sage-green', size: 'M', sku: 'CLE-SG-M', inStock: true },
      { id: 'var-12-3', colorSlug: 'dusty-rose', size: 'M', sku: 'CLE-DR-M', inStock: true },
    ],
    images: [
      {
        id: 'img-12-1',
        src: '/products/Korean_girl_with_short_hairsitting_on_the_chair_ou_delpmaspu.png',
        alt: 'Clay Earrings in Terracotta — arch-shaped terrazzo pattern',
      },
    ],
    rating: 4.5,
    reviewCount: 37,
    tags: ['earrings', 'clay', 'polymer', 'statement', 'terrazzo', 'lightweight'],
    details: [
      'Hand-sculpted from premium polymer clay',
      'Unique terrazzo-inspired pattern — no two pairs are identical',
      'Lightweight arch silhouette (under 8 grams per earring)',
      'Stainless steel ear posts (hypoallergenic)',
      'Water-resistant finish — handle with care to preserve pattern',
    ],
    sustainability:
      'Handmade in small batches in our LA studio. Polymer clay scraps are reclaimed and reblended into new colorways, creating zero waste. Packaged in recycled kraft paper.',
    isFeatured: false,
    isNewArrival: false,
    collectionIds: [],
    relatedProductIds: ['prod-11', 'prod-9', 'prod-10'],
    createdAt: '2025-05-15T00:00:00Z',
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
