import { Building, Calendar, Car, Home, TreePine } from "lucide-react";

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
      <h3 className="text-lg font-bold text-gray-900 mb-6">Highlights</h3>
      <div className="border border-gray-200 rounded-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        <div className="flex items-start gap-3">
          <Home className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">Type</p>
            <p className="text-sm font-medium text-gray-900">{type}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Building className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">HOA</p>
            <p className="text-sm font-medium text-gray-900">{hoa}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Calendar className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">Building Year</p>
            <p className="text-sm font-medium text-gray-900">{buildingYear}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <TreePine className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">Outside</p>
            <p className="text-sm font-medium text-gray-900">{outside}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <TreePine className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">Garden</p>
            <p className="text-sm font-medium text-gray-900">{garden}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Car className="text-gray-400 mt-0.5" size={20} />
          <div>
            <p className="text-xs text-gray-500 mb-1">Parking</p>
            <p className="text-sm font-medium text-gray-900">{parking}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export const Amenities = Highlights;
