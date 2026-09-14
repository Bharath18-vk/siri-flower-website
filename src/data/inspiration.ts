/**
 * D&D Home Decor — Space & Design Inspiration Gallery
 *
 * NOTE FOR D&D CLIENT HANDOFF:
 * These visual references represent how D&D's products look when brought together.
 * When real project photos are ready, replace these with real photos.
 */

export interface InspirationItem {
  id: string;
  title: string;
  category: 'LIVING' | 'BEDROOM' | 'WINDOWS' | 'WALLS' | 'DETAILS';
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export const inspirationData: InspirationItem[] = [
  {
    id: 'insp-1',
    title: 'Warm Sunlight & Sheer Drapes',
    category: 'WINDOWS',
    categoryLabel: 'Curtains & Light',
    image: '/images/products/curtains.png',
    caption: 'Soft daylight filtering through floor-to-ceiling sheer linen curtains.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-2',
    title: 'Tactile Sofa & Stone Coffee Plinth',
    category: 'LIVING',
    categoryLabel: 'Living Spaces',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    caption: 'Curated custom sofa layered with earthy linen cushions and wood details.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-3',
    title: 'Textured Bedroom Accent Wall',
    category: 'WALLS',
    categoryLabel: 'Wallpapers',
    image: '/images/products/wallpapers.jpg',
    caption: 'Delicate textured wallpaper paired with warm directional sconces.',
    aspectRatio: 'portrait',
  },
  {
    id: 'insp-4',
    title: 'Contemporary Zebra Blind Styling',
    category: 'WINDOWS',
    categoryLabel: 'Zebra Blinds',
    image: '/images/products/zebra-blinds.png',
    caption: 'Clean, architectural light filtering in modern apartment window.',
    aspectRatio: 'landscape',
  },
  {
    id: 'insp-5',
    title: 'Restful Master Bedroom Sanctuary',
    category: 'BEDROOM',
    categoryLabel: 'Bedrooms',
    image: '/images/products/bedroom.png',
    caption: 'Harmonious interplay of blackout drapes, cane textures, and soft bedding.',
    aspectRatio: 'portrait',
  },
  {
    id: 'insp-6',
    title: 'Finishing Décor & Sculptural Accents',
    category: 'DETAILS',
    categoryLabel: 'Home Décor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Thoughtfully chosen vessels, table lamps, and tactile woven surfaces.',
    aspectRatio: 'landscape',
  },
];
