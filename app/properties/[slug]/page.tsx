import { notFound } from "next/navigation";
import { properties } from "../../../lib/data/Properties";
import { ImageGrid } from "../../../components/properties/slug/ImageGrid";
import { PropertyHeader } from "../../../components/properties/slug/PropertyHeader";
import { Highlights } from "../../../components/properties/slug/Highlights";
import { Features } from "../../../components/properties/slug/Features";
import { PriceBasics } from "../../../components/properties/slug/PriceBasics";
import { Overview } from "../../../components/properties/slug/Overview";
import { LocationMap } from "../../../components/properties/slug/LocationMap";
import { Sidebar } from "../../../components/properties/slug/Sidebar";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const numericId = Number(decodedSlug);

  const property =
    properties.find((p) => p.id === numericId) ??
    properties.find((p) => slugify(p.title) === decodedSlug);

  if (!property) {
    return notFound();
  }

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

  const grouped = property.images;
  const galleryFromGroups = grouped
    ? groupOrder
        .flatMap(({ key, label }) => {
          const src = grouped[key]?.[0];
          return src ? [{ src, label }] : [];
        })
    : [];

  const fallbackGallery = [
    { src: property.image, label: "Front view" },
    { src: property.image, label: "Living room" },
    { src: property.image, label: "Bedroom" },
    { src: property.image, label: "Bathroom" },
    { src: property.image, label: "Kitchen" },
  ];

  const gallery = galleryFromGroups.length ? galleryFromGroups : fallbackGallery;

  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pt-24">
        <PropertyHeader property={property} />

        <ImageGrid title={property.title} images={gallery} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <PriceBasics property={property} />
            <Overview description={property.description} />

            <Highlights {...(property.highlights ?? {})} />
            <Features items={property.features} />

            <LocationMap
              location={property.location}
              mapImage={property.mapImage}
              propertyImage={property.image}
            />
          </div>

          <div className="space-y-6">
            <Sidebar agent={property.agent} />
          </div>
        </div>
      </div>
    </main>
  );
}
