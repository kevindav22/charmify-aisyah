'use client';

import { useMemo, useState } from 'react';
import CharmCanvas from './CharmCanvas';
import CharmPicker from './CharmPicker';
import OrderAction from './OrderActions';
// Import fungsi generator dari file utilitas yang baru kita buat
import { generateCharms } from '../ui/GenerateCharm';
import type { Charm, SelectedCharm } from '@/types/globalTypes';

const CustomizeBuilder = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedCharms, setSelectedCharms] = useState<SelectedCharm[]>([]);

  // Generate data charms otomatis dari file gambar menggunakan useMemo
  const charms = useMemo(() => generateCharms(), []);

  const addCharm = (charm: Charm) => {
    setSelectedCharms((prev) => [
      ...prev,
      {
        ...charm,
        instanceId: crypto.randomUUID(),
      },
    ]);
  };

  const removeCharm = (instanceId: string) => {
    setSelectedCharms((prev) => prev.filter((item) => item.instanceId !== instanceId));
  };

  const clearAll = () => {
    setSelectedCharms([]);
  };

  const totalPrice = useMemo(() => {
    return selectedCharms.reduce((total, item) => total + item.price, 0);
  }, [selectedCharms]);

  return (
    <section className="bg-gradient-to-b from-white to-rose-50 via-rose-100">
      <div className="container mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:px-8 lg:px-12">
        <CharmCanvas
          charms={selectedCharms}
          setCharms={setSelectedCharms}
          totalPrice={totalPrice}
          zoom={zoom}
          onRemove={removeCharm}
          onClear={clearAll}
          onZoomIn={() => setZoom((prev) => Math.min(prev + 0.1, 2))}
          onZoomOut={() => setZoom((prev) => Math.max(prev - 0.1, 0.5))}
          onResetZoom={() => setZoom(1)}
        />
        <CharmPicker charms={charms} onSelect={addCharm} />
        <OrderAction charms={selectedCharms} totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default CustomizeBuilder;