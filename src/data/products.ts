export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  aromaNotes: string[];
  stickLength?: string;
  stickCount?: string;
  packaging: string;
  idealFor: string[];
  featured?: boolean;
  gallery: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "tirth-chandan-agarbatti",
    name: "Tirth Chandan Agarbatti",
    subtitle: "Sacred Sandalwood Fragrance",
    category: "Woody & Spiritual",
    image: "/images/products/tirth-chandan.jpg",
    description: "Handcrafted with rich natural sandalwood essence to invoke tranquility, warmth, and divine calm during daily worship.",
    longDescription: "Tirth Chandan Agarbatti by Milliard Agarbatti captures the timeless essence of pure Indian Sandalwood. Crafted with authentic botanical extracts, this flagship fragrance creates a deeply meditative ambiance, clearing negative energies and elevating spiritual devotion.",
    aromaNotes: ["Pure Sandalwood", "Soft Amber", "Warm Earth"],
    stickLength: "9 Inches",
    stickCount: "approx. 25 sticks per pack",
    packaging: "Gold Foil Box",
    idealFor: ["Morning Puja", "Meditation", "Temple & Home Altars"],
    featured: true,
    gallery: [
      "/images/products/tirth-chandan.jpg",
      "/images/hero/tirth-hero.jpg",
      "/images/devotional/tirth-ganesha.jpg"
    ]
  },
  {
    slug: "tirth-mogra-agarbatti",
    name: "Tirth Mogra Agarbatti",
    subtitle: "Fragrance of Pure Jasmine",
    category: "Floral Fragrance",
    image: "/images/products/tirth-mogra.jpg",
    description: "Imbued with the sweet, intoxicating floral note of Indian Mogra blossoms to fill your home with freshness and piety.",
    longDescription: "Tirth Mogra Agarbatti brings the pristine beauty of fresh jasmine blooms into your sacred space. Its uplifting floral sweetness evokes the quiet sanctity of early morning prayers in Indian temples, creating an atmosphere of grace and serenity.",
    aromaNotes: ["Fresh Mogra Blooms", "Sweet Jasmine", "Floral Breeze"],
    stickLength: "9 Inches",
    stickCount: "approx. 25 sticks per pack",
    packaging: "Classic Pack",
    idealFor: ["Evening Prayers", "Festive Celebrations", "Relaxation"],
    featured: true,
    gallery: [
      "/images/products/tirth-mogra.jpg",
      "/images/brand/tirth-craftsmanship.jpg",
      "/images/devotional/tirth-ganesha.jpg"
    ]
  },
  {
    slug: "tirth-sambrani-dhoop-cups",
    name: "Tirth Sambrani Dhoop Cups",
    subtitle: "Natural Resin & Sacred Smoke",
    category: "Sacred Dhoop",
    image: "/images/products/tirth-dhoop.jpg",
    description: "Traditional dhoop cups formulated with pure Benzoin Sambrani resin to purify the atmosphere and ward off negativity.",
    longDescription: "Tirth Sambrani Dhoop Cups offer a rich, traditional aromatic experience. Made with natural frankincense resin and herbal compounds, each cup releases dense, aromatic smoke that cleanses the surroundings, leaving a divine, long-lasting scent.",
    aromaNotes: ["Natural Sambrani Resin", "Frankincense", "Sacred Herbs"],
    stickCount: "12 Dhoop Cups + Holder Plate",
    packaging: "Heritage Dhoop Box",
    idealFor: ["Atmospheric Purification", "Special Rituals", "Festivals"],
    featured: true,
    gallery: [
      "/images/products/tirth-dhoop.jpg",
      "/images/hero/tirth-hero.jpg",
      "/images/brand/tirth-craftsmanship.jpg"
    ]
  },
  {
    slug: "tirth-royal-rose-agarbatti",
    name: "Tirth Royal Rose Agarbatti",
    subtitle: "Velvet Rose & Divine Aura",
    category: "Floral Fragrance",
    image: "/images/products/tirth-royal-rose.jpg",
    description: "A luxurious rose fragrance crafted to inspire love, harmony, and joyful prayer in your household.",
    longDescription: "Tirth Royal Rose Agarbatti combines rich damask rose extracts with subtle sweet undertones. It fills every corner with a soothing, velvety aroma that enhances devotion and brings harmony to family gatherings.",
    aromaNotes: ["Damask Rose Petals", "Sweet Blossom", "Velvet Musk"],
    stickLength: "9 Inches",
    stickCount: "approx. 25 sticks per pack",
    packaging: "Luxury Pack",
    idealFor: ["Daily Devotion", "Festive Occasions", "Aromatherapy"],
    featured: false,
    gallery: [
      "/images/products/tirth-royal-rose.jpg",
      "/images/design2/devotional-sanctum.jpg"
    ]
  },
  {
    slug: "tirth-kasturi-agarbatti",
    name: "Tirth Kasturi Agarbatti",
    subtitle: "Sacred Devotional Musk",
    category: "Woody & Spiritual",
    image: "/images/products/tirth-kasturi.jpg",
    description: "Formulated with deep, soothing aromatic musk notes that evoke temple rituals and tranquil evening meditation.",
    longDescription: "Tirth Kasturi Agarbatti offers an enchanting, long-lasting musk fragrance inspired by ancient Indian incense formulations. Perfect for quiet contemplation and devotional ceremonies.",
    aromaNotes: ["Sacred Musk", "Herbal Resin", "Warm Wood"],
    stickLength: "9 Inches",
    stickCount: "approx. 25 sticks per pack",
    packaging: "Gold Foil Box",
    idealFor: ["Evening Prayer", "Meditation", "Temple Altars"],
    featured: false,
    gallery: [
      "/images/products/tirth-kasturi.jpg",
      "/images/design2/devotional-sanctum.jpg"
    ]
  },
  {
    slug: "tirth-heritage-guggal-agarbatti",
    name: "Tirth Heritage Guggal Agarbatti",
    subtitle: "Purifying Herbal Dhoop Blend",
    category: "Sacred Dhoop",
    image: "/images/products/tirth-heritage-guggal.jpg",
    description: "Enriched with natural Guggal resin to cleanse sacred spaces and create a warm, aromatic sanctuary.",
    longDescription: "Tirth Heritage Guggal Agarbatti is crafted using authentic Vedic herbal gums and dry roots. Its rich, aromatic smoke purifies the surrounding air while creating a serene, protective atmosphere.",
    aromaNotes: ["Pure Guggal Resin", "Camphor", "Dry Roots"],
    stickLength: "9 Inches",
    stickCount: "approx. 25 sticks per pack",
    packaging: "Heritage Dhoop Box",
    idealFor: ["Atmospheric Purification", "Daily Puja", "Special Havan"],
    featured: false,
    gallery: [
      "/images/products/tirth-heritage-guggal.jpg",
      "/images/design2/brand-craftsmanship.jpg"
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Woody & Spiritual",
  "Floral Fragrance",
  "Sacred Dhoop"
];
