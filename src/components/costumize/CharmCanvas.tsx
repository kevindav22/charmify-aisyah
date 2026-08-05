"use client";

import { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";
import FreeCharm from "./FreeCharm";
import useCharmExport from "@/hooks/useCharmExport";
import CharmCanvasSummary from "./CharmCanvasSummary";
import CharmCanvasToolbar from "./ToolbarCanvas";
import type { SelectedCharm } from "@/types/globalTypes";
import { useBaseCharmSize } from "@/hooks/useBaseCharmSize";

type Props = {
  charms: SelectedCharm[];
  totalPrice: number;
  zoom: number;
  onRemove: (id: string) => void;
  onClear: () => void;
  onTransform: (
    instanceId: string,
    patch: Partial<
      Pick<SelectedCharm, "x" | "y" | "scale" | "rotate" | "zIndex">
    >,
  ) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
};

const CharmCanvas = ({
  charms,
  totalPrice,
  zoom,
  onRemove,
  onClear,
  onTransform,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { handleDownload } = useCharmExport(canvasRef);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const charmRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const moveHandleRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const baseSize = useBaseCharmSize();

  const selectedCharm = charms.find((c) => c.instanceId === selectedId) || null;
  const selectedTarget = selectedId ? charmRefs.current[selectedId] : null;

  const handleRemoveSelected = () => {
    if (selectedId) {
      onRemove(selectedId);
      setSelectedId(null);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
        if (
          document.activeElement?.tagName === "INPUT" ||
          document.activeElement?.tagName === "TEXTAREA"
        ) {
          return;
        }
        handleRemoveSelected();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  return (
    <div className="overflow-hidden rounded-xl border border-rose-100 bg-white">
      <CharmCanvasToolbar
        zoom={zoom}
        hasSelected={!!selectedId}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onResetZoom={onResetZoom}
        onClear={onClear}
        onDownload={handleDownload}
        onRemoveSelected={handleRemoveSelected}
      />

      <div ref={canvasRef} className="p-1 md:p-1 lg:p-2">
        <div className="flex aspect-[4/3] flex-col overflow-hidden rounded-2xl border border-dashed border-rose-900 bg-rose-50/20 md:aspect-[4/3] lg:aspect-[16/7] p-3 md:p-4">
          <div className="relative flex-1 overflow-hidden touch-none">
            <div
              className="relative size-full"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
              onPointerDown={(e) => {
                if (e.target === e.currentTarget) setSelectedId(null);
              }}
            >
              <div
                data-download-ignore
                className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 -translate-y-1/2 flex flex-col justify-between transition-all duration-200"
                style={{ height: `${baseSize.height}px` }}
              >
                <div className="w-full border-t border-dashed border-rose-300/70" />
                <div className="w-full border-b border-dashed border-rose-300/70" />
              </div>

              {charms.length === 0 ? (
                <div className="flex size-full items-center justify-center text-sm text-slate-400">
                  Belum ada charm
                </div>
              ) : (
                charms.map((charm) => (
                  <FreeCharm
                    key={charm.instanceId}
                    charm={charm}
                    isSelected={charm.instanceId === selectedId}
                    setRef={(el) => (charmRefs.current[charm.instanceId] = el)}
                    setMoveHandleRef={(el) =>
                      (moveHandleRefs.current[charm.instanceId] = el)
                    }
                    onSelect={() => setSelectedId(charm.instanceId)}
                  />
                ))
              )}

              {selectedCharm && selectedTarget && (
                <Moveable
                  target={selectedTarget}
                  zoom={1 / zoom}
                  draggable
                  resizable
                  renderDirections={["nw", "ne", "sw", "se"]}
                  throttleDrag={0}
                  throttleResize={0}
                  keepRatio
                  origin={false}
                  edge={false}
                  onDrag={({ target, left, top }) => {
                    target.style.left = `${left}px`;
                    target.style.top = `${top}px`;
                  }}
                  onDragEnd={({ target }) => {
                    const left = parseFloat(target.style.left) || 0;
                    const top = parseFloat(target.style.top) || 0;
                    onTransform(selectedCharm.instanceId, { x: left, y: top });
                  }}
                  onResize={({ target, width, height, drag }) => {
                    target.style.width = `${width}px`;
                    target.style.height = `${height}px`;
                    target.style.left = `${drag.left}px`;
                    target.style.top = `${drag.top}px`;
                  }}
                  onResizeEnd={({ target }) => {
                    const height =
                      parseFloat(target.style.height) || baseSize.height;
                    const left = parseFloat(target.style.left) || 0;
                    const top = parseFloat(target.style.top) || 0;
                    onTransform(selectedCharm.instanceId, {
                      scale: height / baseSize.height,
                      x: left,
                      y: top,
                    });
                  }}
                />
              )}
            </div>
          </div>

          <CharmCanvasSummary charms={charms} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CharmCanvas;
