"use client";

import Link from "next/link";
import { Heart, ChevronLeft, Share2 } from "lucide-react";
import { useState } from "react";

type PhotoTourTopBarProps = {
  backHref: string;
};

export function PhotoTourTopBar({ backHref }: PhotoTourTopBarProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between">
      <Link href={backHref} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft size={24} className="text-gray-900" />
      </Link>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer">
          <Share2 size={18} />
          <span className="hidden sm:inline">Share</span>
        </button>
        <button
          type="button"
          aria-pressed={saved}
          onClick={() => setSaved((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer"
        >
          <Heart size={18} className={saved ? "text-red-600 fill-red-600" : ""} />
          <span className="hidden sm:inline">{saved ? "Saved" : "Save"}</span>
        </button>
      </div>
    </div>
  );
}
