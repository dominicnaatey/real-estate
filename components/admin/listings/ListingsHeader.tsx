import { Filter, Plus } from "lucide-react";
import Link from "next/link";

export function ListingsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-serif font-semibold text-[#181d1a] mb-1">
          Listings Management
        </h2>
        <p className="text-sm text-[#3e4944]">
          Manage, edit, and track performance of your active and pending properties.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-white border border-gray-200 text-[#181d1a] text-sm rounded flex items-center gap-2 hover:bg-[#F0F5F0] transition-colors shadow-sm">
          <Filter className="w-[18px] h-[18px]" />
          Filter
        </button>
        <Link
          href="/admin/listings/new"
          className="px-4 py-2 bg-[#008060] text-white text-sm rounded flex items-center gap-2 hover:bg-[#00654b] transition-colors shadow-sm"
        >
          <Plus className="w-[18px] h-[18px]" />
          New Listing
        </Link>
      </div>
    </div>
  );
}
