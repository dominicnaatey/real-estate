"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCcw, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { properties } from "@/lib/data/Properties";

export function ArchivedListingsTable() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  // Filter archived properties and format them for the table
  const items = properties
    .filter((p) => p.status === "Archived")
    .map((p) => ({
      id: p.id,
      title: p.title,
      location: p.location,
      price: `$${p.price.toLocaleString()}`,
      meta: `${p.beds} Bed • ${p.baths} Bath • ${p.sqft} sqft`,
      status: p.status as "Archived",
      imageSrc: p.image,
    }));

  const allSelected = selected.size === items.length && items.length > 0;

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map((i) => i.id)));
    }
  }

  function toggleOne(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="bg-white border-admin border-admin-border rounded-2xl overflow-hidden">
      {selected.size > 0 ? (
        <div className="flex items-center gap-3 p-4 border-b-admin border-admin-border bg-[#F9FAFB]">
          <div onClick={(e) => e.stopPropagation()}>
            <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Deselect all" />
          </div>
          <span className="text-sm font-semibold text-[#181d1a]">{selected.size} selected</span>
          <div className="h-4 w-px bg-[#D1D5DB]" />
          <button type="button" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors flex items-center gap-1.5">
            <RotateCcw className="w-3 h-3" />
            Restore
          </button>
          <button type="button" className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-[#ECECEC] rounded bg-white text-[#ba1a1a] hover:bg-red-50 transition-colors flex items-center gap-1.5">
            <Trash2 className="w-3 h-3" />
            Delete Permanently
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-[auto_auto_1fr_1fr_auto_auto] gap-4 p-4 border-b-admin border-admin-border bg-white items-center">
          <div onClick={(e) => e.stopPropagation()} className="w-10">
            <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
          </div>
          <div className="col-span-2 text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
            Property Details
          </div>
          <div className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider text-left">
            Pricing
          </div>
          <div className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider text-center w-24">
            Status
          </div>
          <div className="w-10" />
        </div>
      )}

      <div className="divide-y divide-[#ECECEC]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-[auto_auto_1fr_1fr_auto_auto] gap-4 p-4 items-center transition-colors hover:bg-[#F9FAFB] ${
              selected.has(item.id) ? "bg-[#F0F5F0]" : ""
            }`}
          >
            <div onClick={(e) => e.stopPropagation()} className="w-10">
              <Checkbox
                checked={selected.has(item.id)}
                onCheckedChange={() => toggleOne(item.id)}
                aria-label={`Select ${item.title}`}
              />
            </div>
            <div className="w-16 h-12 relative rounded-md overflow-hidden border border-[#ECECEC]">
              <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
            </div>
            <div>
              <div className="font-semibold text-[#181d1a]">{item.title}</div>
              <div className="text-xs text-[#3e4944]">{item.location}</div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-[#181d1a]">{item.price}</div>
              <div className="text-xs text-[#3e4944]">{item.meta}</div>
            </div>
            <div className="w-24 flex justify-center">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200">
                {item.status}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="p-2 hover:bg-white rounded-md transition-colors text-[#3e4944] hover:text-[#008060]"
                title="Restore"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-2 hover:bg-white rounded-md transition-colors text-[#3e4944] hover:text-[#ba1a1a]"
                title="Delete Permanently"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
