import { notFound } from "next/navigation";
import { properties } from "../../../lib/data/Properties";
import { ImageGrid } from "../../../components/properties/slug/ImageGrid";
import { PropertyHeader } from "../../../components/properties/slug/PropertyHeader";
import { Highlights } from "../../../components/properties/slug/Amenities";
import { LocationMap } from "../../../components/properties/slug/LocationMap";
import { Sidebar } from "../../../components/properties/slug/Sidebar";
import { BedDouble, ShowerHead, VectorSquare } from "lucide-react";

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

  const imagesSource =
    property.images && property.images.length > 0 ? property.images : [property.image];
  const images =
    imagesSource.length >= 4
      ? imagesSource
      : [...imagesSource, ...Array.from({ length: 4 - imagesSource.length }, () => property.image)];

  const formattedPrice = property.price.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  const downPayment = Math.round(property.price * 0.18).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  const overviewText =
    property.description ||
    "The undercroft comprises 4 self-contained units of varying size. The units have separate secured access, from a central private access road at lower ground level. access road routes through to a central pedestrianised area, within which the IMAX Multiplex Cinema is situated. The accommodation is unheated.";

  return (
    <main className="min-h-screen bg-white font-sans pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pt-24">
        <PropertyHeader
          title={property.title}
          location={property.location}
          listingType={property.listingType}
        />

        <ImageGrid title={property.title} images={images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                <span className="text-sm font-medium text-gray-900">
                  {property.listingType === "For Sale" ? "For sale" : "For rent"}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-1">
                ${formattedPrice}
                {property.listingType === "For Rent" ? "/mo" : ""}
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Down payment ${downPayment}
              </p>

              <div className="flex items-center gap-6 text-sm font-medium text-gray-900">
                <div className="flex items-center gap-2">
                  <BedDouble size={20} className="text-gray-400" />
                  {property.beds} Bed
                </div>
                <div className="flex items-center gap-2">
                  <ShowerHead size={20} className="text-gray-400" />
                  {property.baths} Bath
                </div>
                <div className="flex items-center gap-2">
                  <VectorSquare size={20} className="text-gray-400" />
                  {property.sqft}sqf
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {overviewText}{" "}
                <button className="font-bold text-gray-900 hover:underline">
                  Read More
                </button>
              </p>
            </div>

            <Highlights />

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
