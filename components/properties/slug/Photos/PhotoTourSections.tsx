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
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div
          onClick={() => openLightbox(baseIndex + 0)}
          className="relative aspect-3/4 aspect-[3/4] rounded-xl overflow-hidden"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="grid grid-rows-2 gap-2 md:gap-4">
          <div
            onClick={() => openLightbox(baseIndex + 1)}
            className="relative rounded-xl overflow-hidden aspect-4/3 aspect-[4/3]"
          >
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div
            onClick={() => openLightbox(baseIndex + 2)}
            className="relative rounded-xl overflow-hidden aspect-4/3 aspect-[4/3]"
          >
            <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-b") {
    return (
      <div
        onClick={() => openLightbox(baseIndex + 0)}
        className="relative aspect-3/2 aspect-[3/2] rounded-xl overflow-hidden"
      >
        <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
      </div>
    );
  }

  if (section.layout === "layout-c") {
    return (
      <div className="flex flex-col gap-2 md:gap-4">
        <div
          onClick={() => openLightbox(baseIndex + 0)}
          className="relative aspect-2/1 aspect-[2/1] rounded-xl overflow-hidden"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div
            onClick={() => openLightbox(baseIndex + 1)}
            className="relative aspect-3/4 aspect-[3/4] rounded-xl overflow-hidden"
          >
            <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-rows-2 gap-2 md:gap-4">
            <div
              onClick={() => openLightbox(baseIndex + 2)}
              className="relative rounded-xl overflow-hidden aspect-4/3 aspect-[4/3]"
            >
              <Image src={section.images[2]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
            <div
              onClick={() => openLightbox(baseIndex + 3)}
              className="relative rounded-xl overflow-hidden aspect-4/3 aspect-[4/3]"
            >
              <Image src={section.images[3]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (section.layout === "layout-d") {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div
          onClick={() => openLightbox(baseIndex + 0)}
          className="relative aspect-3/4 aspect-[3/4] rounded-xl overflow-hidden"
        >
          <Image src={section.images[0]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div
          onClick={() => openLightbox(baseIndex + 1)}
          className="relative aspect-3/4 aspect-[3/4] rounded-xl overflow-hidden"
        >
          <Image src={section.images[1]} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {section.images.map((img, i) => (
        <div
          key={`${section.id}-${i}`}
          onClick={() => openLightbox(baseIndex + i)}
          className="relative aspect-square rounded-xl overflow-hidden"
        >
          <Image src={img} fill className="object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
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
