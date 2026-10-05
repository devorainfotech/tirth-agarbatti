"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Design3Gallery({ limit }: { limit?: number }) {
  const galleryItems = [
    {
      title: "Tirth Sandalwood Packaging",
      category: "Packaging & Design",
      image: "/images/design3/hero-luxury-navy.jpg",
      span: "col-span-1 md:col-span-2 row-span-2",
      aspect: "aspect-[16/10]",
    },
    {
      title: "Handcrafted Incense Sticks",
      category: "Craftsmanship",
      image: "/images/design3/craftsmanship.jpg",
      span: "col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Mogra Blossom Distillation",
      category: "Natural Extracts",
      image: "/images/design3/fragrance-mogra.jpg",
      span: "col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Sacred Temple Sanctum",
      category: "Spiritual Atmosphere",
      image: "/images/design3/devotional.jpg",
      span: "col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Natural Sambrani Resin",
      category: "Sacred Dhoop",
      image: "/images/design3/fragrance-sambrani.jpg",
      span: "col-span-1 md:col-span-2 row-span-1",
      aspect: "aspect-[16/9]",
    },
  ];

  const itemsToDisplay = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className="py-24 sm:py-32 bg-[#F7F2E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#10182B] text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL ARCHIVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#10182B] tracking-tight">
              Visual <span className="italic font-light text-[#C9A45C]">Gallery</span>
            </h2>
          </div>

          {limit && (
            <Link
              href="/design-3/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#10182B] hover:text-[#C9A45C] transition-colors border-b-2 border-[#C9A45C] pb-1"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A45C]" />
            </Link>
          )}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {itemsToDisplay.map((item, idx) => (
            <div
              key={item.title}
              className={`group relative bg-[#10182B] border border-[#C9A45C]/30 overflow-hidden shadow-2xl ${
                item.span ? item.span : ""
              }`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay with Gold Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182B] via-[#10182B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C9A45C] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#10182B] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
