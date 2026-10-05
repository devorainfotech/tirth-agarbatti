import type { Metadata } from "next";
import Design3Header from "@/components/design3/Design3Header";
import Design3Footer from "@/components/design3/Design3Footer";

export const metadata: Metadata = {
  title: "Tirth Agarbatti | Luxury Indian Heritage & Modern Incense",
  description: "Experience the luxury of Indian heritage with Tirth Agarbatti by Milliard Agarbatti. Pure sandalwood, floral mogra, royal rose, and sacred sambrani dhoop.",
};

export default function Design3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E8] text-[#20232A] selection:bg-[#C9A45C]/30 selection:text-[#10182B]">
      <Design3Header />
      <main className="flex-grow">{children}</main>
      <Design3Footer />
    </div>
  );
}
