'use client';

import ProductSection from '@/components/products/ProductSection';
import { products, type Product } from '@/data/products';
import { formatWhatsAppLink } from '@/lib/utils';

const WHATSAPP_NUMBER = '6281234567890';

const FeaturedProducts = () => {
  const handleOrder = (product: Product) => {
    const message = `
Halo kak 👋

Saya ingin pesan produk berikut:

📌 Kode Produk: ${product.code}
💖 Nama Produk: ${product.name}
💰 Harga: ${product.price}

Mohon info detail & stok ya kak 😊
    `.trim();

    window.open(formatWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <ProductSection
      badge="Most Loved"
      title="Produk yang Paling Disukai Pelanggan"
      description="Koleksi favorit yang paling sering dipilih dan langsung dipesan melalui WhatsApp."
      products={products.slice(0, 4)}
      onOrder={handleOrder}
      showViewAll
    />
  );
};

export default FeaturedProducts;
