"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Layers } from "lucide-react";

export default function DesignSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isDesign3 = pathname?.startsWith("/design-3");
  const isDesign2 = pathname?.startsWith("/design-2");

  const navigateToDesign = (targetDesign: 1 | 2 | 3) => {
    if (targetDesign === 3) {
      if (pathname === "/" || pathname === "/design-2") {
        router.push("/design-3");
      } else if (pathname.startsWith("/products/")) {
        const slug = pathname.replace("/products/", "");
        router.push(`/design-3/products/${slug}`);
      } else if (pathname.startsWith("/design-2/products/")) {
        const slug = pathname.replace("/design-2/products/", "");
        router.push(`/design-3/products/${slug}`);
      } else if (pathname.startsWith("/design-2/")) {
        const target = pathname.replace("/design-2", "");
        router.push(`/design-3${target}`);
      } else {
        router.push(`/design-3${pathname}`);
      }
    } else if (targetDesign === 2) {
      if (pathname === "/" || pathname === "/design-3") {
        router.push("/design-2");
      } else if (pathname.startsWith("/products/")) {
        const slug = pathname.replace("/products/", "");
        router.push(`/design-2/products/${slug}`);
      } else if (pathname.startsWith("/design-3/products/")) {
        const slug = pathname.replace("/design-3/products/", "");
        router.push(`/design-2/products/${slug}`);
      } else if (pathname.startsWith("/design-3/")) {
        const target = pathname.replace("/design-3", "");
        router.push(`/design-2${target}`);
      } else {
        router.push(`/design-2${pathname}`);
      }
    } else if (targetDesign === 1) {
      if (pathname === "/design-2" || pathname === "/design-3") {
        router.push("/");
      } else if (pathname.startsWith("/design-2/")) {
        const target = pathname.replace("/design-2", "");
        router.push(target || "/");
      } else if (pathname.startsWith("/design-3/")) {
        const target = pathname.replace("/design-3", "");
        router.push(target || "/");
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center bg-[#10182B]/95 backdrop-blur-md text-[#F7F2E8] p-1.5 rounded-full border border-[#C9A45C]/40 shadow-2xl transition-all hover:scale-[1.02]">
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium tracking-wider text-[#E8DDC8] border-r border-[#C9A45C]/30 uppercase">
        <Layers className="w-3.5 h-3.5 text-[#C9A45C]" />
        <span>Design Proposal</span>
      </div>
      <div className="flex items-center gap-1 p-0.5">
        <button
          onClick={() => navigateToDesign(1)}
          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
            !isDesign2 && !isDesign3
              ? "bg-[#C9A45C] text-[#10182B] shadow-sm"
              : "text-[#E8DDC8] hover:text-[#F7F2E8]"
          }`}
        >
          Design 1
        </button>
        <button
          onClick={() => navigateToDesign(2)}
          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
            isDesign2
              ? "bg-[#C9A45C] text-[#10182B] shadow-sm"
              : "text-[#E8DDC8] hover:text-[#F7F2E8]"
          }`}
        >
          Design 2
        </button>
        <button
          onClick={() => navigateToDesign(3)}
          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
            isDesign3
              ? "bg-[#C9A45C] text-[#10182B] shadow-sm"
              : "text-[#E8DDC8] hover:text-[#F7F2E8]"
          }`}
        >
          <span className="flex items-center gap-1">
            Design 3 (Luxury)
            <Sparkles className="w-3 h-3 text-[#C9A45C]" />
          </span>
        </button>
      </div>
    </div>
  );
}
