'use client';

import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import type { Charm } from '@/types/globalTypes';
import { formatRupiah } from '@/lib/utils';
import SafeImage from '../ui/SafeImage';

type Props = {
  charms: Charm[];
  onSelect: (charm: Charm) => void;
};

const CharmPicker = ({ charms, onSelect }: Props) => {
  const [search, setSearch] = useState('');

  const filteredCharms = useMemo(() => {
    return charms.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [charms, search]);

  return (
    <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
      <div className="border-b border-rose-100">
        <div className="flex items-center justify-between gap-3 p-4 md:p-5">
          <h2 className="shrink-0 text-base font-bold text-slate-900 md:text-lg">Pilih Charm</h2>

          <div className="relative w-full max-w-xs">
            <FiSearch className="pointer-events-none absolute inset-y-0 left-0 my-auto ml-3 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari..."
              className="w-full rounded-xl border border-slate-400 py-2 pl-10 pr-3 text-sm outline-none transition focus:border-rose-300 focus:ring focus:ring-rose-100"
            />
          </div>
        </div>
      </div>

      <div className="p-2 ">
        {filteredCharms.length > 0 ? (
          <div className="grid grid-cols-4 gap-1 md:grid-cols-6 lg:grid-cols-8 ">
            {filteredCharms.map((charm) => (
              <button key={charm.id} onClick={() => onSelect(charm)} className="group flex flex-col gap-1 rounded-lg border border-rose-100 bg-slate-100 p-2 transition hover:border-rose-300 hover:bg-rose-50">
                <div className="relative aspect-square w-full overflow-hidden ">
                  <SafeImage src={charm.image} alt={charm.name} fill className="object-contain scale-120 transition-transform duration-300 group-hover:scale-130" />
                </div>
                <div className="text-center">
                  <p className="line-clamp-1 text-sm font-semibold text-slate-900 md:text-lg">{charm.name}</p>
                  <p className="text-sm font-medium text-rose-500 md:text-lg">{formatRupiah(charm.price)}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-10 text-sm text-slate-400">Tidak ada charm yang ditemukan</div>
        )}
      </div>
    </div>
  );
};

export default CharmPicker;
