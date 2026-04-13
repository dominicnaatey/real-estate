import Image from "next/image";

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
      <div className="w-full h-[300px] bg-gray-200 rounded-2xl relative overflow-hidden">
        <Image
          src={mapImage || propertyImage}
          alt={location}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 bg-[#008060]/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-[#008060] rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
