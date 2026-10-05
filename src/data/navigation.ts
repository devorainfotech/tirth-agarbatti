/**
 * Navigation data — update this file to change site navigation.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Our Craft', href: '/craft' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Contact', href: '/contact' },
];
