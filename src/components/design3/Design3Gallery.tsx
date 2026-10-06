"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";
import Design3Lightbox from "@/components/design3/Design3Lightbox";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";

export default function Design3Gallery({ limit }: { limit?: number }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Map Design 1's authentic image gallery dataset with Design 3 luxury editorial styling
  const galleryItems = [
    {
      ...GALLERY_ITEMS[0], // /images/gallery/tirth-gallery-01.jpg
      label: "PACKAGING & DESIGN",
      gridClass: limit
        ? "lg:col-span-8 aspect-[16/10]" // 3-item home layout: item 1 takes 8 columns
        : "lg:col-span-8 aspect-[16/10]",
    },
    {
      ...GALLERY_ITEMS[1], // /images/gallery/tirth-gallery-02.jpg
      label: "SANDALWOOD ESSENCE",
      gridClass: limit
        ? "lg:col-span-4 aspect-[4/5]" // 3-item home layout: item 2 takes 4 columns beside item 1
        : "lg:col-span-4 aspect-[4/5]",
    },
    {
      ...GALLERY_ITEMS[2], // /images/gallery/tirth-gallery-03.jpg
      label: "FLORAL HARMONY",
      gridClass: limit
        ? "lg:col-span-12 aspect-[16/9] sm:aspect-[21/9]" // 3-item home layout: item 3 spans full-width 12 columns below
        : "lg:col-span-4 aspect-[4/5]",
    },
    {
      ...GALLERY_ITEMS[3], // /images/gallery/tirth-gallery-04.jpg
      label: "DIVINE ALTAR",
      gridClass: "lg:col-span-6 aspect-[16/9]",
    },
    {
      ...GALLERY_ITEMS[4], // /images/gallery/tirth-gallery-05.jpg
      label: "SAMBRANI PURIFICATION",
      gridClass: "lg:col-span-6 aspect-[16/9]",
    },
    {
      ...GALLERY_ITEMS[5], // /images/gallery/tirth-gallery-06.jpg
      label: "ARTISANAL CRAFT",
      gridClass: "lg:col-span-12 aspect-[21/9]",
    },
  ];

  // Filter items based on selected category if not limited
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  // When limit is set (home page), show 3 images; on gallery page show filtered items.
  const displayItems = limit ? galleryItems.slice(0, 3) : filteredItems;

  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E6] text-[#0D1629] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block mb-2">
                VISUAL ARCHIVES
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#0D1629] tracking-tight">
                Editorial <span className="italic text-[#C8A45D] font-light">Gallery</span>
              </h2>
            </div>

            {limit ? (
              <Link
                href="/design-3/gallery"
                className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#0D1629] hover:text-[#C8A45D] transition-colors border-b border-[#C8A45D] pb-1"
              >
                <span>VIEW FULL GALLERY</span>
              </Link>
            ) : (
              /* Category Filter Tabs on Gallery Page */
              <div className="flex flex-wrap gap-2.5">
                {GALLERY_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${
                      activeCategory === cat
                        ? "bg-[#C8A45D] text-[#0D1629] font-semibold shadow-md"
                        : "bg-[#0D1629]/5 text-[#0D1629] hover:bg-[#0D1629] hover:text-[#F8F4EA] border border-[#C8A45D]/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Asymmetric Luxury Editorial Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {displayItems.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.15 + idx * 0.08} className={`${item.gridClass}`}>
              <div
                onClick={() => setSelectedItem(item)}
                className="group relative w-full h-full overflow-hidden shadow-2xl bg-[#0D1629] cursor-pointer border border-[#C8A45D]/30 hover:border-[#C8A45D] transition-all duration-500 rounded-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06] filter brightness-[0.92] group-hover:brightness-100"
                />
                
                {/* Dark Navy Radial & Linear Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629]/95 via-[#0D1629]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Top Corner Badge & Expand Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#F8F4EA] bg-[#0D1629]/80 backdrop-blur-md px-3 py-1 border border-[#C8A45D]/40">
                    {item.category}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#C8A45D] text-[#0D1629] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#C8A45D] block mb-1">
                    {item.label}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F8F4EA] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8DDC8]/80 font-sans font-light line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>

                {/* Gold Accent Corner Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal on Image Click */}
      {selectedItem && (
        <Design3Lightbox
          item={selectedItem}
          items={galleryItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
}
