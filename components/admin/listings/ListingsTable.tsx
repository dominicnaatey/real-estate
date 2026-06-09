"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Archive, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export function ListingsTable() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [showMoreActions, setShowMoreActions] = useState(false);
  const moreActionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreActionsRef.current && !moreActionsRef.current.contains(event.target as Node)) {
        setShowMoreActions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    {
      id: 1,
      title: "1042 Ocean Drive",
      location: "Miami Beach, FL 33139",
      price: "$12,500,000",
      meta: "6 Bed • 8 Bath • 10,200 sqft",
      status: "Active" as const,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNFPQP-6bb5nwGe2KdJkfxy8ieaBukECD2VK_s6TQUbA8M01oqZb-KoCLVQWkN51FHJVc5EXZVfVFLjwU0MpxKIreFNPPVDMyGp3faJM_LKQV3pWSvW7AzX76EKAZDoImroZFsUOgLQUthejngFg-JIB0Yo49QaI0mZ2PvU-ZnKzIn90wCAGLuytUajRlbQhPI-NHDr-gSty0ZT0vhQ_4SxMBaanMpwYM-NQtDHRsCMVF5yCSGStPfn83bdXsDWBCEF4hyHQf-gvoi",
    },
    {
      id: 2,
      title: "Penthouse 4B, The Apex",
      location: "New York, NY 10011",
      price: "$8,950,000",
      meta: "3 Bed • 3.5 Bath • 4,100 sqft",
      status: "Pending" as const,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-6VYUb43RWp0mdy2i4zrco2F1MwdBaQTlLCyg1uOTqnoVGNg-nl_30XB2m3T4uAmWNPA7GII0uiofuIo8rjwZWVQINRMGodbgtFFX9zaGW5idnst_2uVjbYqZsv0s9oM47CM280fFpbC-y5ReExuWJtzSxgl1JTCMIM5zwIN6SGGnoU_i0xHdnDyX0N2AIl6um_G88wlXtogQjCf7WBtQQBoDh-bbTDyn24LVr0sm00L6fwRU9tfXduyu1sG2Um5vD8-ttcdMFMWQ",
    },
    {
      id: 3,
      title: "7720 Willow Creek Ln",
      location: "Beverly Hills, CA 90210",
      price: "$18,200,000",
      meta: "8 Bed • 10 Bath • 14,500 sqft",
      status: "Active" as const,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfJLU7gdw_RlaYanXnsFkX4KG86_x2u5DytfZdD1f1LpuchCxBJaqRvTKi2ZUTtsBXd0k5-oajYVLEusE7EGQ1zsyuO_Z8sOQK5xKIb-m17D_Hk9bBTB89DuoXvMAeVswwp0DkUVN_jZ8IaQ9WwVgHV-7gKYD_Evi78Z3CsX8LV_kcCC3zIo01c8PPvc47T6cbcTrrVlz5sNuX2W0b12PTWtWDDfV44zIw3nVx5t2Pa7BVvM2IDShLuBsxvRZ552Iygcpwf4xeH1Tr",
    },
  ];

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
      <div className="min-h-[64px] flex items-center border-b-admin border-admin-border">
        {selected.size > 0 ? (
          <div className="flex items-center gap-2 p-4 bg-[#F9FAFB] w-full h-full">
            <div onClick={(e) => e.stopPropagation()} className="flex items-center">
              <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Deselect all" />
            </div>
            <span className="text-sm font-semibold text-[#181d1a] ml-1">{selected.size} selected</span>
            
            <div className="flex items-center gap-2 ml-4">
              <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                Set as active
              </button>
              <button type="button" className="px-3 py-1 text-xs font-medium border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                Set as draft
              </button>
              
              <div className="relative" ref={moreActionsRef}>
                <button 
                  type="button" 
                  onClick={() => setShowMoreActions(!showMoreActions)}
                  className={`p-1 border border-[#ECECEC] rounded bg-white text-[#3e4944] hover:bg-[#F9FAFB] transition-colors ${showMoreActions ? "bg-[#F9FAFB]" : ""}`}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {showMoreActions && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-[#ECECEC] rounded-lg shadow-lg z-50 py-1 overflow-hidden">
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                      <Archive className="w-4 h-4" />
                      Move to archive
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#ba1a1a] hover:bg-red-50 transition-colors border-b border-[#ECECEC]">
                      <Trash2 className="w-4 h-4" />
                      Delete property
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                      Sold
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-[#3e4944] hover:bg-[#F9FAFB] transition-colors">
                      Rented
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-[auto_auto_1fr_1fr_auto] gap-4 p-4 bg-white items-center w-full h-full">
            <div onClick={(e) => e.stopPropagation()}>
              <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
            </div>
            <div className="w-16" />
            <div className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
              Property Details
            </div>
            <div className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider">
              Pricing
            </div>
            <div className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider text-center w-24">
              Status
            </div>
          </div>
        )}
      </div>

      <div className="divide-y divide-gray-200">
        {items.map((item) => {
          const isSelected = selected.has(item.id);
          const statusClass =
            item.status === "Active"
              ? "bg-[#008060]/10 text-[#008060] border border-[#008060]/20"
              : "bg-[rgba(245,158,11,0.1)] text-[#B45309] border border-[#FFB800]/30";

          return (
            <div
              key={item.title}
              onClick={() => router.push(`/admin/listings/${item.id}/edit`)}
              className={`grid grid-cols-[auto_auto_1fr_1fr_auto] gap-4 p-4 items-center hover:bg-[#F9FAFB] transition-colors cursor-pointer group ${
                isSelected ? "bg-[#F0F5F0]" : ""
              }`}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={isSelected} onCheckedChange={() => toggleOne(item.id)} aria-label={`Select ${item.title}`} />
              </div>
              <div className="w-16 h-12 rounded overflow-hidden bg-[#d6dbd7] flex-shrink-0 relative">
                <Image
                  alt={item.title}
                  src={item.imageSrc}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-[#181d1a] truncate">{item.title}</p>
                <p className="text-sm text-[#3e4944] truncate">{item.location}</p>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#181d1a]">{item.price}</p>
                <p className="text-sm text-[#3e4944] truncate">{item.meta}</p>
              </div>
              <div className="w-24 flex justify-center">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${statusClass}`}>
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t-admin border-admin-border flex items-center justify-between bg-white">
        <span className="text-sm text-[#3e4944]">
          Showing 1 to {items.length} of 142 entries
        </span>
        <div className="flex gap-1">
          <button
            className="px-3 py-1 border-admin border-admin-border rounded text-[#3e4944] hover:bg-[#F9FAFB] text-sm disabled:opacity-50"
            disabled
            type="button"
          >
            Prev
          </button>
          <button
            className="px-3 py-1 border border-[#008060] bg-[#008060] text-white rounded text-sm"
            type="button"
          >
            1
          </button>
          <button
            className="px-3 py-1 border-admin border-admin-border rounded text-[#3e4944] hover:bg-[#F9FAFB] text-sm"
            type="button"
          >
            2
          </button>
          <button
            className="px-3 py-1 border-admin border-admin-border rounded text-[#3e4944] hover:bg-[#F9FAFB] text-sm"
            type="button"
          >
            3
          </button>
          <button
            className="px-3 py-1 border-admin border-admin-border rounded text-[#3e4944] hover:bg-[#F9FAFB] text-sm"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
