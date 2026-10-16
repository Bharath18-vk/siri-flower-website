/**
 * Siri Flower Decoration: Curated Gallery Data
 * High-quality, realistic Indian wedding and event decoration inspiration photography.
 * Representative inspiration imagery clearly curated for client visualization.
 */

export type GalleryCategory =
  | 'STAGE'
  | 'BACKDROP'
  | 'ENTRANCE'
  | 'RECEPTION'
  | 'ARRANGEMENTS'
  // Legacy aliases for backward compatibility
  | 'CURTAINS'
  | 'BLINDS'
  | 'FURNITURE'
  | 'CARPETS'
  | 'DECOR';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // Wedding Stages
  {
    id: 'gal-stage-01',
    title: 'Traditional Floral Mandap with Canopied Blooms',
    category: 'STAGE',
    categoryLabel: 'Wedding Stage',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Four-pillar ceremonial mandap adorned with fresh roses and jasmine.',
    featured: true,
  },
  {
    id: 'gal-stage-02',
    title: 'Royal South Indian Wedding Mandap',
    category: 'STAGE',
    categoryLabel: 'Wedding Stage',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Classic marigold and fresh tuberose stage setup for traditional rituals.',
    featured: true,
  },
  {
    id: 'gal-stage-03',
    title: 'Hanging Jasmine Garlands & Floral Chandeliers',
    category: 'STAGE',
    categoryLabel: 'Wedding Stage',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Cascading mogra strings and warm spotlights creating ambient ceremony warmth.',
    featured: true,
  },
  {
    id: 'gal-stage-04',
    title: 'Grand Floral Stage with Crimson & Ivory Drapery',
    category: 'STAGE',
    categoryLabel: 'Wedding Stage',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Symmetrical floral backdrop framed by rich burgundy drapes.',
    featured: false,
  },

  // Floral Backdrops
  {
    id: 'gal-backdrop-01',
    title: 'Lush Fresh Rose & Foliage Photo Wall',
    category: 'BACKDROP',
    categoryLabel: 'Floral Backdrops',
    imageUrl: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: High-density floral wall designed for vibrant wedding photography.',
    featured: true,
  },
  {
    id: 'gal-backdrop-02',
    title: 'Botanical Greenery Wall with Floral Crests',
    category: 'BACKDROP',
    categoryLabel: 'Floral Backdrops',
    imageUrl: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Textural eucalyptus and white carnation backdrop for reception photo sessions.',
    featured: true,
  },
  {
    id: 'gal-backdrop-03',
    title: 'Traditional Festive Marigold Jaali Backdrop',
    category: 'BACKDROP',
    categoryLabel: 'Floral Backdrops',
    imageUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Intricate yellow and orange marigold lattice for Haldi and family ceremonies.',
    featured: false,
  },
  {
    id: 'gal-backdrop-04',
    title: 'Pastel Floral Wall with Monogram Framing',
    category: 'BACKDROP',
    categoryLabel: 'Floral Backdrops',
    imageUrl: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Soft pink, peach, and cream bloom arrangements for engagement ceremonies.',
    featured: false,
  },

  // Entrance & Pathways
  {
    id: 'gal-entrance-01',
    title: 'Monumental Floral Arched Welcome Gate',
    category: 'ENTRANCE',
    categoryLabel: 'Entrance Décor',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Full-span floral welcome archway adorned with roses and greenery.',
    featured: true,
  },
  {
    id: 'gal-entrance-02',
    title: 'Lit Pathway with Petal Rangoli & Brass Samais',
    category: 'ENTRANCE',
    categoryLabel: 'Entrance Décor',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Warm illuminated aisle with scattered fresh rose petals and standing oil lamps.',
    featured: true,
  },
  {
    id: 'gal-entrance-03',
    title: 'Traditional Marigold Torans & Hanging Bells',
    category: 'ENTRANCE',
    categoryLabel: 'Entrance Décor',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Entrance gateway decorated with fresh marigold strings and temple bells.',
    featured: false,
  },

  // Engagement & Reception
  {
    id: 'gal-reception-01',
    title: 'Romantic Evening Reception Stage',
    category: 'RECEPTION',
    categoryLabel: 'Reception & Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Sophisticated couple seating backed by floral arches and soft warm fairy lights.',
    featured: true,
  },
  {
    id: 'gal-reception-02',
    title: 'Fairy Light Canopy with Suspended Orchids',
    category: 'RECEPTION',
    categoryLabel: 'Reception & Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Evening ballroom ceiling transformed with ambient glow and hanging florals.',
    featured: false,
  },
  {
    id: 'gal-reception-03',
    title: 'Elegant Banquet Table Floral Runner',
    category: 'RECEPTION',
    categoryLabel: 'Reception & Engagement',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Lush low-profile floral runner with tapered candles for VIP banquet tables.',
    featured: false,
  },

  // Arrangements & Details
  {
    id: 'gal-arr-01',
    title: 'Festive Haldi Jhula (Swing) Floral Styling',
    category: 'ARRANGEMENTS',
    categoryLabel: 'Floral Arrangements',
    imageUrl: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Wooden swing wrapped with dense marigold garlands and baby\'s breath accents.',
    featured: true,
  },
  {
    id: 'gal-arr-02',
    title: 'Artisanal Brass Urli with Floating Petals',
    category: 'ARRANGEMENTS',
    categoryLabel: 'Floral Arrangements',
    imageUrl: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Traditional welcoming brass vessels with floating marigolds and tealights.',
    featured: false,
  },
];