import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '');
}

export function formatWhatsAppLink(phone: string, message?: string) {
  const normalized = normalizePhone(phone);
  const text = message ? encodeURIComponent(message) : '';

  return `https://wa.me/${normalized}${text ? `?text=${text}` : ''}`;
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, 'dan')
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// lib/scrollToTop.ts

export const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => {
  callback?.();

  const currentPath = window.location.pathname;

  if (currentPath === href) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

//generate CharmData
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
        category: categoryKey as 'luma-pink' | 'luma-calm' | 'luma-zodiac' | 'luma-3d',
      };
    });
  });
};