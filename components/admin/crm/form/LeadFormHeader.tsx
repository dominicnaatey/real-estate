"use client";

import Link from "next/link";
import { Save } from "lucide-react";

export function LeadFormHeader() {
  return (
    <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
      <div>
        <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-1 font-medium">
          CRM / Add New Lead
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] leading-tight">
          Prospect Registration
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-0.5">
          Initialize a new relationship in your luxury pipeline.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <Link
          href="/admin/crm"
          className="px-4 py-2 border border-[#ECECEC] rounded text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Save className="w-[18px] h-[18px]" />
          Save Lead
        </button>
      </div>
    </div>
  );
}
