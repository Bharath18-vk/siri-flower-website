/**
 * Siri Flower Decoration: Centralized Services & Offerings Catalog
 * Comprehensive floral & event decoration offerings based in Bolarum, Secunderabad.
 * Representative inspiration imagery clearly curated for client visualization.
 */

export interface ProductItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  category: string;
  filterGroup: 'ALL' | 'STAGES' | 'BACKDROPS' | 'ENTRANCE' | 'RECEPTION' | 'ARRANGEMENTS';
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
    slug: 'wedding-stage-decoration',
    number: '01',
    title: 'WEDDING STAGE DECORATION',
    subtitle: 'Grand floral mandaps, floral arches, and thematic wedding stages.',
    description:
      'We design captivating wedding stages customized to your venue, theme, and family traditions. From cascading fresh jasmine and rose garlands to modern architectural floral structures with warm ambient illumination, every setting is designed to honor your special day.',
    ctaText: 'EXPLORE STAGE DECOR →',
    category: 'Wedding Stages',
    filterGroup: 'STAGES',
    whatsappMessage:
      'Hello Siri Flower Decoration, I am interested in wedding stage decoration. Could you please share available design concepts and details?',
    heroImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional Indian wedding mandap with fresh floral canopies.',
      },
      {
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hanging jasmine garlands and floral chandeliers over stage.',
      },
      {
        url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lush rose and chrysanthemum framed royal wedding backdrop.',
      },
    ],
    features: [
      'Bespoke mandap architecture (four-pillar, temple dome, hexagonal, open canopy)',
      'Fresh flower selection: Dutch roses, local jasmine, orange/yellow marigolds, and orchids',
      'Thematic stage drapery with integrated soft amber LED lighting and spotlights',
      'Customized seating backdrops for bride, groom, and family elders',
    ],
    suitableSpaces: [
      'Convention Halls & Kalyana Mandapams',
      'Open Lawns & Resort Grounds',
      'Hotel Ballrooms & Banquet Venues',
      'Traditional Courtyards & Temple Premises',
    ],
    stylingTips: [
      'Complement stage drapery with warm 2700K lighting to enhance floral colors in wedding photography.',
      'Blend fragrant jasmine with structured roses for both visual depth and welcoming fragrance.',
      'Maintain clear elevated sightlines from all guest seating angles.',
    ],
    materialsAndCare: {
      materials: 'Fresh seasonal flowers, handcrafted brass urlis, organza drapes, and architectural framing.',
      maintenance: 'On-site same-day setup ensuring maximum freshness and petal longevity throughout the rituals.',
      recommendedRooms: 'Wedding stages, reception banquets, and main ceremony halls.',
    },
  },
  {
    slug: 'floral-backdrops',
    number: '02',
    title: 'FLORAL BACKDROPS',
    subtitle: 'Intricately woven flower walls, jaali motifs, and photo backdrops.',
    description:
      'Transform ceremony focal points into memorable photo settings. Handcrafted backdrops featuring geometric floral patterns, traditional brass bells, suspended floral strings, and lush greenery accents tailored to your celebration colors.',
    ctaText: 'EXPLORE BACKDROPS →',
    category: 'Floral Backdrops',
    filterGroup: 'BACKDROPS',
    whatsappMessage:
      'Hello Siri Flower Decoration, I would like to inquire about floral backdrops for an upcoming celebration.',
    heroImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Dense floral backdrop with rose clusters and cascading foliage.',
      },
      {
        url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional yellow marigold and mogra jaali backdrop.',
      },
      {
        url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Layered petal motifs and floral crest accents.',
      },
    ],
    features: [
      'Dense fresh flower walls and ombré gradient color transitions',
      'Traditional genda and mogra lattice (jaali) geometric motifs',
      'Photo booth frames and personalized monogram floral surrounds',
      'Easy integration with brass bells, diyas, and ceremonial hanging props',
    ],
    suitableSpaces: [
      'Stage Backgrounds & Photo Booth Areas',
      'Puja & Traditional Ritual Corners',
      'Engagement & Haldi Photo Backdrops',
      'Home Function Living Rooms & Lawns',
    ],
    stylingTips: [
      'Choose high-contrast floral colors against guest attire to create vivid, vibrant photographs.',
      'Incorporate traditional brass bells or hanging flower tassels for tactile movement.',
    ],
    materialsAndCare: {
      materials: 'Genda Phool, White Mogra, Carnations, Chrysanthemums, and Satin Drapery.',
      maintenance: 'Precision misting and temperature-controlled transport to prevent petal wilting.',
      recommendedRooms: 'Ceremony backdrops, photo-op areas, and entrance lobbies.',
    },
  },
  {
    slug: 'wedding-entrance-decoration',
    number: '03',
    title: 'WEDDING ENTRANCE DECORATION',
    subtitle: 'Enchanting floral welcome arches, lit pathways, and entrance installations.',
    description:
      'First impressions define the celebration. We craft welcoming entrance passages adorned with fresh floral arches, brass lamp plinths, flower petal carpets, and welcoming focal points that greet your guests with warmth and beauty.',
    ctaText: 'EXPLORE ENTRANCE DECOR →',
    category: 'Entrance Décor',
    filterGroup: 'ENTRANCE',
    whatsappMessage:
      'Hello Siri Flower Decoration, I am planning event entrance decoration and would love to see options and pricing.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Grand arched entryway with pastel roses and eucalyptus greenery.',
      },
      {
        url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intricate petal rangoli and illuminated pathway lanterns.',
      },
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional marigold torans and brass samai pillars.',
      },
    ],
    features: [
      'Grand arched entryway structures in semicircular, Gothic, or square silhouettes',
      'Pathway petal carpets and floating candle urlis along walking aisles',
      'Thematic welcome board floral framing with personalized event calligraphy',
      'Illuminated traditional standing brass lamps (samai / kuthuvilakku)',
    ],
    suitableSpaces: [
      'Venue Main Gate & Walkway Pathways',
      'Banquet Entrance Foyers',
      'Lawn & Garden Entry Portals',
      'Home Gate & Courtyard Entrances',
    ],
    stylingTips: [
      'Line the pathway with low brass urlis filled with floating petals and warm tea lights for twilight arrivals.',
      'Ensure clear, unobstructed passage width of at least 8 to 10 feet for effortless guest flow.',
    ],
    materialsAndCare: {
      materials: 'Bougainvillea, Foliage, Red & Peach Roses, Traditional Brassware, Petal Rangoli.',
      maintenance: 'Sturdy anchored steel frames with weather-resistant water vials for fresh stems.',
      recommendedRooms: 'Venue gates, foyer entrances, and ceremonial arrival aisles.',
    },
  },
  {
    slug: 'engagement-reception-decoration',
    number: '04',
    title: 'ENGAGEMENT & RECEPTION DECORATION',
    subtitle: 'Romantic pastel backdrops, elegant stages, and evening ambient decor.',
    description:
      'Celebrate your milestone moments with contemporary floral styling. Featuring soft pastel blooms, romantic rose clusters, fairy light canopies, and sophisticated stage seating arrangements designed for memorable evening functions.',
    ctaText: 'EXPLORE RECEPTION DECOR →',
    category: 'Reception & Engagement',
    filterGroup: 'RECEPTION',
    whatsappMessage:
      'Hello Siri Flower Decoration, I would like to discuss engagement and reception decoration in Secunderabad / Hyderabad.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
        caption: 'Ambient evening reception stage with warm fairy lighting canopy.',
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
        caption: 'Elegant floral centerpiece and high-table candle styling.',
      },
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        caption: 'Romantic floral arch for couple ring exchange ceremony.',
      },
    ],
    features: [
      'Modern pastel palettes (blush pink, champagne gold, ivory, sage green)',
      'Customized couple seating sofas and throne focal points',
      'Fairy light curtains, Edison bulb chandeliers, and warm accent wash illumination',
      'Cocktail table and VIP dining table floral centerpieces',
    ],
    suitableSpaces: [
      'Hotel Ballrooms & Banquet Halls',
      'Evening Open Lawn Receptions',
      'Engagement Auditoriums',
      'Private Clubhouses & Terraces',
    ],
    stylingTips: [
      'Incorporate warm micro-LED string lights into greenery walls for an ethereal, starry evening glow.',
      'Use tall trumpet vases on select tables to add height without obstructing cross-table conversation.',
    ],
    materialsAndCare: {
      materials: 'Exotic Orchids, Asiatic Lilies, Hydrangeas, Eucalyptus, Fairy Light Curtains.',
      maintenance: 'Precision evening lighting check and hydration replenishment before guests arrive.',
      recommendedRooms: 'Reception stages, VIP dining areas, and couple photo lounges.',
    },
  },
  {
    slug: 'event-floral-arrangements',
    number: '05',
    title: 'EVENT FLORAL ARRANGEMENTS',
    subtitle: 'Centerpieces, Haldi-Mehendi themes, car decoration, and custom floral accents.',
    description:
      'From vibrant yellow-orange marigold themes for Haldi and Mehendi functions to delicate dining table centerpieces and ceremonial car decoration, we bring vibrant floral artistry to every event detail across Secunderabad.',
    ctaText: 'EXPLORE FLORAL ARRANGEMENTS →',
    category: 'Floral Arrangements',
    filterGroup: 'ARRANGEMENTS',
    whatsappMessage:
      'Hello Siri Flower Decoration, I am interested in event floral arrangements and venue table decorations.',
    heroImage: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fresh marigold garlands and traditional ceremonial setup.',
      },
      {
        url: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80',
        caption: 'Low profile floral centerpiece for family dining tables.',
      },
      {
        url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
        caption: 'Vibrant yellow marigold and pink rose bouquet accents.',
      },
    ],
    features: [
      'Haldi & Mehendi yellow-orange theme setups with floral jewellery styling',
      'Traditional wooden jhula (swing) decorated with marigolds and jasmine',
      'Guest table floral centerpieces in brass, ceramic, or glass vessels',
      'Bridal car fresh flower decoration with non-damaging soft suction mounts',
    ],
    suitableSpaces: [
      'Pre-Wedding Haldi & Sangeet Venues',
      'Home Terrace & Living Room Functions',
      'Dining Tables & Buffet Counters',
      'Wedding Procession & Bridal Vehicles',
    ],
    stylingTips: [
      'Combine marigolds with dark green banana leaves or mango foliage for rich South Indian cultural warmth.',
      'Use water bowls with floating petals and floating candles to elevate coffee tables and corner niches.',
    ],
    materialsAndCare: {
      materials: 'Yellow & Orange Marigold, Baby\'s Breath, Cut Foliage, Terracotta Accents, Brass Vessels.',
      maintenance: 'Hydrated floral foam blocks and gentle misting to maintain freshness throughout long ceremonies.',
      recommendedRooms: 'Haldi setups, dining tables, registration desks, and bridal vehicles.',
    },
  },
];

