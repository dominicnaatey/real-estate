import Image from "next/image";
import { MapPin } from "lucide-react";

type LocationMapProps = {
  location: string;
  mapImage?: string;
  propertyImage: string;
};

export function LocationMap({
  location,
  mapImage,
  propertyImage,
}: LocationMapProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Location</h2>
        <button className="text-accent font-bold hover:opacity-80 flex items-center gap-2">
          View on Map <MapPin className="w-5 h-5" />
        </button>
      </div>
      <div className="h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden relative">
        <Image
          alt={location}
          src={mapImage || propertyImage}
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}