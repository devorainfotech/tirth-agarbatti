"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E6] text-[#0D1629] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Photography with Overlapping Label */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" duration={0.9}>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl group">
                <Image
                  src="/images/design3/brand-story.jpg"
                  alt="Crafted With Devotion by Tirth Agarbatti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629]/35 via-transparent to-transparent" />
              </div>

              {/* Overlapping Handcrafted Incense Label */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0D1629] text-[#F8F4EA] border border-[#C8A45D]/50 px-5 py-3 shadow-2xl text-[10px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase">
                <span>HANDCRAFTED PREMIUM INCENSE</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block">
                THE ESSENCE OF TIRTH
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#0D1629] leading-[1.05] tracking-tight">
                Crafted With <span className="italic text-[#C8A45D] font-light">Devotion</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-serif text-xl sm:text-2xl italic text-[#0D1629]/85 leading-relaxed">
                "Fragrance is the invisible bridge connecting ancient sacred rituals to modern quiet mindfulness."
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <div className="w-16 h-[1px] bg-[#C8A45D]" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="font-sans text-sm sm:text-base text-[#0D1629]/80 leading-relaxed font-light">
                At Milliard Agarbatti, we believe incense is an art of patience. Every stick of Tirth Agarbatti is meticulously rolled using natural sandalwood powders, pure floral essences, and rare resins harvested with reverence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.45}>
              <p className="font-sans text-sm sm:text-base text-[#0D1629]/80 leading-relaxed font-light">
                Formulated to provide a clean, soot-free burn, Tirth elevates daily prayers, meditation sessions, and reflective living spaces with an unhurried aromatic elegance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-2">
                <Link
                  href="/design-3/about"
                  className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#0D1629] hover:text-[#C8A45D] transition-colors border-b border-[#C8A45D] pb-1 group"
                >
                  <span>READ OUR HERITAGE STORY</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45D] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
