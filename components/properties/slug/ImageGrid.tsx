import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, LayoutGrid } from "lucide-react";
import type { Property } from "../types";

type ImageGridProps = {
  title: string;
  coverImage: string;
  images?: Property["images"];
  photosHref: string;
};

export function ImageGrid({ title, coverImage, images, photosHref }: ImageGridProps) {
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
  const sideImages = gallery.slice(1, 4);
  const totalPhotos = groupOrder.reduce((total, { key }) => total + (images?.[key]?.length ?? 0), 0);
  const hasMoreThanShown = totalPhotos > gallery.length;

  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
      <div className="md:col-span-5 group relative aspect-5/3 md:aspect-9/5 md:h-auto rounded-2xl overflow-hidden cursor-pointer">
        <Image
          alt={title}
          src={mainImage?.src}
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-101"
          priority
          referrerPolicy="no-referrer"
        />
        <Link href={photosHref} className="absolute inset-0 z-10">
          <span className="sr-only">View all photos</span>
        </Link>
        {/* <div className="absolute left-4 bottom-4 bg-black/55 backdrop-blur px-3 py-1.5 rounded-full text-white text-sm font-medium">
          {mainImage?.label}
        </div> */}

        {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors z-20">
          <ChevronLeft size={20} className="text-gray-900" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors rotate-180 z-20">
          <ChevronLeft size={20} className="text-gray-900" />
        </button> */}
      </div>
      <div className="hidden md:flex flex-col gap-4 h-full">
        {sideImages.map((img, idx) => (
          <div key={idx} className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer">
            <Image
              alt={`${title} - view ${idx + 2}`}
              src={img.src}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-104"
              referrerPolicy="no-referrer"
            />
            <Link href={photosHref} className="absolute inset-0 z-10">
              <span className="sr-only">View all photos</span>
            </Link>
            {/* {idx !== sideImages.length - 1 && (
              <div className="absolute left-3 bottom-3 bg-black/55 backdrop-blur px-2.5 py-1 rounded-full text-white text-xs font-medium">
                {img.label}
              </div>
            )} */}
            {idx === sideImages.length - 1 && hasMoreThanShown && (
              <Link
                href={photosHref}
                className="absolute right-2 bottom-2 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-900 shadow-md cursor-pointer hover:text-orange-700 group/button z-20"
              >
                <LayoutGrid size={16} className="text-gray-900 group-hover/button:text-orange-700" />
                Show all photos
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
