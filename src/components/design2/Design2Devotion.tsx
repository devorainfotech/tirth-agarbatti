"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Flower2, Flame, Feather, Component } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const INGREDIENTS = [
  {
    step: "01",
    name: "Pure Chandan Wood",
    detail: "Harvested Mysore Sandalwood",
    label: "Sandalwood Accord",
    icon: Component,
    image: "/images/design2/fragrance-chandan-sandalwood.jpg",
  },
  {
    step: "02",
    name: "Fresh Jasmine Petals",
    detail: "Morning Temple Mogra Bloom",
    label: "Floral Extraction",
    icon: Flower2,
    image: "/images/design2/fragrance-mogra-jasmine.jpg",
  },
  {
    step: "03",
    name: "Sacred Vedic Herbs",
    detail: "Organic Resin & Botanical Oils",
    label: "Resin Formulation",
    icon: Feather,
    image: "/images/design2/brand-craftsmanship.jpg",
  },
  {
    step: "04",
    name: "Purifying Smoke",
    detail: "Hand-Rolled Incense Ritual",
    label: "Atmospheric Offering",
    icon: Flame,
    image: "/images/design2/devotional-sanctum.jpg",
  },
];

export default function Design2Devotion() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6EE] text-[#1C140E] relative overflow-hidden border-b border-[#C8A45D]/25">
      
      {/* Soft Atmosphere Glow & Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#C8A45D]/12 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-radial from-[#8C5D3B]/08 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Composition */}
        <ScrollReveal direction="up" distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-6 border-b border-[#C8A45D]/30 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                  BOTANICAL ESSENCE TO SACRED SMOKE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] leading-tight">
                FROM NATURE <span className="italic font-normal text-[#C8A45D] relative inline-block">
                  INTO DEVOTION
                  <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
                </span>
              </h2>
            </div>
            
            <div className="max-w-md bg-[#FFFDF8] p-4 border-l-2 border-[#C8A45D] border-y border-r border-[#C8A45D]/20 shadow-xs">
              <p className="text-xs sm:text-sm text-[#1C140E]/85 leading-relaxed font-serif italic">
                &ldquo;In Indian tradition, fragrance is an offering of pure consciousness—transforming raw floral extracts into sacred atmospheric devotion.&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Ingredient & Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INGREDIENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.name} direction="up" distance={25} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-[#FFFDF8] border border-[#C8A45D]/35 p-5 relative shadow-[0_10px_30px_-15px_rgba(28,20,14,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(28,20,14,0.16)] hover:border-[#C8A45D] transition-all duration-400 flex flex-col justify-between h-full"
                >
                  {/* Gold Corner Embellishments */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

                  <div>
                    {/* Top Step Counter Bar */}
                    <div className="flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[#8C5D3B] mb-3.5 pb-2 border-b border-[#C8A45D]/20">
                      <span>STEP {item.step}</span>
                      <span className="font-serif text-[#C8A45D] font-bold text-xs">{item.label}</span>
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C140E] border border-[#C8A45D]/30 mb-4 group-hover:border-[#C8A45D]/60 transition-colors duration-400">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/80 via-[#1C140E]/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
                      
                      {/* Floating Step Icon Badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[#FFFDF8] bg-[#1C140E]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans font-semibold tracking-widest uppercase border border-[#C8A45D]/40 shadow-sm">
                        <Icon className="w-3 h-3 text-[#C8A45D]" />
                        <span>STAGE {item.step}</span>
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-lg font-bold text-[#1C140E] group-hover:text-[#8C5D3B] transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#1C140E]/80 font-sans leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Accent */}
                  <div className="pt-3 mt-4 border-t border-[#C8A45D]/20 flex items-center justify-between text-[10px] uppercase font-sans font-semibold text-[#8C5D3B] tracking-wider">
                    <span>Ethically Sourced</span>
                    <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" distance={20} delay={0.4}>
          <div className="mt-14 text-center">
            <Link
              href="/design-2/gallery"
              className="group relative inline-flex items-center gap-4 px-9 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/40 overflow-hidden"
            >
              {/* Sheen Hover Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              
              <span className="relative z-10">EXPLORE DEVOTIONAL ARCHIVES</span>
              <ArrowRight className="w-4 h-4 text-[#C8A45D] relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

