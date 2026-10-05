import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChromeGate from '@/components/layout/ChromeGate';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${company.fullName}`,
    default: `${company.fullName} — ${company.tagline}`,
  },
  description:
    'Tirth Premium Agarbatti — Premium incense sticks and agarbatti from Ahmedabad, Gujarat, including Sage Aroma samples.',
  keywords: [...company.keywords],
  authors: [{ name: company.fullName }],
  creator: company.fullName,
  metadataBase: new URL(company.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: company.siteUrl,
    siteName: company.fullName,
    title: `${company.fullName} — ${company.tagline}`,
    description:
      'Premium incense sticks and agarbatti from Ahmedabad, Gujarat. Sandalwood, Floral, Musk, Aromatic, Hand-Rolled and Perfumed incense collections.',
    images: [
      {
        url: '/images/hero-incense.jpg',
        width: 1200,
        height: 630,
        alt: 'Tirth Premium Agarbatti — Premium Incense Sticks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.fullName} — ${company.tagline}`,
    description: 'Premium incense sticks and agarbatti from Ahmedabad, Gujarat.',
    images: ['/images/hero-incense.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased">
        <ChromeGate>
          <Header />
        </ChromeGate>
        <main className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
        </ChromeGate>
        <WhatsAppButton />
      </body>
    </html>
  );
}
