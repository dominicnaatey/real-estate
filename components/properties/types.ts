export type Property = {
  id: number;
  title: string;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  listingType: "For Sale" | "For Rent";
  isFeatured: boolean;
  price: number;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  images?: {
    frontView?: string[];
    livingRoom?: string[];
    bedroom?: string[];
    bathroom?: string[];
    kitchen?: string[];
    laundryRoom?: string[];
    hallway?: string[];
    backyard?: string[];
  };
  imageLabels?: string[];
  description?: string;
  amenities?: string[];
  highlights?: {
    type?: string;
    hoa?: string;
    buildingYear?: string;
    outside?: string;
    garden?: string;
    parking?: string;
  };
  features?: string[];
  agent?: {
    name: string;
    role: string;
    image: string;
  };
  mapImage?: string;
};
