"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Lightbox } from "../../../ui/lightbox";

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
  openLightbox: (index: number) => void;
};

function PhotoTourSectionLayout({ section, baseIndex, openLightbox }: PhotoTourSectionLayoutProps) {
  if (section.layout === "layout-a") {
    // Layout A: 3 photos grid (1 tall on the left, 2 stacked on the right)
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <button
          type="button"
          onClick={() => openLightbox(baseIndex + 0)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer block w-full h-full"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
        <div className="grid grid-rows-2 gap-2 md:gap-4">
          <button
            type="button"
            onClick={() => openLightbox(baseIndex + 1)}
            className="relative rounded-xl overflow-hidden h-full cursor-pointer block w-full"
          >
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
          <button
            type="button"
            onClick={() => openLightbox(baseIndex + 2)}
            className="relative rounded-xl overflow-hidden h-full cursor-pointer block w-full"
          >
            <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-b") {
    // Layout B: single photo (wide)
    return (
      <button
        type="button"
        onClick={() => openLightbox(baseIndex + 0)}
        className="relative aspect-3/2 rounded-xl overflow-hidden cursor-pointer block w-full"
      >
        <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
      </button>
    );
  }

  if (section.layout === "layout-c") {
    // Layout C: 4 photos grid (2 × 2)
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        {section.images.slice(0, 4).map((src, i) => (
          <button
            key={`${section.id}-${i}`}
            type="button"
            onClick={() => openLightbox(baseIndex + i)}
            className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer block w-full"
          >
            <Image src={src} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </button>
        ))}
      </div>
    );
  }

  if (section.layout === "layout-d") {
    // Layout D: 2 photos grid (side-by-side)
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <button
          type="button"
          onClick={() => openLightbox(baseIndex + 0)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer block w-full"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
        <button
          type="button"
          onClick={() => openLightbox(baseIndex + 1)}
          className="relative aspect-3/4 rounded-xl overflow-hidden cursor-pointer block w-full"
        >
          <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </button>
      </div>
    );
  }

  // Layout E: multi-photo grid (2 columns, square tiles)
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {section.images.map((img, i) => (
        <button
          key={`${section.id}-${i}`}
          type="button"
          onClick={() => openLightbox(baseIndex + i)}
          className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer block w-full"
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
                openLightbox={openLightbox}
              />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        images={allImages}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
