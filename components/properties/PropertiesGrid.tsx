import type { Property } from "./types";
import { PropertyCard } from "../ui/PropertyCard";

type PropertiesGridProps = {
  properties: Property[];
};

export function PropertiesGrid({ properties }: PropertiesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
