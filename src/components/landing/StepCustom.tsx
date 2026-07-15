'use client';

import { useState } from 'react';
import { FiShoppingBag, FiGrid, FiEye, FiRefreshCw, FiDownload, FiMessageCircle, FiImage, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import StepCard from '../ui/StepCard';
// Import komponen Button buatanmu (sesuaikan path import jika folder strukturmu berbeda)
import { Button } from '@/components/ui/Button'; 

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
    <section className="flex flex-col overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-12 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 backdrop-blur">Design Your Own Bracelet</span>
          <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">Langkah Mudah Susun Bracelet</h2>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-4 py-8 md:hidden">
          {(showAllSteps ? steps : steps.slice(0, 3)).map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}

          {/* Menggunakan Button Custom dengan variant secondary */}
          <Button
            onClick={() => setShowAllSteps(!showAllSteps)}
            variant="secondary"
            className="mt-4 w-full justify-center"
          >
            {showAllSteps ? (
              <>
                Tampilkan Lebih Sedikit
                <FiChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Lihat Semua Langkah
                <FiChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* DESKTOP & TABLET (Menggunakan Grid: default 1, md 3, lg 4) */}
        <div className="hidden grid-cols-1 gap-6 py-14 md:grid md:grid-cols-3 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex h-full">
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepCustomSection;