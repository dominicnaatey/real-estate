import { Filter, Grid3X3, List } from "lucide-react";
import type { MediaLibraryTab, MediaLibraryView } from "./types";

const tabs: Array<{ id: MediaLibraryTab; label: string }> = [
  { id: "all", label: "All Assets" },
  { id: "images", label: "Images" },
  { id: "videos", label: "Videos" },
  { id: "documents", label: "Documents" },
];

export function MediaLibraryControls({
  activeTab = "all",
  activeView = "grid",
}: {
  activeTab?: MediaLibraryTab;
  activeView?: MediaLibraryView;
}) {
  return (
    <div className="flex justify-between items-center mb-6 border-b-admin border-admin-border pb-4">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={
              tab.id === activeTab
                ? "text-[11px] font-semibold uppercase tracking-wider text-[#008060] border-b-2 border-[#008060] pb-1"
                : "text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:text-[#181d1a] transition-colors pb-1"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className={
            activeView === "grid"
              ? "p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors bg-white border-admin border-admin-border rounded flex items-center justify-center"
              : "p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors flex items-center justify-center"
          }
          aria-label="Grid view"
        >
          <Grid3X3 className="w-5 h-5" />
        </button>
        <button
          type="button"
          className={
            activeView === "list"
              ? "p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors bg-white border-admin border-admin-border rounded flex items-center justify-center"
              : "p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors flex items-center justify-center"
          }
          aria-label="List view"
        >
          <List className="w-5 h-5" />
        </button>
        <div className="h-5 w-px bg-gray-200 mx-2" />
        <button
          type="button"
          className="flex items-center gap-1 text-sm text-[#3e4944] hover:text-[#181d1a] transition-colors"
        >
          <Filter className="w-4.5 h-4.5" />
          Filter
        </button>
      </div>
    </div>
  );
}

