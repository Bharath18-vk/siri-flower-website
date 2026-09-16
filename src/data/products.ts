/**
 * D&D Home Decor — Centralized Product Catalog
 * Comprehensive authentic product catalog based on verified client offerings.
 * Real D&D photography is used for portfolio items.
 */

export interface ProductItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  category: string;
  filterGroup: 'WINDOWS' | 'FURNITURE' | 'MATTRESSES' | 'WALLS' | 'DECOR';
  whatsappMessage: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
  features: string[];
  suitableSpaces: string[];
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
    title: 'CUSTOMISED CURTAINS',
    subtitle: 'Frame the light. Shape the mood.',
    description:
      'Beautifully customised curtains designed around your windows, interiors and aesthetic requirements. From soft sheer textures that diffuse natural daylight to rich pleated drapes that offer privacy and warmth.',
    ctaText: 'EXPLORE CURTAINS →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in customised curtains. I would like to know more about the available options.',
    heroImage: '/images/dd/curtains/curtain-02.jpeg',
    galleryImages: [
      {
        url: '/images/dd/curtains/curtain-12.jpeg',
        caption: 'Symmetrical floor-to-ceiling sheer and drapery installation.',
      },
      {
        url: '/images/dd/curtains/curtain-05.jpeg',
        caption: 'Recessed ceiling track drapes in modern Bengaluru apartment.',
      },
      {
        url: '/images/dd/curtains/curtain-08.jpeg',
        caption: 'Warm ambient room composition with layered sheer and blackout panels.',
      },
      {
        url: '/images/dd/curtains/curtain-03.jpeg',
        caption: 'Custom drop sheer panels tailored for bedroom window reveal.',
      },
    ],
    features: [
      'Tailored dimensions custom made for each window span',
      'Dual track configurations combining sheer daytime illumination and evening drapes',
      'Pleat styles: Pinch pleat, ripple fold, eyelet, and American pleat options',
      'Whisper-quiet tracks, motorized options, and decorative finial rods',
    ],
    suitableSpaces: [
      'Villas & Independent Houses',
      'Apartments & Residential Flats',
      'Corporate Offices & Boardrooms',
      'Commercial Showrooms & Studios',
    ],
    stylingTips: [
      'Mount ceiling tracks flush to visually heighten room proportions.',
      'Pair sheer linen-look fabrics with solid lined drapery for versatile lighting control.',
      'Neutral tones (ivory, warm beige, soft grey) blend seamlessly with modern Indian interiors.',
    ],
    materialsAndCare: {
      materials: 'Fine linen blends, poly-cottons, textured jacquards, and velvet accents.',
      maintenance: 'Gentle dry clean or delicate machine cycle depending on chosen fabric weave.',
      recommendedRooms: 'Living rooms, master suites, dining areas, balconies, and conference rooms.',
    },
  },
  {
    slug: 'zebra-blinds',
    number: '02',
    title: 'ZEBRA BLINDS',
    subtitle: 'Light, privacy and modern simplicity.',
    description:
      'Dual-layer alternating sheer and solid fabric vanes that glide past each other to provide continuous light control from soft glow to complete privacy.',
    ctaText: 'EXPLORE ZEBRA BLINDS →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in zebra blinds. Please share more details.',
    heroImage: '/images/dd/blinds/blind-01.jpeg',
    galleryImages: [
      {
        url: '/images/dd/blinds/blind-24.jpeg',
        caption: 'Flush window reveal installation with horizontal privacy vanes.',
      },
      {
        url: '/images/dd/blinds/blind-20.jpeg',
        caption: 'Bedroom zebra blind providing refined daylight filtering.',
      },
      {
        url: '/images/dd/blinds/blind-16.jpeg',
        caption: 'Contemporary dual-tone stripes complementing modern interiors.',
      },
    ],
    features: [
      'Dual-layer alternating sheer and privacy vanes',
      'Precise transition from filtered daylight to visual privacy',
      'Sleek aluminum top-cassette concealing roll mechanism',
      'Smooth ball-chain control or automated motorized operation',
    ],
    suitableSpaces: [
      'Apartments & Flats',
      'Bedrooms & Study Rooms',
      'Modern Office Workspaces',
      'Balconies & Utility Areas',
    ],
    stylingTips: [
      'Align stripes horizontally to soften harsh afternoon glare.',
      'Select neutral charcoal, beige or warm grey tones to pair with contemporary wall colors.',
      'Ideal for windows above desks, kitchen slabs, or counters.',
    ],
    materialsAndCare: {
      materials: 'Anti-static woven polyester with thermal-sealed non-fray edges.',
      maintenance: 'Occasional light feather dusting or gentle damp cloth wipe.',
      recommendedRooms: 'Bedrooms, study rooms, home offices, and apartment living niches.',
    },
  },
  {
    slug: 'roller-blinds',
    number: '03',
    title: 'ROLLER & ROMAN BLINDS',
    subtitle: 'Streamlined minimalism for contemporary spaces.',
    description:
      'Clean architectural window solutions offering high performance light blocking and solar heat reduction with an ultra-compact footprint.',
    ctaText: 'EXPLORE ROLLER BLINDS →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in roller and roman blinds. Please share fabric options and details.',
    heroImage: '/images/dd/blinds/blind-06.jpeg',
    galleryImages: [
      {
        url: '/images/dd/blinds/blind-13.jpeg',
        caption: 'Streamlined roller blind installation for study room windows.',
      },
      {
        url: '/images/dd/blinds/blind-25.jpeg',
        caption: 'Clean window finish preserving natural view and privacy.',
      },
      {
        url: '/images/dd/blinds/blind-22.jpeg',
        caption: 'Compact profile fitting neatly inside window reveals.',
      },
    ],
    features: [
      'Blackout and solar sunscreen fabric choices',
      'Roman fold configurations creating soft horizontal fabric tiers',
      'Heavy-duty aluminum roller tubes ensuring straight hang without bowing',
      'Child-safe control mechanisms and motorized remote integration',
    ],
    suitableSpaces: [
      'Media Rooms & Home Theatres',
      'Executive Office Cabins',
      'Bedrooms requiring full morning blackout',
      'Sunny south-facing windows',
    ],
    stylingTips: [
      'Install inside the window recess for a tailored architectural look.',
      'Layer a roller blackout behind sheer curtains for the ultimate balance of beauty and utility.',
    ],
    materialsAndCare: {
      materials: 'UV-resistant coated fabrics, blackout fiberglass weaves, and textured poly blends.',
      maintenance: 'Wipe clean with a microfiber cloth and mild soapy water.',
      recommendedRooms: 'Bedrooms, media rooms, home offices, and meeting spaces.',
    },
  },
  {
    slug: 'pvc-blinds',
    number: '04',
    title: 'PVC & VENETIAN BLINDS',
    subtitle: 'Durable. Moisture-resistant. Easy maintenance.',
    description:
      'Engineered for areas subject to humidity, grease, and direct splash. Wipe-clean slats offer precise angle tilt to direct sunlight without sacrificing durability.',
    ctaText: 'EXPLORE PVC BLINDS →',
    category: 'Window Solutions',
    filterGroup: 'WINDOWS',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in PVC and Venetian blinds for practical and moisture-prone areas.',
    heroImage: '/images/products/pvc-blinds.png',
    galleryImages: [
      {
        url: '/images/dd/blinds/blind-15.jpeg',
        caption: 'Moisture-resistant slat treatments tailored for kitchen window spans.',
      },
      {
        url: '/images/dd/blinds/blind-18.jpeg',
        caption: 'Compact profile fitting neatly within window frame reveals.',
      },
    ],
    features: [
      '100% moisture and humidity resistant construction',
      'Wipe-clean surface that resists dust, grease and splatters',
      'Precision tilt wand for angle-specific light adjustment',
      'UV-stabilized material that resists warping in sunny conditions',
    ],
    suitableSpaces: [
      'Kitchens & Wash Areas',
      'Bathrooms & Powder Rooms',
      'Utility Balconies',
      'Commercial Pantries',
    ],
    stylingTips: [
      'Fit within the window reveal for a flush, uncluttered appearance.',
      'Neutral tones balance functional durability with warmth.',
    ],
    materialsAndCare: {
      materials: 'High-density extruded PVC and aluminum alloys with UV-inhibitor coating.',
      maintenance: 'Wipes clean in seconds with soapy water and sponge.',
      recommendedRooms: 'Kitchens, utility spaces, bathrooms, and high-humidity areas.',
    },
  },
  {
    slug: 'custom-sofas',
    number: '05',
    title: 'CUSTOMISED SOFAS',
    subtitle: 'Designed around your space and comfort.',
    description:
      'Bring character and long-lasting comfort into your living spaces with custom-crafted sofas, sectionals, and bespoke seating created to fit your room dimensions and preferred upholstery.',
    ctaText: 'EXPLORE SOFAS →',
    category: 'Customised Furniture',
    filterGroup: 'FURNITURE',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in customised sofas. I would like to know more about the available options.',
    heroImage: '/images/dd/furniture/furniture-08.jpeg',
    galleryImages: [
      {
        url: '/images/dd/furniture/furniture-10.jpeg',
        caption: 'Custom upholstered living room sofa with deep ergonomic seating.',
      },
      {
        url: '/images/dd/furniture/furniture-14.jpeg',
        caption: 'Family lounge sectional tailored to room proportions.',
      },
      {
        url: '/images/dd/furniture/furniture-21.jpeg',
        caption: 'Solid framework with tailored piping and cushion stitch details.',
      },
    ],
    features: [
      'Made-to-measure dimensions: 3-seater, L-shaped sectional, or modular configs',
      'Extensive selection of fabrics, textured bouclé, chenille, and leatherette swatches',
      'High-resilience foam core for enduring ergonomic support',
      'Solid hardwood internal framework built for long-term stability',
    ],
    suitableSpaces: [
      'Living Rooms & Family Lounges',
      'Apartment Drawing Rooms',
      'Villa Living Niches',
      'Office Reception & Lounge Areas',
    ],
    stylingTips: [
      'Select sofa depth based on lifestyle—deeper seating for family lounging, firmer depth for formal sitting.',
      'Pair neutral sofa upholstery with bold accent cushions in terracotta or warm gold.',
      'Allow at least 18 inches of clearance between the coffee table and sofa edge.',
    ],
    materialsAndCare: {
      materials: 'Seasoned hardwood frame, high-density comfort foam, performance upholstery.',
      maintenance: 'Regular vacuuming with upholstery nozzle; prompt spot cleaning for spills.',
      recommendedRooms: 'Formal living rooms, family lounges, and media rooms.',
    },
  },
  {
    slug: 'accent-chairs',
    number: '06',
    title: 'CHAIRS & ACCENT SEATING',
    subtitle: 'Distinctive character for every corner.',
    description:
      'Individually tailored accent chairs, lounge armchairs, and dining chairs. From tufted diamond-quilted statement chairs to understated reading armchairs.',
    ctaText: 'EXPLORE CHAIRS →',
    category: 'Customised Furniture',
    filterGroup: 'FURNITURE',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in customised chairs and accent seating options.',
    heroImage: '/images/dd/furniture/furniture-01.jpeg',
    galleryImages: [
      {
        url: '/images/dd/furniture/furniture-02.jpeg',
        caption: 'Bespoke accent armchair tailored for reading corners.',
      },
      {
        url: '/images/dd/furniture/furniture-04.jpeg',
        caption: 'Ergonomic upholstered chair with modern metallic accents.',
      },
      {
        url: '/images/dd/furniture/furniture-31.jpeg',
        caption: 'Custom upholstered headboard and bedroom paneling.',
      },
    ],
    features: [
      'Diamond tufting, fluted channel stitching, and custom piping options',
      'Solid wood and powder-coated steel/brass leg finishes',
      'Compact footprint that easily slots into reading corners, bedrooms, and foyers',
      'Custom fabric and leatherette upholstery to match room palettes',
    ],
    suitableSpaces: [
      'Bedroom Corners & Reading Nooks',
      'Living Room Accent Positions',
      'Dressing Tables & Foyers',
      'Executive Cabins & Receptions',
    ],
    stylingTips: [
      'Use a contrasting accent color to create a striking focal point.',
      'Pair with a small brass or marble side table and ambient floor lamp.',
    ],
    materialsAndCare: {
      materials: 'Solid frame, molded foam cushioning, durable upholstery fabrics.',
      maintenance: 'Light fabric brush or vacuum; wipe metallic leg tips with dry microfiber.',
      recommendedRooms: 'Bedrooms, living rooms, foyers, and study corners.',
    },
  },
  {
    slug: 'centre-tables',
    number: '07',
    title: 'CENTRE & SIDE TABLES',
    subtitle: 'The functional centerpiece of the living space.',
    description:
      'Bespoke centre tables, nested coffee tables, and side tables crafted to anchor your seating arrangements and complete your living room ensemble.',
    ctaText: 'EXPLORE TABLES →',
    category: 'Customised Furniture',
    filterGroup: 'FURNITURE',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in centre tables and living room furniture.',
    heroImage: '/images/dd/furniture/furniture-08.jpeg',
    galleryImages: [
      {
        url: '/images/dd/furniture/furniture-08.jpeg',
        caption: 'Gold-finish geometric side table with marble top alongside lounge seating.',
      },
    ],
    features: [
      'Custom table heights proportioned to your sofa seat height',
      'Choices of polished marble tops, solid timber, and brushed metallic frames',
      'Nested designs for flexible entertaining and space optimization',
      'Protective floor pads preventing scratching on marble and vitrified tiles',
    ],
    suitableSpaces: [
      'Living Room Lounges',
      'Formal Drawing Areas',
      'Reception Areas',
    ],
    stylingTips: [
      'Ensure centre table height is within 1 to 2 inches of your sofa seat cushion.',
      'Style with a decorative tray, books, and artisanal ceramic accents.',
    ],
    materialsAndCare: {
      materials: 'Natural stone/marble, seasoned timber, and electroplated steel.',
      maintenance: 'Use coasters under hot beverages; wipe with a soft microfiber cloth.',
      recommendedRooms: 'Living rooms, lounges, and office receptions.',
    },
  },
  {
    slug: 'mattresses',
    number: '08',
    title: 'BRANDED MATTRESSES',
    subtitle: 'Official dealer for India’s leading sleep brands.',
    description:
      'Explore mattress options from reputed brands available through D&D Home Decor. We are authorized dealers in our area in Bengaluru for Kurlon, Duroflex, Sobha, Peps, Springfit, and Restolex.',
    ctaText: 'ENQUIRE ON MATTRESSES →',
    category: 'Bedding & Comfort',
    filterGroup: 'MATTRESSES',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in branded mattresses and would like to know more about available options.',
    heroImage: '/images/products/bedroom.png',
    galleryImages: [
      {
        url: '/images/dd/furniture/furniture-31.jpeg',
        caption: 'Custom upholstered headboard paired with premium mattress comfort.',
      },
      {
        url: '/images/dd/furniture/furniture-29.jpeg',
        caption: 'Bedroom interior styling with tailored headboard panel.',
      },
    ],
    features: [
      'Official authorized dealer in Bengaluru for top mattress brands',
      'Brand portfolio: Kurlon, Duroflex, Sobha, Peps, Springfit, and Restolex',
      'Available in King, Queen, Double, and custom bedroom dimensions',
      'Technologies: Pocket spring, memory foam, natural latex, and orthopedic firm support',
    ],
    suitableSpaces: [
      'Master Bedrooms & Guest Suites',
      'Villas & Residential Apartments',
      'Hospitality & Boutique Residences',
    ],
    stylingTips: [
      'Pair with a custom upholstered headboard for an integrated bedroom aesthetic.',
      'Use a breathable mattress protector to prolong mattress life and cleanliness.',
    ],
    materialsAndCare: {
      materials: 'High-resilience foam, pocketed coils, natural latex, and quilted jacquard fabrics.',
      maintenance: 'Rotate head-to-toe every 3 to 6 months for even wear.',
      recommendedRooms: 'Master bedrooms, children rooms, and guest suites.',
    },
  },
  {
    slug: 'wallpapers',
    number: '09',
    title: 'WALLPAPERS & WALL TREATMENTS',
    subtitle: 'Give your walls character and depth.',
    description:
      'Curated wallpaper collections featuring subtle textures, organic grasscloths, and contemporary geometric motifs designed to turn ordinary accent walls into focal points.',
    ctaText: 'EXPLORE WALLPAPERS →',
    category: 'Wall & Home Décor',
    filterGroup: 'WALLS',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in wallpapers and wall decor options for my space.',
    heroImage: '/images/products/wallpapers.jpg',
    galleryImages: [
      {
        url: '/images/products/wallpapers.jpg',
        caption: 'Textured wallpaper finish adding tactile warmth to interior walls.',
      },
    ],
    features: [
      'Textured vinyl, non-woven, and natural fiber designs',
      'Wipeable and scratch-resistant surface finishes',
      'Breathable backings suitable for Indian weather conditions',
      'Professional alignment and pattern matching during application',
    ],
    suitableSpaces: [
      'Living Room TV Unit Accent Walls',
      'Master Bedroom Headboard Walls',
      'Dining Room Niches & Foyers',
      'Commercial Reception Backdrops',
    ],
    stylingTips: [
      'Choose a single focal wall rather than all four walls to maintain room spaciousness.',
      'Pair textured linen-look wallpaper with warm brass lighting sconces.',
    ],
    materialsAndCare: {
      materials: 'Non-woven substrate with textured matte vinyl coatings.',
      maintenance: 'Gently wipe with a dry cloth or lightly damp sponge.',
      recommendedRooms: 'Living rooms, master bedrooms, foyers, and dining niches.',
    },
  },
  {
    slug: 'carpets-mats',
    number: '10',
    title: 'CARPETS, RUGS & MATS',
    subtitle: 'Warmth, texture and definition underfoot.',
    description:
      'High-quality carpets, designer area rugs, runners, and durable mats. Woven textures that anchor furniture groupings and add acoustic comfort to living spaces.',
    ctaText: 'EXPLORE CARPETS & MATS →',
    category: 'Wall & Home Décor',
    filterGroup: 'DECOR',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in carpets, rugs and high-quality mats.',
    heroImage: '/images/dd/carpets-mats/carpet-mat-01.jpeg',
    galleryImages: [
      {
        url: '/images/dd/carpets-mats/carpet-mat-03.jpeg',
        caption: 'Textured geometric living room area rug sample.',
      },
      {
        url: '/images/dd/carpets-mats/carpet-mat-05.jpeg',
        caption: 'High-density woven runner suitable for corridors and bedside.',
      },
      {
        url: '/images/dd/carpets-mats/carpet-mat-14.jpeg',
        caption: 'Contemporary woven carpet collection with subtle luster.',
      },
    ],
    features: [
      'High-density woven fibers resistant to daily foot traffic',
      'Organic marble, geometric, and abstract contemporary patterns',
      'Available in standard room sizes and customized lengths',
      'Anti-skid backing options for marble and tiled floors',
    ],
    suitableSpaces: [
      'Living Room Seating Areas',
      'Dining Tables & Foyers',
      'Bedside Runners',
      'Executive Office Lounges',
    ],
    stylingTips: [
      'Front legs of all main seating pieces should ideally rest on the area rug.',
      'Leave 12 to 18 inches of exposed floor around the carpet border for visual proportion.',
    ],
    materialsAndCare: {
      materials: 'High-density synthetic fiber, poly-wool blends, and soft woven yarn.',
      maintenance: 'Regular vacuuming; prompt blotting for accidental spills.',
      recommendedRooms: 'Living areas, bedrooms, hallways, and dining spaces.',
    },
  },
  {
    slug: 'home-furnishings',
    number: '11',
    title: 'HOME FURNISHINGS & DÉCOR',
    subtitle: 'Finishing touches that complete your interiors.',
    description:
      'Bed spreads, runners, sofa covers, ready-made curtains, bath towels, and decorative accents carefully selected to tie your home together.',
    ctaText: 'EXPLORE HOME FURNISHINGS →',
    category: 'Wall & Home Décor',
    filterGroup: 'DECOR',
    whatsappMessage:
      'Hello D&D Home Decor, I am interested in bed spreads, runners, sofa covers and home furnishings.',
    heroImage: '/images/dd/home-decor/home-decor-01.jpeg',
    galleryImages: [
      {
        url: '/images/dd/furniture/furniture-08.jpeg',
        caption: 'Fitted stretch sofa covers and accent cushions.',
      },
      {
        url: '/images/dd/home-decor/home-decor-01.jpeg',
        caption: 'Wood-framed botanical decorative panel.',
      },
    ],
    features: [
      'Protective and decorative sofa covers in stretch textured fabrics',
      'Soft cotton bed spreads, designer runners, and cozy throws',
      'High-absorbency luxury bath towels for everyday comfort',
      'Ready-made curtains for rapid installation and immediate use',
    ],
    suitableSpaces: [
      'Bedrooms & Living Spaces',
      'Guest Suites',
      'Apartments & Rental Homes',
    ],
    stylingTips: [
      'Layer neutral bedding with a richly textured runner at the foot of the bed.',
      'Use sofa covers to refresh living room furniture without replacing upholstery.',
    ],
    materialsAndCare: {
      materials: 'Pure cotton, linen blends, microfibers, and stretch jacquards.',
      maintenance: 'Machine wash friendly on gentle cycle with mild detergent.',
      recommendedRooms: 'Bedrooms, living rooms, and bathrooms.',
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