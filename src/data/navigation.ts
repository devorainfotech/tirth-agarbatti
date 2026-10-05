export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" }
];

export const BUSINESS_LINKS: NavItem[] = [
  { label: "Become a Distributor", href: "/distributor" },
  { label: "Wholesale Enquiries", href: "/contact?type=wholesale" },
  { label: "Brand Presence", href: "/about#presence" }
];

export const BRAND_INFO = {
  companyName: "Milliard Agarbatti",
  brandName: "Tirth Premium Agarbatti",
  tagline: "The Fragrance of Devotion",
  facebookUrl: "https://www.facebook.com/milliardagarbatti",
  location: "Ahmedabad, Gujarat, India",
  email: "contact@milliardagarbatti.com",
  phone: "+91 98790 00000", // clean editable business details
  whatsapp: "+919879000000"
};
