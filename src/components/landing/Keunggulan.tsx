'use client';

import Link from 'next/link';
import { FiHeart, FiStar, FiGift, FiDollarSign, FiGrid, FiEdit3 } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const WhyChooseUsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })],
  );

  const features = [
    {
      icon: FiHeart,
      title: 'Penuh Makna',
      description: 'Setiap charm merepresentasikan cerita, kenangan, dan momen berharga dalam hidupmu.',
    },
    {
      icon: FiStar,
      title: 'Elegan & Feminin',
      description: 'Desain soft, modern, dan timeless yang cocok untuk semua gaya perempuan.',
    },
    {
      icon: FiDollarSign,
      title: 'Terjangkau',
      description: 'Luxury look tanpa harus mahal, tetap stylish dengan harga yang bersahabat.',
    },
    {
      icon: FiGift,
      title: 'Premium Quality',
      description: 'Material pilihan dengan finishing detail yang halus dan tahan lama.',
    },
    {
      icon: FiGrid,
      title: 'Banyak Varian Model',
      description: 'Ratusan desain charm yang bisa kamu mix & match sesuai mood.',
    },
    {
      icon: FiEdit3,
      title: 'Custom Personal',
      description: 'Buat bracelet yang benar-benar unik sesuai cerita dan identitasmu.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm backdrop-blur">
            <HiSparkles className="size-4" />
            Kenapa Pilih Charmify
          </span>
          <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">Lebih dari Sekadar Aksesoris</h2>
          <p className="text-slate-600 md:text-lg">Charm yang dirancang untuk menemani cerita, perjalanan, dan versi terbaik dari dirimu.</p>
        </div>

        {/* EMBLA CAROUSEL */}
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%]">
                  <div className="group h-full rounded-3xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-200">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>

                    <p className="leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA BOTTOM */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="mb-2 inline-block text-sm font-medium text-white/80">Koleksi Terbaru</span>
              <h3 className="mb-3 text-2xl font-black md:text-3xl">Ciptakan Charm yang Mewakili Dirimu</h3>
              <p className="text-white/90">Mix & match charm favoritmu dan buat bracelet yang benar-benar personal.</p>
            </div>
            <Link href="/store" className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-semibold text-rose-600 transition hover:bg-rose-50">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
