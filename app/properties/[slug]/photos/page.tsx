import Image from "next/image";
import Link from "next/link";
import { Bookmark, ChevronLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

import { properties } from "../../../../lib/data/Properties";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

type TourSection = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  layout: "layout-a" | "layout-b" | "layout-c" | "layout-d" | "layout-e";
  images: string[];
};

function chooseLayout(imagesCount: number): TourSection["layout"] {
  if (imagesCount <= 1) return "layout-b";
  if (imagesCount === 2) return "layout-d";
  if (imagesCount === 3) return "layout-a";
  if (imagesCount === 4) return "layout-c";
  return "layout-e";
}

export default async function PhotosPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const numericId = Number(decodedSlug);

  const property =
    properties.find((p) => p.id === numericId) ??
    properties.find((p) => slugify(p.title) === decodedSlug);

  if (!property) {
    return notFound();
  }

  const imagesByGroup = property.images ?? {};
  const groupOrder: Array<NonNullable<typeof property.images> extends never ? never : keyof NonNullable<typeof property.images>> =
    [
      "frontView",
      "livingRoom",
      "kitchen",
      "bedroom",
      "bathroom",
      "hallway",
      "laundryRoom",
      "backyard",
    ];

  const groupMeta: Record<
    keyof NonNullable<typeof property.images>,
    { title: string; description: string }
  > = {
    frontView: { title: "Front view", description: "" },
    livingRoom: { title: "Living room", description: "Air conditioning, TV" },
    kitchen: {
      title: "Full kitchen",
      description:
        "Blender, Cooking basics, Dishes and silverware, Refrigerator, Microwave...",
    },
    bedroom: {
      title: "Bedroom",
      description:
        "Double bed, Air conditioning, Bed linens, Clothing storage, Hangers, Iron, Room-darkening shades",
    },
    bathroom: { title: "Full bathroom", description: "Hot water, Hair dryer" },
    laundryRoom: { title: "Laundry room", description: "" },
    hallway: { title: "Hallway", description: "" },
    backyard: { title: "Backyard", description: "" },
  };

  const tourSections: TourSection[] = groupOrder.flatMap((groupKey) => {
    const images = imagesByGroup[groupKey] ?? [];
    if (images.length === 0) return [];

    const meta = groupMeta[groupKey];
    const layout = chooseLayout(images.length);
    const layoutImages =
      layout === "layout-a"
        ? images.slice(0, 3)
        : layout === "layout-b"
          ? images.slice(0, 1)
          : layout === "layout-c"
            ? images.slice(0, 4)
            : layout === "layout-d"
              ? images.slice(0, 2)
              : images;

    return [
      {
        id: slugify(meta.title),
        title: meta.title,
        description: meta.description,
        thumbnail: images[0] ?? property.image,
        layout,
        images: layoutImages,
      },
    ];
  });

  if (tourSections.length === 0) {
    tourSections.push({
      id: "photos",
      title: "Photos",
      description: "",
      thumbnail: property.image,
      layout: "layout-b",
      images: [property.image],
    });
  }

  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <Link
          href={`/properties/${slug}`}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </Link>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
            <Share2 size={18} />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
            <Bookmark size={18} />
            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Photo tour</h1>

        <div className="flex overflow-x-auto gap-4 pb-4 mb-12 scrollbar-hide">
          {tourSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex flex-col gap-2 min-w-[120px] group"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-transparent group-hover:border-gray-900 transition-colors">
                <Image
                  src={section.thumbnail}
                  fill
                  className="object-cover"
                  alt={section.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-medium text-gray-900">
                {section.title}
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-16 md:space-y-24">
          {tourSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex flex-col md:flex-row gap-6 md:gap-12 scroll-mt-24"
            >
              <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="md:w-2/3 lg:w-3/4">
                {section.layout === "layout-a" && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                      <Image
                        src={section.images[0]}
                        fill
                        className="object-cover"
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="grid grid-rows-2 gap-2 md:gap-4">
                      <div className="relative rounded-xl overflow-hidden">
                        <Image
                          src={section.images[1]}
                          fill
                          className="object-cover"
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden">
                        <Image
                          src={section.images[2]}
                          fill
                          className="object-cover"
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {section.layout === "layout-b" && (
                  <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
                    <Image
                      src={section.images[0]}
                      fill
                      className="object-cover"
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {section.layout === "layout-c" && (
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
                      <Image
                        src={section.images[0]}
                        fill
                        className="object-cover"
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                        <Image
                          src={section.images[1]}
                          fill
                          className="object-cover"
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="grid grid-rows-2 gap-2 md:gap-4">
                        <div className="relative rounded-xl overflow-hidden">
                          <Image
                            src={section.images[2]}
                            fill
                            className="object-cover"
                            alt=""
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <Image
                            src={section.images[3]}
                            fill
                            className="object-cover"
                            alt=""
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.layout === "layout-d" && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                      <Image
                        src={section.images[0]}
                        fill
                        className="object-cover"
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                      <Image
                        src={section.images[1]}
                        fill
                        className="object-cover"
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {section.layout === "layout-e" && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {section.images.map((img, i) => (
                      <div
                        key={`${section.id}-${i}`}
                        className="relative aspect-square rounded-xl overflow-hidden"
                      >
                        <Image
                          src={img}
                          fill
                          className="object-cover"
                          alt=""
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
