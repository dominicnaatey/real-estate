import { PropertiesFilters } from "../../components/properties/PropertiesFilters";
import { PropertiesGrid } from "../../components/properties/PropertiesGrid";
import { PropertiesPagination } from "../../components/properties/PropertiesPagination";
import { PropertiesResultsHeader } from "../../components/properties/PropertiesResultsHeader";
import { properties } from "../../lib/data/Properties";
import { Suspense } from "react";

export default function PropertiesPage({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) {
  const mode = searchParams?.mode === "rent" ? "rent" : "buy";
  const filteredProperties = properties.filter((p) =>
    mode === "rent" ? p.listingType === "For Rent" : p.listingType === "For Sale",
  );

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
