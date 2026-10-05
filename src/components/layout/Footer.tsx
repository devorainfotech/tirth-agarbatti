import Link from 'next/link';
import { Facebook } from '@/components/icons/Facebook';
import { company } from '@/data/company';

const footerLinks = {
  Explore: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Our Craft', href: '/#craft' },
    { label: 'Gallery', href: '/gallery' },
  ],
  Business: [
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'Contact', href: '/contact' },
    { label: 'Enquiry', href: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--color-burgundy-deeper)' }}>
      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-3xl text-white tracking-[0.1em] leading-none">{company.brandName.toUpperCase()}</div>
              <div className="text-[0.58rem] tracking-[0.22em] uppercase mt-1" style={{ color: 'var(--color-gold)' }}>
                {company.supportingName}
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-[240px]">
              Thoughtfully crafted incense and fragrance products designed to bring warmth, calm and
              beauty into everyday spaces.
            </p>
            <div className="mt-5 text-xs text-white/30 font-body">
              {company.city}, {company.state}, {company.country}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="label-sm mb-5">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="label-sm mb-5">Business</h3>
            <ul className="space-y-3">
              {footerLinks.Business.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="label-sm mb-5">Connect</h3>
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group"
              aria-label="Tirth Premium Agarbatti on Facebook"
            >
              <span
                className="w-9 h-9 flex items-center justify-center border border-white/20 group-hover:border-amber-300/60 transition-colors duration-200"
              >
                <Facebook size={16} />
              </span>
              <div>
                <div className="font-body text-xs text-white/70">Facebook</div>
                <div className="font-body text-[0.7rem] text-white/35 group-hover:text-white/50 transition-colors">
                  @tirthpremiumagarbatti
                </div>
              </div>
            </a>

            {/* Phone — shown only when configured */}
            {company.phone && (
              <div className="mt-5">
                <div className="label-sm mb-1">Phone</div>
                <a
                  href={`tel:${company.phone}`}
                  className="font-body text-sm text-white/55 hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            )}

            {/* Email — shown only when configured */}
            {company.email && (
              <div className="mt-4">
                <div className="label-sm mb-1">Email</div>
                <a
                  href={`mailto:${company.email}`}
                  className="font-body text-sm text-white/55 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 text-center sm:text-left">
            © {year} {company.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/15">·</span>
            <Link href="/terms" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
