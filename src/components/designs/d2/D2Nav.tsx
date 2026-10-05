'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { company } from '@/data/company';
import { navItems } from '@/data/navigation';

export default function D2Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F3EE]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/d2" className="flex items-center gap-3" aria-label={`${company.fullName} design 2`}>
          <Image
            src="/images/brand/tirth-logo.png"
            alt=""
            width={360}
            height={360}
            priority
            className="h-11 w-11 rounded-full bg-[#1C1410] object-contain"
          />
          <span className="leading-none">
            <span className="block font-body text-[1.05rem] font-semibold tracking-[0.18em] text-[#1C1410]">
              {company.brandName.toUpperCase()}
            </span>
            <span className="mt-1 block font-body text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#C45C26]">
              {company.supportingName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Design 2 navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[0.78rem] font-medium text-[#5C4A3E] transition-colors hover:text-[#1C1410]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#1C1410] px-5 py-2.5 font-body text-[0.72rem] font-semibold text-white transition-colors hover:bg-[#E4572E] sm:inline-flex"
          >
            Enquire
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-[#F7F3EE] px-5 py-3 lg:hidden" aria-label="Design 2 mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-3 font-body text-lg font-medium text-[#1C1410]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full bg-[#E4572E] px-5 py-3 font-body text-sm font-semibold text-white"
          >
            Enquire
          </Link>
        </nav>
      )}
    </header>
  );
}
