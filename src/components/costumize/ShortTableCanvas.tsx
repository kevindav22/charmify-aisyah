'use client';

import SafeImage from '@/components/ui/SafeImage';
import { FiX } from 'react-icons/fi';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import type { SelectedCharm } from '@/types/globalTypes';

type Props = {
  charm: SelectedCharm;
  onRemove: (id: string) => void;
};

const SortableCharm = ({ charm, onRemove }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: charm.instanceId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 'auto',
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} className="group relative shrink-0 cursor-grab active:cursor-grabbing">
      <button
        data-download-ignore
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(charm.instanceId);
        }}
        className="absolute right-0 top-0 z-10 flex size-3 items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow transition-all group-hover:opacity-100"
      >
        <FiX className="size-2.5" />
      </button>

      <div
        {...listeners}
        className="relative size-8 md:size-12 lg:size-16 cursor-grab active:cursor-grabbing touch-none"
      >
        <SafeImage useNativeImg src={charm.image} alt={charm.name} fill className="object-contain scale-130 pointer-events-none" />
      </div>
    </div>
  );
};

export default SortableCharm;
