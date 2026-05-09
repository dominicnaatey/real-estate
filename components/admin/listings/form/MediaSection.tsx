"use client";

import { Upload } from "lucide-react";

export function MediaSection() {
  return (
    <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
      <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b border-admin-border pb-4">
        Media
      </h3>
      <div className="border-2 border-dashed border-admin-border rounded-2xl p-8 flex flex-col items-center justify-center bg-[#F9FAFB] text-center">
        <div className="w-16 h-16 bg-[#d6dbd7] rounded-full flex items-center justify-center mb-4">
          <Upload className="w-8 h-8 text-[#3e4944]" />
        </div>
        <p className="text-base font-semibold text-[#181d1a] mb-1">
          Drag and drop images and videos here
        </p>
        <p className="text-sm text-[#3e4944] mb-4">
          High-resolution photos recommended. Max 50MB per file.
        </p>
        <button
          type="button"
          className="px-4 py-2 bg-white border border-admin-border text-[#181d1a] rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#F9FAFB] transition-colors"
        >
          Browse Files
        </button>
      </div>
    </div>
  );
}
