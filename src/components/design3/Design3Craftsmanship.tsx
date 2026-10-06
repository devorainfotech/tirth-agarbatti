"use client";

import Image from "next/image";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3Craftsmanship() {
  const points = [
    { num: "01", title: "NATURAL INGREDIENTS", desc: "Pure wood powders, floral extracts & natural botanical resins." },
    { num: "02", title: "HAND-ROLLED CRAFT", desc: "Traditional artisanal rolling methods passed through generations." },
    { num: "03", title: "CONSISTENT FRAGRANCE", desc: "Soot-free, long-burning incense for pure quiet devotion." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0D1629] text-[#F8F4EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Clean Points */}
          <div className="lg:col-span-6 space-y-9">
            <ScrollReveal direction="up" delay={0.1} duration={0.8}>
              <div>
                <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block mb-2">
                  ARTISANAL PERFECTION
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F8F4EA] leading-[1.05] tracking-tight">
                  Authentic <br />
                  <span className="italic text-[#C8A45D] font-light">Formulations</span>
                </h2>
                <div className="w-16 h-[1px] bg-[#C8A45D]/60 mt-5" />
              </div>
            </ScrollReveal>

            {/* 3 Clean Editorial Points */}
            <div className="space-y-7 pt-1">
              {points.map((p, idx) => (
                <ScrollReveal key={p.num} direction="up" delay={0.2 + idx * 0.1} duration={0.8}>
                  <div className="border-b border-[#172746]/80 pb-6 group">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[11px] text-[#C8A45D]/90 tracking-[0.25em] font-medium">
                        {p.num}
                      </span>
                      <h3 className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#F8F4EA] group-hover:text-[#C8A45D] transition-colors duration-300">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A9A49A] font-sans font-light mt-2 pl-9 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Photography with Subtle Luxury Glow */}
          <div className="lg:col-span-6 relative">
            {/* Extremely Subtle Warm Atmospheric Glow Behind Image */}
            <div 
              className="absolute inset-0 bg-radial from-[#C8A45D]/15 via-[#9E6B28]/05 to-transparent blur-3xl scale-110 pointer-events-none" 
              aria-hidden="true" 
            />

            <ScrollReveal direction="up" delay={0.25} duration={0.9}>
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl border border-[#C8A45D]/15 rounded-xs group">
                <Image
                  src="/images/design3/craftsmanship.jpg"
                  alt="Close-up Craftsmanship of Tirth Agarbatti"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629]/50 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

