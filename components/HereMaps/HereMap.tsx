"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

type HereMapComponentProps = {
  apiKey?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  highlightMarkers?: Array<{
    id: string;
    position: { lat: number; lng: number };
    title?: string;
  }>;
  selectedMarkerId?: string;
};

declare global {
  type HereCenter = { lat: number; lng: number };

  type HereNamespace = {
    service: {
      Platform: new (opts: { apikey: string }) => {
        createDefaultLayers: () => unknown;
      };
    };
    Map: new (
      el: HTMLElement,
      layer: unknown,
      opts: { center: HereCenter; zoom: number; pixelRatio: number },
    ) => {
      addObject: (obj: unknown) => void;
      setCenter: (center: HereCenter, animate?: boolean) => void;
      setZoom: (zoom: number, animate?: boolean) => void;
      getViewPort: () => { resize: () => void };
      dispose: () => void;
    };
    mapevents: {
      Behavior: (new (events: unknown) => { disable: (x: unknown) => void }) & {
        WHEELZOOM: unknown;
      };
      MapEvents: new (map: unknown) => unknown;
    };
    ui: {
      UI: {
        createDefault: (map: unknown, layers: unknown) => unknown;
      };
    };
    map: {
      Group: new () => { addObject: (obj: unknown) => void; removeAll: () => void };
      Marker: new (pos: HereCenter, opts?: { icon?: unknown }) => { setData: (data: string) => void };
      Icon: new (
        src: string,
        opts?: { size?: { w: number; h: number }; anchor?: { x: number; y: number } },
      ) => unknown;
    };
  };

  interface Window {
    H?: HereNamespace;
  }
}

const HERE_SCRIPT_URLS = [
  "https://js.api.here.com/v3/3.1/mapsjs-core.js",
  "https://js.api.here.com/v3/3.1/mapsjs-service.js",
  "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js",
  "https://js.api.here.com/v3/3.1/mapsjs-ui.js",
] as const;

let hereLoaderPromise: Promise<void> | null = null;

function loadHereScripts(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.H) return Promise.resolve();
  if (hereLoaderPromise) return hereLoaderPromise;

  hereLoaderPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-here="mapsjs-core"]');
    if (existing && window.H) {
      resolve();
      return;
    }

    const loadOne = (src: string, dataHere: string) =>
      new Promise<void>((res, rej) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.defer = true;
        s.dataset.here = dataHere;
        s.onload = () => res();
        s.onerror = () => rej(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

    (async () => {
      try {
        await loadOne(HERE_SCRIPT_URLS[0], "mapsjs-core");
        await loadOne(HERE_SCRIPT_URLS[1], "mapsjs-service");
        await loadOne(HERE_SCRIPT_URLS[2], "mapsjs-mapevents");
        await loadOne(HERE_SCRIPT_URLS[3], "mapsjs-ui");
        resolve();
      } catch (e) {
        reject(e);
      }
    })();
  });

  return hereLoaderPromise;
}

