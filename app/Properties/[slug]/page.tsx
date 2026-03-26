import { notFound } from "next/navigation";
import { properties } from "../../../components/data/Properties";
import { ImageGrid } from "../../../components/properties/slug/ImageGrid";
import { PropertyHeader } from "../../../components/properties/slug/PropertyHeader";
import { Amenities } from "../../../components/properties/slug/Amenities";
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

  const images = property.images || [property.image, property.image, property.image];

  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ImageGrid title={property.title} images={images} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <PropertyHeader
            title={property.title}
            location={property.location}
            price={property.price}
            listingType={property.listingType}
            beds={property.beds}
            baths={property.baths}
            sqft={property.sqft}
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
              {property.description ||
                "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle."}
            </p>
          </div>

          <Amenities amenities={property.amenities} />

          <LocationMap
            location={property.location}
            mapImage={property.mapImage}
            propertyImage={property.image}
          />
        </div>

        <Sidebar agent={property.agent} />
      </div>
    </main>
  );
}

