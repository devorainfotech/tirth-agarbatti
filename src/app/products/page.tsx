import type { Metadata } from 'next';
import ProductsClientPage from './ProductsClientPage';

export const metadata: Metadata = {
  title: 'Products — Incense Sticks Collection',
  description:
    'Browse Tirth Premium Agarbatti\' complete collection of incense sticks — Sandalwood, Floral, Musk, Aromatic, Hand-Rolled, Perfumed and Sage Aroma samples. Premium agarbatti from Ahmedabad, Gujarat.',
};

export default function ProductsPage() {
  return <ProductsClientPage />;
}
