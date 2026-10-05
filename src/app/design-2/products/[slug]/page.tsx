import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Package, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { BRAND_INFO } from "@/data/navigation";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Design2ProductDetailPage({
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
    <div className="pt-28 pb-16">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Link
          href="/design-2/products"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#241914] hover:text-[#A95736] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#B89042]" />
          <span>BACK TO ALL PRODUCTS</span>
        </Link>
      </div>

      {/* Main Product Showcase */}
      <section className="bg-[#FFFDF8] py-12 border-y border-[#B89042]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Large Product Image + Thumbnail Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] w-full bg-[#F7F1E6] border border-[#B89042]/30 p-3 shadow-xl">
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
                      className="relative aspect-[4/3] overflow-hidden border border-[#B89042]/30 bg-[#F7F1E6]"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} gallery image ${idx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Detailed Product Copy & Specifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A95736]">
                  {BRAND_INFO.brandName} — {product.category}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241914]">
                  {product.name}
                </h1>
                <p className="text-sm font-semibold tracking-[0.2em] text-[#B89042] uppercase">
                  {product.subtitle}
                </p>
              </div>

              <div className="w-16 h-[2px] bg-[#A95736]" />

              <p className="font-serif text-lg text-[#241914]/90 italic leading-relaxed">
                {product.description}
              </p>

              <p className="text-sm text-[#241914]/80 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Aroma Notes Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#241914]">
                  Aroma Profile & Notes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.aromaNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-[#F7F1E6] text-xs font-semibold text-[#241914] border border-[#B89042]/30 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#A95736]" />
                      <span>{note}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DDD0BB] text-xs">
                {product.packaging && (
                  <div>
                    <span className="block text-[#241914]/60 uppercase tracking-wider font-medium">Packaging</span>
                    <span className="font-serif font-semibold text-sm text-[#241914]">{product.packaging}</span>
                  </div>
                )}
                {product.stickCount && (
                  <div>
                    <span className="block text-[#241914]/60 uppercase tracking-wider font-medium">Content / Count</span>
                    <span className="font-serif font-semibold text-sm text-[#241914]">{product.stickCount}</span>
                  </div>
                )}
                {product.stickLength && (
                  <div>
                    <span className="block text-[#241914]/60 uppercase tracking-wider font-medium">Stick Size</span>
                    <span className="font-serif font-semibold text-sm text-[#241914]">{product.stickLength}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[#241914]/60 uppercase tracking-wider font-medium">Manufacturer</span>
                  <span className="font-serif font-semibold text-sm text-[#241914]">{BRAND_INFO.companyName}</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/design-2/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A95736] transition-all shadow-md"
                >
                  <span>ENQUIRE ABOUT THIS PRODUCT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B89042]" />
                </Link>
                <Link
                  href="/design-2/distributor"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#241914] text-[#241914] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#241914] hover:text-[#FFFDF8] transition-all"
                >
                  <Package className="w-4 h-4 text-[#A95736]" />
                  <span>DISTRIBUTOR INQUIRY</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-[#F7F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl font-semibold text-[#241914] mb-8">
            RELATED <span className="italic text-[#B89042]">FRAGRANCES</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/design-2/products/${rel.slug}`}
                className="group bg-[#FFFDF8] border border-[#B89042]/30 p-5 space-y-3 hover:border-[#A95736] transition-all shadow-xs"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F1E6] border border-[#DDD0BB]">
                  <Image
                    src={rel.image}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A95736] block">
                  {rel.category}
                </span>
                <h4 className="font-serif text-xl font-semibold text-[#241914] group-hover:text-[#A95736] transition-colors">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#241914]/70 line-clamp-2">
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
