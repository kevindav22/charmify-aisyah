'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiBars3, HiSparkles, HiXMark } from 'react-icons/hi2';

const navItems = [
  {
    label: 'Beranda',
    href: '/',
  },
  {
    label: 'Koleksi',
    href: '/store',
  },
  {
    label: 'Tentang Kami',
    href: '/about',
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-4 md:px-8 lg:px-12">
      <div className={`mx-auto max-w-7xl rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-xl shadow-rose-200/20' : 'shadow-lg shadow-rose-100/30'}`}>
        <div className={`flex items-center justify-between px-5 md:px-7 transition-all duration-300 ${scrolled ? 'h-16' : 'h-[76px]'}`}>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-white shadow-md shadow-rose-200">
              <HiSparkles className="size-5" />
            </div>

            <div>
              <p className="text-xl font-extrabold  text-slate-900">Charmify</p>
              <p className="-mt-1 text-sm text-rose-500">Personalized Bracelet</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="relative text-md font-bold text-slate-600 transition-colors hover:text-rose-500">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/contact" className="rounded-xl border border-rose-200/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-rose-300 hover:bg-white">
              Hubungi Kami
            </Link>

            <Link href="/customize" className="rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition-all hover:-translate-y-0.5">
              Desain Sendiri
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition md:hidden" aria-label="Toggle menu">
            {mobileOpen ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-rose-100 px-5 pb-5 pt-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="font-medium text-slate-700 transition hover:text-rose-500">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <Link href="/customize" className="rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 py-3 text-center font-semibold text-white">
                Desain Sendiri
              </Link>

              <Link href="/contact" className="rounded-xl border border-rose-200 bg-white py-3 text-center font-semibold text-slate-700">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
