'use client';

import { FiDownload, FiMinus, FiPlus, FiRotateCcw, FiTrash2 } from 'react-icons/fi';

type Props = {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  onClear: () => void;
  onDownload: () => void;
};

const CharmCanvasToolbar = ({ zoom, onZoomIn, onZoomOut, onResetZoom, onClear, onDownload }: Props) => {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-rose-100 bg-gradient-to-r from-rose-50/70 via-white to-pink-50/70 p-3 md:p-4">
      <div className="flex items-center overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm">
        <button onClick={onZoomOut} className="flex size-10 items-center justify-center text-slate-600 transition hover:bg-rose-50 hover:text-rose-500">
          <FiMinus />
        </button>

        <div className="flex items-center justify-center border-x border-rose-100 px-3 text-sm font-semibold text-slate-700 md:px-4">{Math.round(zoom * 100)}%</div>

        <button onClick={onZoomIn} className="flex size-10 items-center justify-center text-slate-600 transition hover:bg-rose-50 hover:text-rose-500">
          <FiPlus />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={onResetZoom} className="flex size-10 items-center justify-center rounded-xl border border-rose-200 bg-white text-slate-600 transition hover:border-rose-300 hover:text-rose-500 md:size-auto md:gap-2 md:px-4 md:py-2">
          <FiRotateCcw />
          <span className="hidden md:block">Reset</span>
        </button>

        <button onClick={onClear} className="flex size-10 items-center justify-center rounded-xl border border-red-200 bg-white text-red-500 transition hover:bg-red-50 md:size-auto md:gap-2 md:px-4 md:py-2">
          <FiTrash2 />
          <span className="hidden md:block">Clear</span>
        </button>

        <button onClick={onDownload} className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm transition hover:opacity-90 md:size-auto md:gap-2 md:px-4 md:py-2">
          <FiDownload />
          <span className="hidden md:block">Download</span>
        </button>
      </div>
    </div>
  );
};

export default CharmCanvasToolbar;
