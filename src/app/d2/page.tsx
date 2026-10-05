import type { Metadata } from 'next';
import D2Home from '@/components/designs/d2/D2Home';
import DesignSwitcher from '@/components/ui/DesignSwitcher';

export const metadata: Metadata = {
  title: 'Design 2 — Tirth Premium Agarbatti',
  description:
    'An alternate homepage for Tirth Premium Agarbatti — a bright brand poster from Ahmedabad.',
  robots: { index: false, follow: false },
};

export default function DesignTwoPage() {
  return (
    <>
      <D2Home />
      <DesignSwitcher />
    </>
  );
}
