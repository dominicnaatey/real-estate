import { PropertiesFilters } from "../../components/properties/PropertiesFilters";
import { PropertiesGrid } from "../../components/properties/PropertiesGrid";
import { PropertiesPagination } from "../../components/properties/PropertiesPagination";
import { PropertiesResultsHeader } from "../../components/properties/PropertiesResultsHeader";
import type { Property } from "../../components/properties/types";

const properties: Property[] = [
  {
    id: 1,
    title: "The Obsidian Crest",
    location: "Bel Air, Los Angeles",
    price: 12450000,
    beds: 6,
    baths: 8,
    sqft: "12,500",
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/house-1836070_1280.jpg",
    tags: ["Featured", "For Sale"],
  },
  {
    id: 2,
    title: "Aura Loft Residence",
    location: "West Hollywood, LA",
    price: 4200000,
    beds: 3,
    baths: 4,
    sqft: "3,800",
    image:
      "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
    tags: ["New Listing"],
  },
  {
    id: 3,
    title: "The Pacific Pavilion",
    location: "Malibu, CA",
    price: 8750000,
    beds: 5,
    baths: 6,
    sqft: "6,200",
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/22/01/house-2593570_1280.jpg",
    tags: ["Rare Find"],
  },
  {
    id: 4,
    title: "Sunset Terrace",
    location: "Hollywood Hills, LA",
    price: 3190000,
    beds: 4,
    baths: 3,
    sqft: "3,120",
    image:
      "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
    tags: ["For Sale"],
  },
  {
    id: 5,
    title: "Gardenview Condo",
    location: "Santa Monica, CA",
    price: 1890000,
    beds: 2,
    baths: 2,
    sqft: "1,540",
    image:
      "https://cdn.pixabay.com/photo/2018/03/20/17/35/furniture-3243991_1280.jpg",
    tags: ["For Sale"],
  },
  {
    id: 6,
    title: "Cedarline Retreat",
    location: "Beverly Grove, LA",
    price: 2785000,
    beds: 3,
    baths: 3,
    sqft: "2,420",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
    tags: ["New Listing"],
  },
];

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
