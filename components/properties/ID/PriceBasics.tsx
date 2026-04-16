import { BedDouble, ShowerHead, VectorSquare } from "lucide-react";
import type { Property } from "../types";

type PriceBasicsProps = {
  property: Pick<Property, "listingType" | "price" | "beds" | "baths" | "sqft">;
};

export function PriceBasics({ property }: PriceBasicsProps) {
  const formattedPrice = property.price.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
  const downPayment = Math.round(property.price * 0.18).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
        <span className="text-sm font-medium text-gray-900">
          {property.listingType === "For Sale" ? "For sale" : "For rent"}
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-1">
        ${formattedPrice}
        {property.listingType === "For Rent" ? "/mo" : ""}
      </h2>
      <p className="text-base text-gray-500 mb-6">Down payment ${downPayment}</p>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-900">
        <div className="bg-gray-200/60 px-3 py-2 rounded-md flex items-center gap-2">
          <BedDouble size={20} className="text-gray-500" />
          {property.beds} Bedrooms
        </div>
        <div className="bg-gray-200/60 px-3 py-2 rounded-md flex items-center gap-2">
          <ShowerHead size={20} className="text-gray-500" />
          {property.baths} Bathrooms
        </div>
        <div className="bg-gray-200/60 px-3 py-2 rounded-md flex items-center gap-2">
          <VectorSquare size={20} className="text-gray-500" />
          {property.sqft} sqft
        </div>
      </div>
    </div>
  );
}
