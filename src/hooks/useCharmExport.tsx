'use client';

import { RefObject } from 'react';
import { toPng } from 'html-to-image';

const useCharmExport = (canvasRef: RefObject<HTMLDivElement | null>) => {
  const handleDownload = async () => {
    if (!canvasRef.current) return;

    try {
      await document.fonts.ready;

      const images = Array.from(canvasRef.current.querySelectorAll('img'));

      await Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            }),
        ),
      );

      const dataUrl = await toPng(canvasRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: '#ffffff',
        filter: (node) => {
          if (!(node instanceof HTMLElement)) return true;

          return !node.hasAttribute('data-download-ignore');
        },
      });

      const link = document.createElement('a');

      link.download = `charm-design-${Date.now()}.png`;
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('PNG Export Error:', error);
    }
  };

  return {
    handleDownload,
  };
};

export default useCharmExport;
