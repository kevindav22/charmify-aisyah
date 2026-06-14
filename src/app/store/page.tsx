'use client';

import ProductSection from '@/components/products/ProductSection';
import { products, type Product } from '@/data/products';
import { formatWhatsAppLink } from '@/lib/utils';

const WHATSAPP_NUMBER = '6281234567890';

export default function StorePage() {
  const handleOrder = (product: Product) => {
    const message = `
Halo kak 👋

Saya ingin pesan produk berikut:

📌 Kode Produk: ${product.code}
💖 Nama Produk: ${product.name}
💰 Harga: ${product.price}
    `.trim();

    window.open(formatWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return <ProductSection badge="Store" title="Semua Koleksi Charmify" description="Temukan bracelet dan charm favoritmu." products={products} onOrder={handleOrder} />;
}
