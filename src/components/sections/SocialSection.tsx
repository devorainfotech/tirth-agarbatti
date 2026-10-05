import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Facebook } from '@/components/icons/Facebook';
import { company } from '@/data/company';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

export default function SocialSection() {
  return (
    <section className="section-py" style={{ background: 'var(--color-burgundy-deeper)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <FadeUp className="lg:col-span-5">
            <div className="label-sm mb-4">Connect with Us</div>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Follow the
              <br />
              <HighlightedWord tone="gold">Fragrance</HighlightedWord>
            </h2>
            <p className="font-body mt-6 max-w-sm text-[1.02rem] leading-relaxed text-white/60">
              Fragrance stories, new collections and quiet notes from Tirth Premium Agarbatti.
            </p>
            <div className="mt-8 flex items-center gap-3 text-white/45">
              <MapPin size={15} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
              <span className="font-body text-sm tracking-wide">
                {company.city}, {company.state}
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-7">
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/15 p-7 sm:p-9 transition-colors duration-300 hover:border-[var(--color-gold)]"
              aria-label="Follow Tirth Premium Agarbatti on Facebook"
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  className="w-12 h-12 flex items-center justify-center border"
                  style={{ borderColor: 'rgba(184, 146, 58, 0.55)', color: 'var(--color-gold-light)' }}
                >
                  <Facebook size={18} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-white/35 transition-all duration-300 group-hover:text-[var(--color-gold-light)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <div className="mt-10">
                <div className="label-sm">Facebook</div>
                <p className="font-display italic text-white mt-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  @tirthpremiumagarbatti
                </p>
                <p className="font-body text-sm text-white/50 mt-3 max-w-md leading-relaxed">
                  Follow along for fragrance stories and what we are crafting next.
                </p>
              </div>
            </a>

            <Link
              href="/contact"
              className="mt-3 flex items-center justify-between gap-4 border border-white/15 px-7 py-5 transition-colors duration-300 hover:border-[var(--color-gold)] group"
            >
              <span>
                <span className="block font-body text-[0.68rem] tracking-[0.16em] uppercase text-white/45">
                  Prefer a message
                </span>
                <span className="block font-display text-xl text-white mt-1">Send an enquiry</span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-white/35 transition-all duration-300 group-hover:text-[var(--color-gold-light)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
