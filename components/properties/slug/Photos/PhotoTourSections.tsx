"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";

export type TourSection = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  layout: "layout-a" | "layout-b" | "layout-c" | "layout-d" | "layout-e";
  images: string[];
};

type PhotoTourSectionsProps = {
  sections: TourSection[];
};

type PhotoTourSectionLayoutProps = {
  section: TourSection;
  baseIndex: number;
  onOpenLightbox: (index: number) => void;
};

function PhotoTourSectionLayout({ section, baseIndex, onOpenLightbox }: PhotoTourSectionLayoutProps) {
  if (section.layout === "layout-a") {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <button
          type="button"
          onClick={() => onOpenLightbox(baseIndex + 0)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
        <div className="grid grid-rows-2 gap-2 md:gap-4">
          <button
            type="button"
            onClick={() => onOpenLightbox(baseIndex + 1)}
            className="relative rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
          <button
            type="button"
            onClick={() => onOpenLightbox(baseIndex + 2)}
            className="relative rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-b") {
    return (
      <button
        type="button"
        onClick={() => onOpenLightbox(baseIndex + 0)}
        className="relative aspect-3/2 rounded-xl overflow-hidden cursor-pointer"
      >
        <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
      </button>
    );
  }

  if (section.layout === "layout-c") {
    return (
      <div className="flex flex-col gap-2 md:gap-4">
        <button
          type="button"
          onClick={() => onOpenLightbox(baseIndex + 0)}
          className="relative aspect-2/1 rounded-xl overflow-hidden cursor-pointer"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <button
            type="button"
            onClick={() => onOpenLightbox(baseIndex + 1)}
            className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
          <div className="grid grid-rows-2 gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => onOpenLightbox(baseIndex + 2)}
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </button>
            <button
              type="button"
              onClick={() => onOpenLightbox(baseIndex + 3)}
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <Image src={section.images[3]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-d") {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <button
          type="button"
          onClick={() => onOpenLightbox(baseIndex + 0)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
        <button
          type="button"
          onClick={() => onOpenLightbox(baseIndex + 1)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer"
        >
          <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {section.images.map((img, i) => (
        <button
          key={`${section.id}-${i}`}
          type="button"
          onClick={() => onOpenLightbox(baseIndex + i)}
          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
        >
          <Image src={img} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
      ))}
    </div>
  );
}

export function PhotoTourSections({ sections }: PhotoTourSectionsProps) {
  const allImages = useMemo(() => sections.flatMap((section) => section.images), [sections]);
  const sectionsWithBaseIndex = useMemo(() => {
    return sections.reduce(
      (acc, section) => ({
        items: [...acc.items, { section, baseIndex: acc.nextIndex }],
        nextIndex: acc.nextIndex + section.images.length,
      }),
      { items: [] as Array<{ section: TourSection; baseIndex: number }>, nextIndex: 0 },
    ).items;
  }, [sections]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openLightbox(index: number) {
    if (allImages.length === 0) return;
    const nextIndex = Math.max(0, Math.min(index, allImages.length - 1));
    setCurrentIndex(nextIndex);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prevImage() {
    if (allImages.length === 0) return;
    setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }

  function nextImage() {
    if (allImages.length === 0) return;
    setCurrentIndex((i) => (i + 1) % allImages.length);
  }

  return (
    <>
      <div className="space-y-16 md:space-y-24">
        {sectionsWithBaseIndex.map(({ section, baseIndex }) => (
          <div
            key={section.id}
            id={section.id}
            className="flex flex-col md:flex-row gap-6 md:gap-12 scroll-mt-24"
          >
            <div className="md:w-1/3 lg:w-1/4 shrink-0 md:sticky md:top-24 self-start">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
            </div>

            <div className="md:w-2/3 lg:w-3/4">
              <PhotoTourSectionLayout
                section={section}
                baseIndex={baseIndex}
                onOpenLightbox={openLightbox}
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex items-center justify-between p-6 text-white">
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <X size={20} />
              <span className="text-sm font-medium">Close</span>
            </button>
            <div className="text-sm font-medium tracking-widest">
              {currentIndex + 1} / {allImages.length}
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
              onClick={prevImage}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={allImages[currentIndex]}
                alt="Property photo"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
