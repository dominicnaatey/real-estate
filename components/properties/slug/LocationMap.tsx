import Image from "next/image";
import MapComponent from "../../GoogleMap/GoogleMaps";

type LocationMapProps = {
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapImage?: string;
  propertyImage: string;
};

export function LocationMap({
  location,
  coordinates,
  mapImage,
  propertyImage,
}: LocationMapProps) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const query =
    coordinates ? `${coordinates.lat},${coordinates.lng}` : location;

  const mapsLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Location Information
      </h3>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <button className="px-4 py-1.5 bg-[#008060] text-white text-sm font-medium rounded-full whitespace-nowrap">
          Map
        </button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
          School
        </button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
          Shop & Restaurant
        </button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
          Commute location
        </button>
      </div>
      <div className="w-full h-75 bg-gray-200 rounded-2xl relative overflow-hidden">
        <Image
          src={mapImage || propertyImage}
          alt={location}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        {coordinates ? (
          <MapComponent
            apiKey={apiKey}
            center={coordinates}
            zoom={14}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">Map unavailable</p>
          </div>
        )}
      </div>

      <div className="mt-3">
        <a
          href={mapsLinkHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-[#008060] hover:text-[#00664d] transition-colors"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
