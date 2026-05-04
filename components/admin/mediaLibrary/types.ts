export type MediaType = "image" | "video" | "document";

export type BadgeIcon = "photo" | "videocam" | "pdf";

export type MediaLibraryTab = "all" | "images" | "videos" | "documents";

export type MediaLibraryView = "grid" | "list";

export type MediaItem = {
  id: string;
  kind: "hero" | "standard";
  type: MediaType;
  title: string;
  subtitle: string;
  badge?: { icon: BadgeIcon; label: string };
  image?: { src: string; alt: string };
};
