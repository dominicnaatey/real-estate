"use client";

import { ChevronDown } from "lucide-react";
import type { ListingFormState } from "./types";

type StatusSectionProps = {
  state: Pick<ListingFormState, "status" | "setStatus">;
};

export function StatusSection({ state }: StatusSectionProps) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-(--admin-heading-color) text-(--admin-heading-size) font-(--admin-heading-weight)">
          Status
        </h3>
      </div>
      
      <div className="pt-2">
        <div className="relative">
          <select
            value={state.status}
            onChange={(e) => state.setStatus(e.target.value as ListingFormState["status"])}
            className="appearance-none w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) outline-none text-[15px] text-(--admin-field-text-color) focus:ring-2 focus:ring-[#008060]/20 cursor-pointer"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Sold">Sold</option>
            <option value="Rented">Rented</option>
            <option value="Suspended">Suspended</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
