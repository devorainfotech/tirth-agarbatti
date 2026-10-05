"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";
import Design2Lightbox from "./Design2Lightbox";
import ScrollReveal from "./ScrollReveal";

export default function Design2Gallery({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 sm:py-24 bg-[#FFFDF8] text-[#241914] relative border-b border-[#B89042]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-[#B89042]/20">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A95736] block">
                Visual Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] mt-1">
                THE BRAND <span className="italic text-[#B89042]">GALLERY</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all ${
                    selectedCategory === cat
                      ? "bg-[#241914] text-[#FFFDF8] border border-[#241914]"
                      : "bg-[#F7F1E6] text-[#241914]/80 border border-[#B89042]/20 hover:border-[#241914]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayItems.map((item, index) => {
            const aspectClass =
              index % 3 === 0
                ? "aspect-[4/5]"
                : index % 3 === 1
                ? "aspect-[1/1]"
                : "aspect-[4/3]";

            return (
              <ScrollReveal key={item.id} direction="up" distance={20} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveItem(item)}
                  className={`group cursor-pointer relative overflow-hidden bg-[#F7F1E6] border border-[#B89042]/30 p-2 shadow-md transition-colors hover:border-[#A95736] ${aspectClass}`}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/80 via-[#241914]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFFDF8]">
                      <div className="flex justify-between items-start">
                        <span className="px-2.5 py-1 bg-[#A95736] text-[10px] font-semibold tracking-[0.2em] uppercase">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#B89042] flex items-center justify-center text-[#241914]">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#DDD0BB] font-serif italic truncate">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {limit && (
          <ScrollReveal direction="up" distance={15} delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="/design-2/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#241914] text-[#241914] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#241914] hover:text-[#FFFDF8] transition-all"
              >
                <span>EXPLORE COMPLETE GALLERY</span>
                <Sparkles className="w-4 h-4 text-[#B89042]" />
              </a>
            </div>
          </ScrollReveal>
        )}

      </div>

      {/* Lightbox Modal */}
      <Design2Lightbox
        item={activeItem}
        items={displayItems}
        onClose={() => setActiveItem(null)}
        onSelect={(item) => setActiveItem(item)}
      />
    </section>
  );
}
