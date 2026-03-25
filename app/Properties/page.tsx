import { PropertiesFilters } from "../../components/properties/PropertiesFilters";
import { PropertiesGrid } from "../../components/properties/PropertiesGrid";
import { PropertiesPagination } from "../../components/properties/PropertiesPagination";
import { PropertiesResultsHeader } from "../../components/properties/PropertiesResultsHeader";
import { properties } from "../../components/data/Properties";

export default function PropertiesPage() {
  return (
    <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex gap-10">
      <PropertiesFilters />

      <section className="flex-1">
        <PropertiesResultsHeader
          title="Curated collections"
          subtitle="Showing 124 premium properties in Los Angeles, CA"
        />
        <PropertiesGrid properties={properties} />
        <PropertiesPagination />
      </section>
    </main>
  );
}
