/**
 * Siri Flower Decoration: Event & Floral Design Inspiration
 * Representative visual inspiration references demonstrating event setups and color palettes.
 * Clearly labeled for client design presentation.
 */

export interface InspirationItem {
  id: string;
  title: string;
  category: 'STAGE' | 'BACKDROP' | 'ENTRANCE' | 'RECEPTION' | 'DETAILS';
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export const inspirationData: InspirationItem[] = [
  {
    id: 'insp-1',
    title: 'Canopied Floral Mandap with Warm Illumination',
    category: 'STAGE',
    categoryLabel: 'Wedding Stages',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Four-pillar stage draped in fresh jasmine garlands and rich rose canopies.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-2',
    title: 'Textured Floral Wall with Monogram Crest',
    category: 'BACKDROP',
    categoryLabel: 'Floral Backdrops',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: High-density fresh flower backdrop ideal for couple photography.',
    aspectRatio: 'portrait',
  },
  {
    id: 'insp-3',
    title: 'Grand Floral Entrance Portal',
    category: 'ENTRANCE',
    categoryLabel: 'Entrance Décor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Welcome archway styled with garden roses and cascading greenery.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-4',
    title: 'Candlelight Reception Stage with Fairy Light Curtains',
    category: 'RECEPTION',
    categoryLabel: 'Reception & Engagement',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Sophisticated evening reception setup with romantic pastel florals.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-5',
    title: 'Traditional Haldi & Sangeet Floral Yellow Palette',
    category: 'DETAILS',
    categoryLabel: 'Haldi & Traditions',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Vibrant marigold torans and traditional ceremonial props.',
    aspectRatio: 'portrait',
  },
  {
    id: 'insp-6',
    title: 'Artisanal Brass Urli & Petal Water Displays',
    category: 'DETAILS',
    categoryLabel: 'Artisanal Details',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80',
    caption: 'Representative inspiration: Traditional welcoming vessels with floating rose petals and diya accents.',
    aspectRatio: 'landscape',
  },
];
