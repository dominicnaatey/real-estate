import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, LayoutGrid } from "lucide-react";
import { notFound } from "next/navigation";

import { properties } from "../../../../lib/data/Properties";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

type SectionKey =
  | "livingRoom"
  | "kitchen"
  | "dining"
  | "bedroom"
  | "bathroom"
  | "additional";

type PhotoSection = {
  key: SectionKey;
  title: string;
  subtitle: string;
  anchor: string;
  images: string[];
};

function getSectionImages(
  property: (typeof properties)[number],
  key: Exclude<SectionKey, "dining" | "additional">,
) {
  return property.images?.[key] ?? [];
}

function getDiningImages(property: (typeof properties)[number]) {
  const living = property.images?.livingRoom ?? [];
  const kitchen = property.images?.kitchen ?? [];
  return [...living.slice(1, 2), ...kitchen.slice(1, 2), ...living.slice(0, 1)];
}

function getAdditionalImages(property: (typeof properties)[number]) {
  const front = property.images?.frontView ?? [];
  const backyard = property.images?.backyard ?? [];
  const hallway = property.images?.hallway ?? [];
  const laundry = property.images?.laundryRoom ?? [];
  const bedroom = property.images?.bedroom ?? [];
  return [...front, ...backyard, ...hallway, ...laundry, ...bedroom].slice(0, 6);
}

function Mosaic({ images, title }: { images: string[]; title: string }) {
  const items = images.length ? images : [];
  const [a, b, c, d, e, f] = items;

  if (items.length >= 4) {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className="relative col-span-2 row-span-2 h-[420px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={a} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative h-[204px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={b} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative h-[204px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={c} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative col-span-3 h-[260px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={d} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        {e && (
          <div className="relative col-span-2 h-[260px] rounded-2xl overflow-hidden bg-gray-100">
            <Image alt={title} src={e} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        )}
        {f && (
          <div className="relative h-[260px] rounded-2xl overflow-hidden bg-gray-100">
            <Image alt={title} src={f} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        )}
      </div>
    );
  }

  if (items.length === 3) {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className="relative col-span-2 h-[420px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={a} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100">
            <Image alt={title} src={b} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100">
            <Image alt={title} src={c} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={a} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden bg-gray-100">
          <Image alt={title} src={b} fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[520px] rounded-2xl overflow-hidden bg-gray-100">
      <Image alt={title} src={a ?? ""} fill className="object-cover" referrerPolicy="no-referrer" />
    </div>
  );
}

export default async function PhotoTourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const numericId = Number(decodedSlug);

  const property =
    properties.find((p) => p.id === numericId) ??
    properties.find((p) => slugify(p.title) === decodedSlug);

  if (!property) {
    return notFound();
  }

  const sections: PhotoSection[] = [
    {
      key: "livingRoom",
      title: "Living room",
      subtitle: "Relaxing lounge area",
      anchor: "living-room",
      images: getSectionImages(property, "livingRoom"),
    },
    {
      key: "kitchen",
      title: "Full kitchen",
      subtitle: "Modern cooking space",
      anchor: "kitchen",
      images: getSectionImages(property, "kitchen"),
    },
    {
      key: "dining",
      title: "Dining area",
      subtitle: "Perfect for shared meals",
      anchor: "dining",
      images: getDiningImages(property),
    },
    {
      key: "bedroom",
      title: "Bedroom",
      subtitle: "Comfortable sleeping space",
      anchor: "bedroom",
      images: getSectionImages(property, "bedroom"),
    },
    {
      key: "bathroom",
      title: "Bathroom",
      subtitle: "Clean and functional",
      anchor: "bathroom",
      images: getSectionImages(property, "bathroom"),
    },
    {
      key: "additional",
      title: "Additional photos",
      subtitle: "More property angles",
      anchor: "additional",
      images: getAdditionalImages(property),
    },
  ];

  const navItems = sections
    .map((section) => {
      const thumb = section.images[0] ?? property.image;
      return {
        ...section,
        thumb,
      };
    })
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-24">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Link
              href={`/properties/${encodeURIComponent(decodedSlug)}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#008060] hover:underline"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
            <div className="text-sm text-gray-500">Photo tour</div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-500">
            <LayoutGrid size={16} />
            Scroll
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 mb-10">
          {navItems.map((item) => (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              className="flex-none w-20"
            >
              <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  alt={item.title}
                  src={item.thumb}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 text-[11px] font-semibold text-gray-700 truncate">
                {item.title}
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <a
                  key={section.anchor}
                  href={`#${section.anchor}`}
                  className="block"
                >
                  <div className="text-sm font-bold text-gray-900">
                    {section.title}
                  </div>
                  <div className="text-xs text-gray-500">{section.subtitle}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 space-y-14">
            {sections.map((section) => (
              <section key={section.anchor} id={section.anchor} className="scroll-mt-24">
                <div className="lg:hidden mb-4">
                  <div className="text-sm font-bold text-gray-900">
                    {section.title}
                  </div>
                  <div className="text-xs text-gray-500">{section.subtitle}</div>
                </div>
                <Mosaic
                  title={section.title}
                  images={section.images.length ? section.images : [property.image]}
                />
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
