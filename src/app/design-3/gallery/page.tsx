"use client";

import { Sparkles } from "lucide-react";
import Design3Gallery from "@/components/design3/Design3Gallery";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3GalleryPage() {
  return (
    <div className="bg-[#F7F2E8]">
      
      {/* Editorial Page Hero */}
      <section className="bg-[#10182B] text-[#F7F2E8] pt-32 pb-20 sm:pb-24 border-b border-[#C9A45C]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#182B52] border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL ARCHIVES & IMAGERY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-7xl font-normal text-[#F7F2E8] tracking-tight leading-[1.05]">
            GALLERY & <span className="italic text-[#C9A45C]">CREATIVES</span>
          </h1>

          <div className="flex items-center gap-3 my-4">
            <div className="w-20 h-[1px] bg-[#C9A45C]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
          </div>

          <p className="font-serif text-base sm:text-xl italic text-[#E8DDC8]/90 max-w-xl border-l-2 border-[#C9A45C] pl-4">
            A visual showcase of Tirth Premium Agarbatti packaging, sacred altar setups, devotional moments, and artisanal craftsmanship by Milliard Agarbatti.
          </p>
        </div>
      </section>

      <Design3Gallery />
      <Design3CTA />
    </div>
  );
}
