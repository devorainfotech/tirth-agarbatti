"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

export default function Design2Products() {
  const displayProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EE] text-[#1C140E] relative border-b border-[#C8A45D]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#C8A45D]/30 gap-4">
            <div>
              <span className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-[#8C5D3B] block">
                OLFACTORY CATALOGUE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] mt-1">
                THE CURATED <span className="italic text-[#C8A45D]">COLLECTION</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#1C140E]/80 bg-[#FFFDF8] px-4 py-2 border border-[#C8A45D]/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>TIRTH SACRED EDITIONS</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayProducts.map((product, index) => {
            const isFeatured = index === 0;
            return (
              <ScrollReveal key={product.slug} direction="up" distance={25} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`group bg-[#FFFDF8] border ${
                    isFeatured ? "border-[#C8A45D] shadow-[0_20px_45px_-12px_rgba(200,164,93,0.18)]" : "border-[#C8A45D]/40 shadow-[0_15px_40px_-15px_rgba(28,20,14,0.08)]"
                  } p-6 sm:p-7 relative hover:shadow-[0_25px_50px_-12px_rgba(28,20,14,0.18)] hover:border-[#C8A45D] transition-all duration-500 flex flex-col justify-between h-full`}
                >
                  {/* Gold Corner Embellishments */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

                  <div>
                    {/* Top Edition Badge */}
                    <div className="flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#8C5D3B] mb-5 pb-3 border-b border-[#C8A45D]/20">
                      <span className="flex items-center gap-1.5">
                        <Flame className="w-3 h-3 text-[#C8A45D]" />
                        0{index + 1} / {isFeatured ? "FLAGSHIP EDITION" : "SACRED EDITION"}
                      </span>
                      <span className="px-3 py-1 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#1C140E] font-medium">
                        {product.category}
                      </span>
                    </div>

                  {/* Product Image */}
                  <div className="relative aspect-[4/3] w-full mb-5 overflow-hidden bg-[#1C140E] border border-[#C8A45D]/30 rounded-xs">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C140E] group-hover:text-[#8C5D3B] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs tracking-[0.18em] font-sans font-medium text-[#C8A45D] uppercase">
                      {product.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#1C140E]/85 leading-relaxed font-sans line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-5 mt-5 border-t border-[#C8A45D]/20 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {product.aromaNotes.slice(0, 2).map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 bg-[#FAF6EE] text-[9px] font-sans font-medium tracking-wider text-[#1C140E]/80 uppercase border border-[#C8A45D]/25"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/design-2/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#1C140E] group-hover:text-[#8C5D3B] transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8A45D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </motion.div>
            </ScrollReveal>
          );
        })}
        </div>

        {/* View All Button */}
        <ScrollReveal direction="up" distance={15} delay={0.4}>
          <div className="mt-14 text-center">
            <Link
              href="/design-2/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-medium tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-md border border-[#C8A45D]/40"
            >
              <span>EXPLORE COMPLETE CATALOGUE</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8A45D]" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
