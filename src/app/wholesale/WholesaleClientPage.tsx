'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { ArrowRight, AlertCircle, Building2, CheckCircle, Package, Store, Truck } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const businessTypes = [
  { value: '', label: 'Select Business Type' },
  { value: 'retailer', label: 'Retailer' },
  { value: 'wholesaler', label: 'Wholesaler' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'corporate', label: 'Corporate / Institutional' },
  { value: 'other', label: 'Other' },
];

const productOptions = [
  'Sandalwood Incense Sticks',
  'Floral Incense Sticks',
  'Musk Incense Sticks',
  'Aromatic Incense Sticks',
  'Hand-Rolled Incense Sticks',
  'Perfumed Incense Sticks',
  'Agarbatti Stands',
  'All / Multiple Categories',
];

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  businessType: string;
  productsInterested: string;
  expectedRequirement: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  city: '',
  state: '',
  businessType: '',
  productsInterested: '',
  expectedRequirement: '',
  message: '',
};

const benefits = [
  {
    icon: Store,
    title: 'Retailers',
    description:
      'Stock Tirth incense on your shelves and offer a fragrance people return for — prayer, home, and gifting.',
    points: ['A curated range, not a crowded one', 'Boxes ready for the shop floor', 'Fragrances that sit well together'],
  },
  {
    icon: Package,
    title: 'Wholesalers',
    description:
      'Carry Tirth in the quantities the shops you supply already expect, and talk with us before the first order.',
    points: ['Sandalwood, floral, musk, and aromatic lines', 'Quantities discussed, not assumed', 'One house in Ahmedabad behind the range'],
  },
  {
    icon: Truck,
    title: 'Distributors',
    description:
      'Take the Tirth range into the markets and territories you already reach, with a single standard of fragrance.',
    points: ['Built for the retailers you already serve', 'The same collection, wherever you sell', 'A direct line back to the maker'],
  },
  {
    icon: Building2,
    title: 'Corporate',
    description:
      'Fragrance for offices, temples, hotels, and gatherings. Tell us the setting and the scale you have in mind.',
    points: ['Occasions, not a single scent', 'Orders sized to the place', 'A plain conversation about what you need'],
  },
];

const steps = [
  { title: 'Write', text: 'Tell us who you are, where you sell, and which fragrances you have in mind.' },
  { title: 'Reply', text: 'Our team in Ahmedabad reads the enquiry and writes back with the next step.' },
  { title: 'Discuss', text: 'We talk through the range, the quantities, and how you prefer to sell.' },
  { title: 'Supply', text: 'When it fits both sides, we arrange the first order and stay in touch.' },
];

