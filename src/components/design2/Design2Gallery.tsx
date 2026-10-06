"use client";

import { useState } from "react";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
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
<<<<<<< HEAD
    <section className="py-20 sm:py-28 bg-[#FFFDF8] text-[#1C140E] relative overflow-hidden border-b border-[#C8A45D]/25">
      
      {/* Background Atmosphere Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A45D]/08 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filters */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-[#C8A45D]/30 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                  VISUAL ARCHIVES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] leading-tight">
                THE BRAND <span className="italic font-normal text-[#C8A45D] relative inline-block">
                  GALLERY
                  <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
                </span>
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              </h2>
            </div>

            {/* Category Filter Pills */}
<<<<<<< HEAD
            <div className="flex flex-wrap items-center gap-2.5">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    aria-label={`Filter gallery by ${cat}`}
                    className={`px-4.5 py-2.5 text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                      isActive
                        ? "bg-[#1C140E] text-[#FFFDF8] border border-[#C8A45D]/50 shadow-md"
                        : "bg-[#FAF6EE] text-[#1C140E] border border-[#C8A45D]/30 hover:border-[#1C140E] hover:text-[#8C5D3B]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
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
<<<<<<< HEAD
              <ScrollReveal key={item.id} direction="up" distance={25} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveItem(item)}
                  className={`group cursor-pointer relative overflow-hidden bg-[#FAF6EE] border border-[#C8A45D]/35 p-2.5 shadow-[0_10px_30px_-15px_rgba(28,20,14,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(28,20,14,0.16)] hover:border-[#C8A45D] transition-all duration-500 ${aspectClass}`}
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#1C140E]">
=======
              <ScrollReveal key={item.id} direction="up" distance={20} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveItem(item)}
                  className={`group cursor-pointer relative overflow-hidden bg-[#F7F1E6] border border-[#B89042]/30 p-2 shadow-md transition-colors hover:border-[#A95736] ${aspectClass}`}
                >
                  <div className="relative w-full h-full overflow-hidden">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
<<<<<<< HEAD
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-103 group-hover:brightness-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/85 via-[#1C140E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
=======
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/80 via-[#241914]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef

                    {/* Hover Overlay Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFFDF8]">
                      <div className="flex justify-between items-start">
<<<<<<< HEAD
                        <span className="px-3 py-1 bg-[#8C5D3B] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase border border-[#C8A45D]/40 shadow-xs">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#C8A45D] flex items-center justify-center text-[#1C140E] shadow-md group-hover:scale-105 transition-transform duration-300">
=======
                        <span className="px-2.5 py-1 bg-[#A95736] text-[10px] font-semibold tracking-[0.2em] uppercase">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#B89042] flex items-center justify-center text-[#241914]">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-1">
<<<<<<< HEAD
                        <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight text-[#FFFDF8]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#E8DDC8] font-serif italic truncate">
=======
                        <h3 className="font-serif text-lg sm:text-xl font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#DDD0BB] font-serif italic truncate">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
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
<<<<<<< HEAD
          <ScrollReveal direction="up" distance={20} delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                href="/design-2/gallery"
                className="group relative inline-flex items-center gap-4 px-9 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/40 overflow-hidden"
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                
                <span className="relative z-10">EXPLORE COMPLETE GALLERY</span>
                <Sparkles className="w-4 h-4 text-[#C8A45D] relative z-10" />
              </Link>
=======
          <ScrollReveal direction="up" distance={15} delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="/design-2/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#241914] text-[#241914] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#241914] hover:text-[#FFFDF8] transition-all"
              >
                <span>EXPLORE COMPLETE GALLERY</span>
                <Sparkles className="w-4 h-4 text-[#B89042]" />
              </a>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
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
<<<<<<< HEAD


=======
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
