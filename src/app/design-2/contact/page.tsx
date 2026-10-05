import Design2Contact from "@/components/design2/Design2Contact";

export default function Design2ContactPage() {
  return (
    <div className="bg-[#FFFDF8]">
      
      <section className="bg-[#F7F1E6] pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-[#B89042]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736]">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal text-[#241914] mt-2">
            CONTACT <span className="italic text-[#B89042]">TIRTH AGARBATTI</span>
          </h1>
          <p className="font-serif text-lg italic text-[#241914]/80 mt-2 max-w-xl">
            Reach out for trade distribution, wholesale inquiries, product information, or business partnerships.
          </p>
        </div>
      </section>

      <Design2Contact />
    </div>
  );
}
