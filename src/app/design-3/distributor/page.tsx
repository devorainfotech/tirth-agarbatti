import { BRAND_INFO } from "@/data/navigation";
import { ShieldCheck, Store, Truck } from "lucide-react";
import Design3Contact from "@/components/design3/Design3Contact";

export default function Design3DistributorPage() {
  return (
    <div className="bg-[#F7F2E8]">
      
      {/* Editorial Page Header */}
      <section className="bg-[#10182B] text-[#F7F2E8] pt-32 pb-20 sm:pb-24 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A45C]">
            Trade & Commercial Distribution
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#F7F2E8] mt-2">
            BECOME A <span className="italic text-[#C9A45C]">DISTRIBUTOR</span>
          </h1>
          <p className="font-serif text-lg italic text-[#E8DDC8]/90 mt-3 max-w-2xl border-l-2 border-[#C9A45C] pl-4">
            Partner with {BRAND_INFO.companyName} to distribute {BRAND_INFO.brandName} across retail chains, religious suppliers, and luxury lifestyle stockists.
          </p>
        </div>
      </section>

      {/* Distributor Benefits Grid */}
      <section className="py-24 sm:py-32 bg-[#F7F2E8] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A45C]">
              Partnership Advantages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#10182B]">
              WHY PARTNER WITH <span className="italic text-[#C9A45C]">US</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A45C] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-none bg-[#182B52] border border-[#C9A45C]/50 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#C9A45C]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                Authentic Product Quality
              </h3>
              <p className="text-xs text-[#E8DDC8]/80 leading-relaxed font-light font-sans">
                Handcrafted using pure sandalwood, mogra essences, and natural sambrani dhoop resins to ensure high repeat customer purchasing.
              </p>
            </div>

            <div className="bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-none bg-[#182B52] border border-[#C9A45C]/50 flex items-center justify-center">
                <Store className="w-6 h-6 text-[#C9A45C]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                Luxury Packaging
              </h3>
              <p className="text-xs text-[#E8DDC8]/80 leading-relaxed font-light font-sans">
                Gold foil embossed dark navy boxes and premium heritage packaging designed to command attention on retail store shelves and altars.
              </p>
            </div>

            <div className="bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-none bg-[#182B52] border border-[#C9A45C]/50 flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#C9A45C]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F2E8]">
                Direct Factory Logistics
              </h3>
              <p className="text-xs text-[#E8DDC8]/80 leading-relaxed font-light font-sans">
                Direct dispatch from our manufacturing facility in Ahmedabad, Gujarat, with dedicated account managers and fast shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Contact Form */}
      <Design3Contact />

    </div>
  );
}
