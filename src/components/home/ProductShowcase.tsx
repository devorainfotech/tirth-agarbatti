import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-[#17130F] text-[#FFFDF7] relative overflow-hidden border-t border-b border-[#D9A52B]/20">
      {/* Glow effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D9A52B]/20 via-[#D97706]/5 to-transparent pointer-events-none blur-3xl" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A52B]/10 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C94C]">
              <Sparkles className="w-4 h-4" />
              <span>SIGNATURE COLLECTION</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF7]">
              EXPERIENCE TIRTH
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#FFFDF7]/80 font-light leading-relaxed max-w-2xl mx-auto">
              Every package of Tirth Premium Agarbatti reflects our unwavering commitment to fragrance mastery and devotional purity.
            </p>
          </Reveal>

          {/* Centered Large Product Photography */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A52B]/40 group my-8">
              <Image
                src="/images/hero/tirth-hero.jpg"
                alt="Tirth Premium Agarbatti Signature Pack Showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-[#17130F]/40 opacity-70" />
              
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="p-6 rounded-2xl bg-[#17130F]/80 backdrop-blur-md border border-[#D9A52B]/30 max-w-md space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#F2C94C]">Flagship Sandalwood & Mogra</h3>
                  <p className="text-xs text-[#FFFDF7]/70 font-light">
                    Handcrafted incense sticks formatted for long burning and ambient luxury.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D9A52B] text-[#17130F] font-semibold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-[#FFFDF7] transition-all duration-300 shadow-xl group"
              >
                <span>View Full Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
