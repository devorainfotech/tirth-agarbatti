"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "AUTHENTIC HERITAGE",
    subtitle: "Vedic Craftsmanship",
    desc: "Formulated according to authentic Indian incense traditions, using natural sandalwood powder, pure benzoin sambrani resins, and real flower essences.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "PREMIUM EXPERIENCE",
    subtitle: "Sensory Perfection",
    desc: "Crafted with hand-selected aromatic accords to ensure an even burn time, rich lingering fragrance throw, and clean atmospheric warmth.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "NATURAL INGREDIENTS",
    subtitle: "Purity & Devotion",
    desc: "Designed to elevate daily morning puja, meditation, and reflective moments—bringing peaceful energy and sacred tranquility to your home.",
  },
];

export default function Design2QualityPillars() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6EE] text-[#1C140E] relative border-b border-[#C8A45D]/25 overflow-hidden">
      
      {/* Soft Atmosphere Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A45D]/08 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#C8A45D]" />
              <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                OUR UNCOMPROMISING COMMITMENT
              </span>
              <span className="w-8 h-[1px] bg-[#C8A45D]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] leading-tight">
              BRAND <span className="italic font-normal text-[#C8A45D] relative inline-block">
                PILLARS
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#8C5D3B]" />
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.num} direction="up" distance={25} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#FFFDF8] border border-[#C8A45D]/30 p-8 sm:p-9 relative shadow-[0_10px_35px_-15px_rgba(28,20,14,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(28,20,14,0.14)] hover:border-[#C8A45D] transition-all duration-400 flex flex-col justify-between h-full group"
                >
                  {/* Subtle Top Gold Accent Bar on Hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D] to-[#C8A45D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="space-y-6">
                    {/* Number & Icon */}
                    <div className="flex items-center justify-between border-b border-[#C8A45D]/20 pb-4">
                      <span className="font-serif text-3xl font-light text-[#C8A45D] tracking-wider">
                        {p.num}
                      </span>
                      <div className="p-2.5 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#8C5D3B] group-hover:bg-[#1C140E] group-hover:text-[#C8A45D] transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C8A45D] block">
                        {p.subtitle}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C140E] tracking-tight group-hover:text-[#8C5D3B] transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C140E]/80 leading-relaxed font-sans pt-2">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#C8A45D]/20 flex items-center justify-between text-[10px] uppercase font-sans font-semibold text-[#8C5D3B] tracking-widest">
                    <span>Milliard Standard</span>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A45D]" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

