"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2Showcase() {
  return (
    <section className="py-24 sm:py-32 bg-[#17110E] text-[#FFFDF8] relative overflow-hidden border-b border-[#B89042]/20">
      
      {/* Background Soft Gold Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#B89042]/12 rounded-full blur-3xl pointer-events-none motion-safe:animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A95736]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Big Bold Brand Statement */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            <ScrollReveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#241914] border border-[#B89042]/50 text-[#D9A52B] text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A52B]" />
                <span>EXCELLENCE IN SACRED AROMATICS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#B89042] block">
                  {BRAND_INFO.companyName} SIGNATURE
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFDF8] leading-[0.95]">
                  TIRTH <br />
                  <span className="italic text-[#B89042]">PREMIUM AGARBATTI</span>
                </h2>
              </div>
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#B89042] to-[#A95736] mt-6" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.25}>
              <p className="font-serif text-lg sm:text-2xl font-light text-[#EFE7D8] italic leading-relaxed border-l-2 border-[#B89042] pl-4 py-1">
                &ldquo;Crafted to elevate everyday moments into tranquil spiritual reflections.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.35}>
              <p className="text-sm sm:text-base text-[#DDD0BB]/90 max-w-lg leading-relaxed font-sans font-normal">
                Discover the signature aromas of pure Indian sandalwood, velvety rose, sweet mogra, and traditional sambrani dhoop cups. Available for home devotion and commercial distribution across India.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.45}>
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
                  <Link
                    href="/design-2/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#B89042] text-[#17110E] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#A95736] hover:text-[#FFFDF8] transition-all duration-300 shadow-xl border border-[#D9A52B]/40"
                  >
                    <span>SEND TRADE ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <Link
                  href="/design-2/products"
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-[#EFE7D8] hover:text-[#D9A52B] underline underline-offset-8 transition-colors"
                >
                  EXPLORE ALL PRODUCTS
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: High Impact Product Visual */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" distance={25} delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full bg-[#241914] p-3 sm:p-4 border-2 border-[#B89042]/50 shadow-2xl group rounded-xs"
              >
                <div className="relative w-full h-full overflow-hidden rounded-xs">
                  <Image
                    src="/images/design2/cinematic-brand-showcase.jpg"
                    alt="Tirth Premium Agarbatti Golden Box Showcase"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/80 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#A95736] text-[#FFFDF8] p-4 sm:p-5 border border-[#B89042]/50 shadow-2xl hidden sm:block rounded-xs">
                  <span className="block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#D9A52B]">
                    FLAGSHIP SELECTION
                  </span>
                  <span className="font-serif text-sm sm:text-base font-semibold">
                    {BRAND_INFO.companyName}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
