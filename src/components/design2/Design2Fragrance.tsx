"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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
    <section className="py-20 sm:py-28 bg-[#FFFDF8] text-[#241914] relative border-b border-[#B89042]/20 overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89042]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 space-y-3">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
              OLFACTORY CRAFTSMANSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] leading-tight">
              THE ART OF <span className="italic text-[#B89042]">FRAGRANCE</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B89042] to-transparent" />
              <Sparkles className="w-4 h-4 text-[#B89042]" />
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B89042] to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Fragrance Cards Spread */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {FRAGRANCE_ART.map((item, idx) => (
            <ScrollReveal key={item.num} direction="up" distance={25} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#FFFDF8] border-2 border-[#B89042]/30 p-5 sm:p-6 relative shadow-lg hover:shadow-2xl hover:border-[#A95736] transition-all duration-300 flex flex-col justify-between h-full rounded-xs"
              >
                <div>
                  {/* Category & Num Header */}
                  <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.25em] uppercase text-[#A95736] mb-4 pb-2 border-b border-[#B89042]/20">
                    <span>{item.category}</span>
                    <span className="font-mono text-[#B89042] font-bold text-xs">{item.num}</span>
                  </div>

                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F7F1E6] border border-[#B89042]/40 rounded-xs mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B89042] block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#241914] tracking-wide leading-tight group-hover:text-[#A95736] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#241914]/85 leading-relaxed font-sans mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Accent */}
                <div className="pt-4 mt-5 border-t border-[#B89042]/20 flex items-center justify-between text-xs text-[#241914]/70">
                  <span className="font-serif italic text-[11px]">Handcrafted Extract</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89042] group-hover:bg-[#A95736] transition-colors" />
                </div>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
