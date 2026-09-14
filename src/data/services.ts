/**
 * D&D Home Decor — Services Data
 * 5 curated services representing core home decor & residential interior spaces.
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
    id: 'residential-interiors',
    number: '01',
    title: 'RESIDENTIAL INTERIORS',
    shortDescription:
      'Thoughtful interior planning and styling for contemporary homes.',
    longDescription:
      'We bring cohesive aesthetic direction, spatial harmony, and material richness to complete homes. From spatial layouts to custom lighting and soft furnishings, every room is treated as an essential part of an interconnected story.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Comprehensive space planning & furniture layouts',
      'Harmonious color palettes & material moodboards',
      'Custom woodwork & storage coordination',
      'Art, mirror & lighting curation',
    ],
    materialFocus: 'Natural Teakwood, Honed Stone, Textured Linen',
  },
  {
    id: 'living-spaces',
    number: '02',
    title: 'LIVING SPACES',
    shortDescription:
      'Comfortable, character-filled living environments designed around everyday life.',
    longDescription:
      'The living room is where family and friends gather. We craft layouts with comfortable conversational zones, tactile area rugs, sculptural coffee tables, and layered lighting that effortlessly adapts from daytime activity to relaxed evenings.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Ergonomic seating arrangements & custom sofas',
      'Statement coffee table & accent plinth styling',
      'Acoustic wall paneling & media unit design',
      'Ambient & mood lighting schemes',
    ],
    materialFocus: 'Bouclé, Brushed Brass, Oak Veneer, Travertine',
  },
  {
    id: 'bedrooms',
    number: '03',
    title: 'BEDROOMS',
    shortDescription:
      'Calm, personal spaces with considered materials, lighting and details.',
    longDescription:
      'Private sanctuaries designed for deep rest and tranquil mornings. We prioritize breathable natural textiles, acoustic dampening drapery, bespoke upholstered headboards, and glare-free lighting to cultivate an atmosphere of absolute calm.',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Bespoke headboard & bed frame styling',
      'Layered natural bedding & blackout linen drapery',
      'Integrated wardrobe concepts & dressing areas',
      'Independent bedside lighting circuits',
    ],
    materialFocus: 'Woven Cane, Washed Linen, Warm Ash, Soft Terracotta',
  },
  {
    id: 'kitchens',
    number: '04',
    title: 'KITCHENS',
    shortDescription:
      'Functional kitchens designed with a balance of practicality and visual simplicity.',
    longDescription:
      'The culinary center of the home must be as durable as it is beautiful. We design clean, streamlined kitchens with seamless cabinet fronts, scratch-resistant countertops, intuitive pantry storage, and dedicated task lighting.',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Optimized culinary workflows & ergonomic zoning',
      'Durable quartz & composite surface selections',
      'Integrated spice pullouts & hidden pantry hardware',
      'Under-cabinet shadowline illumination',
    ],
    materialFocus: 'Engineered Quartz, Fluted Glass, Matte Laminate',
  },
  {
    id: 'home-decor',
    number: '05',
    title: 'HOME DECOR',
    shortDescription:
      'Furniture, lighting, accessories and finishing details that bring a space together.',
    longDescription:
      'The finishing touches define a home’s soul. We hand-select artisanal ceramic vessels, architectural lamps, bespoke cushions, framed artwork, and indoor botanical arrangements that add genuine character and warmth.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Handcrafted ceramics & sculptural plinths',
      'Artisan table lamps & architectural pendants',
      'Curated soft furnishings, cushions & throws',
      'Indoor planter styling with natural greenery',
    ],
    materialFocus: 'Clay Ceramics, Hand-loomed Wool, Raw Linen, Bronze',
  },
];
