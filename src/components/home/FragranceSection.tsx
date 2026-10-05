import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Sun, Moon, Flame } from "lucide-react";

export default function FragranceSection() {
  const moments = [
    {
      icon: Sun,
      title: "Morning Puja & Prayers",
      fragrance: "Tirth Chandan & Mogra",
      description: "Awaken your mind and home with fresh floral and comforting sandalwood notes that inspire clarity and devotion.",
      image: "/images/products/tirth-chandan.jpg",
    },
    {
      icon: Moon,
      title: "Evening Meditation & Peace",
      fragrance: "Tirth Royal Rose",
      description: "Unwind after a long day as soothing rose petals diffuse serene warmth and calm throughout your room.",
      image: "/images/products/tirth-mogra.jpg",
    },
    {
      icon: Flame,
      title: "Sacred Festive Rituals",
      fragrance: "Sambrani Dhoop Cups",
      description: "Purify your surroundings during festivals and special Havans with thick, aromatic frankincense smoke.",
      image: "/images/products/tirth-dhoop.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FFFDF7] text-[#17130F]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FRAGRANCE EXPERIENCE"
            title="A Fragrance for Every Sacred Moment"
            description="Whether inviting peace into your morning prayers or surrounding your family during festive occasions, Tirth offers scents designed for divine harmony."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((moment, idx) => {
            const Icon = moment.icon;
            return (
              <Reveal key={moment.title} delay={0.15 * (idx + 1)}>
                <div className="group relative bg-[#FFF8E8] rounded-2xl overflow-hidden border border-[#D9A52B]/20 p-6 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[#FFFDF7]">
                        <div className="p-1.5 rounded-full bg-[#D9A52B] text-[#17130F]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          {moment.fragrance}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#17130F] group-hover:text-[#D97706] transition-colors">
                      {moment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7A6A57] leading-relaxed font-light">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
