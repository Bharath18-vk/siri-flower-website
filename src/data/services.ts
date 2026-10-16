/**
 * Siri Flower Decoration: Curated Service Categories
 * Proposed demo categories for floral and event decoration in Bolarum, Secunderabad.
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  aspectRatio?: string;
  highlights: string[];
  materialFocus: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'wedding-stage-decoration',
    number: '01',
    title: 'WEDDING STAGE DECORATION',
    shortDescription:
      'Grand floral mandaps, floral arches, and thematic wedding stages.',
    longDescription:
      'We design captivating wedding stages customized to your venue, theme, and family traditions. From cascading fresh jasmine and rose garlands to modern architectural floral structures with warm ambient illumination, every setting is designed to honor your special day.',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Traditional and contemporary mandap setups',
      'Bespoke floral chandeliers and hanging canopies',
      'Orchestrated warm lighting and stage drapery',
      'Fresh marigold, rose, and tuberose arrangements',
    ],
    materialFocus: 'Fresh Dutch Roses, Marigold, Jasmine, Brass Urlis & Warm Amber Light',
  },
  {
    id: 'floral-backdrops',
    number: '02',
    title: 'FLORAL BACKDROPS',
    shortDescription:
      'Intricately woven flower walls and photogenic celebration backdrops.',
    longDescription:
      'Transform ceremony focal points into memorable photo settings. Handcrafted backdrops featuring geometric floral patterns, traditional brass bells, suspended floral strings, and lush greenery accents tailored to your event colors.',
    image:
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Dense fresh flower walls and ombré gradients',
      'Traditional genda and mogra lattice (jaali) motifs',
      'Custom backdrop framing for photo opportunities',
      'Fabric drapery integration with floral crests',
    ],
    materialFocus: 'Genda Phool, White Mogra, Carnations, Organza Drapery',
  },
  {
    id: 'wedding-entrance-decoration',
    number: '03',
    title: 'WEDDING ENTRANCE DECORATION',
    shortDescription:
      'Enchanting floral welcome arches, lit pathways, and entrance installations.',
    longDescription:
      'First impressions define the celebration. We craft welcoming entrance passages adorned with fresh floral arches, brass lamp plinths, flower petal carpets, and dramatic welcoming focal points that welcome your guests with warmth and beauty.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Grand arched entryway floral arches',
      'Pathway petal carpets and floating candle urlis',
      'Thematic welcome board floral framing',
      'Illuminated traditional standing brass lamps',
    ],
    materialFocus: 'Bougainvillea, Foliage, Red & Peach Roses, Traditional Brassware',
  },
  {
    id: 'engagement-reception-decoration',
    number: '04',
    title: 'ENGAGEMENT & RECEPTION DECORATION',
    shortDescription:
      'Romantic pastel backdrops, elegant stages, and evening ambient decor.',
    longDescription:
      'Celebrate your milestone moments with contemporary floral styling. Featuring soft pastel blooms, romantic rose clusters, fairy light canopies, and sophisticated stage seating arrangements designed for memorable evening functions.',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Modern pastel palettes and soft romantic florals',
      'Customized couple seating and sofa focal points',
      'Fairy light curtains and accent wash illumination',
      'Cocktail and high-table floral accents',
    ],
    materialFocus: 'Orchids, Lilies, Hydrangeas, Eucalyptus & Fairy Lighting',
  },
  {
    id: 'event-floral-arrangements',
    number: '05',
    title: 'EVENT FLORAL ARRANGEMENTS',
    shortDescription:
      'Centerpieces, Haldi-Mehendi decor, car flowers, and custom floral accents.',
    longDescription:
      'From vibrant yellow-orange marigold themes for Haldi and Mehendi functions to delicate dining table centerpieces and ceremonial car decoration, we bring vibrant floral artistry to every event detail across Secunderabad.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Haldi & Mehendi yellow-orange theme setups',
      'Traditional jhula (swing) floral decoration',
      'Guest table floral centerpieces and vases',
      'Bridal car fresh flower decoration',
    ],
    materialFocus: 'Yellow & Orange Marigold, Baby\'s Breath, Cut Foliage, Terracotta Accents',
  },
];
