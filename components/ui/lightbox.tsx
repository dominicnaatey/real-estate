"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Upload, X } from "lucide-react";
import { useEffect } from "react";

type LightboxProps = {
  open: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ open, images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyLeft = document.body.style.left;
    const originalBodyRight = document.body.style.right;
    const originalBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.left = originalBodyLeft;
      document.body.style.right = originalBodyRight;
      document.body.style.width = originalBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="flex items-center justify-between p-6 text-white">
        <button onClick={onClose} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <X size={20} />
          <span className="text-sm font-medium">Close</span>
        </button>
        <div className="text-sm font-medium tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-gray-300 transition-colors">
            <Upload size={20} />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center px-4 md:px-16 pb-6">
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative w-full h-full max-w-5xl">
          <Image
            src={images[currentIndex]}
            alt="Property photo"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
