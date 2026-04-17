## Project rules (Trae Agent)

### Commands
- Lint: `npm run lint`
- Build/typecheck: `npm run build`
- Dev: `npm run dev` (if Turbopack is unstable, use `npm run dev:webpack`)

### Routing
- Property detail route is ID-based: `/properties/[id]`
- Photos route UI should use: `/properties/:id=photos`
  - Implemented via a rewrite to `/properties/:id/photos`
- Avoid title-based slugs for routing (duplicate titles can collide)

### Data
- Property dataset: `lib/data/Properties.ts`
- Property type: `components/properties/types.ts`
- Map coordinates live on each property as `coordinates: { lat, lng }`

### Maps
- Google Maps JS API integration uses `@react-google-maps/api`
- API key is read from `.env` as `GOOGLE_MAPS_API_KEY` (never commit/print keys)
- Marker icon uses `/public/MapMarker.svg`

### Conventions
- Prefer editing existing files over creating new ones
- Don’t introduce new libraries unless the repo already uses them
- Keep changes minimal and consistent with existing Tailwind/Next.js patterns
