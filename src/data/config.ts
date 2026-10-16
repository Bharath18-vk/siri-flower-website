/**
 * Siri Flower Decoration: Core Business Configuration
 * WhatsApp and Contact Configuration.
 * All WhatsApp triggers throughout the website automatically adapt.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  subtitle: string;
  categoryLabel: string;
  city: string;
  state: string;
  pincode: string;
  address: string;
  locationLabel: string;
  areaContext: string;
  plusCode: string;
  primaryPhone: string;
  secondaryPhone?: string;
  whatsappNumber: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  defaultWhatsAppMessage: string;
  contextualMessages: {
    stage: string;
    backdrops: string;
    entrance: string;
    reception: string;
    arrangements: string;
    general: string;
    // Backward compatibility aliases
    curtains: string;
    blinds: string;
    furniture: string;
    mattresses: string;
    wallpapers: string;
    carpets: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: 'Siri Flower Decoration',
  tagline: 'Turning Your Special Moments Into Beautiful Memories.',
  subtitle: 'Wedding & Event Floral Decoration',
  categoryLabel: 'WEDDING STAGE • FLORAL BACKDROPS • ENTRANCE DECOR • RECEPTION CELEBRATIONS',
  city: 'Secunderabad',
  state: 'Telangana',
  pincode: '500010',
  address:
    'near Ratna Colony, Ratna Colony, Bolarum, Secunderabad, Telangana 500010, India',
  locationLabel: 'near Ratna Colony, Bolarum, Secunderabad',
  areaContext: 'Bolarum, Secunderabad, Telangana',
  plusCode: 'Ratna Colony, Bolarum, Secunderabad',
  primaryPhone: '+91 99660 42727',
  whatsappNumber: '919966042727',
  instagramUrl: 'https://instagram.com/siriflowerdecoration',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Siri+Flower+Decoration+near+Ratna+Colony+Bolarum+Secunderabad+Telangana+500010',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=near+Ratna+Colony,+Bolarum,+Secunderabad,+Telangana+500010&t=&z=15&ie=UTF8&iwloc=&output=embed',
  defaultWhatsAppMessage:
    'Hello Siri Flower Decoration, I came across your website and would like to discuss floral decoration for an upcoming event.',
  contextualMessages: {
    stage:
      'Hello Siri Flower Decoration, I am interested in wedding stage decoration. Could you please share available design concepts and details?',
    backdrops:
      'Hello Siri Flower Decoration, I would like to inquire about floral backdrops for an upcoming celebration.',
    entrance:
      'Hello Siri Flower Decoration, I am planning event entrance decoration and would love to see options and pricing.',
    reception:
      'Hello Siri Flower Decoration, I would like to discuss engagement and reception decoration in Secunderabad / Hyderabad.',
    arrangements:
      'Hello Siri Flower Decoration, I am interested in event floral arrangements and venue table decorations.',
    general:
      'Hello Siri Flower Decoration, I would like to enquire about your flower decoration services for an event.',
    // Backward compatibility aliases
    curtains:
      'Hello Siri Flower Decoration, I am interested in wedding stage decoration and floral drapery.',
    blinds:
      'Hello Siri Flower Decoration, I would like to inquire about floral backdrops.',
    furniture:
      'Hello Siri Flower Decoration, I am interested in wedding mandap and stage seating arrangements.',
    mattresses:
      'Hello Siri Flower Decoration, I am interested in event floral styling.',
    wallpapers:
      'Hello Siri Flower Decoration, I am interested in decorative floral backdrops.',
    carpets:
      'Hello Siri Flower Decoration, I am interested in flower pathways and entrance petals.',
  },
};

/**
 * Builds a direct WhatsApp click-to-chat URL.
 * Supports custom product messages and pre-filled inquiries.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || businessConfig.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message);

  if (businessConfig.whatsappNumber && businessConfig.whatsappNumber.trim().length > 0) {
    const cleanNumber = businessConfig.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  }

  return `https://wa.me/?text=${encoded}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/products' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];
