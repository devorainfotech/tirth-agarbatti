"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import LightboxModal from "@/components/gallery/LightboxModal";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";
import { Sparkles, Eye } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="pt-0 pb-24 bg-[#FFFDF7] text-[#17130F]">
      
      {/* Top Banner Header */}
      <section className="bg-[#17130F] text-[#FFFDF7] pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VISUAL EXPERIENCE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF7]">
                BRAND GALLERY
              </h1>
              <p className="text-base sm:text-lg text-[#FFFDF7]/80 font-light leading-relaxed">
                Immerse yourself in our curated visual gallery showcasing Tirth agarbatti product aesthetics, sacred devotional ambiance, and artisanal craftsmanship.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <Container>
          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#D9A52B] text-[#17130F] shadow-md"
                    : "bg-[#FFF8E8] text-[#7A6A57] border border-[#D9A52B]/20 hover:border-[#D9A52B]/60 hover:text-[#17130F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={0.05 * (idx + 1)}>
                <div
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#D9A52B]/25 bg-[#17130F] cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/90 via-[#17130F]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#FFFDF7]">
                    <span className="text-[10px] font-semibold text-[#F2C94C] uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#F2C94C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FFFDF7]/70 line-clamp-1 font-light mt-1">
                      {item.caption}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#F2C94C] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                      <span>Click to view lightbox</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

    </div>
  );
}
