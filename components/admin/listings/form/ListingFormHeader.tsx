"use client";

import Link from "next/link";
import { ExternalLink, Save } from "lucide-react";
import type { ListingFormMode } from "./types";

type ListingFormHeaderProps = {
  mode: ListingFormMode;
  listingId?: number;
};

export function ListingFormHeader({ mode, listingId }: ListingFormHeaderProps) {
  const heading = mode === "create" ? "Add New Property" : "Edit Property";
  const subheading =
    mode === "create"
      ? "Create a new listing in the LuxManagement system."
      : "Update listing details and publish changes.";

  return (
    <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1 leading-tight">
          {heading}
        </h2>
        <p className="text-sm text-[#3e4944]">{subheading}</p>
      </div>
      <div className="flex gap-3">
        {mode === "edit" && listingId ? (
          <Link
            href={`/properties/${listingId}`}
            className="px-4 py-2 border-admin border-admin-border rounded text-[#181d1a] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors flex items-center gap-2"
          >
            <ExternalLink className="w-[18px] h-[18px]" />
            View
          </Link>
        ) : null}
        <Link
          href="/admin/listings"
          className="px-4 py-2 border-admin border-admin-border rounded text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Save className="w-[18px] h-[18px]" />
          Save Property
        </button>
      </div>
    </div>
  );
}
