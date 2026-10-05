"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
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
      <section className="bg-[#F7F1E6] pt-24 sm:pt-28 pb-16 sm:pb-24 border-b border-[#B89042]/20 relative overflow-hidden">
        {/* Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89042]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
                  CATALOGUE — {BRAND_INFO.companyName}
                </span>
                <h1 className="font-serif text-4xl sm:text-7xl font-normal text-[#241914] mt-2 leading-[1.05]">
                  TIRTH <span className="italic text-[#B89042]">COLLECTION</span>
                </h1>
                <p className="font-serif text-base sm:text-xl italic text-[#241914]/90 mt-3 max-w-xl border-l-2 border-[#B89042] pl-4">
                  Explore handcrafted agarbatti, premium sandalwood sticks, floral mogra, and sacred sambrani dhoop cups.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2.5">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 rounded-xs shadow-xs ${
                      selectedCategory === cat
                        ? "bg-[#241914] text-[#FFFDF8] border-2 border-[#241914]"
                        : "bg-[#FFFDF8] text-[#241914]/85 border border-[#B89042]/40 hover:border-[#241914]"
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
      <section className="py-20 sm:py-28 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {filteredProducts.map((product, idx) => (
                <ScrollReveal key={product.slug} direction="up" distance={24} delay={idx * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-[#F7F1E6] border-2 border-[#B89042]/30 p-6 flex flex-col justify-between hover:border-[#A95736] transition-all duration-300 shadow-lg h-full rounded-xs"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between text-[10px] text-[#A95736] font-semibold tracking-[0.25em] uppercase mb-4 pb-2 border-b border-[#B89042]/20">
                        <span>0{idx + 1} / EDITION</span>
                        <span className="px-2 py-0.5 bg-[#FFFDF8] border border-[#B89042]/20 text-[#241914]">
                          {product.category}
                        </span>
                      </div>

                      {/* Image Container */}
                      <div className="relative aspect-[4/3] w-full mb-5 overflow-hidden bg-[#FFFDF8] border border-[#B89042]/30 rounded-xs">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Title & Desc */}
                      <h3 className="font-serif text-2xl font-bold text-[#241914] group-hover:text-[#A95736] transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs font-semibold tracking-[0.18em] text-[#B89042] uppercase mt-1">
                        {product.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#241914]/85 mt-2.5 font-sans leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Footer Tags & CTA Link */}
                    <div className="pt-5 mt-6 border-t border-[#B89042]/20 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {product.aromaNotes.slice(0, 2).map((note) => (
                          <span
                            key={note}
                            className="px-2 py-0.5 bg-[#FFFDF8] text-[9px] uppercase font-semibold text-[#241914]/80 border border-[#B89042]/20"
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/design-2/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#241914] group-hover:text-[#A95736] transition-colors"
                      >
                        <span>DETAILS</span>
                        <ArrowUpRight className="w-4 h-4 text-[#B89042] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
