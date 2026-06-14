'use client';

import ProductSection from './ProductSection';
import { products, type Product } from '@/data/products';
import { formatWhatsAppLink } from '@/lib/utils';

type Props = {
  currentProduct: Product;
};

const WHATSAPP_NUMBER = '6281234567890';

const RelatedProducts = ({ currentProduct }: Props) => {
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

  const relatedProducts = products.filter((item) => item.code !== currentProduct.code).slice(0, 4);

  return <ProductSection badge="Rekomendasi" title="Mungkin Kamu Juga Suka" description="Produk lain yang sering dipilih pelanggan." products={relatedProducts} onOrder={handleOrder} />;
};

export default RelatedProducts;
