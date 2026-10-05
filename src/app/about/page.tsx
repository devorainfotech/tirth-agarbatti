"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  MapPin,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  Flame,
  Award,
  Globe2,
} from "lucide-react";

export default function AboutPage() {
  const containerEase = "easeOut";

  return (
    <div className="pt-0 pb-20 bg-[#FFFDF7] text-[#17130F] selection:bg-[#D9A52B]/30 selection:text-[#17130F]">
      
      {/* 1. HERO / INTRO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#1C1612] via-[#17130F] to-[#241914] text-[#FFFDF7] border-b border-[#D9A52B]/20">
        {/* Soft Radial Ambient Glowing Lights */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Watermark Branding */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] sm:text-[200px] lg:text-[260px] font-serif font-bold text-[#FFFDF7]/[0.02] select-none pointer-events-none leading-none tracking-widest uppercase">
          TIRTH
        </div>

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            {/* Animated Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: containerEase }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/40 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2C94C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F2C94C]">
                OUR BRAND STORY
              </span>
            </motion.div>

            {/* Main Headline with Champagne Gold Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: containerEase }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFDF7] leading-[1.08]"
            >
              DEVOTION IN EVERY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C94C] via-[#D9A52B] to-[#D97706] drop-shadow-xs">
                FRAGRANT THREAD
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: containerEase }}
              className="text-base sm:text-lg text-[#FFFDF7]/85 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Milliard Agarbatti presents <strong className="font-semibold text-[#F2C94C]">Tirth Premium Agarbatti</strong>—an emblem of pure Indian incense craftsmanship, rooted in devotional tradition and refined aromatics.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-20 md:py-28 bg-[#FFFDF7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Cinematic Image showcase with frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: containerEase }}
              className="lg:col-span-6 relative"
            >
              {/* Outer decorative golden border frame */}
              <div className="absolute -inset-2 rounded-3xl border border-[#D9A52B]/30 pointer-events-none hidden sm:block" />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A52B]/30 group bg-[#17130F]">
                <Image
                  src="/images/brand/tirth-craftsmanship.jpg"
                  alt="Artisanal hand-rolling of agarbatti by Milliard Agarbatti"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-5 right-4 sm:right-8 px-5 py-3 rounded-2xl bg-[#FFFDF7] border border-[#D9A52B]/30 shadow-xl flex items-center gap-3">
                <Flame className="w-5 h-5 text-[#D9A52B]" />
                <div>
                  <span className="text-xs font-bold text-[#17130F] block">Vedic Craftsmanship</span>
                  <span className="text-[10px] text-[#7A6A57] uppercase tracking-wider block">Hand-rolled Perfection</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: containerEase }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#D9A52B]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A52B]">
                  HERITAGE & CRAFT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#17130F]">
                The Philosophy Behind Tirth
              </h2>

              <p className="text-[#7A6A57] text-base leading-relaxed font-light">
                We believe an agarbatti is far more than a <strong className="font-semibold text-[#17130F]">fragrance</strong>—it is an offering. Our recipes are designed to foster peaceful <strong className="font-semibold text-[#17130F]">devotional prayer</strong>, quiet contemplation, and <strong className="font-semibold text-[#17130F]">natural</strong> indoor sanctuary.
              </p>

              <p className="text-[#7A6A57] text-sm sm:text-base leading-relaxed font-light">
                From selecting aromatic botanicals like pure Sandalwood and sweet Mogra blossoms to blending natural resins for our Sambrani Dhoop Cups, <strong className="font-semibold text-[#17130F]">Milliard Agarbatti</strong> maintains high standards of scent purity and visual elegance.
              </p>

              {/* Redesigned Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/30 space-y-2 shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#17130F] text-[#F2C94C] flex items-center justify-center shadow-md group-hover:bg-[#D9A52B] group-hover:text-[#17130F] transition-colors">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#17130F]">Authentic Values</h4>
                  <p className="text-xs text-[#7A6A57] font-light leading-relaxed">
                    Dedicated to preserving traditional Indian incense making.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/30 space-y-2 shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#17130F] text-[#F2C94C] flex items-center justify-center shadow-md group-hover:bg-[#D9A52B] group-hover:text-[#17130F] transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#17130F]">Quality Promise</h4>
                  <p className="text-xs text-[#7A6A57] font-light leading-relaxed">
                    Consistent burn time and rich natural aroma release.
                  </p>
                </motion.div>
              </div>

            </motion.div>

          </div>
        </Container>
      </section>

      {/* 4. BRAND STORY / HERITAGE WIDE VISUAL BANNER */}
      <section className="relative py-24 md:py-32 bg-[#17130F] text-[#FFFDF7] overflow-hidden">
        {/* Cinematic Background Image */}
        <Image
          src="/images/design2/cinematic-showcase.jpg"
          alt="Sacred Indian Incense Temple Atmosphere"
          fill
          sizes="100vw"
          className="object-cover opacity-30 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130F] via-[#17130F]/80 to-[#17130F]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: containerEase }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/40 text-xs font-bold uppercase tracking-[0.25em] text-[#F2C94C] backdrop-blur-md">
              <Award className="w-4 h-4 text-[#F2C94C]" />
              <span>INDIAN AROMATIC HERITAGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#FFFDF7]">
              “Scent is the unspoken language of reverence.”
            </h2>

            <p className="text-base sm:text-lg text-[#FFFDF7]/80 font-serif italic max-w-xl mx-auto">
              Every stick crafted by Milliard Agarbatti is rolled with devotion, bringing temple-like tranquillity into modern living spaces.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 3. DEVOTIONAL HARMONY SECTION */}
      <section className="py-20 md:py-28 bg-[#FFF8E8]/60 border-t border-b border-[#D9A52B]/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: containerEase }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A52B]">
                <Sparkles className="w-4 h-4" />
                <span>DEVOTIONAL HARMONY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#17130F] leading-tight">
                Connecting Sacred Spaces with Pure Aromas
              </h2>

              <p className="text-base text-[#7A6A57] leading-relaxed font-light">
                Whether placed on a home altar, lighted during morning temple prayers, or burned to purify home spaces during Diwali and festivals, Tirth incense sticks create a calming sanctuary everywhere they burn.
              </p>

              {/* Staggered Bullet Points */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Flagship Chandan (Sandalwood) Agarbatti",
                  "Pure Mogra Jasmine Floral Sticks",
                  "Herbal Sambrani Dhoop Cups",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/20 shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#D9A52B]/20 flex items-center justify-center shrink-0 text-[#D9A52B]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[#17130F]">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#17130F] text-[#FFFDF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#D9A52B] hover:text-[#17130F] transition-all duration-300 shadow-xl"
                >
                  <span>Explore Product Range</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#D9A52B] group-hover:text-[#17130F]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Large Image with Offset Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: containerEase }}
              className="lg:col-span-6 relative"
            >
              {/* Offset Golden Accent Frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#D9A52B]/30 rounded-3xl pointer-events-none hidden sm:block" />

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A52B]/40 bg-[#17130F] group">
                <Image
                  src="/images/devotional/tirth-ganesha.jpg"
                  alt="Tirth Agarbatti Devotional Altar Offering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/50 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 5. OUR PRESENCE SECTION */}
      <section id="presence" className="py-20 md:py-28 bg-[#FFFDF7]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="OUR NETWORK"
              title="OUR PRESENCE"
              description="Headquartered in Gujarat, Milliard Agarbatti supplies Tirth Premium Agarbatti to retailers, distributors, and devotees across India."
            />
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Headquarters",
                desc: "Ahmedabad, Gujarat, India",
                detail: "Manufacturing & Operations Hub",
              },
              {
                icon: Sparkles,
                title: "Flagship Brand",
                desc: "Tirth Premium Agarbatti",
                detail: "Natural Incense & Dhoop Cups",
              },
              {
                icon: Globe2,
                title: "Trade Partners",
                desc: "Pan-India Retailers & Distributors",
                detail: "Welcoming Distribution Enquiries",
              },
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (idx + 1), duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-[#FFF8E8]/70 border border-[#D9A52B]/25 hover:border-[#D9A52B] transition-all duration-300 text-center space-y-4 shadow-sm hover:shadow-xl group flex flex-col justify-between"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#17130F] text-[#F2C94C] mx-auto flex items-center justify-center shadow-md group-hover:bg-[#D9A52B] group-hover:text-[#17130F] transition-all duration-300 transform group-hover:scale-110">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-[#17130F]">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#D97706] tracking-wider uppercase">
                      {card.desc}
                    </p>
                    <p className="text-xs text-[#7A6A57] font-light">
                      {card.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
}

