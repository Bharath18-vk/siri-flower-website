/**
 * D&D Home Decor — Authentic Gallery Data
 * All media items sourced directly from verified client installations and showroom assets.
 * Excludes all external reference screenshots and third-party advertising.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'CURTAINS' | 'BLINDS' | 'FURNITURE' | 'CARPETS' | 'DECOR';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // Curtains
  {
    id: 'gal-curtain-01',
    title: 'Floor-to-Ceiling Sheers & Pleated Drapes',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-02.jpeg',
    caption: 'Dual-track sheer and tailored drapes in a contemporary living room setting.',
    featured: true,
  },
  {
    id: 'gal-curtain-02',
    title: 'Symmetrical Living Room Drapery',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-12.jpeg',
    caption: 'Full-height sheer curtains with tailored pleats and matching tie-backs.',
    featured: true,
  },
  {
    id: 'gal-curtain-03',
    title: 'Apartment Master Living Curtains',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-05.jpeg',
    caption: 'Architectural recessed ceiling track with sheer illumination and side pleats.',
    featured: true,
  },
  {
    id: 'gal-curtain-04',
    title: 'Warm Wood & Sheer Composition',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-08.jpeg',
    caption: 'Warm ambient lighting complemented by custom drapery and sheer drop.',
    featured: false,
  },
  {
    id: 'gal-curtain-05',
    title: 'Bedroom Window Treatment',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-03.jpeg',
    caption: 'Custom drop sheer panels fitted for bedroom window reveal and study niche.',
    featured: false,
  },
  {
    id: 'gal-curtain-06',
    title: 'Soft Linen Sheer Framing',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-07.jpeg',
    caption: 'Delicate light-filtering sheers tied back with classic drapery accents.',
    featured: false,
  },
  {
    id: 'gal-curtain-07',
    title: 'Villa Window Treatment',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-10.jpeg',
    caption: 'Tailored drapes designed to frame large window spans effortlessly.',
    featured: false,
  },
  {
    id: 'gal-curtain-08',
    title: 'Modern Pleated Panels',
    category: 'CURTAINS',
    categoryLabel: 'Custom Curtains',
    imageUrl: '/images/dd/curtains/curtain-11.jpeg',
    caption: 'Precision pleated fabric panels offering clean vertical folds.',
    featured: false,
  },

  // Blinds
  {
    id: 'gal-blind-01',
    title: 'Architectural Zebra Blind',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-01.jpeg',
    caption: 'Custom zebra blind installation fitted neatly within an accent brick reveal.',
    featured: true,
  },
  {
    id: 'gal-blind-02',
    title: 'Precision Light-Filter Zebra Blind',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-24.jpeg',
    caption: 'Dual-layer horizontal vanes providing seamless light and privacy adjustment.',
    featured: true,
  },
  {
    id: 'gal-blind-03',
    title: 'Bedroom Window Zebra Blind',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-20.jpeg',
    caption: 'Compact cassette blind mounted flush for optimal bedroom privacy.',
    featured: false,
  },
  {
    id: 'gal-blind-04',
    title: 'Living Room Roller Solution',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-06.jpeg',
    caption: 'Minimalist window blind offering clean lines and whisper-quiet control.',
    featured: false,
  },
  {
    id: 'gal-blind-05',
    title: 'Apartment Window Blinds',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-16.jpeg',
    caption: 'Contemporary horizontal vanes enhancing natural light diffusion.',
    featured: false,
  },
  {
    id: 'gal-blind-06',
    title: 'Study & Balcony Window Blinds',
    category: 'BLINDS',
    categoryLabel: 'Window Blinds',
    imageUrl: '/images/dd/blinds/blind-13.jpeg',
    caption: 'Practical light control ideal for workspaces and balcony windows.',
    featured: false,
  },

  // Furniture
  {
    id: 'gal-furn-01',
    title: 'Tufted Accent Chair',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-01.jpeg',
    caption: 'Bespoke teal diamond-quilted armchair with modern black and brass legs.',
    featured: true,
  },
  {
    id: 'gal-furn-02',
    title: 'Waffle-Knit Sectional Sofa',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-08.jpeg',
    caption: 'Tailored sectional seating with textured waffle weave and matching cushions.',
    featured: true,
  },
  {
    id: 'gal-furn-03',
    title: 'Contemporary Fluted Headboard',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-31.jpeg',
    caption: 'Custom upholstered bedroom headboard with architectural vertical fluting.',
    featured: true,
  },
  {
    id: 'gal-furn-04',
    title: 'Bespoke Accent Armchair',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-02.jpeg',
    caption: 'Custom ergonomic chair tailored for comfortable living and reading corners.',
    featured: false,
  },
  {
    id: 'gal-furn-05',
    title: 'Living Room Sofa Arrangement',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-10.jpeg',
    caption: 'Comfortable family lounge sofa crafted with high-resilience foam support.',
    featured: false,
  },
  {
    id: 'gal-furn-06',
    title: 'Upholstered Bedroom Panel',
    category: 'FURNITURE',
    categoryLabel: 'Customised Furniture',
    imageUrl: '/images/dd/furniture/furniture-29.jpeg',
    caption: 'Wall-mounted upholstered headboard panel designed to anchor bedroom spaces.',
    featured: false,
  },

  // Carpets & Mats
  {
    id: 'gal-carpet-01',
    title: 'Marbled Texture Luxury Rug',
    category: 'CARPETS',
    categoryLabel: 'Carpets & Mats',
    imageUrl: '/images/dd/carpets-mats/carpet-mat-01.jpeg',
    caption: 'High-density woven area rug featuring organic marbled veins.',
    featured: true,
  },
  {
    id: 'gal-carpet-02',
    title: 'Textured Geometric Living Rug',
    category: 'CARPETS',
    categoryLabel: 'Carpets & Mats',
    imageUrl: '/images/dd/carpets-mats/carpet-mat-03.jpeg',
    caption: 'Premium floor covering designed to define living room seating zones.',
    featured: false,
  },
  {
    id: 'gal-carpet-03',
    title: 'Contemporary Runner & Mat Sample',
    category: 'CARPETS',
    categoryLabel: 'Carpets & Mats',
    imageUrl: '/images/dd/carpets-mats/carpet-mat-05.jpeg',
    caption: 'Durable, soft-underfoot weave suitable for hallways and bedside areas.',
    featured: false,
  },
  {
    id: 'gal-carpet-04',
    title: 'Designer Carpet Weave',
    category: 'CARPETS',
    categoryLabel: 'Carpets & Mats',
    imageUrl: '/images/dd/carpets-mats/carpet-mat-14.jpeg',
    caption: 'Curated carpet collection featuring contemporary patterns and tones.',
    featured: false,
  },

  // Home Décor
  {
    id: 'gal-decor-01',
    title: 'Framed Artificial Green Wall Panel',
    category: 'DECOR',
    categoryLabel: 'Home Décor',
    imageUrl: '/images/dd/home-decor/home-decor-01.jpeg',
    caption: 'Handcrafted timber-framed botanical accent panel for entryways and focal walls.',
    featured: true,
  },
];