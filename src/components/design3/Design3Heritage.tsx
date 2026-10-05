"use client";

import Image from "next/image";
import Link from "next/link";
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
      </div>
    </section>
  );
}
