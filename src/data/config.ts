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
  locationLabel: string;
  areaContext: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  demoDisclaimer: string;
}

export const businessConfig: BusinessConfig = {
  name: 'D&D HOME DECOR',
  tagline: 'TRANSFORM YOUR SPACE.',
  subtitle: 'Home Decor & Interior Solutions',
  categoryLabel: 'HOME DÉCOR • WINDOW SOLUTIONS • LIVING SPACES',
  city: 'Bengaluru',
  state: 'Karnataka',
  locationLabel: 'Bengaluru, Karnataka',
  areaContext: 'Bengaluru, Karnataka',
  // Verified business number placeholder (can be set to e.g. '919876543210' once verified)
  whatsappNumber: '',
  defaultWhatsAppMessage:
    'Hi D&D Home Decor, I came across your website and would like to discuss a home decor project.',
  demoDisclaimer:
    'Website concept — representative imagery used for presentation.',
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

  // Generic fallback if number is pending verification
  return `https://wa.me/?text=${encoded}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];
