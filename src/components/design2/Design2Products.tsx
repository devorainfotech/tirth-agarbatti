"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

export default function Design2Products() {
  const displayProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F1E6] text-[#241914] relative border-b border-[#B89042]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#B89042]/30 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
                OLFACTORY CATALOGUE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] mt-1">
                THE CURATED <span className="italic text-[#B89042]">COLLECTION</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#241914]/80 bg-[#FFFDF8] px-4 py-2 border border-[#B89042]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B89042]" />
              <span>TIRTH SACRED EDITIONS</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayProducts.map((product, index) => (
            <ScrollReveal key={product.slug} direction="up" distance={20} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#FFFDF8] border-2 border-[#B89042]/30 p-5 sm:p-6 relative shadow-lg hover:border-[#A95736] transition-all duration-300 flex flex-col justify-between h-full rounded-xs"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.25em] uppercase text-[#A95736] mb-4 pb-2 border-b border-[#B89042]/20">
                    <span>0{index + 1} / EDITION</span>
                    <span className="px-2 py-0.5 bg-[#F7F1E6] border border-[#B89042]/20 text-[#241914]">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-[4/3] w-full mb-5 overflow-hidden bg-[#F7F1E6] border border-[#B89042]/30 rounded-xs">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241914] group-hover:text-[#A95736] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs tracking-[0.18em] font-semibold text-[#B89042] uppercase">
                      {product.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#241914]/85 leading-relaxed font-sans line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-5 mt-5 border-t border-[#B89042]/20 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {product.aromaNotes.slice(0, 2).map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 bg-[#F7F1E6] text-[9px] font-semibold tracking-wider text-[#241914]/80 uppercase border border-[#B89042]/20"
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
        </div>

        {/* View All Button */}
        <ScrollReveal direction="up" distance={15} delay={0.4}>
          <div className="mt-14 text-center">
            <Link
              href="/design-2/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#A95736] transition-all duration-300 shadow-md border border-[#B89042]/40"
            >
              <span>EXPLORE COMPLETE CATALOGUE</span>
              <ArrowUpRight className="w-4 h-4 text-[#D9A52B]" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
