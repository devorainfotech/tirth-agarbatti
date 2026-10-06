"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Scroll, Compass, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3Heritage() {
  const pillars = [
    {
      icon: Scroll,
      title: "VEDIC FORMULATIONS",
      subtitle: "Ancient Altar Tradition",
      desc: "Authentic recipes crafted using natural sandalwood powders, botanical gums, and aromatic dry roots.",
    },
    {
      icon: Compass,
      title: "CONTEMPORARY CRAFT",
      subtitle: "Refined Luxury Aesthetic",
      desc: "Deep midnight navy packaging accented with gold foil, designed for modern sacred spaces.",
    },
    {
      icon: ShieldCheck,
      title: "SOOT-FREE PURITY",
      subtitle: "Pure Atmosphere",
      desc: "Engineered to deliver clean, long-lasting incense smoke without toxic fillers or artificial charcoal.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0D1629] text-[#F8F4EA] relative overflow-hidden border-y border-[#C8A45D]/25">
      {/* Clean Vector Gold Mandala Pattern in Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen">
        {/* <Image
          src="/images/design3/mandala-vector-clean.jpg"
          alt="Clean Gold Line Indian Mandala Pattern"
          fill
          sizes="100vw"
          className="object-cover object-center"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1629] via-transparent to-[#0D1629]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block">
              HERITAGE & SACRED TRADITION
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F8F4EA] leading-[1.08] tracking-tight">
              Tradition, Refined for <span className="italic text-[#C8A45D] font-light">Today</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="w-16 h-[1px] bg-[#C8A45D]" />
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <div className="w-16 h-[1px] bg-[#C8A45D]" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="font-sans text-sm sm:text-base text-[#F8F4EA]/85 font-light leading-relaxed max-w-xl mx-auto">
              Rooted in India's timeless fragrance traditions, carefully balanced for modern living spaces.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Layout: 3 Unboxed Editorial List Rows + Cinematic Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3 Editorial List Rows */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-t border-[#C8A45D]/25">
              {pillars.map((item, idx) => {
                const numStr = `0${idx + 1}`;
                return (
                  <ScrollReveal key={item.title} direction="up" delay={0.2 + idx * 0.1}>
                    <div className="py-6 border-b border-[#C8A45D]/25 group">
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xs text-[#C8A45D] font-medium tracking-[0.2em] pt-0.5 shrink-0">
                          {numStr}
                        </span>
                        <div className="space-y-1">
                          <span className="text-[9px] font-sans font-medium tracking-[0.25em] uppercase text-[#C8A45D]">
                            {item.subtitle}
                          </span>
                          <h3 className="font-serif text-xl font-normal text-[#F8F4EA] group-hover:text-[#C8A45D] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#A9A49A] font-sans font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-2">
                <Link
                  href="/design-3/about"
                  className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#F8F4EA] hover:text-[#C8A45D] transition-colors border-b border-[#C8A45D] pb-1 group"
                >
                  <span>EXPLORE OUR HERITAGE STORY</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45D] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High-End Cinematic Temple Sanctum Photo */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.3} duration={0.9}>
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl border border-[#C8A45D]/20 group rounded-xs">
                <Image
                  src="/images/design3/heritage-sanctum-v2.jpg"
                  alt="Sacred Indian Heritage Devotional Sanctum & Oil Lamps"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629]/80 via-transparent to-transparent" />
                
                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute bottom-5 left-6 right-6 flex flex-col space-y-0.5">
                  <span className="text-[9px] font-sans font-medium tracking-[0.3em] uppercase text-[#C8A45D]">
                    SACRED SANCTUM
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#F8F4EA] font-normal tracking-wide">
                    Preserving Ancient Vedic Fragrance Rites
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
