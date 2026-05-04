import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const q = searchParams.get("q")?.trim();
  const radius = Number(searchParams.get("radius") ?? "2500");
  const limit = Number(searchParams.get("limit") ?? "10");

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !q) {
    return NextResponse.json({ places: [], error: "invalid_params" }, { status: 400 });
  }

  const apiKey = process.env.HERE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ places: [], error: "missing_api_key" }, { status: 500 });
  }

  const url = new URL("https://discover.search.hereapi.com/v1/discover");
  url.searchParams.set("q", q);
  url.searchParams.set("limit", String(Math.min(20, Math.max(1, limit))));
  url.searchParams.set("in", `circle:${lat},${lng};r=${Math.min(50000, Math.max(100, radius))}`);
  url.searchParams.set("apiKey", apiKey);

  let res: Response;
  try {
    res = await fetch(url.toString(), { cache: "no-store" });
  } catch {
    return NextResponse.json({ places: [], error: "here_unreachable" }, { status: 502 });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      {
        places: [],
        error: "here_error",
        hereStatus: res.status,
        hereMessage: text ? text.slice(0, 500) : undefined,
      },
      { status: 502 },
    );
  }

  const data = (await res.json()) as {
    items?: Array<{ id?: string; title?: string; position?: { lat?: number; lng?: number } }>;
  };

  const places =
    Array.isArray(data.items)
      ? data.items
          .map((i) => {
            const p = i.position;
            const plat = p?.lat;
            const plng = p?.lng;
            return {
              placeId: i.id,
              name: i.title,
              position:
                Number.isFinite(plat) && Number.isFinite(plng)
                  ? { lat: plat as number, lng: plng as number }
                  : undefined,
            };
          })
          .filter((p) => Boolean(p.name))
      : [];

  return NextResponse.json({ places });
}
