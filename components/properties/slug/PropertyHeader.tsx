import Link from "next/link";
import { Bookmark, ChevronLeft, MapPin, Share2 } from "lucide-react";
import type { Property } from "../types";

type PropertyHeaderProps = {
  property: Pick<Property, "title" | "location" | "listingType">;
};

export function PropertyHeader({
  property,
}: PropertyHeaderProps) {
  const { title, location, listingType } = property;

  return (
    <div className="mb-8">
      <div className="mb-6">
        <Link
          href="/properties"
          className="flex items-center text-sm font-medium text-[#008060] hover:underline"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Search
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
            {listingType === "For Sale" ? "Sale" : "Rent"}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={16} className="mr-1" />
            {location}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
              <Share2 size={18} />
              Share
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
              <Bookmark size={18} />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
