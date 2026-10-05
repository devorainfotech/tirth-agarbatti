import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Package, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { BRAND_INFO } from "@/data/navigation";
import Design3CTA from "@/components/design3/Design3CTA";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Design3ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-[#F7F2E8] pt-28 pb-16">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <Link
          href="/design-3/products"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#10182B] hover:text-[#C9A45C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C9A45C]" />
          <span>BACK TO ALL PRODUCTS</span>
        </Link>
      </div>

      {/* Main Product Feature Section */}
      <section className="bg-[#10182B] text-[#F7F2E8] py-16 border-y border-[#C9A45C]/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Product Images */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] w-full bg-[#182B52] border border-[#C9A45C]/40 p-3 shadow-2xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] overflow-hidden border border-[#C9A45C]/30 bg-[#182B52]"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Copy & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A45C]">
                  {BRAND_INFO.brandName} — {product.category}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#F7F2E8]">
                  {product.name}
                </h1>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A45C] uppercase">
                  {product.subtitle}
                </p>
              </div>

              <div className="w-16 h-[1px] bg-[#C9A45C]" />

              <p className="font-serif text-lg text-[#E8DDC8]/90 italic leading-relaxed pl-4 border-l-2 border-[#C9A45C]">
                {product.description}
              </p>

              <p className="text-sm text-[#E8DDC8]/80 font-sans leading-relaxed font-light">
                {product.longDescription}
              </p>

              {/* Aroma Notes Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F2E8]">
                  Aroma Profile & Notes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.aromaNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-[#182B52] text-xs font-semibold text-[#C9A45C] border border-[#C9A45C]/30 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                      <span>{note}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#182B52] text-xs">
                {product.packaging && (
                  <div>
                    <span className="block text-[#E8DDC8]/60 uppercase tracking-wider font-medium">Packaging</span>
                    <span className="font-serif font-semibold text-sm text-[#F7F2E8]">{product.packaging}</span>
                  </div>
                )}
                {product.stickCount && (
                  <div>
                    <span className="block text-[#E8DDC8]/60 uppercase tracking-wider font-medium">Content / Count</span>
                    <span className="font-serif font-semibold text-sm text-[#F7F2E8]">{product.stickCount}</span>
                  </div>
                )}
                {product.stickLength && (
                  <div>
                    <span className="block text-[#E8DDC8]/60 uppercase tracking-wider font-medium">Stick Size</span>
                    <span className="font-serif font-semibold text-sm text-[#F7F2E8]">{product.stickLength}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[#E8DDC8]/60 uppercase tracking-wider font-medium">Manufacturer</span>
                  <span className="font-serif font-semibold text-sm text-[#F7F2E8]">{BRAND_INFO.companyName}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/design-3/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F2E8] transition-all shadow-xl"
                >
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#10182B]" />
                </Link>
                <Link
                  href="/design-3/distributor"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#C9A45C]/50 text-[#F7F2E8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#182B52] transition-all"
                >
                  <Package className="w-4 h-4 text-[#C9A45C]" />
                  <span>DISTRIBUTOR INQUIRY</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Fragrances */}
      <section className="py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl font-normal text-[#10182B] mb-8">
            RELATED <span className="italic text-[#C9A45C]">FRAGRANCES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/design-3/products/${rel.slug}`}
                className="group bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-5 space-y-3 hover:border-[#C9A45C] transition-all shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#182B52] border border-[#C9A45C]/20">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C] block">
                  {rel.category}
                </span>
                <h4 className="font-serif text-xl font-semibold text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#E8DDC8]/70 line-clamp-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
