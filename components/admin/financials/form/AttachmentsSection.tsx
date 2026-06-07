"use client";

import { FileText, Upload, X } from "lucide-react";

export function AttachmentsSection() {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-5 space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">Attachments</p>
      <div className="flex items-center justify-between px-3 py-2 border border-[#ECECEC] rounded-(--admin-field-radius) bg-[#F9FAFB]">
        <div className="flex items-center gap-2 overflow-hidden">
          <FileText className="w-4 h-4 text-[#6B7280] shrink-0" />
          <span className="text-sm truncate text-[#181d1a]">drone_shot_1.jpg</span>
        </div>
        <button type="button" className="text-[#9CA3AF] hover:text-red-500 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
      <button
        type="button"
        className="w-full py-2 border border-dashed border-[#ECECEC] rounded-(--admin-field-radius) text-sm text-[#9CA3AF] hover:border-[#008060]/40 hover:text-[#008060] transition-colors flex items-center justify-center gap-2"
      >
        <Upload className="w-4 h-4" />
        Upload Receipt
      </button>
    </div>
  );
}
