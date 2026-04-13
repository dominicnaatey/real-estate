import { CheckCircle2 } from "lucide-react";

export type FeaturesProps = {
  title?: string;
  items?: string[];
};

export function Features({
  title = "Property Features",
  items = [
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
  ],
}: FeaturesProps) {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16 text-gray-600">
        {items.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-[#1E3A8A]" />
            <span className="text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
