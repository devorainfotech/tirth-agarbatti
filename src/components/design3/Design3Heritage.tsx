"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
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

=======
import { Sparkles, ArrowRight } from "lucide-react";

export default function Design3Heritage() {
  return (
    <section className="py-24 sm:py-32 bg-[#10182B] text-[#F7F2E8] relative overflow-hidden">
      {/* Background Heritage Mandala Artwork */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/design3/heritage-navy-mandala.jpg"
          alt="Intricate Indian Heritage Gold Mandala Art"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10182B] via-transparent to-[#10182B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Heritage Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#182B52] border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SACRED INDIAN HERITAGE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F7F2E8] leading-[1.08] tracking-tight">
              Tradition, Refined for <span className="italic font-light text-[#C9A45C]">Today</span>
            </h2>

            {/* Gold Line Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="w-24 h-[1px] bg-[#C9A45C]" />
              <div className="w-2 h-2 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
              <div className="w-12 h-[1px] bg-[#C9A45C]/50" />
            </div>

            <p className="font-sans text-base sm:text-lg text-[#E8DDC8]/90 font-light leading-relaxed max-w-2xl">
              For millennia, agarbatti has been at the beating heart of Indian spirituality, temple rituals, and family sanctuaries. At Tirth Agarbatti, we preserve the purity of traditional incense recipes while elevating packaging and fragrance balance for contemporary homes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-sans text-[#E8DDC8]/80 font-light">
              <div className="p-4 border-l-2 border-[#C9A45C] bg-[#182B52]/40">
                <span className="block font-serif text-base text-[#F7F2E8] font-semibold mb-1">Vedic Formulation</span>
                <span>Blending natural wood dust, herbal resins, and aromatic flowers in exact traditional proportions.</span>
              </div>
              <div className="p-4 border-l-2 border-[#C9A45C] bg-[#182B52]/40">
                <span className="block font-serif text-base text-[#F7F2E8] font-semibold mb-1">Modern Aesthetic</span>
                <span>Sophisticated dark navy packaging and gold foil accents designed for luxury presentation.</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/design-3/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#F7F2E8] transition-all duration-300 shadow-2xl group"
              >
                <span>EXPLORE HERITAGE & ORIGINS</span>
                <ArrowRight className="w-4 h-4 text-[#10182B] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full border border-[#C9A45C]/40 p-3 bg-[#182B52]/60 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/design3/devotional.jpg"
                  alt="Sacred Indian Heritage Devotional Sanctum"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182B] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

        </div>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
      </div>
    </section>
  );
}
