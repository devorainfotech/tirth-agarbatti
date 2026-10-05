import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Store, Building2, PhoneCall, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export default function DistributorCTA() {
  return (
    <section className="py-12 md:py-16 bg-[#FFF8E8] text-[#17130F] relative overflow-hidden border-t border-[#D9A52B]/20">
      <Container>
        <div className="bg-[#17130F] text-[#FFFDF7] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-[#D9A52B]/30">
          
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D9A52B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
                <Building2 className="w-3.5 h-3.5" />
                <span>TRADE & DISTRIBUTOR ENQUIRIES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFDF7]">
                BRING TIRTH TO <br />
                <span className="text-[#F2C94C]">YOUR MARKET</span>
              </h2>

              <p className="text-base text-[#FFFDF7]/80 font-light leading-relaxed max-w-2xl">
                Partner with Milliard Agarbatti to expand Tirth Premium Agarbatti and Sambrani Dhoop in your retail store, wholesale network, or regional distribution market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FFFDF7]/5 border border-[#D9A52B]/15">
                  <Store className="w-5 h-5 text-[#F2C94C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFDF7]">Retailers & Wholesalers</h4>
                    <p className="text-xs text-[#FFFDF7]/60 mt-0.5 font-light">
                      Attractive packaging, reliable quality, and popular devotional fragrance varieties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FFFDF7]/5 border border-[#D9A52B]/15">
                  <PhoneCall className="w-5 h-5 text-[#F2C94C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFFDF7]">Direct Factory Connection</h4>
                    <p className="text-xs text-[#FFFDF7]/60 mt-0.5 font-light">
                      Reach out directly to discuss trade terms and distributor partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 text-center">
              <Link
                href="/distributor"
                className="w-full py-4 px-6 rounded-full bg-[#D9A52B] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-[#FFFDF7] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Become a Distributor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact?type=wholesale"
                className="w-full py-4 px-6 rounded-full border border-[#D9A52B]/50 text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B]/15 transition-all duration-300 text-center"
              >
                Wholesale Enquiry
              </Link>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="text-xs text-[#F2C94C] hover:underline font-light pt-2"
              >
                Call Trade Helpline: {BRAND_INFO.phone}
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
