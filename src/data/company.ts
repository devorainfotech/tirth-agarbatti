/**
 * Central company data configuration.
 * Update this file with verified company information when available.
 * Unverified fields are set to null or placeholder values.
 */

export const company = {
  brandName: 'Tirth',
  supportingName: 'Premium Agarbatti',
  fullName: 'Tirth Premium Agarbatti',
  tagline: 'Fragrance That Transforms Every Moment',
  description:
    'Thoughtfully crafted incense and fragrance products designed to bring warmth, calm and beauty into everyday spaces.',

  // Contact — add verified information here
  phone: null as string | null,
  whatsapp: null as string | null, // Set NEXT_PUBLIC_WHATSAPP_NUMBER env var instead
  email: null as string | null,
  address: null as string | null,

  city: 'Ahmedabad',
  state: 'Gujarat',
  country: 'India',
  pincode: null as string | null,

  // Social
  facebook: 'https://www.facebook.com/tirthpremiumagarbatti',
  instagram: null as string | null,

  // Legal — add verified information here
  gst: null as string | null,
  cin: null as string | null,

  // SEO
  siteUrl: 'https://www.tirthpremiumagarbatti.com', // Update when domain is confirmed
  keywords: [
    'Tirth Premium Agarbatti',
    'Tirth Agarbatti',
    'Sage Aroma incense',
    'agarbatti Ahmedabad',
    'incense sticks Ahmedabad',
    'incense sticks Gujarat',
    'hand rolled incense sticks',
    'sandalwood incense sticks',
    'aromatic incense sticks',
    'floral incense sticks',
    'musk incense sticks',
    'agarbatti manufacturer Ahmedabad',
    'incense supplier Ahmedabad',
  ],
} as const;

export type Company = typeof company;
