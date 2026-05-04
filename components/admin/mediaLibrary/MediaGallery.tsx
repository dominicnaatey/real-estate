import type { MediaItem } from "./types";
import { MediaCard } from "./MediaCard";

export function MediaGallery({ items }: { items: MediaItem[] }) {
  const heroItem = items.find((item) => item.kind === "hero") ?? items[0];
  const restItems = heroItem ? items.filter((item) => item.id !== heroItem.id) : items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
      {heroItem ? (
        <div className="col-span-1 md:col-span-2 row-span-2">
          <MediaCard item={heroItem} />
        </div>
      ) : null}
      {restItems.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
}

