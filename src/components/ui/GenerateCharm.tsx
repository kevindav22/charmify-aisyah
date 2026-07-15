import { charmData } from '@/data/charm';
import type { Charm } from '@/types/globalTypes';

export const generateCharms = (): Charm[] => {
  let globalId = 1;

  return Object.entries(charmData).flatMap(([categoryKey, group]) => {
    return group.images.map((fileName) => {
      const extractedName = fileName.replace(/\.[^/.]+$/, '');
      const fullImagePath = `${group.basePath}${fileName}`;

      const currentId = globalId;
      globalId++;

      return {
        id: currentId,
        name: extractedName,
        image: fullImagePath,
        price: group.price,
        category: categoryKey as 'luma-pink' | 'luma-calm' | 'luma-zodiac',
      };
    });
  });
};