import { Users, Calendar, SquareParking, Home, Info, TreePine, View } from "lucide-react";

export type HighlightsProps = {
  type?: string;
  hoa?: string;
  buildingYear?: string;
  outside?: string;
  garden?: string;
  parking?: string;
};

export function Highlights({
  type = "Townhomes",
  hoa = "No HOA Fee",
  buildingYear = "2002",
  outside = "City View",
  garden = "Available",
  parking = "Available",
}: HighlightsProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Highlights</h3>
      <div className="border border-gray-200 rounded-2xl p-5 md:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          {/* type */}
          <div className="flex items-start gap-3">
            <Home className="text-gray-600 mt-0.5 h-4.5 w-auto md:h-5 md:w-auto" size={20} />
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Type</p>
              <p className="text-base font-medium md:font-semibold text-gray-900">{type}</p>
            </div>
          </div>
          {/* hoa */}
          <div className="flex items-start gap-3">
            <Users className="text-gray-600 mt-0.5 h-4 w-4.5 md:h-5 md:w-auto" size={20} />
            <div>
              <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-gray-500 mb-1">
                <span>HOA</span>
                <div className="relative group">
                  <button
                    type="button"
                    aria-label="What is HOA?"
                    className="cursor-pointer text-gray-600 hover:text-gray-400 focus-visible:outline-none"
                  >
                    <Info size={15} />
                  </button>
                  <div className="absolute -right-20 md:left-0 top-6 z-20 w-72 rounded-lg border-2 border-gray-200 bg-white p-4 text-xs text-gray-900 shadow-2xl opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                    {/* <div className="font-regular text-gray-900 mb-1">HOA</div> */}
                    <p className="text-sm font-regular">Homeowners Association — an organization that manages and maintains shared community areas and may charge a recurring fee.</p>
                  </div>
                </div>
              </div>
              <p className="text-base font-medium md:font-semibold text-gray-900">{hoa}</p>
            </div>
          </div>
          {/* building year */}
          <div className="flex items-start gap-3">
            <Calendar className="text-gray-600 mt-0.5 h-4 w-4.5 md:h-5 md:w-auto" size={20} />
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Building Year</p>
              <p className="text-base font-medium md:font-semibold text-gray-900">{buildingYear}</p>
            </div>
          </div>
          {/* outside */}
          <div className="flex items-start gap-3">
            <View className="text-gray-600 mt-0.5 h-4 w-4.5 md:h-5 md:w-auto" size={20} />
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Outside</p>
              <p className="text-base font-medium md:font-semibold text-gray-900">{outside}</p>
            </div>
          </div>
          {/* garden */}
          <div className="flex items-start gap-3">
            <TreePine className="text-gray-600 mt-0.5 h-4 w-4.5 md:h-5 md:w-auto" size={20} />
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Garden</p>
              <p className="text-base font-medium md:font-semibold text-gray-900">{garden}</p>
            </div>
          </div>
          {/* parking */}
          <div className="flex items-start gap-3">
            <SquareParking className="text-gray-600 mt-0.5 h-4 w-4.5 md:h-5 md:w-auto" size={20} />
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Parking</p>
              <p className="text-base font-medium md:font-semibold text-gray-900">{parking}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export const Amenities = Highlights;
