export type Property = {
  id: number;
  title: string;
  location: string;
  listingType: "For Sale" | "For Rent";
  isFeatured: boolean;
  price: number;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  images?: string[];
  description?: string;
  amenities?: string[];
  agent?: {
    name: string;
    role: string;
    image: string;
  };
  mapImage?: string;
};
