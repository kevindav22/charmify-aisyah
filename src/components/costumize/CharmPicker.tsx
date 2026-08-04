'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

import type { Charm } from '@/types/globalTypes';
import { formatRupiah } from '@/lib/utils';
import SafeImage from '../ui/SafeImage';

type Props = {
  charms: Charm[];
  onSelect: (charm: Charm) => void;
};

type CategoryType = 'luma-pink' | 'luma-calm' | 'luma-zodiac' | 'luma-3d';

const CharmPicker = ({ charms, onSelect }: Props) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryType>('luma-pink');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories: { value: CategoryType; label: string }[] = [
    { value: "luma-pink", label: "Luma Pink" },
    { value: "luma-calm", label: "Luma Calm" },
    { value: "luma-zodiac", label: "Luma Zodiac" },
    { value: "luma-3d", label: "Luma 3D" },
  ];

  const currentLabel = categories.find((c) => c.value === category)?.label || 'Luma Pink';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCharms = useMemo(() => {
    return charms.filter((item) => {
      const matchesCategory = item.category === category;
      const searchLower = search.toLowerCase();
      const matchesSearch = 
        item.name.toLowerCase().includes(searchLower) || 
        item.price.toString().includes(searchLower) ||
        formatRupiah(item.price).toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [charms, category, search]);

  return (
    <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
      <div className="border-b border-rose-100 bg-slate-50/50 p-3 md:p-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="shrink-0 text-xs font-bold text-slate-900 md:text-sm">Pilih Charm</h2>

          <div className="flex items-center gap-1.5 min-w-0 max-w-xs md:max-w-md">
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between gap-1 border border-slate-300 bg-white py-1.5 pl-2.5 pr-1.5 text-xs font-medium text-slate-700 outline-none transition focus:border-rose-300 w-28 sm:w-32 ${
                  isOpen ? 'rounded-t-xl border-b-transparent' : 'rounded-xl'
                }`}
              >
                <span className="truncate">{currentLabel}</span>
                <FiChevronDown className={`text-slate-500 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="absolute left-0 z-10 w-full border border-t-0 border-slate-300 bg-white shadow-lg rounded-b-xl overflow-hidden -mt-[1px]">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => {
                        setCategory(cat.value);
                        setIsOpen(false);
                      }}
                      className={`w-full px-2.5 py-1.5 text-left text-xs transition hover:bg-rose-50 ${
                        category === cat.value ? 'bg-rose-50/50 font-semibold text-rose-600' : 'text-slate-700'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative min-w-0 w-24 sm:w-36 md:w-48">
              <FiSearch className="pointer-events-none absolute inset-y-0 left-2 my-auto text-slate-400 text-xs" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari..."
                className="w-full rounded-xl border border-slate-300 py-1.5 pl-7 pr-2 text-xs outline-none transition focus:border-rose-300 focus:ring-1 focus:ring-rose-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-50 overflow-y-auto p-2 md:max-h-70 lg:max-h-80">
        {filteredCharms.length > 0 ? (
          <div className="grid grid-cols-6 gap-0.5 md:grid-cols-10 lg:grid-cols-12">
            {filteredCharms.map((charm) => (
              <button 
                key={charm.id} 
                onClick={() => onSelect(charm)} 
                className="group flex flex-col items-center gap-0.05 rounded-lg border border-rose-50 bg-slate-50 p-1.5 transition hover:border-rose-300 hover:bg-rose-50/60"
              >
                <div className="relative aspect-square w-full">
                  <SafeImage 
                    src={charm.image} 
                    alt={charm.name} 
                    fill 
                    quality={60} 
                    sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 10vw" 
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-102" 
                  />
                </div>
                
                <div className="w-full text-center mt-1">
            <p className="line-clamp-1 text-[10px] sm:text-xs text-slate-800 leading-tight">
              {charm.name}
            </p>
            <p className="text-[10px] sm:text-xs text-rose-500 leading-none mt-0.5">
              {formatRupiah(charm.price)}
            </p>
          </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-10 text-xs text-slate-400">
            Tidak ada charm yang ditemukan
          </div>
        )}
      </div>
    </div>
  );
};

export default CharmPicker;