'use client';

import { formatRupiah } from '@/lib/utils';
import type { SelectedCharm } from '@/types/globalTypes';

type Props = {
  charms: SelectedCharm[];
  totalPrice: number;
};

const CharmCanvasSummary = ({ charms, totalPrice }: Props) => {
  return (
    <div className="flex flex-col gap-4 border-t border-rose-100 pt-2">
     

      <div className="flex items-center justify-between border-t border-rose-100 pt-2">
        <span className="font-semibold text-slate-700 md:text-lg">Total</span>

        <div className="flex flex-col items-end">
          <span className="text-xs text-slate-400">({charms.length} Charm)</span>

          <span className="text-lg font-extrabold text-rose-500 md:text-2xl">{formatRupiah(totalPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default CharmCanvasSummary;
