import type { Metadata } from 'next';
import WholesaleClientPage from './WholesaleClientPage';

export const metadata: Metadata = {
  title: 'Wholesale — Business Enquiries',
  description:
    'Partner with Tirth Premium Agarbatti for wholesale, retail and distribution opportunities. Premium incense sticks from Ahmedabad, Gujarat. Submit a business enquiry today.',
};

export default function WholesalePage() {
  return <WholesaleClientPage />;
}
