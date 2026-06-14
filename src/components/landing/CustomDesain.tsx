import Link from 'next/link';
import { FiEdit3, FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const CustomDesignSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        {/* BACKGROUND DECOR */}
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          {/* BADGE */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-medium text-rose-600 backdrop-blur">
            <HiSparkles className="size-4" />
            Create Your Own Charm
          </span>

          {/* TITLE */}
          <h2 className="mb-5 text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
            Tidak cocok dengan koleksi yang ada? Buat Desain Charm Bracelet Sendiri!
          </h2>
          {/* DESCRIPTION */}
          <p className="mx-auto mb-10 max-w-2xl text-slate-600 md:text-lg">
            Jika koleksi yang ada belum sesuai dengan gaya atau cerita kamu, kamu bisa membuat desain charm bracelet sendiri. Pilih, atur, dan ciptakan makna yang benar-benar personal.
          </p>

          {/* CTA BUTTON */}
          <Link
            href="/customize"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-rose-200 transition hover:scale-[1.02] hover:opacity-95"
          >
            <FiEdit3 className="text-xl" />
            Mulai Custom Desain
            <FiArrowRight className="text-lg" />
          </Link>

          {/* SMALL NOTE */}
          <p className="mt-6 text-sm text-slate-500">Live preview tersedia • kamu bisa lihat hasil desain secara real-time</p>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
