"use client";

import { useEffect, useState } from "react";
import SafeImage from "@/components/ui/SafeImage";
import type { SelectedCharm } from "@/types/globalTypes";

type Props = {
  charm: SelectedCharm;
  setRef: (el: HTMLDivElement | null) => void;
  onSelect: () => void;
};

const FreeCharm = ({ charm, setRef, onSelect }: Props) => {
  const [baseSize, setBaseSize] = useState({ height: 44, width: 50 });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setBaseSize({ height: 24, width: 26 });
      } else {
        setBaseSize({ height: 48, width: 58 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const height = baseSize.height * charm.scale;
  const width = baseSize.width * charm.scale;

  return (
    <div
      ref={setRef}
      className="absolute cursor-move touch-none select-none"
      style={{
        left: charm.x,
        top: charm.y,
        width: width,
        height: height,
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
    </div>
  );
};

export default FreeCharm;
