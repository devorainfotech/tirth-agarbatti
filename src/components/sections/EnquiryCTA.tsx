import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import ContactForm from '@/components/forms/ContactForm';

export default function EnquiryCTA() {
  return (
    <section className="section-py" style={{ background: 'var(--color-cream)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <FadeUp className="flex flex-col justify-center">
            <div className="label-sm mb-4">Get in Touch</div>
            <h2
              className="font-display text-charcoal mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Let&apos;s Talk<br />
              <HighlightedWord tone="maroon">Fragrance</HighlightedWord>
            </h2>
            <div className="h-px w-12 mb-6" style={{ background: 'var(--color-gold)' }} />
            <p className="font-body text-[1.05rem] leading-relaxed mb-8" style={{ color: 'var(--color-charcoal-light)' }}>
              Interested in Tirth products, wholesale opportunities or general enquiries? We&apos;d love to hear
              from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-body text-[0.75rem] tracking-[0.14em] uppercase group"
              style={{ color: 'var(--color-burgundy)' }}
            >
              Visit Contact Page
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            <div
              className="p-5 lg:p-6"
              style={{ background: 'var(--color-ivory)', border: '1px solid rgba(184,146,58,0.2)' }}
            >
              <ContactForm compact />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
