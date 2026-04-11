import { PropertiesFilters } from "../../components/properties/PropertiesFilters";
import { PropertiesGrid } from "../../components/properties/PropertiesGrid";
import { PropertiesPagination } from "../../components/properties/PropertiesPagination";
import { PropertiesResultsHeader } from "../../components/properties/PropertiesResultsHeader";
import { properties } from "../../lib/data/Properties";

export default function PropertiesPage() {
  return (
    <div className="bg-gray-50">
      <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <PropertiesFilters />
        <PropertiesResultsHeader
          title="Curated collections"
          subtitle="Showing 124 premium properties in Los Angeles, CA"
        />
        <PropertiesGrid properties={properties} />
        <PropertiesPagination />
      </main>
    </div>
  );
}
