import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Default location bias: Accra, Ghana */
const DEFAULT_LAT = "5.6037";
const DEFAULT_LNG = "-0.1870";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("input")?.trim();
  if (!input) return NextResponse.json({ suggestions: [] });

  const apiKey = process.env.HERE_MAPS_API_KEY;
  if (!apiKey) return NextResponse.json({ suggestions: [] });

  const lat = searchParams.get("lat") || DEFAULT_LAT;
  const lng = searchParams.get("lng") || DEFAULT_LNG;

  const url = new URL("https://autosuggest.search.hereapi.com/v1/autosuggest");
  url.searchParams.set("q", input);
  url.searchParams.set("at", `${lat},${lng}`);
  url.searchParams.set("limit", "8");
  url.searchParams.set("apiKey", apiKey);

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ suggestions: [] });

  const data = (await res.json()) as {
    items?: Array<{ title?: string; address?: { label?: string } }>;
  };
  const suggestions = Array.isArray(data.items)
    ? data.items
        .map((i) => i.address?.label || i.title)
        .filter((v): v is string => Boolean(v))
        .slice(0, 8)
    : [];

  return NextResponse.json({ suggestions });
}

