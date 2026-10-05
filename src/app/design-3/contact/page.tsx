import Design3Contact from "@/components/design3/Design3Contact";
import { BRAND_INFO } from "@/data/navigation";

export default function Design3ContactPage() {
  return (
    <div className="bg-[#F7F2E8]">
      
      {/* Editorial Page Header */}
      <section className="bg-[#10182B] text-[#F7F2E8] pt-32 pb-20 sm:pb-24 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A45C]">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#F7F2E8] mt-2">
            CONTACT <span className="italic text-[#C9A45C]">TIRTH AGARBATTI</span>
          </h1>
          <p className="font-serif text-lg italic text-[#E8DDC8]/90 mt-3 max-w-xl border-l-2 border-[#C9A45C] pl-4">
            Reach out for trade distribution, wholesale inquiries, product information, or business partnerships with {BRAND_INFO.companyName}.
          </p>
        </div>
      </section>

      <Design3Contact />
    </div>
  );
}
