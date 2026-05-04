import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function toTileXY(lat: number, lng: number, zoom: number) {
  const z = Math.min(20, Math.max(1, Math.floor(zoom)));
  const n = 2 ** z;
  const x = Math.floor(((lng + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n);

  return {
    z,
    x: Math.min(n - 1, Math.max(0, x)),
    y: Math.min(n - 1, Math.max(0, y)),
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "invalid_params" }, { status: 400 });
  }

  const zoom = Math.min(18, Math.max(1, Number(searchParams.get("z") ?? "15")));
  const style = searchParams.get("style")?.trim() || "explore.day";
  const size = 512;

  const apiKey = process.env.HERE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "missing_api_key" }, { status: 500 });
  }

  const { z, x, y } = toTileXY(lat, lng, zoom);

  const url = new URL(`https://maps.hereapi.com/v3/base/mc/${z}/${x}/${y}/png`);
  url.searchParams.set("size", String(size));
  url.searchParams.set("style", style);
  url.searchParams.set("apiKey", apiKey);

  let res: Response;
  try {
    res = await fetch(url.toString(), { cache: "no-store" });
  } catch {
    return NextResponse.json({ error: "here_unreachable" }, { status: 502 });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      {
        error: "here_error",
        hereStatus: res.status,
        hereMessage: text ? text.slice(0, 500) : undefined,
      },
      { status: 502 },
    );
  }

  const contentType = res.headers.get("content-type") ?? "image/png";
  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
