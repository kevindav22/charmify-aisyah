import SafeImage from '@/components/ui/SafeImage';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const collections = [
  {
    title: 'Bracelet',
    description: 'Koleksi gelang premium untuk melengkapi gaya harianmu.',
    image: '/images/1.jfif',
    href: '/products/bracelet',
  },
  {
    title: 'Watch',
    description: 'Jam tangan elegan untuk setiap momen penting.',
    image: '/images/2.jfif',
    href: '/products/watch',
  },
  {
    title: 'Accessories',
    description: 'Aksesori pilihan untuk menyempurnakan penampilan.',
    image: '/images/3.jfif',
    href: '/products/accessories',
  },
  {
    title: 'Charm Custom',
    description: 'Buat kombinasi charm sesuai cerita dan kepribadianmu.',
    image: '/images/1.jfif',
    href: '/customize',
  },
];

const CollectionSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50/40">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-600">Shop by Category</span>

            <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
              Jelajahi Koleksi Kami
            </h2>

            <p className="text-slate-600 md:text-lg">Pilih kategori produk sesuai gaya dan kebutuhanmu.</p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <Link key={item.title} href={item.href} className="group overflow-hidden rounded-[2rem] border border-rose-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <SafeImage src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

                  <div className="flex size-10 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition group-hover:bg-rose-500 group-hover:text-white">
                    <FiArrowUpRight />
                  </div>
                </div>

                <p className="leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
