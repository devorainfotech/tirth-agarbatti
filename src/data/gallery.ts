export interface GalleryItem {
  id: string;
  title: string;
  category: "Products" | "Devotional" | "Brand" | "Festivals";
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Tirth Premium Pack Showcase",
    category: "Products",
    image: "/images/gallery/tirth-gallery-01.jpg",
    caption: "The signature golden Tirth Premium Agarbatti packaging alongside traditional oil lamps."
  },
  {
    id: "g2",
    title: "Tirth Chandan Sandalwood Essence",
    category: "Products",
    image: "/images/gallery/tirth-gallery-02.jpg",
    caption: "Rich natural sandalwood blocks and aromatic powder crafting our flagship Chandan agarbatti."
  },
  {
    id: "g3",
    title: "Tirth Mogra Floral Ambiance",
    category: "Products",
    image: "/images/gallery/tirth-gallery-03.jpg",
    caption: "Fresh white Mogra flowers surrounding our ivory gold fragrance box."
  },
  {
    id: "g4",
    title: "Sacred Altar & Divine Devotion",
    category: "Devotional",
    image: "/images/gallery/tirth-gallery-04.jpg",
    caption: "Lord Ganesha idol adorned with marigolds and illuminated with Tirth fragrance smoke."
  },
  {
    id: "g5",
    title: "Sambrani Dhoop Cup Purification",
    category: "Devotional",
    image: "/images/gallery/tirth-gallery-05.jpg",
    caption: "Fragrant sambrani resin smoke purifying the sacred space."
  },
  {
    id: "g6",
    title: "Artisanal Hand-Rolling Craft",
    category: "Brand",
    image: "/images/gallery/tirth-gallery-06.jpg",
    caption: "Dedicated artisans hand-rolling agarbatti using pure natural ingredients."
  }
];

export const GALLERY_CATEGORIES = ["All", "Products", "Devotional", "Brand"] as const;
