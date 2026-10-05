/**
 * Product data — single source of truth for all products/categories.
 * Designed so real products can be added easily later.
 */

export interface FragranceNote {
  top: string;
  heart: string;
  base: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  fragranceProfile: string;
  fragranceNotes: FragranceNote;
  packSizes: string[];
  usageInfo: string;
  image: string;
  galleryImages?: string[];
  featured?: boolean;
  index: number; // Display order number
}

export const productCategories = [
  'All',
  'Sandalwood',
  'Floral',
  'Musk',
  'Aromatic',
  'Hand-Rolled',
  'Perfumed',
  'Sage Aroma',
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products: Product[] = [
  {
    id: 'sandalwood-agarbatti',
    slug: 'sandalwood-agarbatti',
    name: 'Sandalwood',
    category: 'Sandalwood',
    categorySlug: 'Sandalwood',
    tagline: 'Warm · Woody · Timeless',
    shortDescription: 'A deep, warm woody fragrance drawn from the essence of sandalwood.',
    longDescription:
      'Sandalwood has been the soul of Indian fragrance traditions for centuries. This collection captures the rich, warm, creamy depth of pure sandalwood — a scent that grounds, calms and elevates any space. Perfect for morning rituals, meditation and moments when you seek warmth and stillness.',
    fragranceProfile: 'Deep, warm and woody with a hint of sweet creaminess.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/sandalwood.jpg',
    galleryImages: ['/images/products/sandalwood.jpg'],
    featured: true,
    index: 1,
  },
  {
    id: 'floral-agarbatti',
    slug: 'floral-agarbatti',
    name: 'Floral',
    category: 'Floral',
    categorySlug: 'Floral',
    tagline: 'Delicate · Fresh · Elegant',
    shortDescription: 'Light and blooming floral fragrances inspired by India\'s finest flowers.',
    longDescription:
      'Inspired by India\'s magnificent floral traditions — jasmine, rose, marigold and more — this collection brings the freshness of blooms into any space. Delicate, uplifting and elegant, these incense sticks are ideal for bringing light and positivity to a room.',
    fragranceProfile: 'Fresh, light and blooming with floral layers that uplift any atmosphere.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/floral.jpg',
    galleryImages: ['/images/products/floral.jpg'],
    featured: false,
    index: 2,
  },
  {
    id: 'musk-agarbatti',
    slug: 'musk-agarbatti',
    name: 'Musk',
    category: 'Musk',
    categorySlug: 'Musk',
    tagline: 'Rich · Deep · Captivating',
    shortDescription: 'Rich, deep and sensuous musk fragrances for an immersive experience.',
    longDescription:
      'Rich and deeply captivating, our musk collection creates an atmosphere of warmth and mystery. These incense sticks release a bold, sensuous fragrance that lingers beautifully — perfect for evenings, relaxation and creating a distinctive ambience.',
    fragranceProfile: 'Rich, bold and deep with a lasting, warm sensuous character.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/musk.jpg',
    galleryImages: ['/images/products/musk.jpg'],
    featured: false,
    index: 3,
  },
  {
    id: 'aromatic-agarbatti',
    slug: 'aromatic-agarbatti',
    name: 'Aromatic',
    category: 'Aromatic',
    categorySlug: 'Aromatic',
    tagline: 'Inviting · Balanced · Refreshing',
    shortDescription: 'A balanced, refreshing aromatic blend for everyday moments.',
    longDescription:
      'Our aromatic collection brings together carefully selected fragrance notes to create a balanced, inviting scent that suits everyday spaces. Refreshing and warm, these incense sticks are versatile — suitable for mornings, afternoons and quiet evenings.',
    fragranceProfile: 'Balanced and refreshing with inviting aromatic warmth.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/aromatic.jpg',
    galleryImages: ['/images/products/aromatic.jpg'],
    featured: false,
    index: 4,
  },
  {
    id: 'handrolled-agarbatti',
    slug: 'handrolled-agarbatti',
    name: 'Hand-Rolled',
    category: 'Hand-Rolled',
    categorySlug: 'Hand-Rolled',
    tagline: 'Crafted · Traditional · Distinctive',
    shortDescription: 'Traditionally hand-crafted incense sticks made with care.',
    longDescription:
      'Our hand-rolled incense sticks carry the warmth of traditional craftsmanship. Each stick is shaped with careful hands, capturing the character and personality that only hand-crafted products can possess. A connection to tradition in every light.',
    fragranceProfile: 'Traditional, earthy and distinctive with a crafted character.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/handrolled.jpg',
    galleryImages: ['/images/products/handrolled.jpg'],
    featured: false,
    index: 5,
  },
  {
    id: 'perfumed-agarbatti',
    slug: 'perfumed-agarbatti',
    name: 'Perfumed',
    category: 'Perfumed',
    categorySlug: 'Perfumed',
    tagline: 'Fragrant · Expressive · Memorable',
    shortDescription: 'Richly perfumed incense sticks with expressive, lasting fragrance.',
    longDescription:
      'Inspired by fine perfumery, our perfumed incense collection features bold, memorable fragrance compositions that express personality and mood. Each stick releases a distinctive aromatic character that transforms any space into an immersive sensory experience.',
    fragranceProfile: 'Bold, expressive and memorable with perfumery-inspired depth.',
    fragranceNotes: {
      top: '— (To be updated)',
      heart: '— (To be updated)',
      base: '— (To be updated)',
    },
    packSizes: ['— (To be updated)'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/perfumed.jpg',
    galleryImages: ['/images/products/perfumed.jpg'],
    featured: false,
    index: 6,
  },
  {
    id: 'sage-white',
    slug: 'sage-white',
    name: 'White Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Clear · Herbal · Cleansing',
    shortDescription: 'A bright white sage sample with a clean, airy herbal finish.',
    longDescription:
      'White Sage opens a room with a crisp, clearing herbal note. This sample is light and purified — suited to morning rituals, quiet corners and moments when a space needs to feel fresh and uncluttered.',
    fragranceProfile: 'Clean, bright and herbal with a dry, airy finish.',
    fragranceNotes: {
      top: 'Crushed sage leaf',
      heart: 'Soft green herbs',
      base: 'Dry cedar whisper',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/aromatic.jpg',
    galleryImages: ['/images/products/aromatic.jpg'],
    featured: false,
    index: 7,
  },
  {
    id: 'sage-blue',
    slug: 'sage-blue',
    name: 'Blue Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Cool · Calm · Herbal',
    shortDescription: 'A cooler sage sample with a calm, slightly sweet herbal air.',
    longDescription:
      'Blue Sage carries a cooler, more rounded herbal character than classic sage. It settles a room gently — ideal for evening quiet, meditation and spaces that need a calm, unhurried fragrance.',
    fragranceProfile: 'Cool and herbal with a soft, slightly sweet calm.',
    fragranceNotes: {
      top: 'Cool sage',
      heart: 'Sweet herb',
      base: 'Soft musk',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/floral.jpg',
    galleryImages: ['/images/products/floral.jpg'],
    featured: false,
    index: 8,
  },
  {
    id: 'sage-desert',
    slug: 'sage-desert',
    name: 'Desert Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Dry · Earthy · Warm',
    shortDescription: 'A sun-warmed desert sage sample, dry and quietly earthy.',
    longDescription:
      'Desert Sage is a drier, warmer reading of sage — sunlit herbs over a light earthy base. It suits afternoon light, open rooms and anyone who prefers fragrance that feels grounded rather than sweet.',
    fragranceProfile: 'Dry, warm and earthy with sunlit herbal edges.',
    fragranceNotes: {
      top: 'Sun-dried sage',
      heart: 'Warm herbs',
      base: 'Pale earth',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/sandalwood.jpg',
    galleryImages: ['/images/products/sandalwood.jpg'],
    featured: false,
    index: 9,
  },
  {
    id: 'sage-clary',
    slug: 'sage-clary',
    name: 'Clary Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Soft · Floral · Soothing',
    shortDescription: 'A softer clary sage sample with a gentle floral-herbal heart.',
    longDescription:
      'Clary Sage is the softer member of the range — herbal, but touched with a gentle floral warmth. It is made for winding down, private rooms and unhurried evenings.',
    fragranceProfile: 'Soft herbal-floral with a soothing, slightly honeyed warmth.',
    fragranceNotes: {
      top: 'Clary sage',
      heart: 'Soft florals',
      base: 'Warm amber',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/floral.jpg',
    galleryImages: ['/images/products/floral.jpg'],
    featured: false,
    index: 10,
  },
  {
    id: 'sage-garden',
    slug: 'sage-garden',
    name: 'Garden Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Fresh · Green · Crisp',
    shortDescription: 'A garden-fresh sage sample, green and crisp from the first light.',
    longDescription:
      'Garden Sage smells like freshly brushed leaves — green, lively and clean. This sample is an everyday herbal fragrance for kitchens, workspaces and rooms that should feel awake.',
    fragranceProfile: 'Fresh, green and crisp with a bright herbal lift.',
    fragranceNotes: {
      top: 'Fresh sage leaf',
      heart: 'Green herbs',
      base: 'Light wood',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/aromatic.jpg',
    galleryImages: ['/images/products/aromatic.jpg'],
    featured: false,
    index: 11,
  },
  {
    id: 'sage-cedar',
    slug: 'sage-cedar',
    name: 'Sage & Cedar',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Woodsy · Grounding · Deep',
    shortDescription: 'Sage laid over dry cedar for a deeper, woodsy sample.',
    longDescription:
      'Sage & Cedar pairs herbal sage with a dry cedar base so the fragrance sits lower and lasts longer in a room. It is a grounding sample for study, prayer and cooler evenings.',
    fragranceProfile: 'Herbal sage over dry cedar, woodsy and grounding.',
    fragranceNotes: {
      top: 'Sage',
      heart: 'Aromatic wood',
      base: 'Cedar',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/handrolled.jpg',
    galleryImages: ['/images/products/handrolled.jpg'],
    featured: false,
    index: 12,
  },
  {
    id: 'sage-lavender',
    slug: 'sage-lavender',
    name: 'Sage & Lavender',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Herbal · Floral · Restful',
    shortDescription: 'Sage softened with lavender for a restful evening sample.',
    longDescription:
      'Sage & Lavender balances green herbs with a gentle lavender calm. It is the restful sample in the range — suited to bedrooms, wind-down rituals and quiet night hours.',
    fragranceProfile: 'Herbal sage with a soft lavender calm.',
    fragranceNotes: {
      top: 'Lavender',
      heart: 'Sage',
      base: 'Soft powder',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/perfumed.jpg',
    galleryImages: ['/images/products/perfumed.jpg'],
    featured: false,
    index: 13,
  },
  {
    id: 'sage-sacred',
    slug: 'sage-sacred',
    name: 'Sacred Sage',
    category: 'Sage Aroma',
    categorySlug: 'Sage Aroma',
    tagline: 'Resinous · Ritual · Deep',
    shortDescription: 'A deeper ritual sage sample with a warm, resinous trail.',
    longDescription:
      'Sacred Sage is the most ceremonial sample in the range — herbal sage deepened with a warm resinous trail. It is made for prayer, meditation and moments that ask for a quieter, more focused atmosphere.',
    fragranceProfile: 'Deep herbal sage with a warm, resinous trail.',
    fragranceNotes: {
      top: 'Sage smoke',
      heart: 'Sacred herbs',
      base: 'Soft resin',
    },
    packSizes: ['Sample stick'],
    usageInfo:
      'Light the tip of the incense stick and gently blow out the flame. Place in an incense holder or stand. Ensure good ventilation. Keep away from flammable materials and out of reach of children.',
    image: '/images/products/musk.jpg',
    galleryImages: ['/images/products/musk.jpg'],
    featured: false,
    index: 14,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function getFeaturedProduct(): Product {
  return products.find((p) => p.featured) ?? products[0];
}