// Helper to find a product by slug, including backwards compatibility aliases
export function getProductBySlug(slug: string): ProductItem | undefined {
  const directMatch = productsData.find((p) => p.slug === slug);
  if (directMatch) return directMatch;

  // Backward compatibility aliases mapping old home decor slugs to new floral slugs
  const aliasMap: Record<string, string> = {
    curtains: 'wedding-stage-decoration',
    'zebra-blinds': 'floral-backdrops',
    'roller-blinds': 'floral-backdrops',
    'pvc-blinds': 'wedding-entrance-decoration',
    'custom-sofas': 'engagement-reception-decoration',
    'accent-chairs': 'engagement-reception-decoration',
    'centre-tables': 'event-floral-arrangements',
    mattresses: 'wedding-stage-decoration',
    wallpapers: 'floral-backdrops',
    'carpets-mats': 'wedding-entrance-decoration',
    'home-furnishings': 'event-floral-arrangements',
  };

  const aliasedSlug = aliasMap[slug];
  if (aliasedSlug) {
    return productsData.find((p) => p.slug === aliasedSlug);
  }

  return undefined;
}

export function getAdjacentProducts(currentSlug: string): {
  prev: ProductItem;
  next: ProductItem;
} {
  const currentIndex = productsData.findIndex((p) => p.slug === currentSlug);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const prevIndex = (safeIndex - 1 + productsData.length) % productsData.length;
  const nextIndex = (safeIndex + 1) % productsData.length;
  return {
    prev: productsData[prevIndex],
    next: productsData[nextIndex],
  };
}