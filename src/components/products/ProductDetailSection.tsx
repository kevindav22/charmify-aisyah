'use client';

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { formatRupiah, formatWhatsAppLink } from '@/lib/utils';
import type { Product } from '@/data/products';
import { FiStar, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

type Props = {
  product: Product;
};

const WHATSAPP_NUMBER = '6281234567890';

const ProductDetailSection = ({ product }: Props) => {
  const handleOrder = () => {
    const message = `
Halo kak 👋

Saya ingin memesan produk berikut:

📌 Kode Produk : ${product.code}
💖 Nama Produk : ${product.name}
💰 Harga : ${formatRupiah(product.price)}

Mohon info stok dan detailnya ya kak 😊
    `.trim();

    window.open(formatWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:px-8 lg:px-12">
        <Link href="/store" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-rose-500">
          <FiArrowLeft />
          Kembali ke Store
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-rose-100">
            <div className="relative aspect-square">
              <SafeImage src={product.image} alt={product.name} fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">{product.badge}</span>

            <h1 className="text-3xl font-black text-slate-900 md:text-5xl">{product.name}</h1>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(4)].map((_, index) => (
                <FiStar key={index} className="fill-current" />
              ))}

              <FiStar />

              <span className="ml-2 text-slate-500">4.8</span>
            </div>

            <div className="text-4xl font-black text-rose-500">{formatRupiah(product.price)}</div>

            <p className="leading-relaxed text-slate-600">Bracelet charm elegan yang dirancang untuk menemani setiap cerita, kenangan, dan momen spesial dalam hidupmu.</p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FiCheck className="text-rose-500" />
                Material premium
              </div>

              <div className="flex items-center gap-3">
                <FiCheck className="text-rose-500" />
                Cocok untuk hadiah
              </div>

              <div className="flex items-center gap-3">
                <FiCheck className="text-rose-500" />
                Desain elegan dan feminin
              </div>
            </div>

            <button onClick={handleOrder} className="inline-flex h-12 w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-8 font-semibold text-white">
              <FaWhatsapp />
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
