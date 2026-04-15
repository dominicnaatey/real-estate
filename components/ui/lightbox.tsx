"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Upload, X } from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent } from "react";

type LightboxProps = {
  open: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ open, images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const touchStartXRef = useRef<number | null>(null);
  const navDirectionRef = useRef<"prev" | "next">("next");
  const prevOpenRef = useRef(open);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= images.length - 1;

  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [transition, setTransition] = useState<null | {
    from: number;
    to: number;
    direction: "prev" | "next";
    phase: "start" | "animating";
  }>(null);

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

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (!open || wasOpen) return;

    const raf = window.requestAnimationFrame(() => {
      setActiveIndex(currentIndex);
      setTransition(null);
    });
    return () => window.cancelAnimationFrame(raf);
  }, [open, currentIndex]);

  useEffect(() => {
    if (!open) return;
    if (currentIndex === activeIndex) return;

    const direction = navDirectionRef.current;
    let raf1 = 0;
    let raf2 = 0;

    raf1 = window.requestAnimationFrame(() => {
      setTransition({ from: activeIndex, to: currentIndex, direction, phase: "start" });
      raf2 = window.requestAnimationFrame(() => {
        setTransition((t) => (t ? { ...t, phase: "animating" } : t));
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [open, currentIndex, activeIndex]);

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const startX = touchStartXRef.current;
    const endX = e.changedTouches[0]?.clientX;
    touchStartXRef.current = null;

    if (startX == null || endX == null) return;

    const deltaX = endX - startX;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      if (isFirst) return;
      navDirectionRef.current = "prev";
      onPrev();
    } else if (deltaX < -swipeThreshold) {
      if (isLast) return;
      navDirectionRef.current = "next";
      onNext();
    }
  }

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

      <div
        className="flex-1 relative flex items-center justify-center px-4 md:px-16 pb-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          disabled={isFirst}
          onClick={() => {
            if (isFirst) return;
            navDirectionRef.current = "prev";
            onPrev();
          }}
          className="absolute left-3 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          <ChevronLeft size={18} className="md:hidden" />
          <ChevronLeft size={24} className="hidden md:block" />
        </button>

        <div className="relative w-full h-full max-w-5xl">
          {transition ? (
            <>
              <div
                className="absolute inset-0"
                style={{
                  transform:
                    transition.phase === "animating"
                      ? transition.direction === "next"
                        ? "translateX(-100%)"
                        : "translateX(100%)"
                      : "translateX(0%)",
                  transition: transition.phase === "animating" ? "transform 260ms ease" : undefined,
                }}
              >
                <Image
                  src={images[transition.from]}
                  alt="Property photo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  transform:
                    transition.phase === "animating"
                      ? "translateX(0%)"
                      : transition.direction === "next"
                        ? "translateX(100%)"
                        : "translateX(-100%)",
                  transition: transition.phase === "animating" ? "transform 260ms ease" : undefined,
                }}
                onTransitionEnd={() => {
                  setActiveIndex(transition.to);
                  setTransition(null);
                }}
              >
                <Image
                  src={images[transition.to]}
                  alt="Property photo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </>
          ) : (
            <Image
              src={images[activeIndex]}
              alt="Property photo"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
              priority
            />
          )}
        </div>

        <button
          type="button"
          disabled={isLast}
          onClick={() => {
            if (isLast) return;
            navDirectionRef.current = "next";
            onNext();
          }}
          className="absolute right-3 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors z-10 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          <ChevronRight size={18} className="md:hidden" />
          <ChevronRight size={24} className="hidden md:block" />
        </button>
      </div>
    </div>
  );
}
