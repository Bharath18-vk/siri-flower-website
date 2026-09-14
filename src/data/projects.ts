/**
 * D&D Home Decor — Portfolio Projects Data
 *
 * NOTE FOR D&D CLIENT HANDOFF:
 * When D&D supplies their 12 or 20 real project photos:
 * 1. Place the photos in public/images/projects/ (or keep remote URLs)
 * 2. Update the image paths below
 * 3. Adjust titles or materials to match the real project specs
 */

export interface ProjectDetail {
  slug: string;
  number: string;
  title: string;
  category: string;
  filterCategory: 'RESIDENTIAL' | 'VILLA' | 'APARTMENT' | 'LIVING' | 'BEDROOM' | 'KITCHEN';
  subtitle: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspectRatio?: 'landscape' | 'portrait' | 'square';
  }[];
  designStory: string[];
  materials: string[];
  spatialFeatures: string[];
  paletteNotes: string;
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'contemporary-home',
    number: '01',
    title: 'Contemporary Home',
    category: 'Residential Interior',
    filterCategory: 'RESIDENTIAL',
    subtitle: 'Warm architectural lines balanced with natural timber and linen.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        caption: 'Generous living room bathed in gentle afternoon daylight.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
        caption: 'Sculptural seating and handwoven linen upholstery.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fluted wood wall accents and organic ceramic vessels.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Seamless connection between living and dining zones.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'A warm contemporary approach balances clean architectural lines with natural textures and comfortable furnishings.',
      'Designed around natural light and intuitive daily circulation, this concept introduces custom solid wood joinery, tactile linen drapery, and low-profile conversational seating.',
      'Neutral tones are enriched through layered textiles and discreet warm lighting, creating an environment that feels welcoming and quiet.',
    ],
    materials: ['Natural Teak', 'Honed Limestone', 'Washed Slub Linen', 'Warm Champagne Brass'],
    spatialFeatures: ['Unobstructed Daylighting', 'Concealed Storage Joinery', 'Layered Ambient Illumination'],
    paletteNotes: 'Warm ivory, sand, aged teak, and soft clay accents.',
  },
  {
    slug: 'warm-modern-villa',
    number: '02',
    title: 'Warm Modern Villa',
    category: 'Villa Interior',
    filterCategory: 'VILLA',
    subtitle: 'Generous volumes, courtyard connections, and understated luxury.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Double-height volume connecting indoor lounge with green patio.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
        caption: 'Architectural details in warm stone and brushed dark metal.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        caption: 'Curated lounge arrangement anchored by textured wool rugs.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        caption: 'Soft diffused illumination highlighting natural stone grains.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'This villa concept explores the harmonious relationship between generous interior scale and intimate, comfortable living.',
      'Large windows frame greenery while interior walls feature subtle lime plaster treatments that soften acoustic reverberation.',
      'Every furniture grouping is proportioned to encourage natural family gatherings while preserving clear sightlines throughout.',
    ],
    materials: ['Sandstone Plaster', 'Smoked Walnut', 'Textured Bouclé', 'Patinated Bronze'],
    spatialFeatures: ['Double-Height Living Zone', 'Courtyard Visual Continuity', 'Bespoke Architectural Millwork'],
    paletteNotes: 'Warm beige, muted espresso, forest greens, and soft limestone.',
  },
  {
    slug: 'urban-living',
    number: '03',
    title: 'Urban Living',
    category: 'Apartment Interior',
    filterCategory: 'APARTMENT',
    subtitle: 'Intelligent spatial planning and tactile warmth for city apartments.',
    heroImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Multi-functional living room with floor-to-ceiling daylight.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom fluted room partition providing subtle spatial privacy.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Compact dining niche with warm timber bench seating.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clean architectural lines that enhance the feeling of space.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'Designed specifically for modern urban residences where optimizing space and visual calm is essential.',
      'Floor-to-ceiling storage is detailed with seamless touch-latches to blend invisibly into perimeter walls, eliminating clutter.',
      'Warm wood slats filter light between living and dining areas without blocking open airflow.',
    ],
    materials: ['White Oak', 'Fluted Acoustic Panels', 'Matte Architectural Glass', 'Light Greige Plaster'],
    spatialFeatures: ['Integrated Perimeter Cabinetry', 'Acoustic Wall Paneling', 'Multifunctional Dining Niche'],
    paletteNotes: 'Soft greige, bleached oak, charcoal accents, and warm white.',
  },
  {
    slug: 'quiet-luxury',
    number: '04',
    title: 'Quiet Luxury',
    category: 'Living Space',
    filterCategory: 'LIVING',
    subtitle: 'Restrained material palettes, tactile surfaces, and sculptural details.',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Low-slung bespoke sofa framed by natural woven rug.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
        caption: 'Ceramic decorative vessels and hand-hewn stone plinth.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
        caption: 'Carefully curated lighting designed for evening unwinding.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80',
        caption: 'Warm textural interplay between wood, stone, and wool.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'An exercise in material honesty and refined calm. Rather than relying on loud ornamentation, the space draws warmth from authentic textures.',
      'Hand-finished plaster, brushed oak, and handwoven textiles create an environment that feels luxurious to touch and effortless to inhabit.',
      'Every piece of décor has breathing room, allowing each form to be appreciated on its own merits.',
    ],
    materials: ['Honed Travertine', 'Brushed White Oak', 'Hand-loomed Wool', 'Textured Raw Linen'],
    spatialFeatures: ['Curated Vignettes', 'Low-profile Seating', 'Cove Lighting Integration'],
    paletteNotes: 'Pale sand, warm taupe, raw travertine, and muted charcoal.',
  },
  {
    slug: 'natural-retreat',
    number: '05',
    title: 'Natural Retreat',
    category: 'Bedroom Interior',
    filterCategory: 'BEDROOM',
    subtitle: 'A restful sanctuary shaped by gentle light and earthy warmth.',
    heroImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Serene sleeping zone layered with washed linen and cane detailing.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
        caption: 'Tactile bedroom reading chair with soft organic curves.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        caption: 'Warm ambient bedside sconces casting gentle evening glow.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        caption: 'Concealed wardrobe run finished in soothing warm clay tones.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'A quiet master retreat developed to encourage restorative sleep and peaceful mornings.',
      'Soft fabrics, woven cane headboard joinery, and a gentle earthy palette soften both the light and sound in the room.',
      'Nightstand lighting is positioned at eye-level to provide comfortable reading light without harsh overhead glare.',
    ],
    materials: ['Natural Cane Weave', 'Washed Belgian Linen', 'Warm Ash Wood', 'Muted Clay Paint'],
    spatialFeatures: ['Acoustic Softening Drapery', 'Dual Bedside Reading Controls', 'Integrated Dressing Mirror'],
    paletteNotes: 'Creamy ivory, warm terracotta, toasted rattan, and soft beige.',
  },
  {
    slug: 'modern-family-kitchen',
    number: '06',
    title: 'Modern Family Kitchen',
    category: 'Kitchen Interior',
    filterCategory: 'KITCHEN',
    subtitle: 'Functional culinary zoning balanced with clean architectural simplicity.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Generous prep island with durable quartz counter and wooden stools.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom fluted glass pantry with subtle interior illumination.',
        aspectRatio: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Seamless handleless drawers engineered for ergonomic ease.',
        aspectRatio: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Warm under-cabinet task lighting over stone backsplashes.',
        aspectRatio: 'landscape',
      },
    ],
    designStory: [
      'Conceived as the active heart of the home where meal preparation and casual conversation naturally converge.',
      'Hardwearing composite quartz counters pair with warm timber-grained lower cabinets, grounding the kitchen with organic warmth.',
      'Dedicated spice and condiment pullouts keep everyday essentials within arm reach while maintaining clutter-free surfaces.',
    ],
    materials: ['Composite Quartz', 'Warm Timber Laminate', 'Fluted Privacy Glass', 'Matte Black Hardware'],
    spatialFeatures: ['Ergonomic Work Triangle', 'Deep Breakfast Counter Overhang', 'Integrated Task Lighting'],
    paletteNotes: 'Warm grey, honey wood, crisp ivory, and slate accents.',
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectDetail;
  next: ProjectDetail;
} {
  const currentIndex = projectsData.findIndex((p) => p.slug === currentSlug);
  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (currentIndex + 1) % projectsData.length;
  return {
    prev: projectsData[prevIndex],
    next: projectsData[nextIndex],
  };
}