export default function WholesaleClientPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.businessType) e.businessType = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  const fc = (name: keyof FormState) =>
    `w-full px-4 py-3 font-body text-sm border bg-white transition-colors duration-200 focus:outline-none
    ${errors[name] ? 'border-red-400 focus:border-red-500' : 'border-[rgba(184,146,58,0.3)] focus:border-[var(--color-gold)]'}`;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden" style={{ background: 'var(--color-burgundy-deeper)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/sandalwood.jpg"
            alt="Premium retail display"
            fill

            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />

        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-3" style={{ color: 'var(--color-gold)' }}>Business Enquiries</div>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Let&apos;s Grow<br />
              <HighlightedWord tone="gold">Together</HighlightedWord>
            </h1>
            <p className="max-w-[26rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              Retailers, wholesalers, and distributors are welcome. Partner with Tirth and bring these fragrances to the people you already serve.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-py" style={{ background: 'var(--color-ivory-warm)' }}>
        <div className="container-site">
          <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:mb-20 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-7">
              <div className="label-sm mb-4">Partnership Opportunities</div>
              <h2
                className="font-display text-charcoal"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', fontWeight: 400, lineHeight: 1.05 }}
              >
                How We Work
                <br />
                with <HighlightedWord tone="maroon">Partners</HighlightedWord>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12} className="lg:col-span-5">
              <p className="max-w-md font-body text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                Retailers, wholesalers, distributors, and corporate buyers are welcome. Tell us how you sell, and we will talk through a fit.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="border-t border-[rgba(184,146,58,0.35)]">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <article className="grid grid-cols-1 gap-6 border-b border-[rgba(184,146,58,0.35)] py-10 md:py-12 lg:grid-cols-12 lg:gap-10">
                    <div className="flex items-start gap-5 lg:col-span-4">
                      <span
                        className="font-display italic leading-none text-[var(--color-gold)]"
                        style={{ fontSize: 'clamp(2.4rem, 3vw, 3.2rem)' }}
                      >
                        0{i + 1}
                      </span>
                      <div className="pt-1">
                        <Icon size={16} className="mb-3 text-[var(--color-gold)]" aria-hidden="true" />
                        <h3 className="font-display text-[1.85rem] leading-tight" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
                          {b.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-body text-[1.02rem] leading-relaxed lg:col-span-4 lg:pt-2" style={{ color: 'var(--color-charcoal-light)' }}>
                      {b.description}
                    </p>
                    <ul className="space-y-2.5 lg:col-span-4 lg:pt-2">
                      {b.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-mid)' }}>
                          <span className="mt-2 h-px w-4 shrink-0 bg-[var(--color-gold)]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Brand presence */}
      <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-site">
          <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:col-span-7">
              <div className="label-sm mb-4">The Tirth presence</div>
              <h2
                className="font-display text-charcoal"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', fontWeight: 400, lineHeight: 1.05 }}
              >
                A quiet brand on
                <br />
                the <HighlightedWord tone="maroon">Shelf</HighlightedWord>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12} className="lg:col-span-5">
              <p className="max-w-md font-body text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                Every Tirth fragrance, photographed as it is in the collection.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {products.map((product) => (
                <StaggerItem key={product.id}>
                  <Link href={`/products/${product.slug}`} className="group block">
                    <figure className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`${product.name} — Tirth Premium Agarbatti`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                    </figure>
                    <p className="mt-3 font-display text-[1.2rem] leading-tight" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
                      {product.name}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it begins */}
      <section className="section-py" style={{ background: 'var(--color-beige)' }}>
        <div className="container-site">
          <FadeUp className="mx-auto mb-14 max-w-xl text-center">
            <div className="label-sm mb-4">From enquiry to order</div>
            <h2
              className="font-display text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              A quiet path to <HighlightedWord tone="maroon">Supply</HighlightedWord>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.08}>
                <span className="font-display italic leading-none text-[var(--color-gold)]" style={{ fontSize: '2.4rem' }}>
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-[1.6rem]" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                  {step.text}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden" style={{ background: 'var(--color-burgundy-deeper)' }}>
        <Image
          src="/images/wholesale/tirth-counter-types.jpg"
          alt="Tirth agarbatti packets on a dusk counter beside a burning stick"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,5,8,0.72) 0%, rgba(15,5,8,0.28) 55%, rgba(15,5,8,0.12) 100%)' }} />
        <div className="relative z-10 container-site py-16 md:py-24">
          <FadeUp className="max-w-lg">
            <div className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>On the counter</div>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              The same calm
              <br />
              <HighlightedWord tone="gold">Look</HighlightedWord>, wherever it sells
            </h2>
            <p className="mt-5 max-w-sm font-body text-[1.05rem] leading-relaxed text-white/80">
              Each fragrance has its own pack. The Tirth mark stays, so a customer can tell them apart.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="section-py" style={{ background: 'var(--color-cream)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeUp className="lg:sticky lg:top-28 lg:col-span-4">
              <div className="label-sm mb-4">Business Enquiry</div>
              <h2
                className="font-display text-charcoal"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 400, lineHeight: 1.05 }}
              >
                Submit a Wholesale
                <br />
                <HighlightedWord tone="maroon">Enquiry</HighlightedWord>
              </h2>
              <p className="mt-5 max-w-sm font-body text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                Share a few details about your business. We will write back from Ahmedabad to talk through the range and the quantities.
              </p>
              <p className="mt-8 font-body text-sm" style={{ color: 'var(--color-charcoal-mid)' }}>
                Fields marked * are required.
              </p>
            </FadeUp>

            <FadeUp delay={0.12} className="lg:col-span-8">
              <div className="border border-[rgba(184,146,58,0.28)] bg-ivory p-6 sm:p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center gap-4 py-16 text-center">
                    <CheckCircle size={48} style={{ color: 'var(--color-gold)' }} />
                    <h3 className="font-display text-3xl" style={{ fontWeight: 400 }}>Enquiry Received</h3>
                    <p className="font-body" style={{ color: 'var(--color-charcoal-light)' }}>Thank you. We&apos;ll be in touch shortly.</p>
                    <button onClick={() => setStatus('idle')} className="mt-4 font-body text-sm underline" style={{ color: 'var(--color-burgundy)' }}>
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Wholesale business enquiry form">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="ws-name" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Name *</label>
                        <input id="ws-name" type="text" name="name" value={form.name} onChange={handleChange} className={fc('name')} placeholder="Your name" autoComplete="name" />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="ws-company" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Company *</label>
                        <input id="ws-company" type="text" name="company" value={form.company} onChange={handleChange} className={fc('company')} placeholder="Company name" autoComplete="organization" />
                        {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
                      </div>
                      <div>
                        <label htmlFor="ws-phone" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Phone *</label>
                        <input id="ws-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={fc('phone')} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="ws-email" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Email *</label>
                        <input id="ws-email" type="email" name="email" value={form.email} onChange={handleChange} className={fc('email')} placeholder="your@email.com" autoComplete="email" />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="ws-city" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>City</label>
                        <input id="ws-city" type="text" name="city" value={form.city} onChange={handleChange} className={fc('city')} placeholder="City" autoComplete="address-level2" />
                      </div>
                      <div>
                        <label htmlFor="ws-state" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>State</label>
                        <input id="ws-state" type="text" name="state" value={form.state} onChange={handleChange} className={fc('state')} placeholder="State" autoComplete="address-level1" />
                      </div>
                      <div>
                        <label htmlFor="ws-business-type" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Business Type *</label>
                        <select id="ws-business-type" name="businessType" value={form.businessType} onChange={handleChange} className={fc('businessType')}>
                          {businessTypes.map((t) => <option key={t.value} value={t.value} disabled={t.value === ''}>{t.label}</option>)}
                        </select>
                        {errors.businessType && <p className="mt-1 text-xs text-red-500">{errors.businessType}</p>}
                      </div>
                      <div>
                        <label htmlFor="ws-products" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Products Interested In</label>
                        <select id="ws-products" name="productsInterested" value={form.productsInterested} onChange={handleChange} className={fc('productsInterested')}>
                          <option value="">Select Products</option>
                          {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="ws-requirement" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Expected Requirement</label>
                        <input id="ws-requirement" type="text" name="expectedRequirement" value={form.expectedRequirement} onChange={handleChange} className={fc('expectedRequirement')} placeholder="e.g. 500 boxes/month (optional)" />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="ws-message" className="label-sm mb-1.5 block" style={{ color: 'var(--color-charcoal-mid)' }}>Message</label>
                        <textarea id="ws-message" name="message" value={form.message} onChange={handleChange} rows={5} className={`${fc('message')} resize-y`} placeholder="Tell us more about your business and requirements..." />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div className="mt-4 flex items-center gap-2 font-body text-sm text-red-500">
                        <AlertCircle size={16} /> Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group mt-6 inline-flex items-center gap-3 bg-[var(--color-burgundy)] px-8 py-4 font-body text-[0.75rem] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[var(--color-burgundy-dark)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Business Enquiry'}
                      {status !== 'submitting' && <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
