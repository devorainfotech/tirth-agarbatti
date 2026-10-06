"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Flame } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FRAGRANCE_ART = [
  {
    num: "01",
    category: "CHANDAN ACCORD",
    title: "SACRED SANDALWOOD",
    subtitle: "Pure Chandan Aroma",
    desc: "Extracted from rich Indian sandalwood botanical accords. It evokes calm clarity and meditative stillness during sacred worship.",
    image: "/images/design2/fragrance-chandan-sandalwood.jpg",
  },
  {
    num: "02",
    category: "FLORAL ESSENCE",
    title: "SWEET MOGRA BLOOM",
    subtitle: "Temple Jasmine Blossom",
    desc: "Capturing the serene freshness of early morning temple gardens. A sweet floral ambiance that uplifts the home.",
    image: "/images/design2/fragrance-mogra-jasmine.jpg",
  },
  {
    num: "03",
    category: "RESIN DHOOP",
    title: "BENZOIN SAMBRANI",
    subtitle: "Purifying Resin Aroma",
    desc: "A rich, herbal resin smoke crafted to cleanse atmospheric energy, ward off negativity, and invoke sacred serenity.",
    image: "/images/design2/fragrance-sambrani-dhoop.jpg",
  },
];

export default function Design2Fragrance() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF8] text-[#1C140E] relative border-b border-[#C8A45D]/25 overflow-hidden">
      
      {/* Background Subtle Radial Glow & Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#C8A45D]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#C8A45D]" />
              <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                OLFACTORY CRAFTSMANSHIP
              </span>
              <span className="w-8 h-[1px] bg-[#C8A45D]" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] leading-tight">
              THE ART OF <span className="italic font-normal text-[#C8A45D] relative inline-block">
                FRAGRANCE
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
              <Sparkles className="w-4 h-4 text-[#C8A45D]" />
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Compact Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FRAGRANCE_ART.map((item, idx) => (
            <ScrollReveal key={item.num} direction="up" distance={25} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#FAF6EE] border border-[#C8A45D]/35 p-5 relative shadow-[0_10px_30px_-15px_rgba(28,20,14,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(28,20,14,0.16)] hover:border-[#C8A45D] transition-all duration-400 flex flex-col justify-between h-full"
              >
                {/* Gold Corner Embellishments */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A45D] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

                <div>
                  {/* Category & Num Header */}
                  <div className="flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#8C5D3B] mb-3.5 pb-2 border-b border-[#C8A45D]/20">
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3 h-3 text-[#C8A45D]" />
                      {item.category}
                    </span>
                    <span className="font-serif text-[#C8A45D] font-bold text-xs">NO. {item.num}</span>
                  </div>

                  {/* Compact Image Container (Sleek Aspect 16/10) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1C140E] border border-[#C8A45D]/30 mb-4 group-hover:border-[#C8A45D]/60 transition-colors duration-400">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-108 group-hover:brightness-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C8A45D] block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1C140E] tracking-tight leading-tight group-hover:text-[#8C5D3B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1C140E]/80 leading-relaxed font-sans pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Accent */}
                <div className="pt-3 mt-4 border-t border-[#C8A45D]/20 flex items-center justify-between text-xs text-[#1C140E]/70 font-sans">
                  <span className="font-serif italic text-[11px] text-[#8C5D3B]">Artisanal Botanical Accord</span>
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A45D] group-hover:bg-[#8C5D3B] transition-colors" />
                </div>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

