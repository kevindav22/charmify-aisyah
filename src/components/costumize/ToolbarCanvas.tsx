"use client";

import {
  FiDownload,
  FiMinus,
  FiPlus,
  FiRotateCcw,
  FiTrash2,
  FiXCircle,
} from "react-icons/fi";

type Props = {
  zoom: number;
  hasSelected: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onClear: () => void;
  onDownload: () => void;
  onRemoveSelected: () => void;
};

const CharmCanvasToolbar = ({
  zoom,
  hasSelected,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onClear,
  onDownload,
  onRemoveSelected,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-rose-200 bg-rose-100 p-3 md:p-4">
      <div className="flex items-center overflow-hidden rounded-xl border border-rose-300 bg-white shadow-sm">
        <button
          onClick={onZoomOut}
          className="flex size-8 items-center justify-center text-slate-600 transition hover:bg-rose-50 hover:text-rose-500"
        >
          <FiMinus />
        </button>

        <div className="flex items-center justify-center border-x border-rose-300 px-3 text-sm font-semibold text-slate-700 md:px-4">
          {Math.round(zoom * 100)}%
        </div>

        <button
          onClick={onZoomIn}
          className="flex size-8 items-center justify-center text-slate-600 transition hover:bg-rose-50 hover:text-rose-500"
        >
          <FiPlus />
        </button>
      </div>

      <div className="flex items-center gap-2">
        {/* Tombol Hapus Charm Terpilih */}
        {hasSelected && (
          <button
            onClick={onRemoveSelected}
            className="flex size-8 items-center justify-center rounded-xl border border-rose-300 bg-rose-50 text-rose-600 transition hover:bg-rose-200 md:size-auto md:gap-2 md:px-4 md:py-2"
            title="Hapus Charm Terpilih"
          >
            <FiXCircle />
            <span className="hidden md:block">Hapus Charm</span>
          </button>
        )}

        <button
          onClick={onResetZoom}
          className="flex size-8 items-center justify-center rounded-xl border border-rose-300 bg-white text-slate-600 transition hover:border-rose-400 hover:text-rose-500 md:size-auto md:gap-2 md:px-4 md:py-2"
        >
          <FiRotateCcw />
          <span className="hidden md:block">Reset</span>
        </button>

        <button
          onClick={onClear}
          className="flex size-8 items-center justify-center rounded-xl border border-red-200 bg-white text-red-500 transition hover:bg-slate-50 md:size-auto md:gap-2 md:px-4 md:py-2"
        >
          <FiTrash2 />
          <span className="hidden md:block">Clear All</span>
        </button>

        <button
          onClick={onDownload}
          className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm transition hover:opacity-90 md:size-auto md:gap-2 md:px-4 md:py-2"
        >
          <FiDownload />
          <span className="hidden md:block">Download</span>
        </button>
      </div>
    </div>
  );
};

export default CharmCanvasToolbar;
