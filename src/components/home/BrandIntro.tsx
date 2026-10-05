import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="py-14 md:py-20 bg-[#FFFDF7] text-[#17130F] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFF8E8] rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D9A52B]/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT MILLIARD AGARBATTI"
            title="A Fragrance Rooted in Devotion"
            description="Tirth Premium Agarbatti was created with a quiet reverence for Indian incense traditions, blending authentic herbal extracts with timeless devotional values."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column Image with Floating Experience Card */}
          <Reveal delay={0.2} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A52B]/30 group bg-[#17130F]">
              <Image
                src="/images/brand/tirth-craftsmanship.jpg"
                alt="Artisanal Agarbatti Craftsmanship by Milliard Agarbatti"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Floating Experience Stat Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 p-5 rounded-2xl bg-[#FFFDF7] border border-[#D9A52B]/30 shadow-xl flex items-center gap-4 max-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-[#FFF8E8] border border-[#D9A52B]/30 flex items-center justify-center shrink-0 text-[#D9A52B]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#17130F] block leading-none">100%</span>
                <span className="text-[11px] font-semibold text-[#7A6A57] uppercase tracking-wider block mt-1">Pure Botanicals</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column Editorial Content & Feature Grid */}
          <Reveal delay={0.3} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8E8] border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#D9A52B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE TIRTH PHILOSOPHY</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#17130F]">
              Crafted to Transform Every Prayer into a Serene Experience
            </h3>

            <p className="text-[#7A6A57] text-base leading-relaxed font-light">
              Under the stewardship of <strong className="font-semibold text-[#17130F]">Milliard Agarbatti</strong>, the <strong className="font-semibold text-[#17130F]">Tirth</strong> brand stands for purity, fine aromatics, and spiritual warmth. We believe that fragrance is not merely pleasant it is a sacred bridge that elevates daily worship, meditation, and quiet reflection.
            </p>

            {/* Key Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF8E8]/80 border border-[#D9A52B]/25 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#D9A52B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-serif text-base font-bold text-[#17130F]">Vedic Blends</h4>
                </div>
                <p className="text-xs text-[#7A6A57] font-light leading-normal">Natural Sandalwood, Mogra, and Sambrani Resin.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8E8]/80 border border-[#D9A52B]/25 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#D9A52B]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-serif text-base font-bold text-[#17130F]">Clean & Slow Burn</h4>
                </div>
                <p className="text-xs text-[#7A6A57] font-light leading-normal">Consistent burn time and pure aromatic release.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#17130F] text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B] hover:text-[#17130F] transition-all duration-300 shadow-lg group"
              >
                <span>Discover Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D9A52B] group-hover:text-[#17130F]" />
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
