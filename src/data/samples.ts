export interface FragranceSample {
  name: string;
  family: string;
  href: string;
  image: string;
}

/** Common retail agarbatti types, shown as Tirth samples. */
export const fragranceSamples: FragranceSample[] = [
  { name: 'Sandalwood', family: 'Woody', href: '/products/sandalwood-agarbatti', image: '/images/samples/sandalwood.jpg' },
  { name: 'Rose', family: 'Floral', href: '/products/floral-agarbatti', image: '/images/samples/rose.jpg' },
  { name: 'Mogra', family: 'Floral', href: '/products/floral-agarbatti', image: '/images/samples/mogra.jpg' },
  { name: 'Musk', family: 'Musk', href: '/products/musk-agarbatti', image: '/images/samples/musk.jpg' },
  { name: 'Nagchampa', family: 'Masala', href: '/products/aromatic-agarbatti', image: '/images/samples/nagchampa.jpg' },
  { name: 'Loban', family: 'Resin', href: '/products/aromatic-agarbatti', image: '/images/samples/loban.jpg' },
  { name: 'Oud', family: 'Woody', href: '/products/sandalwood-agarbatti', image: '/images/samples/oud.jpg' },
  { name: 'Lavender', family: 'Herbal', href: '/products/sage-lavender', image: '/images/samples/lavender.jpg' },
  { name: 'Hand-Rolled', family: 'Masala', href: '/products/handrolled-agarbatti', image: '/images/samples/handrolled.jpg' },
  { name: 'Sage', family: 'Herbal', href: '/products/sage-white', image: '/images/samples/sage.jpg' },
];
