import Image from "next/image";
import { ChevronLeft } from "lucide-react";

type ImageGridProps = {
  title: string;
  images: string[];
};

export function ImageGrid({ title, images }: ImageGridProps) {
  const mainImage = images[0];
  const sideImages = images.slice(1, 4);
  const remainingCount = Math.max(images.length - 4, 0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-12">
      <div className="md:col-span-6 relative aspect-5/3 md:aspect-9/5 md:h-auto rounded-2xl overflow-hidden">
        <Image
          alt={title}
          src={mainImage}
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
          <ChevronLeft size={20} className="text-gray-900" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors rotate-180">
          <ChevronLeft size={20} className="text-gray-900" />
        </button>
      </div>
      <div className="hidden md:flex flex-col gap-4 h-auto">
        {sideImages.map((img, idx) => (
          <div key={idx} className="relative flex-1 rounded-2xl overflow-hidden">
            <Image
              alt={`${title} - view ${idx + 2}`}
              src={img}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
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
