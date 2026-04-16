"use client";

import Image from "next/image";

import type { TourSection } from "./PhotoTourSections";

type PhotoTourThumbnailsNavProps = {
  sections: TourSection[];
};

export function PhotoTourThumbnailsNav({ sections }: PhotoTourThumbnailsNavProps) {
  return (
    <div className="flex overflow-x-auto gap-4 pb-4 mb-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById(section.id);
            if (!target) return;
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.pushState(null, "", `#${section.id}`);
          }}
          className="flex flex-col gap-2 min-w-30 group"
        >
          <div className="relative aspect-4/3 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-gray-900 transition-colors">
            <Image
              src={section.thumbnail}
              fill
              className="object-cover"
              alt={section.title}
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xs font-medium text-gray-900">{section.title}</span>
        </a>
      ))}
    </div>
  );
}
