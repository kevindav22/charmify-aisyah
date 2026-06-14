'use client';

import { useMemo, useRef } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import SortableCharm from './ShortTableCanvas';
import useCharmExport from '@/hooks/useCharmExport';
import CharmCanvasSummary from './CharmCanvasSummary';
import CharmCanvasToolbar from './ToolbarCanvas';
import type { SelectedCharm } from '@/types/globalTypes';

type Props = {
  charms: SelectedCharm[];
  totalPrice: number;
  zoom: number;
  setCharms: (val: SelectedCharm[]) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
};

/* ================= SORTABLE ITEM ================= */

/* ================= MAIN ================= */

const CharmCanvas = ({ charms, totalPrice, zoom, setCharms, onRemove, onClear, onZoomIn, onZoomOut, onResetZoom }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { handleDownload } = useCharmExport(canvasRef);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
  );

  const summary = useMemo(() => {
    const grouped = charms.reduce(
      (acc, item) => {
        acc[item.name] = (acc[item.name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(grouped);
  }, [charms]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = charms.findIndex((i) => i.instanceId === active.id);
    const newIndex = charms.findIndex((i) => i.instanceId === over.id);
    setCharms(arrayMove(charms, oldIndex, newIndex));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-rose-100 bg-white">
      {/* TOOLBAR */}
      <CharmCanvasToolbar zoom={zoom} onZoomIn={onZoomIn} onZoomOut={onZoomOut} onResetZoom={onResetZoom} onClear={onClear} onDownload={handleDownload} />

      {/* CANVAS */}
      <div ref={canvasRef} className="p-3 md:p-4 lg:p-5">
        <div className="flex aspect-square flex-col overflow-hidden rounded-2xl border border-dashed border-rose-900 bg-rose-50/20 md:aspect-[4/3] lg:aspect-[16/7] p-4">
          
          <div className="flex flex-1 items-center justify-center overflow-x-auto overflow-y-hidden">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={charms.map((c) => c.instanceId)} strategy={horizontalListSortingStrategy}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center center',
                  }}
                >
                  {charms.length === 0 ? (
                    <div className="text-sm text-slate-400">Belum ada charm</div>
                  ) : (
                    <div className="inline-flex items-center ">
                      {charms.map((charm) => (
                        <SortableCharm key={charm.instanceId} charm={charm} onRemove={onRemove} />
                      ))}
                    </div>
                  )}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          <CharmCanvasSummary charms={charms} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CharmCanvas;
