import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import ProductCollection from '@/components/sections/ProductCollection';
import SampleRange from '@/components/sections/SampleRange';
import FeaturedFragrance from '@/components/sections/FeaturedFragrance';
import WhyTirth from '@/components/sections/WhyTirth';
import ImmersiveBanner from '@/components/sections/ImmersiveBanner';
import CraftSection from '@/components/sections/CraftSection';
import MomentsSection from '@/components/sections/MomentsSection';
import WholesaleSection from '@/components/sections/WholesaleSection';
import GallerySection from '@/components/sections/GallerySection';
import SocialSection from '@/components/sections/SocialSection';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import DesignSwitcher from '@/components/ui/DesignSwitcher';

export const metadata: Metadata = {
  title: 'Tirth Premium Agarbatti — Premium Incense Sticks from Ahmedabad',
  description:
    'Tirth Premium Agarbatti offers premium incense sticks and agarbatti from Ahmedabad, Gujarat, including Sage Aroma samples. Wholesale enquiries welcome.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ProductCollection />
      <SampleRange set="classic" tone="ivory" />
      <FeaturedFragrance />
      <WhyTirth />
      <ImmersiveBanner />
      <CraftSection />
      <MomentsSection />
      <WholesaleSection />
      <GallerySection />
      <SocialSection />
      <EnquiryCTA />
      <DesignSwitcher />
    </>
  );
}
