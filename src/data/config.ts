/**
 * D&D Home Decor — Core Business Configuration
 *
 * NOTE FOR D&D CLIENT HANDOFF:
 * Update `whatsappNumber` below with the verified business phone number
 * in international format without '+' or spaces (e.g. '919876543210').
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
    curtains: string;
    blinds: string;
    furniture: string;
    mattresses: string;
    wallpapers: string;
    carpets: string;
    general: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: 'D&D HOME DECOR',
  tagline: 'TRANSFORM YOUR SPACE.',
  subtitle: 'Home Decor & Interior Solutions',
  categoryLabel: 'CUSTOMIZED CURTAINS • WINDOW BLINDS • FURNITURE • MATTRESSES',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560091',
  address:
    '#1613, Andrahalli Main Rd, Venkateshwara Layout, Syndicate Bank Employees Housing Society Layout, Bengaluru, Karnataka 560091',
  locationLabel: 'Andrahalli Main Rd, Venkateshwara Layout, Bengaluru',
  areaContext: 'Bengaluru, Karnataka',
  plusCode: 'XFVQ+HFP Bengaluru',
  primaryPhone: '+91 96206 19613',
  whatsappNumber: '919620619613',
  instagramUrl: 'https://instagram.com/ddhomedecor',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=XFVQ%2BHFP%2C+Andrahalli+Main+Rd%2C+Venkateshwara+Layout%2C+Syndicate+Bank+Employees+Housing+Society+Layout%2C+Bengaluru%2C+Karnataka+560091',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=XFVQ%2BHFP%2C+Andrahalli+Main+Rd%2C+Venkateshwara+Layout%2C+Syndicate+Bank+Employees+Housing+Society+Layout%2C+Bengaluru%2C+Karnataka+560091&t=&z=16&ie=UTF8&iwloc=&output=embed',
  defaultWhatsAppMessage:
    'Hello D&D Home Decor, I came across your website and would like to discuss a home decor project.',
  contextualMessages: {
    curtains:
      'Hello D&D Home Decor, I am interested in customised curtains. I would like to know more about the available options.',
    blinds:
      'Hello D&D Home Decor, I am interested in window blinds. Please share more details.',
    furniture:
      'Hello D&D Home Decor, I am interested in customised furniture. I would like to know more about the available options.',
    mattresses:
      'Hello D&D Home Decor, I am interested in branded mattresses and would like to know more about available options.',
    wallpapers:
      'Hello D&D Home Decor, I am interested in wallpapers and wall decor options for my space.',
    carpets:
      'Hello D&D Home Decor, I am interested in carpets, rugs and high-quality mats.',
    general:
      'Hello D&D Home Decor, I would like to enquire about your home decor solutions and visit your showroom.',
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
  { label: 'PRODUCTS', href: '/products' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];
