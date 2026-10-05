import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Facebook } from '@/components/icons/Facebook';
import { company } from '@/data/company';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import ContactForm from '@/components/forms/ContactForm';
import SampleRange from '@/components/sections/SampleRange';

export const metadata: Metadata = {
  title: 'Contact — Get in Touch',
  description:
    'Contact Tirth Premium Agarbatti for product enquiries, wholesale opportunities and general questions. Based in Ahmedabad, Gujarat, India.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden" style={{ background: 'var(--color-burgundy-dark)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="A quiet desk with incense, an envelope, and warm evening light"
            fill

            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />
        
        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-3" style={{ color: 'var(--color-gold)' }}>Get in Touch</div>
            <h1
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Let&apos;s Talk<br />
              <HighlightedWord tone="gold">Fragrance</HighlightedWord>
            </h1>
            <p className="mt-4 max-w-[26rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              Ask us about a fragrance, a wholesale order, or anything else. We are in Ahmedabad, and we would like to hear from you.
            </p>
          </FadeUp>
        </div>
      </section>

      <SampleRange set="classic" layout="compact" tone="beige" />

      {/* Contact Split */}
      <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <FadeUp>
              <h2 className="font-display text-2xl mb-4" style={{ fontWeight: 400 }}>
                Interested in Tirth products, wholesale opportunities or general enquiries?
                We&apos;d love to hear from you.
              </h2>
              <div className="h-px w-12 mb-8" style={{ background: 'var(--color-gold)' }} />

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="mt-0.5 w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}
                  >
                    <MapPin size={16} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="label-sm mb-1">Location</p>
                    {company.address ? (
                      <p className="font-body text-sm" style={{ color: 'var(--color-charcoal-light)' }}>
                        {company.address}<br />
                        {company.city}, {company.state} {company.pincode && `— ${company.pincode}`}<br />
                        {company.country}
                      </p>
                    ) : (
                      <p className="font-body text-sm" style={{ color: 'var(--color-charcoal-light)' }}>
                        {company.city}, {company.state}, {company.country}
                        <br />
                        <span className="text-xs italic opacity-50">(Full address to be updated)</span>
                      </p>
                    )}
                  </div>
                </div>

                {company.phone && (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}>
                      <Phone size={16} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="label-sm mb-1">Phone</p>
                      <a href={`tel:${company.phone}`} className="font-body text-sm hover:text-[var(--color-burgundy)] transition-colors" style={{ color: 'var(--color-charcoal-light)' }}>
                        {company.phone}
                      </a>
                    </div>
                  </div>
                )}

                {company.email && (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}>
                      <Mail size={16} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="label-sm mb-1">Email</p>
                      <a href={`mailto:${company.email}`} className="font-body text-sm hover:text-[var(--color-burgundy)] transition-colors" style={{ color: 'var(--color-charcoal-light)' }}>
                        {company.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Facebook */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}>
                    <Facebook size={16} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="label-sm mb-1">Facebook</p>
                    <a
                      href={company.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm hover:text-[var(--color-burgundy)] transition-colors"
                      style={{ color: 'var(--color-charcoal-light)' }}
                    >
                      @tirthpremiumagarbatti
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="mt-10 flex items-center justify-center aspect-video border"
                style={{ borderColor: 'rgba(184, 146, 58, 0.2)', background: 'var(--color-cream)' }}
              >
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-3" style={{ color: 'var(--color-gold)', opacity: 0.4 }} />
                  <p className="font-body text-xs text-center" style={{ color: 'var(--color-charcoal-light)', opacity: 0.5 }}>
                    Map will appear after exact address is confirmed
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Right: Form */}
            <FadeUp delay={0.2}>
              <div className="p-8 lg:p-10" style={{ background: 'var(--color-cream)', border: '1px solid rgba(184,146,58,0.2)' }}>
                <h2 className="font-display text-2xl mb-6" style={{ fontWeight: 400 }}>Send an Enquiry</h2>
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
