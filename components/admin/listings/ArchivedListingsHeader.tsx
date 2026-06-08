import { ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";

export function ArchivedListingsHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Link 
            href="/admin/listings" 
            className="p-1 hover:bg-[#F0F5F0] rounded-md transition-colors text-[#3e4944]"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-2xl font-serif font-semibold text-[#181d1a]">
            Archived Listings
          </h2>
        </div>
        <p className="text-sm text-[#3e4944] ml-8">
          Review and manage properties that have been archived.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-white border-admin border-admin-border text-[#181d1a] text-sm rounded flex items-center gap-2 hover:bg-[#F0F5F0] transition-colors shadow-sm">
          <Filter className="w-4.5 h-4.5" />
          Filter
        </button>
      </div>
    </div>
  );
}
