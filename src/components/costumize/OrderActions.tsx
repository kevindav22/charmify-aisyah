'use client';

import { FaWhatsapp } from 'react-icons/fa';
import type { SelectedCharm } from '@/types/globalTypes';
import { formatRupiah, formatWhatsAppLink } from '@/lib/utils';

type Props = {
  charms: SelectedCharm[];
  totalPrice: number;
};

const WHATSAPP_NUMBER = '6281234567890';
const OrderAction = ({ charms, totalPrice }: Props) => {
  const handleOrder = () => {
    if (!charms.length) return;
    const grouped = charms.reduce(
      (acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const summary = Object.entries(grouped)
      .map(([name, qty]) => `• ${name} (${qty})`)
      .join('\n');

    const message = `
Halo Kak 👋
Saya ingin memesan custom bracelet.
Ringkasan desain:
${summary}

Estimasi Total:
${formatRupiah(totalPrice)}

Saya akan melampirkan hasil desain yang sudah saya unduh pada pesan ini.

Terima kasih 🙏
    `.trim();

    window.open(formatWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm">
      <div className="flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-slate-900 md:text-xl">Siap Memesan?</h3>
          <p className="max-w-2xl text-sm text-slate-500 md:text-base">Unduh desain terlebih dahulu, kemudian kirimkan hasil desain beserta rincian pesanan melalui WhatsApp.</p>
        </div>

        <button
          onClick={handleOrder}
          disabled={!charms.length}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 md:px-8"
        >
          <FaWhatsapp className="shrink-0 text-lg" />
          <span>Pesan via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default OrderAction;
