import { div } from "framer-motion/client";
import { CheckCircle2 } from "lucide-react";

export type FeaturesProps = {
  title?: string;
  items?: string[];
};

export function Features({
  title = "Property Features",
  items = [],
}: FeaturesProps) {
  const defaultItems = [
    "Garage",
    "Swimming Pool",
    "Garden",
    "Cooling",
    "Heating",
    "Solar",
    "Gym",
    "High Ceiling",
    "Outdoor Living Space",
    "Elevator",
    "Dining Room",
    "Basement",
    "Security Camera",
  ];
  const resolvedItems = items.length ? items : defaultItems;

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="bg-gray-200/60 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16 text-gray-600">
        {resolvedItems.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#1E3A8A]" />
              <span className="text-base font-medium text-gray-900">{feature}</span>
            </div>
        ))}
      </div>
    </div>
  );
}
