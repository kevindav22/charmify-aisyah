'use client';

import ProductSection from '@/components/products/ProductSection';
import { products, type Product } from '@/data/products';
import { profilData } from '@/data/statisData';
import { formatWhatsAppLink } from '@/lib/utils';


const FeaturedProducts = () => {
  const handleOrder = (product: Product) => {
  const message = `Halo kak
  Saya ingin pesan : ${product.code} | Nama Produk: ${product.name} | Harga: ${product.price} Mohon info detail & stok ya kak `.trim();window.open(formatWhatsAppLink(profilData.phone, message), '_blank');};

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
