import { PropertiesFilters } from "../../components/properties/PropertiesFilters";
import { PropertiesGrid } from "../../components/properties/PropertiesGrid";
import { PropertiesPagination } from "../../components/properties/PropertiesPagination";
import { PropertiesResultsHeader } from "../../components/properties/PropertiesResultsHeader";
import { properties } from "../../lib/data/Properties";
import { Suspense } from "react";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams?: Promise<{ mode?: string; minPrice?: string; maxPrice?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const mode = resolvedSearchParams?.mode;
  const minPriceParam = Number(resolvedSearchParams?.minPrice);
  const maxPriceParam = Number(resolvedSearchParams?.maxPrice);
  const minPrice = Number.isFinite(minPriceParam) ? minPriceParam : undefined;
  const maxPrice = Number.isFinite(maxPriceParam) ? maxPriceParam : undefined;

  const filteredProperties = properties.filter((p) => {
    if (mode === "rent" && p.listingType !== "For Rent") return false;
    if (mode === "buy" && p.listingType !== "For Sale") return false;
    if (minPrice !== undefined && p.price < minPrice) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    return true;
  });

  return (
    <div className="bg-gray-50">
      <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <Suspense fallback={null}>
          <PropertiesFilters />
        </Suspense>
        <PropertiesResultsHeader
          title="Curated collections"
          subtitle="Showing 124 premium properties in Los Angeles, CA"
        />
        <PropertiesGrid properties={filteredProperties} />
        <PropertiesPagination />
      </main>
    </div>
  );
}
