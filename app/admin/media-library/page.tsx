import Image from "next/image";
import { FileText, Filter, Grid3X3, List, Play, Upload } from "lucide-react";

type MediaType = "image" | "video" | "document";

type BadgeIcon = "photo" | "videocam" | "pdf";

type MediaItem = {
  id: string;
  kind: "hero" | "standard";
  type: MediaType;
  title: string;
  subtitle: string;
  badge?: { icon: BadgeIcon; label: string };
  image?: { src: string; alt: string };
};

function Badge({
  icon,
  label,
}: {
  icon: BadgeIcon;
  label: string;
}) {
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

function MediaCard({ item }: { item: MediaItem }) {
  if (item.type === "document") {
    return (
      <div className="group relative bg-[#F0F5F0] border border-gray-200 rounded overflow-hidden cursor-pointer flex items-center justify-center">
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
    <div className="group relative bg-white border border-gray-200 rounded overflow-hidden cursor-pointer">
      {item.image ? (
        <div className="absolute inset-0">
          <Image
            alt={item.image.alt}
            src={item.image.src}
            fill
            sizes={item.kind === "hero" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
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
        <p className={`text-white font-medium truncate ${item.kind === "hero" ? "text-base mb-1" : "text-sm mb-0.5"}`}>
          {item.title}
        </p>
        <p className="text-white/80 text-[11px]">{item.subtitle}</p>
      </div>
    </div>
  );
}

export default function AdminMediaLibraryPage() {
  const items: MediaItem[] = [
    {
      id: "hero",
      kind: "hero",
      type: "image",
      title: "789_Atherton_Ext_Dusk.raw",
      subtitle: "42.5 MB • 8256 × 5504 • Oct 12, 2023",
      badge: { icon: "photo", label: "Hero Shot" },
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5tj1lTFKCbqqSDSePWzbSbb7ew0yid05dae10FmGBvWyuPW5blHVxkLythmlfUJDS9u2zObXnGXo4RaAeD3SSuxeJn5HRP14DhYl5gFoYMveAebtAcFYACtEX_UP-IpFRxXd5SYfO53rypbaShK5ZVUqd6TFTM7mT67fQjIPeP3eRPo7cu2XZvxxRVylTNhatOXbq7GtK5jL60pQf3noYVLXa1Kfx0czoCKLFonouQ19KkCIXAXvNjXQXV7WzkBGC7FDFcF_9owJc",
        alt: "Luxury Estate Front",
      },
    },
    {
      id: "living-room",
      kind: "standard",
      type: "image",
      title: "Living_Room_01.jpg",
      subtitle: "8.2 MB • 4K Resolution",
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDebPblueifMz1T0nW7T7cvk2ZLBPCBPZC8-wiVWWlbkGsPYiGjHg667j1m2aNcZg-sterLVSW0CXaiLjAwS5t8VN7UZmwFeZ1E0NhZl3pDe_tJrEMeme2_3i7mPqVJgxEPaCuENpzPJ5MyUaYgtHywmZscDKwnjCXZwGjo1dk3g678cXTe219k91ZdSgq6ea3e-S0mp1Xykn2CQryiMfHCy0rNWfyT0HWf2joeCOrnaeUKiq6L721opdL_0heusey1Ir9DIMgbqG5-",
        alt: "Modern Living Room",
      },
    },
    {
      id: "drone",
      kind: "standard",
      type: "video",
      title: "Drone_Tour_Final.mp4",
      subtitle: "450 MB • 4K 60fps",
      badge: { icon: "videocam", label: "02:45" },
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO7oTJAUP_JwwDwLsjy9leztpCZRkWpGAdH830cng7CaQiBN4MciENlbabxXU1Z7jAT7FrMRmOfdydxSsi2Tu8E0auNvhUL8jYJu9CK1Gq9fCS1Rn7uuuhNDZj0V1wlFXAzwh6aTa4PlKXit5yp5qAkiHHufnZNNtI6BTx1DMkAG2FPQFTY-yJaMNzSt2QBkQx-B5COhxHZn9U9Ppr-5vmlmDzL7OayCJ96GfdxogXEQ1Hi2k70QeiLvJOcW3bg06bP2vHazsR3Xgm",
        alt: "Aerial Property View",
      },
    },
    {
      id: "floorplan",
      kind: "standard",
      type: "document",
      title: "Floorplan_Level1.pdf",
      subtitle: "2.1 MB • 3 Pages",
      badge: { icon: "pdf", label: "PDF" },
    },
    {
      id: "kitchen",
      kind: "standard",
      type: "image",
      title: "Kitchen_Detail.jpg",
      subtitle: "7.5 MB • 4K Resolution",
      image: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Q-y9Ttmos3I-M88h47w7PAi2Km9Tc-jGZjovfKmSFnMtiCwK59rJAXP0BgZp9Jv4ljFNvnhdVoYUtX_W4Ut-w3JIu7-ZaTXKdAM4JelesBWF2Ri-8k_ctEEP1oTHWr2lp7h2a9MZ3_LvcrZrBTeDGQrlB5Ub7LtAd1gir6zCBE8tTMj7t8nfcg7pw7buo_v7zrs7um-EswVokB_c6r-L22wCbmyqto8X_nq42yejBMsgqTVZ3zJ5zMG3DaCAOLfmGRtPQHzQvWvE",
        alt: "Luxury Kitchen",
      },
    },
  ];

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto">
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
          <Upload className="w-[18px] h-[18px]" />
          Upload Media
        </button>
      </div>

      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <div className="flex gap-6">
          <button
            type="button"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] border-b-2 border-[#008060] pb-1"
          >
            All Assets
          </button>
          <button
            type="button"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:text-[#181d1a] transition-colors pb-1"
          >
            Images
          </button>
          <button
            type="button"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:text-[#181d1a] transition-colors pb-1"
          >
            Videos
          </button>
          <button
            type="button"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:text-[#181d1a] transition-colors pb-1"
          >
            Documents
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors bg-white border border-gray-200 rounded flex items-center justify-center"
            aria-label="Grid view"
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-1.5 text-[#3e4944] hover:text-[#181d1a] transition-colors flex items-center justify-center"
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
          <div className="h-5 w-px bg-gray-200 mx-2" />
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-[#3e4944] hover:text-[#181d1a] transition-colors"
          >
            <Filter className="w-[18px] h-[18px]" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
        <div className="col-span-1 md:col-span-2 row-span-2">
          <MediaCard item={items[0]} />
        </div>
        {items.slice(1).map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
