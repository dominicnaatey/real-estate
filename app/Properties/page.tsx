import Image from "next/image";

import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Square,
} from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tags: string[];
};

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

function formatPrice(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export default function PropertiesPage() {
  return (
    <main className="pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex gap-10">
      <aside className="hidden lg:flex flex-col p-6 gap-y-6 h-[calc(100vh-8rem)] w-80 rounded-3xl sticky top-24 bg-offwhite border border-black/5 overflow-y-auto">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Filters
            </span>
          </div>
          <h2 className="font-bold text-lg tracking-tight text-navy">
            Advanced filters
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Refine your property search
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
            Category
          </span>
          <nav className="space-y-2">
            <button className="w-full bg-white text-navy rounded-full shadow-sm px-4 py-3 flex items-center justify-between border border-black/5">
              <span className="text-sm font-semibold">All Properties</span>
              <span className="text-xs font-bold text-gray-400">124</span>
            </button>
            <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
              <span className="text-sm font-medium">Residential</span>
              <span className="text-xs font-bold text-gray-400">86</span>
            </button>
            <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
              <span className="text-sm font-medium">Commercial</span>
              <span className="text-xs font-bold text-gray-400">21</span>
            </button>
            <button className="w-full text-gray-600 px-4 py-3 rounded-full hover:bg-white/70 transition-colors flex items-center justify-between">
              <span className="text-sm font-medium">Land</span>
              <span className="text-xs font-bold text-gray-400">17</span>
            </button>
          </nav>
        </div>

        <div className="mt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Price range
          </span>
          <div className="px-2">
            <div className="h-1 w-full bg-black/10 rounded-full relative">
              <div className="absolute h-full w-2/3 bg-accent left-4 rounded-full"></div>
              <div className="absolute h-4 w-4 bg-white border-2 border-accent rounded-full -top-1.5 left-4 shadow-sm"></div>
              <div className="absolute h-4 w-4 bg-white border-2 border-accent rounded-full -top-1.5 right-1/4 shadow-sm"></div>
            </div>
            <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-500">
              <span>$500k</span>
              <span>$5.5M+</span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
            Bedrooms
          </span>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
              1+
            </button>
            <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
              2+
            </button>
            <button className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center text-sm font-bold">
              3+
            </button>
            <button className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-sm font-bold text-navy">
              4+
            </button>
          </div>
        </div>

        <div className="mt-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
            Amenities
          </span>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
              <input
                defaultChecked
                className="rounded text-accent focus:ring-accent border-black/20"
                type="checkbox"
              />
              <span className="text-xs font-medium text-navy">Pool</span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
              <input
                className="rounded text-accent focus:ring-accent border-black/20"
                type="checkbox"
              />
              <span className="text-xs font-medium text-navy">Garage</span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
              <input
                defaultChecked
                className="rounded text-accent focus:ring-accent border-black/20"
                type="checkbox"
              />
              <span className="text-xs font-medium text-navy">Gym</span>
            </label>
            <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors">
              <input
                className="rounded text-accent focus:ring-accent border-black/20"
                type="checkbox"
              />
              <span className="text-xs font-medium text-navy">Garden</span>
            </label>
          </div>
        </div>

        <button className="mt-auto bg-accent hover:bg-accent-hover text-white py-4 rounded-full font-bold shadow-lg shadow-accent/15 active:scale-[0.98] transition-all">
          Apply filters
        </button>
      </aside>

      <section className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-navy">
              Curated collections
            </h1>
            <p className="text-gray-500 font-medium">
              Showing 124 premium properties in Los Angeles, CA
            </p>
          </div>

          <div className="bg-offwhite px-4 py-2 rounded-full flex items-center gap-2 border border-black/5 w-fit">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Sort by:
            </span>
            <select className="bg-transparent border-none text-xs font-bold text-navy focus:ring-0 cursor-pointer">
              <option>Price: High to Low</option>
              <option>Newest Listed</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group bg-white rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  alt={property.title}
                  src={property.image}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {property.tags.length > 0 && (
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {property.tags.map((tag) => (
                      <span
                        key={tag}
                        className={
                          tag === "Featured"
                            ? "bg-accent/90 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl"
                            : "bg-white/90 text-navy px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-accent transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-extrabold text-navy whitespace-nowrap">
                    ${formatPrice(property.price)}
                  </p>
                </div>

                <div className="flex items-center gap-6 py-4 border-t border-gray-200/40 text-gray-600">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold">
                      {property.baths} Baths
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold">{property.sqft} sqft</span>
                  </div>
                </div>

                <button className="w-full mt-2 bg-gray-50 text-navy py-3 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-navy">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-accent text-white font-bold">
              1
            </button>
            <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
              2
            </button>
            <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
              3
            </button>
            <span className="w-12 h-12 flex items-center justify-center text-navy">
              ...
            </span>
            <button className="w-12 h-12 rounded-full hover:bg-gray-50 font-bold text-navy">
              12
            </button>
          </div>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-navy">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
