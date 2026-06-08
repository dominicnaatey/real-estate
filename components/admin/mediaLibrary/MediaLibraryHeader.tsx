import { Upload } from "lucide-react";

export function MediaLibraryHeader() {
  return (
    <div className="flex justify-between items-end mb-8 gap-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-2">
          Media Library
        </h2>
        <p className="text-sm text-[#3e4944]">
          Manage and organize high-resolution property assets.
        </p>
      </div>
      <button
        type="button"
        className="bg-[#008060] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#00654b] transition-colors flex items-center gap-2"
      >
        <Upload className="w-4.5 h-4.5" />
        Upload Media
      </button>
    </div>
  );
}

