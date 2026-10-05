import type { Metadata } from "next";
import Design2Header from "@/components/design2/Design2Header";
import Design2Footer from "@/components/design2/Design2Footer";

export const metadata: Metadata = {
  title: "Milliard Agarbatti | Tirth Premium Agarbatti — Editorial Concept",
  description: "Luxury Indian fragrance editorial proposal for Tirth Premium Agarbatti by Milliard Agarbatti. Pure sandalwood, mogra blooms, and sacred sambrani dhoop.",
};

export default function Design2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E6] text-[#241914] selection:bg-[#A95736]/20 selection:text-[#241914]">
      <Design2Header />
      <main className="flex-grow">{children}</main>
      <Design2Footer />
    </div>
  );
}
