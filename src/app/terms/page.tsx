import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFDF7] text-[#17130F]">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Terms & Conditions</h1>
        <div className="space-y-4 text-sm text-[#7A6A57] font-light leading-relaxed">
          <p>
            Welcome to the official website of Milliard Agarbatti. By accessing or using this website, you agree to comply with the following terms.
          </p>
          <h3 className="font-serif text-lg font-bold text-[#17130F] pt-2">Intellectual Property</h3>
          <p>
            All brand trademarks, product names (&quot;Tirth Premium Agarbatti&quot;), logos, imagery, and text content on this site are the property of Milliard Agarbatti.
          </p>
          <h3 className="font-serif text-lg font-bold text-[#17130F] pt-2">Product Specifications</h3>
          <p>
            Product packaging designs and fragrance descriptions are provided for commercial representation. Actual packaging elements may vary slightly upon physical distribution.
          </p>
          <p className="pt-4 text-xs text-[#7A6A57]">Last updated: October 2026.</p>
        </div>
      </Container>
    </div>
  );
}
