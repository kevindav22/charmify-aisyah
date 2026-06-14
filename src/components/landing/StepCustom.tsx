'use client';

import { useState } from 'react';
import { FiShoppingBag, FiGrid, FiEye, FiRefreshCw, FiDownload, FiMessageCircle, FiImage, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const steps = [
  {
    icon: FiShoppingBag,
    title: 'Pilih Bracelet',
    description: 'Mulailah dengan memilih bracelet yang paling sesuai dengan gaya dan karakter yang ingin kamu tampilkan.',
  },
  {
    icon: FiGrid,
    title: 'Susun Charm Favorit',
    description: 'Tambahkan charm satu per satu untuk menciptakan kombinasi yang memiliki cerita dan makna spesial.',
  },
  {
    icon: FiEye,
    title: 'Lihat Preview Langsung',
    description: 'Setiap perubahan akan tampil secara realtime sehingga kamu dapat melihat hasil desain dengan lebih jelas.',
  },
  {
    icon: FiRefreshCw,
    title: 'Atur Hingga Sempurna',
    description: 'Pindahkan posisi, ganti charm, atau sesuaikan komposisi hingga sesuai dengan yang kamu bayangkan.',
  },
  {
    icon: FiDownload,
    title: 'Simpan Hasil Desain',
    description: 'Unduh desain yang telah dibuat sebagai referensi sebelum melanjutkan ke proses pemesanan.',
  },
  {
    icon: FiMessageCircle,
    title: 'Lanjutkan Pemesanan',
    description: 'Hubungi kami melalui WhatsApp untuk mengirimkan desain dan melakukan konfirmasi pesanan.',
  },
  {
    icon: FiImage,
    title: 'Kirim Desain Pilihanmu',
    description: 'Lampirkan hasil desain agar tim kami dapat memproses bracelet sesuai dengan detail yang kamu buat.',
  },
  {
    icon: FiCheckCircle,
    title: 'Bracelet Mulai Diproduksi',
    description: 'Setelah pesanan dikonfirmasi, bracelet akan dibuat secara khusus mengikuti desain pilihanmu.',
  },
];

const StepCustomSection = () => {
  const [showAllSteps, setShowAllSteps] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">

      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 backdrop-blur">Design Your Own Bracelet</span>
          <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">Langkah-langkah Desain Bracelet  </h2>
        </div>

        {/* MOBILE */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:hidden">
          {(showAllSteps ? steps : steps.slice(0, 3)).map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group relative rounded-[2rem] border border-rose-100 bg-white/80 p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-rose-200 hover:shadow-lg">
                <div className="absolute right-5 top-5 text-5xl font-black text-rose-100">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-xl text-white shadow-lg shadow-rose-200/50">
                    <Icon />
                  </div>

                  <div className="pr-10">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => setShowAllSteps(!showAllSteps)}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white px-6 py-4 text-sm font-semibold text-rose-600 transition-all hover:border-rose-300 hover:bg-rose-50"
          >
            {showAllSteps ? (
              <>
                Tampilkan Lebih Sedikit
                <FiChevronUp />
              </>
            ) : (
              <>
                Lihat Semua Langkah
                <FiChevronDown />
              </>
            )}
          </button>
        </div>

        {/* DESKTOP */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="group relative rounded-[2rem] border border-rose-100 bg-white/80 p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl">
                <div className="absolute right-5 top-5 text-5xl font-black text-rose-100 transition-colors duration-300 group-hover:text-rose-200">{String(index + 1).padStart(2, '0')}</div>

                <div className="flex flex-col">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 text-xl text-white shadow-lg shadow-rose-200/50">
                    <Icon />
                  </div>
                  <h3 className="pr-8 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepCustomSection;
