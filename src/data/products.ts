/**
 * D&D Home Decor — Centralized Product Catalog
 *
 * NOTE FOR D&D CLIENT HANDOFF:
 * When D&D provides their actual product/installation photographs:
 * 1. Drop their images into public/images/products/
 * 2. Update the `heroImage` and `galleryImages` URLs below
 * 3. Tweak the features or notes as needed
 * The entire website automatically renders their real photos!
 */

export interface ProductItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  category: string;
  filterGroup: 'WINDOWS' | 'LIVING' | 'WALLS' | 'DECOR';
  whatsappMessage: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
  features: string[];
  stylingTips: string[];
  materialsAndCare: {
    materials: string;
    maintenance: string;
    recommendedRooms: string;
  };
}

export const productsData: ProductItem[] = [
  {
    slug: 'curtains',
    number: '01',
    title: 'CURTAINS',
    subtitle: 'Frame the light. Shape the mood.',
    description:
      'From soft textures to statement fabrics, curtains can transform the atmosphere of an entire room.',
    ctaText: 'EXPLORE CURTAINS →',
    category: 'Window Treatments',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hi D&D Home Decor, I’m interested in curtains and would like to know more about fabrics, sizing and styles.',
    heroImage:
      '/images/products/curtains.png',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
        caption: 'Floor-to-ceiling sheer linen framing warm natural sunlight.',
      },
      {
        url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
        caption: 'Textured blackout drapes in calming neutral bedroom tones.',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        caption: 'Double-track sheer and main curtain layering for flexible privacy.',
      },
    ],
    features: [
      'Custom width & drop dimensions tailored to your windows',
      'Extensive choice of sheer, semi-sheer, and blackout weaves',
      'Pleat styles: Pinch pleat, eyelet, ripple fold, and rod pocket',
      'Smooth, whisper-quiet tracks and decorative finial rods',
    ],
    stylingTips: [
      'Hang tracks close to the ceiling to visually elongate room height.',
      'Combine sheers for daytime illumination with lined curtains for night privacy.',
      'Select warm neutral palettes to keep spaces bright and airy.',
    ],
    materialsAndCare: {
      materials: 'Pure linen blends, poly-cottons, textured jacquards, and velvet accents.',
      maintenance: 'Gentle machine wash or professional dry clean depending on fabric weave.',
      recommendedRooms: 'Living rooms, master bedrooms, dining areas, and balconies.',
    },
  },
  {
    slug: 'zebra-blinds',
    number: '02',
    title: 'ZEBRA BLINDS',
    subtitle: 'Light, privacy and modern simplicity.',
    description:
      'A versatile window solution that lets you control light while keeping a clean contemporary look.',
    ctaText: 'EXPLORE BLINDS →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hi D&D Home Decor, I’m interested in zebra blinds and would like to explore patterns and pricing.',
    heroImage:
      '/images/products/zebra-blinds.png',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Alternating sheer and solid fabric stripes for effortless light diffusion.',
      },
      {
        url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
        caption: 'Minimalist window cassette matching contemporary trim.',
      },
      {
        url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80',
        caption: 'Streamlined light control in modern study and home workspaces.',
      },
    ],
    features: [
      'Dual-layer alternating sheer and privacy vanes',
      'Precise transition from filtered daylight to full visual privacy',
      'Sleek aluminum top-cassette concealing roll mechanism',
      'Smooth ball-chain or motorized remote options',
    ],
    stylingTips: [
      'Align stripes horizontally to soften harsh afternoon glare.',
      'Choose soft grey or beige tones to complement modern wall colors.',
      'Ideal for windows above desks or counters where fabric pooling is impractical.',
    ],
    materialsAndCare: {
      materials: 'Anti-static woven polyester with thermal-sealed non-fray edges.',
      maintenance: 'Occasional light feather dusting or gentle damp cloth wipe.',
      recommendedRooms: 'Bedrooms, study rooms, apartment balconies, and living niches.',
    },
  },
  {
    slug: 'pvc-blinds',
    number: '03',
    title: 'PVC BLINDS',
    subtitle: 'Practical. Clean. Versatile.',
    description:
      'A simple window treatment solution for spaces where functionality and easy maintenance matter.',
    ctaText: 'DISCOVER MORE →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hi D&D Home Decor, I’m interested in PVC blinds for practical and moisture-prone spaces.',
    heroImage:
      '/images/products/pvc-blinds.png',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
        caption: 'Moisture-resistant slat treatments tailored for kitchen window spans.',
      },
      {
        url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80',
        caption: 'Clean, wipeable slats resisting humidity and heat.',
      },
      {
        url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80',
        caption: 'Compact profile fitting neatly within window frame reveals.',
      },
    ],
    features: [
      '100% moisture and humidity resistant construction',
      'Wipe-clean surface that resists dust, grease and splatters',
      'Precision tilt wand for angle-specific light adjustment',
      'Durable UV-stabilized material that avoids warping and discoloration',
    ],
    stylingTips: [
      'Fit within the window reveal for a flush, architectural appearance.',
      'Pair neutral slats with warm wall colors to balance clean functionality with comfort.',
      'A go-to solution for kitchen wash areas and utility zones.',
    ],
    materialsAndCare: {
      materials: 'High-density extruded PVC with UV-inhibitor coating.',
      maintenance: 'Wipes clean in seconds with soapy water and microfiber sponge.',
      recommendedRooms: 'Kitchens, utility spaces, bathrooms, and high-humidity areas.',
    },
  },
  {
    slug: 'custom-sofas',
    number: '04',
    title: 'CUSTOM SOFAS',
    subtitle: 'Made around your space.',
    description:
      'Bring comfort and character into your living room with sofa designs selected around your space, style and everyday needs.',
    ctaText: 'EXPLORE SOFAS →',
    category: 'Living Space',
    filterGroup: 'LIVING',
    whatsappMessage:
      'Hi D&D Home Decor, I’m interested in custom sofas and would like to discuss sizing, fabrics and designs.',
    heroImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
        caption: 'Tactile textured upholstery with deep ergonomic seating comfort.',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        caption: 'L-shaped sectional proportioned to anchor family gatherings.',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
        caption: 'Handcrafted solid framework with tailored piping and cushion stitch details.',
      },
    ],
    features: [
      'Tailored dimensions: 3-seater, L-shaped sectional, or modular configs',
      'Premium stain-guarded fabric, chenille, bouclé, and leatherette swatches',
      'High-resilience memory foam core for lasting ergonomic support',
      'Solid kiln-dried internal hardwood structure for long-term stability',
    ],
    stylingTips: [
      'Select sofa depth based on how your family relaxes—deep seating for lounging.',
      'Layer with contrasting cushions in earthy terracotta and warm mustard tones.',
      'Allow at least 18 inches of clearance between the coffee table and sofa edge.',
    ],
    materialsAndCare: {
      materials: 'Kiln-dried hardwood frame, high-density foam, performance upholstery.',
      maintenance: 'Regular vacuuming with upholstery nozzle; spot-clean stains promptly.',
      recommendedRooms: 'Formal living rooms, family lounges, and media rooms.',
    },
  },
  {
    slug: 'wallpapers',
    number: '05',
    title: 'WALLPAPERS',
    subtitle: 'Give your walls a point of view.',
    description:
      'Patterns, textures and tones that can turn an ordinary wall into a defining feature of the room.',
    ctaText: 'EXPLORE WALLPAPERS →',
    category: 'Wall Treatments',
    filterGroup: 'WALLS',
    whatsappMessage:
      'Hi D&D Home Decor, I’m interested in wallpapers and would like to see catalog designs for accent walls.',
    heroImage:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        caption: 'Subtle textured grasscloth giving tactile warmth to bed accent wall.',
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
        caption: 'Modern botanical and geometric motifs with rich matte undertones.',
      },
      {
        url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=80',
        caption: 'Seamless finish with delicate metallic and textured embossings.',
      },
    ],
    features: [
      'Textured vinyl, non-woven, metallic, and natural fiber collections',
      'Washable and scratch-resistant surface coatings',
      'Breathable backings preventing moisture entrapment',
      'Precise pattern matching and seamless installation',
    ],
    stylingTips: [
      'Choose a focal wall behind the bed or TV console for maximum visual impact.',
      'Pair textured linen-look wallpaper with brass or warm wooden wall sconces.',
      'Small rooms benefit from soft vertical textures that make ceilings feel higher.',
    ],
    materialsAndCare: {
      materials: 'Heavyweight non-woven substrate with textured matte vinyl coatings.',
      maintenance: 'Gently wipe with dry cloth or lightly damp sponge; avoid abrasive scrubbers.',
      recommendedRooms: 'Accent walls in living rooms, bedrooms, foyers, and dining niches.',
    },
  },
  {
    slug: 'home-decor',
    number: '06',
    title: 'HOME DÉCOR',
    subtitle: 'The details complete the space.',
    description:
      'Thoughtfully chosen finishing details that bring furniture, fabrics, walls and interiors together.',
    ctaText: 'DISCOVER DÉCOR →',
    category: 'Finishing Details',
    filterGroup: 'DECOR',
    whatsappMessage:
      'Hi D&D Home Decor, I’m looking for home décor finishing details, cushions and lighting accents.',
    heroImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80',
        caption: 'Curated artisanal ceramic vessels and sculptural tabletop accents.',
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
        caption: 'Architectural mood lighting casting warm evening warmth.',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        caption: 'Layered hand-loomed cushions and soft throws in organic earthy tones.',
      },
    ],
    features: [
      'Artisanal ceramic vases, stoneware plinths, and tabletop objects',
      'Architectural table lamps and warm ambient lighting fixtures',
      'Bespoke cushions, floor rugs, and breathable cotton-linen throws',
      'Decorative wall mirrors and framed art pieces designed for Indian homes',
    ],
    stylingTips: [
      'Group objects in odd numbers (groups of 3 or 5) for effortless visual balance.',
      'Mix rough stone or ceramics with smooth wood and soft fabrics.',
      'Use lighting at three different heights (ceiling, floor, and table) for depth.',
    ],
    materialsAndCare: {
      materials: 'Natural clay, brushed brass, handwoven linen, and sustainably sourced timber.',
      maintenance: 'Dust weekly with a soft cloth; gently air cushions and throws.',
      recommendedRooms: 'Coffee tables, console tops, entryway niches, and bedside stands.',
    },
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAdjacentProducts(currentSlug: string): {
  prev: ProductItem;
  next: ProductItem;
} {
  const currentIndex = productsData.findIndex((p) => p.slug === currentSlug);
  const prevIndex = (currentIndex - 1 + productsData.length) % productsData.length;
  const nextIndex = (currentIndex + 1) % productsData.length;
  return {
    prev: productsData[prevIndex],
    next: productsData[nextIndex],
  };
}
