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
      {charms.length === 0 ? (
        <p className="text-base text-slate-400 md:text-lg">Belum ada charm dipilih</p>
      ) : (
        <div className="flex flex-wrap gap-0.5">
          {charms.map((charm) => (
            <div key={charm.instanceId} className="rounded-xs border border-rose-100 bg-white py-0.2 px-1 text-xs font-medium text-slate-700 md:text-sm">
              {charm.name}
            </div>
          ))}
        </div>
      )}

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
