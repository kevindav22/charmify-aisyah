"use client";

import SafeImage from "@/components/ui/SafeImage";
import { useBaseCharmSize } from "@/hooks/useBaseCharmSize";
import type { SelectedCharm } from "@/types/globalTypes";

type Props = {
  charm: SelectedCharm;
  isSelected: boolean;
  setRef: (el: HTMLDivElement | null) => void;
  setMoveHandleRef: (el: HTMLDivElement | null) => void;
  onSelect: () => void;
};

const FreeCharm = ({
  charm,
  isSelected,
  setRef,
  setMoveHandleRef,
  onSelect,
}: Props) => {
  const baseSize = useBaseCharmSize();

  const height = baseSize.height * charm.scale;
  const width = baseSize.width * charm.scale;

  return (
    <div
      ref={setRef}
      className="absolute cursor-move touch-none select-none"
      style={{
        left: charm.x,
        top: charm.y,
        width,
        height,
        zIndex: charm.zIndex,
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <div className="relative size-full pointer-events-none">
        <SafeImage
          useNativeImg
          src={charm.image}
          alt={charm.name}
          fill
          className="object-fill"
        />
      </div>

      {isSelected && (
        <div
          className="pointer-events-none absolute left-1/2 top-full flex -translate-x-1/2 flex-col items-center"
          style={{ height: 28 }}
        >
          <div className="h-4 w-px bg-rose-300" />
          <div
            ref={setMoveHandleRef}
            className="pointer-events-auto flex size-7 touch-none items-center justify-center rounded-full border border-rose-300 bg-white shadow-sm active:scale-95"
            style={{ cursor: "grab" }}
          >
            <div className="size-2.5 rounded-full bg-rose-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeCharm;
