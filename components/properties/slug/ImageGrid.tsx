import Image from "next/image";

type ImageGridProps = {
  title: string;
  images: string[];
};

export function ImageGrid({ title, images }: ImageGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 rounded-3xl overflow-hidden h-[600px]">
      <div className="md:col-span-3 h-full relative group">
        <Image
          alt={title}
          src={images[0]}
          fill
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-102"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hidden md:flex flex-col gap-4 h-full">
        {images.slice(1, 4).map((img, idx) => (
          <div key={idx} className="h-1/2 relative group">
            <Image
              alt={`${title} - view ${idx + 2}`}
              src={img}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}