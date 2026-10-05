import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

export default function DevotionSection() {
  return (
    <section className="py-12 md:py-16 bg-[#17130F] text-[#FFFDF7] relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Devotional Image */}
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A52B]/30 group">
              <Image
                src="/images/devotional/tirth-ganesha.jpg"
                alt="Lord Ganesha Devotional Altar with Tirth Agarbatti Smoke"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/80 via-transparent to-transparent opacity-50" />
            </div>
          </Reveal>

          {/* Editorial Content */}
          <Reveal delay={0.2} className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEVOTIONAL HERITAGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF7] leading-tight">
              WHERE FRAGRANCE <br />
              <span className="text-[#F2C94C]">MEETS DEVOTION</span>
            </h2>

            <p className="text-base text-[#FFFDF7]/80 font-light leading-relaxed">
              In Indian spiritual tradition, lighting an agarbatti is an offering of purity, gratitude, and reverence. The delicate smoke rising upwards represents individual prayers ascending towards the divine.
            </p>

            <p className="text-sm text-[#FFFDF7]/70 font-light leading-relaxed">
              At <strong className="text-[#F2C94C] font-normal">Milliard Agarbatti</strong>, every stick of <strong className="text-[#F2C94C] font-normal">Tirth Premium Agarbatti</strong> is created to honor this sacred ritual, combining rich natural ingredients with meticulous craftsmanship.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-left border-t border-[#D9A52B]/20">
              <div className="p-4 rounded-xl bg-[#FFFDF7]/5 border border-[#D9A52B]/15">
                <h4 className="font-serif text-lg font-semibold text-[#F2C94C]">Sacred Purity</h4>
                <p className="text-xs text-[#FFFDF7]/60 mt-1 font-light">Free from toxic chemical additives</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FFFDF7]/5 border border-[#D9A52B]/15">
                <h4 className="font-serif text-lg font-semibold text-[#F2C94C]">Timeless Tradition</h4>
                <p className="text-xs text-[#FFFDF7]/60 mt-1 font-light">Authentic Indian incense recipes</p>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