const HereMap = ({
  apiKey,
  center,
  zoom = 12,
  className,
  highlightMarkers,
  selectedMarkerId,
}: HereMapComponentProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<InstanceType<HereNamespace["Map"]> | null>(null);
  const objectsGroupRef = useRef<InstanceType<HereNamespace["map"]["Group"]> | null>(null);

  const memoCenter = useMemo(() => {
    return {
      lat: center?.lat ?? 40.7128,
      lng: center?.lng ?? -74.006,
    };
  }, [center?.lat, center?.lng]);

  useEffect(() => {
    let disposed = false;

    (async () => {
      await loadHereScripts();
      if (disposed) return;
      if (!mapRef.current) return;
      if (!window.H) return;
      if (!apiKey) return;

      const H = window.H;
      const platform = new H.service.Platform({ apikey: apiKey });
      const layers = platform.createDefaultLayers();

      const layer = (layers as { vector?: { normal?: { map?: unknown } } })?.vector?.normal?.map;
      if (!layer) return;

      const map = new H.Map(mapRef.current, layer, {
        center: memoCenter,
        zoom,
        pixelRatio: window.devicePixelRatio || 1,
      });

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      behavior.disable(H.mapevents.Behavior.WHEELZOOM);

      H.ui.UI.createDefault(map, layers);

      const group = new H.map.Group();
      map.addObject(group);
      mapInstanceRef.current = map;
      objectsGroupRef.current = group;

      const onResize = () => map.getViewPort().resize();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        map.dispose();
      };
    })();

    return () => {
      disposed = true;
      const map = mapInstanceRef.current;
      if (map) {
        map.dispose();
        mapInstanceRef.current = null;
        objectsGroupRef.current = null;
      }
    };
  }, [apiKey, memoCenter, zoom]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    map.setCenter(memoCenter, true);
    map.setZoom(zoom, true);
  }, [memoCenter, zoom]);

  useEffect(() => {
    const group = objectsGroupRef.current;
    if (!group || !window.H) return;
    const H = window.H;
    group.removeAll();

    const markerHeight = 50;
    const markerWidth = Math.round(markerHeight * (90 / 120));

    const mainMarker = new H.map.Marker(memoCenter, {
      icon: new H.map.Icon("/MapMarker.svg", {
        size: { w: markerWidth, h: markerHeight },
        anchor: { x: Math.round(markerWidth / 2), y: markerHeight },
      }),
    });
    group.addObject(mainMarker);

    const circleSvg = (fill: string) => `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <circle cx="9" cy="9" r="7" fill="${fill}" stroke="#ffffff" stroke-width="2"/>
      </svg>
    `.trim();

    const selectedSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24">
        <path d="M12 22s7-6.7 7-13a7 7 0 10-14 0c0 6.3 7 13 7 13z" fill="#FF5A3D" stroke="#000000" stroke-width="1.2"/>
        <circle cx="12" cy="9" r="2.6" fill="#FFFFFF" stroke="#000000" stroke-width="1.2"/>
      </svg>
    `.trim();

    (highlightMarkers ?? []).forEach((m) => {
      const isSelected = selectedMarkerId && m.id === selectedMarkerId;
      const iconSvg = isSelected ? selectedSvg : circleSvg("#008060");
      const icon = new H.map.Icon(iconSvg);
      const marker = new H.map.Marker(m.position, { icon });
      if (m.title) marker.setData(m.title);
      group.addObject(marker);
    });
  }, [highlightMarkers, memoCenter, selectedMarkerId]);

  return <div ref={mapRef} className={className} />;
};

export default React.memo(HereMap);

type NearbyPlacesBoxesProps = {
  center: { lat: number; lng: number };
  activeCategoryId?: string;
  selectedPlaceId?: string;
  radius?: number;
  className?: string;
  onAvailableCategoriesChange?: (categories: Array<{ id: string; label: string }>) => void;
  onResultsChange?: (
    results: Array<{
      id: string;
      label: string;
      places: Array<{
        placeId?: string;
        name: string;
        photoUrl?: string;
        position?: { lat: number; lng: number };
      }>;
    }>,
  ) => void;
  onPlaceSelect?: (place: {
    placeId?: string;
    name: string;
    position?: { lat: number; lng: number };
    categoryId?: string;
  }) => void;
};

type PlacePreview = {
  placeId?: string;
  name: string;
  photoUrl?: string;
  position?: { lat: number; lng: number };
};

type CategoryResult = { id: string; label: string; places: PlacePreview[] };

export function NearbyPlacesBoxes({
  center,
  activeCategoryId,
  selectedPlaceId,
  radius = 2500,
  className,
  onAvailableCategoriesChange,
  onResultsChange,
  onPlaceSelect,
}: NearbyPlacesBoxesProps) {
  const categories = useMemo(
    () =>
      [
        { id: "supermarket", label: "Supermarket", q: "supermarket" },
        { id: "pharmacy", label: "Pharmacy", q: "pharmacy" },
        { id: "gas", label: "Gas station", q: "gas station" },
        { id: "bank", label: "Bank / ATM", q: "bank atm" },
        { id: "restaurant", label: "Restaurants", q: "restaurant" },
        { id: "cafe", label: "Café", q: "cafe" },
        { id: "bar", label: "Bar / Pub", q: "bar" },
        { id: "gym", label: "Gym", q: "gym" },
        { id: "clinic", label: "Medical clinic", q: "clinic hospital doctor" },
        { id: "school", label: "Elementary school", q: "school" },
        { id: "daycare", label: "Daycare", q: "daycare" },
        { id: "hair", label: "Hair salon", q: "hair salon" },
        { id: "laundry", label: "Laundry", q: "laundry" },
        { id: "pet", label: "Pet supply", q: "pet store" },
      ] as const,
    [],
  );

  const [results, setResults] = useState<CategoryResult[]>(() =>
    categories.map((c) => ({ id: c.id, label: c.label, places: [] })),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setIsLoading(true);
      setHasError(false);

      let sawOkResponse = false;
      let sawErrorResponse = false;

      const next = await Promise.all(
        categories.map(async (cat) => {
          try {
            const url = new URL("/api/here/nearby", window.location.origin);
            url.searchParams.set("lat", String(center.lat));
            url.searchParams.set("lng", String(center.lng));
            url.searchParams.set("q", cat.q);
            url.searchParams.set("radius", String(radius));
            url.searchParams.set("limit", "10");
            const res = await fetch(url.toString(), { cache: "no-store" });
            if (!res.ok) {
              sawErrorResponse = true;
              return { id: cat.id, label: cat.label, places: [] };
            }
            sawOkResponse = true;
            const data = (await res.json()) as {
              places?: Array<{ placeId?: string; name?: string; position?: { lat: number; lng: number } }>;
            };
            const places: PlacePreview[] = Array.isArray(data?.places)
              ? data.places
                  .map((p) => ({
                    placeId: p.placeId,
                    name: p.name ?? "",
                    position: p.position,
                    photoUrl:
                      p.position && Number.isFinite(p.position.lat) && Number.isFinite(p.position.lng)
                        ? `/api/here/static-map?lat=${encodeURIComponent(String(p.position.lat))}&lng=${encodeURIComponent(String(p.position.lng))}&w=720&h=480&z=15`
                        : undefined,
                  }))
                  .filter((p) => Boolean(p.name))
              : [];
            return { id: cat.id, label: cat.label, places };
          } catch {
            sawErrorResponse = true;
            return { id: cat.id, label: cat.label, places: [] };
          }
        }),
      );

      if (cancelled) return;
      setResults(next);
      setIsLoading(false);
      setHasError(!sawOkResponse && sawErrorResponse);
      const available = next
        .filter((c) => c.places.length > 0)
        .map((c) => ({ id: c.id, label: c.label }));
      onAvailableCategoriesChange?.(available);
      onResultsChange?.(next);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [categories, center.lat, center.lng, onAvailableCategoriesChange, onResultsChange, radius]);

  const visibleCards = useMemo(() => {
    if (activeCategoryId) {
      const found = results.find((r) => r.id === activeCategoryId);
      if (!found) return [];
      return found.places.map((p) => ({
        key: `${activeCategoryId}-${p.placeId ?? `${p.name}-${p.position?.lat ?? "x"}-${p.position?.lng ?? "y"}`}`,
        label: found.label,
        name: p.name,
        photoUrl: p.photoUrl,
        placeId: p.placeId,
        position: p.position,
        categoryId: activeCategoryId,
      }));
    }

    const available = results.filter((r) => r.places.length > 0);
    return available.map((r) => {
      const p = r.places[0];
      return {
        key: r.id,
        label: r.label,
        name: p?.name ?? "",
        photoUrl: p?.photoUrl,
        placeId: p?.placeId,
        position: p?.position,
        categoryId: r.id,
      };
    });
  }, [activeCategoryId, results]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const compute = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollLeft < maxScrollLeft - 2);
    };

    compute();
    el.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      el.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [visibleCards.length]);

  const scrollByCards = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = Math.max(260, Math.round(el.clientWidth * 0.75));
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div className="relative">
        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="hidden md:flex absolute left-0 top-[38%] -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white/90 shadow border border-gray-200 text-gray-900 hover:bg-white"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : null}
        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="hidden md:flex absolute right-0 top-[38%] -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white/90 shadow border border-gray-200 text-gray-900 hover:bg-white"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : null}

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="snap-start flex-none min-w-[calc((100%-1rem)/2.15)] md:min-w-[calc(25%-0.75rem)]"
              >
                <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-3/2 w-full animate-pulse" />
                <div className="mt-2 px-1">
                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="mt-2 h-3 w-40 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))
          ) : visibleCards.length === 0 ? (
            <div className="w-full py-10 text-center text-sm text-gray-600">
              {hasError ? "Unable to load nearby amenities right now." : "No nearby amenities found for this area."}
            </div>
          ) : (
            visibleCards.map((item) => {
              const itemId = item.placeId ?? item.key;
              const isSelected = selectedPlaceId ? itemId === selectedPlaceId : false;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    onPlaceSelect?.({
                      placeId: itemId,
                      name: item.name,
                      position: item.position,
                      categoryId: item.categoryId,
                    })
                  }
                  className="snap-start flex-none min-w-[calc((100%-1rem)/2.15)] md:min-w-[calc(25%-0.75rem)] cursor-pointer"
                >
                  <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-3/2 w-full">
                    {item.photoUrl ? (
                      <Image
                        src={item.photoUrl}
                        alt={item.name || item.label}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-[#d9dff5] to-[#F0F5F0]" />
                    )}
                    {isSelected ? (
                      <div className="absolute inset-0 ring-2 ring-[#FF5A3D] ring-inset rounded-2xl" />
                    ) : null}
                  </div>
                  <div className="mt-2 px-1 text-left">
                    <p className="text-[11px] font-medium text-gray-500 truncate">{item.label}</p>
                    <p className="text-[13px] font-medium text-gray-900 truncate">{item.name || item.label}</p>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
