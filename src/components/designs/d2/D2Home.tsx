'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { fragranceSamples } from '@/data/samples';
import D2Nav from '@/components/designs/d2/D2Nav';

const range = products.filter((product) => product.category !== 'Sage Aroma').slice(0, 6);
const samples = fragranceSamples.slice(0, 8);
const year = new Date().getFullYear();

const marks = [
  { label: 'Origin', value: `${company.city}, ${company.state}` },
  { label: 'House', value: company.brandName },
  { label: 'Trade', value: 'Wholesale open' },
];

export default function D2Home() {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <div className="min-h-screen bg-[#F7F3EE] font-body text-[#1C1410]">
      <D2Nav />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-20" aria-label="Tirth brand">
        <motion.div className="lg:col-span-6" {...rise}>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E4572E]" />
            <span className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6B5648]">
              {company.fullName}
            </span>
          </div>

          <h1 className="mt-6 max-w-[11ch] text-[clamp(3.4rem,7vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[#1C1410]">
            Light a stick. Keep the feeling.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#6B5648]">{company.tagline}.</p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[#6B5648]">{company.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#1C1410] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E4572E]"
            >
              Explore fragrances
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#1C1410] transition-colors hover:border-[#1C1410]"
            >
              Our story
            </Link>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-black/10 pt-6">
            {marks.map((mark) => (
              <div key={mark.label}>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#C45C26]">{mark.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-snug">{mark.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative lg:col-span-6"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-[0_30px_80px_-36px_rgba(28,20,16,0.65)]">
            <Image
              src="/images/new-hero-agarbatti.jpg"
              alt="Burning Tirth incense in a brass holder"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 to-transparent" />
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/92 p-3 shadow-xl backdrop-blur-md sm:right-auto sm:pr-6">
            <Image
              src="/images/brand/tirth-logo.png"
              alt="Tirth logo"
              width={72}
              height={72}
              className="h-12 w-12 rounded-full bg-[#1C1410] object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-[0.14em]">{company.brandName.toUpperCase()}</p>
              <p className="mt-0.5 text-[0.68rem] font-medium text-[#6B5648]">{company.supportingName}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="overflow-hidden border-y border-black/5 bg-white" aria-hidden="true">
        <div className="d2-marquee flex w-max gap-10 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#8A7364]">
          {Array.from({ length: 2 }).map((_, copy) => (
            <p key={copy} className="flex gap-10">
              {fragranceSamples.map((sample) => (
                <span key={`${copy}-${sample.name}`} className="flex items-center gap-10">
                  <span>{sample.name}</span>
                  <span className="text-[#E4572E]">·</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20" aria-label="Tirth collection">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#C45C26]">The collection</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Fragrances with the Tirth name</h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-[#1C1410]">
            View all
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {range.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={`group relative min-h-80 overflow-hidden rounded-4xl bg-[#1C1410] ${index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:min-h-105' : ''}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 50vw, 33vw'}
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#F3C7A5]">{product.category}</span>
                <span className="mt-1 flex items-end justify-between gap-3">
                  <span className="text-3xl font-semibold tracking-[-0.03em]">{product.name}</span>
                  <ArrowUpRight size={18} className="mb-1 opacity-80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:pb-20" aria-label="About Tirth">
        <div className="relative aspect-5/4 overflow-hidden rounded-4xl">
          <Image
            src="/images/featured-fragrance.jpg"
            alt="Lit Tirth incense sticks"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#C45C26]">The house</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{company.brandName}, from {company.city}.</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#6B5648]">
            {company.description} We compose sandalwood, floral, musk, aromatic, hand-rolled and sage fragrances for daily ritual and for retailers who want a name customers remember.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="rounded-full bg-[#1C1410] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E4572E]">
              About Tirth
            </Link>
            <Link href="/wholesale" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold">
              Wholesale
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-label="Samples">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#C45C26]">Samples</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Pick a note</h2>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {samples.map((sample) => (
              <Link key={sample.name} href={sample.href} className="group w-56 shrink-0">
                <span className="relative block aspect-3/4 overflow-hidden rounded-4xl bg-[#EFE6DC]">
                  <Image
                    src={sample.image}
                    alt={sample.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="224px"
                  />
                </span>
                <span className="mt-3 block text-lg font-semibold">{sample.name}</span>
                <span className="text-sm text-[#8A7364]">{sample.family}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20" aria-label="Enquiry">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#1C1410] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#E4572E]/40 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src="/images/brand/tirth-logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-12 w-12 rounded-full object-contain"
                />
                <p className="text-sm font-semibold tracking-[0.16em]">{company.brandName.toUpperCase()}</p>
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Ask for a sample, or a full line.</h2>
              <p className="mt-4 max-w-md text-white/70">
                {company.city}, {company.state}. Tell us the fragrances you want on the shelf.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1C1410] transition-colors hover:bg-[#F7C7A8]"
            >
              Contact Tirth
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold tracking-[0.14em]">{company.fullName.toUpperCase()}</p>
          <p className="text-sm text-[#8A7364]">© {year} · {company.city}, {company.state}</p>
        </div>
      </footer>
    </div>
  );
}
