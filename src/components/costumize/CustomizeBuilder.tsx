'use client';

import { useMemo, useState } from 'react';
import CharmCanvas from './CharmCanvas';
import CharmPicker from './CharmPicker';
import OrderAction from './OrderActions';
import { charms } from '@/data/charmCustom';
import type { Charm, SelectedCharm } from '@/types/globalTypes';

const CustomizeBuilder = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedCharms, setSelectedCharms] = useState<SelectedCharm[]>([]);
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
    <section className="bg-white">
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
