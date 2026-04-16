import { notFound, redirect } from "next/navigation";
import { properties } from "../../../lib/data/Properties";
import { ImageGrid } from "../../../components/properties/ID/ImageGrid";
import { PropertyHeader } from "../../../components/properties/ID/PropertyHeader";
import { Highlights } from "../../../components/properties/ID/Highlights";
import { Features } from "../../../components/properties/ID/Features";
import { PriceBasics } from "../../../components/properties/ID/PriceBasics";
import { Overview } from "../../../components/properties/ID/Overview";
import { LocationMap } from "../../../components/properties/ID/LocationMap";
import { Sidebar } from "../../../components/properties/ID/Sidebar";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/-+/g, "-");
}

export default async function PropertyDetailPage({
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
      return redirect(`/properties/${legacy.id}`);
    }

    return notFound();
  }

  const property = properties.find((p) => p.id === propertyId);

  if (!property) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pt-16">
        <PropertyHeader property={property} />

        <ImageGrid
          title={property.title}
          coverImage={property.image}
          images={property.images}
          photosHref={`/properties/${property.id}=photos`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <PriceBasics property={property} />
            <Overview description={property.description} />

            <Highlights {...(property.highlights ?? {})} />
            <Features items={property.features} />

            <LocationMap
              location={property.location}
              coordinates={property.coordinates}
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
