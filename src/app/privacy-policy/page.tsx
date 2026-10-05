import Container from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FFFDF7] text-[#17130F]">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-sm text-[#7A6A57] font-light leading-relaxed">
          <p>
            Milliard Agarbatti (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal privacy. This Privacy Policy outlines how we handle information collected via our website for Tirth Premium Agarbatti.
          </p>
          <h3 className="font-serif text-lg font-bold text-[#17130F] pt-2">Information Collection</h3>
          <p>
            When you submit an enquiry form or contact us via email/WhatsApp, we may collect your name, phone number, email address, and message details solely for responding to your trade or product inquiry.
          </p>
          <h3 className="font-serif text-lg font-bold text-[#17130F] pt-2">Data Protection</h3>
          <p>
            We do not sell, rent, or trade your contact information to third parties. All inquiries are maintained with confidentiality.
          </p>
          <p className="pt-4 text-xs text-[#7A6A57]">Last updated: October 2026.</p>
        </div>
      </Container>
    </div>
  );
}
