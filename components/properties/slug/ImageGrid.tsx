import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import type { Property } from "../types";

type ImageGridProps = {
  title: string;
  coverImage: string;
  images?: Property["images"];
};

export function ImageGrid({ title, coverImage, images }: ImageGridProps) {
  const groupOrder = [
    { key: "frontView", label: "Front view" },
    { key: "livingRoom", label: "Living room" },
    { key: "bedroom", label: "Bedroom" },
    { key: "bathroom", label: "Bathroom" },
    { key: "kitchen", label: "Kitchen" },
    { key: "laundryRoom", label: "Laundry room" },
    { key: "hallway", label: "Hallway" },
    { key: "backyard", label: "Backyard" },
  ] as const;

  const galleryFromGroups = images
    ? groupOrder.flatMap(({ key, label }) => {
        const src = images[key]?.[0];
        return src ? [{ src, label }] : [];
      })
    : [];

  const fallbackGallery = [
    { src: coverImage, label: "Front view" },
    { src: coverImage, label: "Living room" },
    { src: coverImage, label: "Bedroom" },
    { src: coverImage, label: "Bathroom" },
    { src: coverImage, label: "Kitchen" },
  ];

  const gallery = galleryFromGroups.length ? galleryFromGroups : fallbackGallery;

  const mainImage = gallery[0];
  const sideImages = gallery.slice(1, 5);
  const remainingCount = Math.max(gallery.length - 5, 0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-12">
      <div className="md:col-span-6 relative aspect-5/3 md:aspect-9/5 md:h-auto rounded-2xl overflow-hidden">
        <Image
          alt={title}
          src={mainImage?.src}
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute left-4 bottom-4 bg-black/55 backdrop-blur px-3 py-1.5 rounded-full text-white text-sm font-medium">
          {mainImage?.label}
        </div>
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
          <ChevronLeft size={20} className="text-gray-900" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors rotate-180">
          <ChevronLeft size={20} className="text-gray-900" />
        </button>
      </div>
      <div className="hidden md:flex flex-col gap-4 h-full">
        {sideImages.map((img, idx) => (
          <div key={idx} className="relative flex-1 rounded-2xl overflow-hidden">
            <Image
              alt={`${title} - view ${idx + 2}`}
              src={img.src}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute left-3 bottom-3 bg-black/55 backdrop-blur px-2.5 py-1 rounded-full text-white text-xs font-medium">
              {img.label}
            </div>
            {idx === sideImages.length - 1 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                <span className="text-white font-medium text-lg">
                  +{remainingCount}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
