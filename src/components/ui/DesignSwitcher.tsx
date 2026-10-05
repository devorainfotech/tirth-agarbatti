'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const designs = [
  { id: 'd1', label: 'D1', href: '/' },
  { id: 'd2', label: 'D2', href: '/d2' },
] as const;

export default function DesignSwitcher() {
  const pathname = usePathname();
  const active = pathname.startsWith('/d2') ? 'd2' : 'd1';

  return (
    <div
      className="fixed bottom-5 left-5 z-60 flex items-center gap-1 rounded-full border border-white/15 bg-[#1A1410]/92 p-1 shadow-xl backdrop-blur-md"
      role="navigation"
      aria-label="Design versions"
    >
      <span className="px-2.5 font-body text-[0.58rem] uppercase tracking-[0.2em] text-white/45">
        Design
      </span>
      {designs.map((design) => {
        const selected = design.id === active;
        return (
          <Link
            key={design.id}
            href={design.href}
            aria-current={selected ? 'page' : undefined}
            className={`rounded-full px-3 py-1.5 font-body text-[0.62rem] uppercase tracking-[0.16em] transition-colors ${
              selected ? 'bg-[#E8C27A] text-[#1A1410]' : 'text-white/75 hover:text-white'
            }`}
          >
            {design.label}
          </Link>
        );
      })}
    </div>
  );
}
