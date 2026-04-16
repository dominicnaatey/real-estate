import { notFound, redirect } from "next/navigation";

import { properties } from "../../../../lib/data/Properties";
import { PhotoTourTopBar } from "../../../../components/properties/ID/Photos/PhotoTourTopBar";
import { PhotoTourThumbnailsNav } from "../../../../components/properties/ID/Photos/PhotoTourThumbnailsNav";
import {
  PhotoTourSections,
  type TourSection,
} from "../../../../components/properties/ID/Photos/PhotoTourSections";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

function chooseLayout(imagesCount: number): TourSection["layout"] {
  if (imagesCount <= 1) return "layout-b";
  if (imagesCount === 2) return "layout-d";
  if (imagesCount === 3) return "layout-a";
  if (imagesCount === 4) return "layout-c";
  return "layout-e";
}

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const propertyId = Number(id);

  if (!Number.isFinite(propertyId)) {
    const decoded = decodeURIComponent(id);
    const legacy = properties.find((p) => slugify(p.title) === decoded);
    if (legacy) {
      return redirect(`/properties/${legacy.id}/photos`);
    }

    return notFound();
  }

  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return notFound();
  }

  const imagesByGroup = property.images ?? {};
  const groupOrder: Array<
    NonNullable<typeof property.images> extends never
      ? never
      : keyof NonNullable<typeof property.images>
  > = [
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
      <PhotoTourTopBar backHref={`/properties/${property.id}`} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Photo tour</h1>

        <PhotoTourThumbnailsNav sections={tourSections} />

        <PhotoTourSections sections={tourSections} />
      </div>
    </main>
  );
}
