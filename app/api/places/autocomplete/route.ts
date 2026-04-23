import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("input")?.trim();
  if (!input) return NextResponse.json({ suggestions: [] });

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return NextResponse.json({ suggestions: [] });

  const url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json");
  url.searchParams.set("input", input);
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ suggestions: [] });

  const data = (await res.json()) as { status?: string; predictions?: Array<{ description?: string }> };
  if (!Array.isArray(data.predictions)) return NextResponse.json({ suggestions: [] });

  const suggestions = data.predictions
    .map((p) => p.description)
    .filter((v): v is string => Boolean(v))
    .slice(0, 8);

  return NextResponse.json({ suggestions });
}
