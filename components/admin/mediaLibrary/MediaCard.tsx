import Image from "next/image";
import { FileText, Grid3X3, Play } from "lucide-react";
import type { BadgeIcon, MediaItem } from "./types";

function Badge({ icon, label }: { icon: BadgeIcon; label: string }) {
  const Icon = icon === "videocam" ? Play : icon === "pdf" ? FileText : Grid3X3;
  return (
    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded border border-gray-200 flex items-center gap-1">
      <Icon className="w-3.5 h-3.5 text-[#181d1a]" />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#181d1a]">
        {label}
      </span>
    </div>
  );
}

export function MediaCard({ item }: { item: MediaItem }) {
  if (item.type === "document") {
    return (
      <div className="group relative bg-[#F0F5F0] border border-gray-200 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center">
        <div className="p-6 opacity-80 group-hover:opacity-100 transition-opacity">
          <FileText className="w-12 h-12 text-[#3e4944] mb-2 mx-auto" />
          <p className="text-sm font-medium text-[#181d1a] text-center">
            {item.title}
          </p>
        </div>
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded border border-gray-200 flex items-center gap-1">
          <FileText className="w-3.5 h-3.5 text-[#3e4944]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#3e4944]">
            {item.badge?.label ?? "PDF"}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 border-t border-gray-200">
          <p className="text-[#181d1a] text-[11px] font-medium">
            {item.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer">
      {item.image ? (
        <div className="absolute inset-0">
          <Image
            alt={item.image.alt}
            src={item.image.src}
            fill
            sizes={
              item.kind === "hero"
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 25vw, 50vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-[#F0F5F0] to-[#d9dff5]" />
      )}

      {item.type === "video" ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-[#181d1a] shadow-sm group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 ml-0.5" />
          </div>
        </div>
      ) : null}

      {item.badge ? <Badge icon={item.badge.icon} label={item.badge.label} /> : null}

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ${
          item.kind === "hero" ? "p-4" : "p-3"
        }`}
      >
        <p
          className={`text-white font-medium truncate ${
            item.kind === "hero" ? "text-base mb-1" : "text-sm mb-0.5"
          }`}
        >
          {item.title}
        </p>
        <p className="text-white/80 text-[11px]">{item.subtitle}</p>
      </div>
    </div>
  );
}
