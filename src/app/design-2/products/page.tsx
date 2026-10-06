"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "@/components/design2/ScrollReveal";

export default function Design2ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="bg-[#FFFDF8]">
      
      {/* Editorial Page Banner */}
      <section className="bg-[#FAF6EE] pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#C8A45D]/30 relative overflow-hidden text-[#1C140E]">
        
        {/* High-Clarity Background Image Overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden opacity-30 sm:opacity-45">
          <Image
            src="/images/design2/hero-incense-luxury-cinematic.jpg"
            alt="Tirth Collection Background"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center filter brightness-95 contrast-[1.05] scale-105"
          />
          {/* Smooth Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/90 lg:via-[#FAF6EE]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-transparent to-[#FAF6EE]" />
        </div>

        {/* Soft Ambient Golden Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A45D]/14 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-radial from-[#8C5D3B]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Corner Watermarks */}
        <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/25 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/25 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                  <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                    CATALOGUE {BRAND_INFO.companyName}
                  </span>
                </div>
                <h1 className="font-serif text-4xl sm:text-7xl font-normal text-[#1C140E] leading-[1.02]">
                  TIRTH <span className="italic font-normal text-[#C8A45D] relative inline-block">
                    COLLECTION
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/70 to-[#C8A45D]/0" />
                  </span>
                </h1>
                <p className="font-serif text-base sm:text-xl italic text-[#1C140E]/90 mt-3 max-w-xl border-l-2 border-[#C8A45D] pl-4">
                  Explore handcrafted agarbatti, premium sandalwood sticks, floral mogra, and sacred sambrani dhoop cups.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2.5">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-[#1C140E] text-[#FFFDF8] border border-[#C8A45D]/50 shadow-md"
                        : "bg-[#FFFDF8] text-[#1C140E] border border-[#C8A45D]/30 hover:border-[#1C140E]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="py-24 sm:py-32 bg-[#FFFDF8] relative overflow-hidden border-b border-[#C8A45D]/25">
        
        {/* Atmosphere Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#C8A45D]/06 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {filteredProducts.map((product, idx) => {
                const isFeatured = idx === 0;
                return (
                  <ScrollReveal key={product.slug} direction="up" distance={25} delay={idx * 0.08}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`group bg-[#FFFDF8] border ${
                        isFeatured
                          ? "border-[#C8A45D] shadow-[0_20px_45px_-12px_rgba(200,164,93,0.18)]"
                          : "border-[#C8A45D]/40 shadow-[0_15px_40px_-15px_rgba(28,20,14,0.08)]"
                      } p-6 sm:p-7 relative hover:shadow-[0_25px_50px_-12px_rgba(28,20,14,0.18)] hover:border-[#C8A45D] transition-all duration-500 flex flex-col justify-between h-full`}
                    >
                      {/* Gold Corner Embellishments */}
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

                      <div>
                        {/* Top Edition Header */}
                        <div className="flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#8C5D3B] mb-5 pb-3 border-b border-[#C8A45D]/20">
                          <span className="flex items-center gap-1.5">
                            <Flame className="w-3 h-3 text-[#C8A45D]" />
                            0{idx + 1} / {isFeatured ? "FLAGSHIP EDITION" : "SACRED EDITION"}
                          </span>
                          <span className="px-3 py-1 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#1C140E] font-medium">
                            {product.category}
                          </span>
                        </div>

                        {/* Product Image Frame */}
                        <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden bg-[#1C140E] border border-[#C8A45D]/30 group-hover:border-[#C8A45D]/60 transition-colors duration-500">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                          
                          {/* Hover Corner Shine Accent */}
                          <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#1C140E]/80 backdrop-blur-md border border-[#C8A45D]/40 text-[#FFFDF8] text-[9px] font-sans font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                            Pure Incense
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl font-bold text-[#1C140E] group-hover:text-[#8C5D3B] transition-colors duration-300 leading-tight">
                            {product.name}
                          </h3>
                          <p className="text-xs tracking-[0.2em] font-sans font-semibold text-[#C8A45D] uppercase">
                            {product.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-[#1C140E]/80 leading-relaxed font-sans line-clamp-2 pt-1 min-h-[38px]">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer Notes & DETAILS CTA */}
                      <div className="pt-5 mt-6 border-t border-[#C8A45D]/20 flex items-end justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-1.5 flex-1 min-h-[44px]">
                          {product.aromaNotes.slice(0, 2).map((note) => (
                            <span
                              key={note}
                              className="px-2.5 py-1 bg-[#FAF6EE] text-[9px] font-sans font-semibold tracking-wider text-[#8C5D3B] uppercase border border-[#C8A45D]/30 whitespace-nowrap truncate max-w-[130px]"
                              title={note}
                            >
                              {note}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/design-2/products/${product.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold tracking-[0.22em] uppercase text-[#1C140E] group-hover:text-[#8C5D3B] transition-colors shrink-0 whitespace-nowrap pb-1"
                        >
                          <span>DETAILS</span>
                          <ArrowUpRight className="w-4 h-4 text-[#C8A45D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}

