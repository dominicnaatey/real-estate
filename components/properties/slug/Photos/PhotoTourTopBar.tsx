import Link from "next/link";
import { Bookmark, ChevronLeft, Share2 } from "lucide-react";

type PhotoTourTopBarProps = {
  backHref: string;
};

export function PhotoTourTopBar({ backHref }: PhotoTourTopBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
      <Link href={backHref} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft size={24} className="text-gray-900" />
      </Link>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
          <Share2 size={18} />
          <span className="hidden sm:inline">Share</span>
        </button>
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
          <Bookmark size={18} />
          <span className="hidden sm:inline">Save</span>
        </button>
      </div>
    </div>
  );
}
