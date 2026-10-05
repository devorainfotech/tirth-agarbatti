import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS, Product } from "@/data/products";
import { BRAND_INFO } from "@/data/navigation";
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, Flame, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Tirth Premium Agarbatti`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Milliard Agarbatti, I am interested in inquiring about ${product.name}.`
  )}`;

  return (
    <div className="pt-0 pb-24 bg-[#FFFDF7] text-[#17130F]">
      
      {/* Breadcrumb Header */}
      <section className="bg-[#17130F] text-[#FFFDF7] pt-28 pb-8 md:pt-32 md:pb-10">
        <Container>
          <div className="flex items-center gap-2 text-xs text-[#FFFDF7]/60">
            <Link href="/" className="hover:text-[#F2C94C]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#F2C94C]">Products</Link>
            <span>/</span>
            <span className="text-[#F2C94C] font-medium">{product.name}</span>
          </div>
        </Container>
      </section>

      {/* Main Product Showcase */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Product Media Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A52B]/30 bg-[#17130F]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D9A52B]/20 bg-[#17130F]">
                      <Image
                        src={img}
                        alt={`${product.name} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8E8] border border-[#D9A52B]/30 text-xs font-semibold text-[#D9A52B] uppercase tracking-wider mb-2">
                  <Tag className="w-3 h-3" />
                  <span>{product.category}</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#17130F] leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-semibold text-[#D97706] tracking-wider uppercase mt-1">
                  {product.subtitle}
                </p>
              </div>

              <p className="text-[#7A6A57] text-base leading-relaxed font-light">
                {product.longDescription}
              </p>

              {/* Aroma Notes & Specs */}
              <div className="p-6 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/20 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#17130F] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D9A52B]" />
                  <span>Fragrance Profile & Specifications</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#7A6A57] block font-light">Aroma Notes:</span>
                    <span className="font-semibold text-[#17130F]">{product.aromaNotes.join(", ")}</span>
                  </div>
                  <div>
                    <span className="text-[#7A6A57] block font-light">Packaging:</span>
                    <span className="font-semibold text-[#17130F]">{product.packaging}</span>
                  </div>
                  {product.stickLength && (
                    <div>
                      <span className="text-[#7A6A57] block font-light">Stick Length:</span>
                      <span className="font-semibold text-[#17130F]">{product.stickLength}</span>
                    </div>
                  )}
                  {product.stickCount && (
                    <div>
                      <span className="text-[#7A6A57] block font-light">Contents:</span>
                      <span className="font-semibold text-[#17130F]">{product.stickCount}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ideal Uses */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17130F]">Ideal For:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.idealFor.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#17130F]/5 text-[#17130F] text-xs font-medium border border-[#17130F]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D9A52B] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-[#FFFDF7] transition-all duration-300 shadow-md text-center flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D9A52B]/40 text-[#17130F] font-semibold text-xs uppercase tracking-wider hover:bg-[#FFF8E8] transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#D9A52B]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#FFF8E8]/60 border-t border-[#D9A52B]/20">
          <Container>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17130F] mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </Container>
        </section>
      )}

    </div>
  );
}
