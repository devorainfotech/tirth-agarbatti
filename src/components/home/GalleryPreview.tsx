import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/data/gallery";
import { ArrowRight, Eye } from "lucide-react";

export default function GalleryPreview() {
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-[#FFFDF7] text-[#17130F]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="VISUAL GALLERY"
            title="OUR BRAND PRESENCE"
            description="Explore moments of devotion, products, and craftsmanship captured across our brand journey."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item, idx) => (
            <Reveal key={item.id} delay={0.1 * (idx + 1)}>
              <Link
                href="/gallery"
                className="group relative block aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#D9A52B]/20 bg-[#17130F]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/90 via-[#17130F]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute inset-0 p-4 flex flex-col justify-end text-[#FFFDF7]">
                  <span className="text-[10px] font-semibold text-[#F2C94C] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold leading-tight group-hover:text-[#F2C94C] transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1 text-xs text-[#FFFDF7]/70 font-light group-hover:text-[#FFFDF7]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View in Gallery</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#17130F] text-[#17130F] font-semibold text-xs uppercase tracking-wider hover:bg-[#17130F] hover:text-[#FFFDF7] transition-all duration-300 group"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
