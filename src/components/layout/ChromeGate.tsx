'use client';

import { usePathname } from 'next/navigation';

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/d2')) return null;
  return children;
}
