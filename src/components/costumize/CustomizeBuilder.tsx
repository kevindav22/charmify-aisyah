"use client";

import { useMemo, useState } from "react";
import CharmCanvas from "./CharmCanvas";
import CharmPicker from "./CharmPicker";
import OrderAction from "./OrderActions";
import { generateCharms } from "@/lib/utils";
import type { Charm, SelectedCharm } from "@/types/globalTypes";

const CustomizeBuilder = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedCharms, setSelectedCharms] = useState<SelectedCharm[]>([]);

  const charms = useMemo(() => generateCharms(), []);

  const addCharm = (charm: Charm) => {
    setSelectedCharms((prev) => [
      ...prev,
      {
        ...charm,
        instanceId: crypto.randomUUID(),
        x: 150,
        y: 100,
        scale: 1,
        rotate: 0,
        zIndex: prev.length + 1,
      },
    ]);
  };

  const updateCharmTransform = (
    instanceId: string,
    patch: Partial<
      Pick<SelectedCharm, "x" | "y" | "scale" | "rotate" | "zIndex">
    >,
  ) => {
    setSelectedCharms((prev) =>
      prev.map((item) =>
        item.instanceId === instanceId ? { ...item, ...patch } : item,
      ),
    );
  };

  const removeCharm = (instanceId: string) => {
    setSelectedCharms((prev) =>
      prev.filter((item) => item.instanceId !== instanceId),
    );
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
          totalPrice={totalPrice}
          zoom={zoom}
          onRemove={removeCharm}
          onClear={clearAll}
          onTransform={updateCharmTransform}
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
