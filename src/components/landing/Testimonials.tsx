'use client';

import CountUp from 'react-countup';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiStar } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Alya Putri',
    city: 'Jakarta',
    rating: 5,
    review: 'Charm yang datang persis seperti preview. Detailnya rapi, cantik, dan terasa dibuat dengan sangat teliti.',
  },
  {
    name: 'Nadia Safira',
    city: 'Bandung',
    rating: 4,
    review: 'Suka karena bisa menyusun charm sesuai cerita sendiri. Hasil akhirnya terasa lebih personal dibanding aksesori biasa.',
  },
  {
    name: 'Rania Maharani',
    city: 'Surabaya',
    rating: 5,
    review: 'Packaging cantik dan cocok dijadikan hadiah. Saat dibuka rasanya benar-benar spesial.',
  },
  {
    name: 'Dinda Rahma',
    city: 'Bekasi',
    rating: 5,
    review: 'Awalnya hanya coba satu bracelet, ternyata kualitasnya sangat bagus dan nyaman dipakai sehari-hari.',
  },
  {
    name: 'Tiara Lestari',
    city: 'Yogyakarta',
    rating: 4,
    review: 'Admin sangat membantu saat proses revisi desain. Hasil akhirnya sesuai dengan yang saya inginkan.',
  },
  {
    name: 'Nabila Azzahra',
    city: 'Malang',
    rating: 5,
    review: 'Charm-nya unik dan tidak pasaran. Cocok untuk menyimpan kenangan yang ingin selalu dikenang.',
  },
];

const stats = [
  {
    value: 4.8,
    decimals: 1,
    suffix: '★',
    label: 'Rating Pelanggan',
  },
  {
    value: 127,
    suffix: '+',
    label: 'Pesanan Selesai',
  },
  {
    value: 96,
    suffix: '%',
    label: 'Pelanggan Puas',
  },
  {
    value: 24,
    suffix: '+',
    label: 'Pilihan Charm',
  },
];

const TestimonialSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">Customer Stories</span>
          <h2 className="mb-5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-3xl font-black text-transparent md:text-4xl">Cerita Manis dari Mereka yang Sudah Memiliki Charmify</h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">Setiap bracelet yang dibuat memiliki cerita yang berbeda. Berikut beberapa pengalaman pelanggan yang telah mempercayakan momen spesial mereka kepada Charmify.</p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {testimonials.map((item) => (
              <div key={item.name} className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <article className="flex h-full flex-col rounded-xl border border-rose-100 bg-white p-6 shadow-sm transition-all duration-300  hover:border-rose-200 hover:shadow-lg">
                  {/* Rating */}
                  <div className="mb-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar key={star} className={`size-5 ${star <= item.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-300'}`} />
                    ))}
                  </div>
                  {/* Review */}
                  <p className="mb-3 flex-1 leading-relaxed text-slate-600">"{item.review}"</p>

                  {/* Profile */}
                  <div className="flex items-center gap-3 border-t border-rose-100 pt-4">
                    <FaUserCircle className="text-5xl text-rose-300" />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.city}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 rounded-xl border border-rose-100 bg-gradient-to-r from-rose-50 via-white to-fuchsia-50 p-8 md:p-10">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="mb-2 text-4xl font-black text-rose-500">
                  <CountUp end={item.value} duration={2.5} decimals={item.decimals || 0} enableScrollSpy scrollSpyOnce />
                  {item.suffix}
                </div>

                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
