import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { BRAND_INFO } from "@/data/navigation";
import { Building2, Store, Truck, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Distributor | Milliard Agarbatti",
  description: "Join Milliard Agarbatti as a regional distributor or retail trade partner for Tirth Premium Agarbatti and Sambrani Dhoop.",
};

export default function DistributorPage() {
  return (
    <div className="pt-0 pb-24 bg-[#FFFDF7] text-[#17130F]">
      
      {/* Header Banner */}
      <section className="bg-[#17130F] text-[#FFFDF7] pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
                <Building2 className="w-3.5 h-3.5" />
                <span>TRADE PARTNERSHIP</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF7]">
                BECOME A DISTRIBUTOR
              </h1>
              <p className="text-base sm:text-lg text-[#FFFDF7]/80 font-light leading-relaxed">
                Expand your wholesale network or retail counters by carrying Tirth Premium Agarbatti and Sambrani Dhoop by Milliard Agarbatti.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="WHY PARTNER WITH US"
              title="Built for Retail & Wholesale Success"
              description="Milliard Agarbatti provides consistent product quality, premium foil packaging, and reliable supply lines."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/20 space-y-4">
                <Store className="w-8 h-8 text-[#D9A52B]" />
                <h3 className="font-serif text-xl font-bold text-[#17130F]">High Customer Repeat Demand</h3>
                <p className="text-xs text-[#7A6A57] leading-relaxed font-light">
                  Devotional incense buyers appreciate pure sandalwood notes and clean burning agarbatti sticks.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/20 space-y-4">
                <Truck className="w-8 h-8 text-[#D9A52B]" />
                <h3 className="font-serif text-xl font-bold text-[#17130F]">Pan-India Logistics</h3>
                <p className="text-xs text-[#7A6A57] leading-relaxed font-light">
                  Efficient supply chain fulfillment from our Gujarat manufacturing base across Indian markets.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/20 space-y-4">
                <ShieldCheck className="w-8 h-8 text-[#D9A52B]" />
                <h3 className="font-serif text-xl font-bold text-[#17130F]">Fair Commercial Terms</h3>
                <p className="text-xs text-[#7A6A57] leading-relaxed font-light">
                  Competitive distributor pricing structures and dedicated account assistance for trade partners.
                </p>
              </div>
            </Reveal>
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-[#17130F] text-[#FFFDF7] p-10 rounded-3xl text-center space-y-6 max-w-3xl mx-auto border border-[#D9A52B]/30 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F2C94C]">
              Ready to Discuss Dealership Terms?
            </h3>
            <p className="text-sm text-[#FFFDF7]/80 font-light">
              Contact our sales manager directly via telephone or submit a trade inquiry form online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=distributor"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D9A52B] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-[#FFFDF7] transition-all duration-300"
              >
                Submit Trade Inquiry
              </Link>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D9A52B]/40 text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#D9A52B]" />
                <span>Call {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
