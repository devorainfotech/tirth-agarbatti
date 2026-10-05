import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Store } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";
import Design2Contact from "@/components/design2/Design2Contact";

export default function Design2DistributorPage() {
  return (
    <div className="bg-[#FFFDF8]">
      
      {/* Editorial Page Header */}
      <section className="bg-[#F7F1E6] pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-[#B89042]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736]">
            Trade & Commercial Distribution
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#241914] mt-2">
            BECOME A <span className="italic text-[#B89042]">DISTRIBUTOR</span>
          </h1>
          <p className="font-serif text-lg italic text-[#241914]/80 mt-2 max-w-2xl">
            Partner with {BRAND_INFO.companyName} to distribute {BRAND_INFO.brandName} across retail stores, supermarkets, and religious suppliers.
          </p>
        </div>
      </section>

      {/* Distributor Benefits Grid */}
      <section className="py-20 bg-[#FFFDF8] border-b border-[#B89042]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A95736]">
              Partnership Advantages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#241914]">
              WHY PARTNER WITH <span className="italic text-[#B89042]">US</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#A95736] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F1E6] border border-[#B89042]/30 p-8 space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#A95736]" />
              <h3 className="font-serif text-xl font-semibold text-[#241914]">
                Authentic Product Quality
              </h3>
              <p className="text-xs text-[#241914]/75 leading-relaxed">
                Handcrafted using pure sandalwood, mogra essences, and natural sambrani dhoop resins to ensure high customer repeat purchase rate.
              </p>
            </div>

            <div className="bg-[#F7F1E6] border border-[#B89042]/30 p-8 space-y-4">
              <Store className="w-8 h-8 text-[#A95736]" />
              <h3 className="font-serif text-xl font-semibold text-[#241914]">
                Attractive Retail Packaging
              </h3>
              <p className="text-xs text-[#241914]/75 leading-relaxed">
                Gold foil embossed boxes and premium heritage packaging designed to stand out on retail store shelves and altars.
              </p>
            </div>

            <div className="bg-[#F7F1E6] border border-[#B89042]/30 p-8 space-y-4">
              <Truck className="w-8 h-8 text-[#A95736]" />
              <h3 className="font-serif text-xl font-semibold text-[#241914]">
                Direct Factory Logistics
              </h3>
              <p className="text-xs text-[#241914]/75 leading-relaxed">
                Direct dispatch from our manufacturing facility in Ahmedabad, Gujarat, with dedicated distributor coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Contact Form configured for distributor */}
      <Design2Contact />

    </div>
  );
}
