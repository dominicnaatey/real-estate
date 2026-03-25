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
};
