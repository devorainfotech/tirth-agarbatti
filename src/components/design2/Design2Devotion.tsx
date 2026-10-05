"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Flower2, Flame, Feather, Component } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

const INGREDIENTS = [
  {
    name: "Pure Chandan Wood",
    detail: "Harvested Mysore Sandalwood",
    icon: Component,
    image: "/images/design2/fragrance-chandan-sandalwood.jpg",
  },
  {
    name: "Fresh Jasmine Petals",
    detail: "Morning Temple Mogra Bloom",
    icon: Flower2,
    image: "/images/design2/fragrance-mogra-jasmine.jpg",
  },
  {
    name: "Sacred Vedic Herbs",
    detail: "Organic Resin & Botanical Oils",
    icon: Feather,
    image: "/images/design2/brand-craftsmanship.jpg",
  },
  {
    name: "Purifying Smoke",
    detail: "Hand-Rolled Incense Ritual",
    icon: Flame,
    image: "/images/design2/devotional-sanctum.jpg",
  },
];

export default function Design2Devotion() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F1E6] text-[#241914] relative border-b border-[#B89042]/20 overflow-hidden">
      
      {/* Soft Lighting Overlay */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#B89042]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Composition */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 pb-6 border-b border-[#B89042]/30 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
                BOTANICAL ESSENCE TO SACRED SMOKE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] leading-tight">
                FROM NATURE <span className="italic text-[#B89042]">INTO DEVOTION</span>
              </h2>
            </div>
            
            <p className="max-w-md text-xs sm:text-sm text-[#241914]/85 leading-relaxed font-serif italic border-l-2 border-[#B89042] pl-4">
              &ldquo;In Indian tradition, fragrance is an offering of pure consciousness—transforming raw floral extracts into sacred atmospheric devotion.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Column Ingredient & Atmosphere Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INGREDIENTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.name} direction="up" distance={20} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-[#FFFDF8] border-2 border-[#B89042]/30 p-4 sm:p-5 relative shadow-lg hover:border-[#A95736] transition-all duration-300 rounded-xs flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241914] border border-[#B89042]/20 mb-4 rounded-xs">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/70 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[#FFFDF8] bg-[#241914]/80 px-2.5 py-1 text-[9px] font-semibold tracking-widest uppercase border border-[#B89042]/30 backdrop-blur-xs">
                        <Icon className="w-3 h-3 text-[#D9A52B]" />
                        <span>0{index + 1}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-[#241914] group-hover:text-[#A95736] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#241914]/75 font-sans">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#B89042]/20 flex items-center justify-between text-[10px] uppercase font-semibold text-[#B89042]">
                    <span>Ethically Sourced</span>
                    <Sparkles className="w-3 h-3 text-[#A95736]" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" distance={15} delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/design-2/gallery"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A95736] transition-all duration-300 shadow-md border border-[#B89042]/40"
            >
              <span>EXPLORE DEVOTIONAL ARCHIVES</span>
              <ArrowRight className="w-4 h-4 text-[#D9A52B]" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
