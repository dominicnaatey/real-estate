import type { Property } from "../../components/properties/types";

const defaultFeatures: string[] = [
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

const defaultHighlights: NonNullable<Property["highlights"]> = {
  type: "Townhomes",
  hoa: "No HOA Fee",
  buildingYear: "2002",
  outside: "City View",
  garden: "Available",
  parking: "Available",
};

export const properties: Property[] = [
  {
    id: 1,
    title: "The Obsidian Apartment",
    location: "Bel Air, Los Angeles",
    listingType: "For Rent",
    isFeatured: true,
    price: 3500,
    beds: 6,
    baths: 8,
    sqft: "12,500",
    image:
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?_gl=1*pk893i*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ4MDMkajM2JGwwJGgw",
    images: {
      frontView: [
        "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?_gl=1*pk893i*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ4MDMkajM2JGwwJGgw",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Apartment",
      hoa: "$450/mo",
      buildingYear: "2018",
      outside: "City View",
      garden: "Rooftop Terrace",
      parking: "2-Car Garage",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 2,
    title: "Aura Loft Residence",
    location: "West Hollywood, LA",
    listingType: "For Rent",
    isFeatured: false,
    price: 6200,
    beds: 3,
    baths: 4,
    sqft: "3,800",
    image:
      "https://images.pexels.com/photos/19963719/pexels-photo-19963719.jpeg?_gl=1*1rxg50*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxNjY2ODkkbzEyJGcxJHQxNzc2MTY3NTQ1JGozOSRsMCRoMA..",
    images: {
      frontView: [
        "https://images.pexels.com/photos/19963719/pexels-photo-19963719.jpeg?_gl=1*1rxg50*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxNjY2ODkkbzEyJGcxJHQxNzc2MTY3NTQ1JGozOSRsMCRoMA..",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Loft",
      hoa: "No HOA Fee",
      buildingYear: "2021",
      outside: "Sunset View",
      garden: "Shared Courtyard",
      parking: "1 Space",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 3,
    title: "The Pacific Pavilion",
    location: "Malibu, CA",
    listingType: "For Sale",
    isFeatured: false,
    price: 655000,
    beds: 5,
    baths: 6,
    sqft: "6,200",
    image:
      "https://cdn.pixabay.com/photo/2013/09/25/17/35/holiday-house-186366_1280.jpg",
    images: {
      frontView: [
        "https://cdn.pixabay.com/photo/2013/09/25/17/35/holiday-house-186366_1280.jpg",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Villa",
      hoa: "No HOA Fee",
      buildingYear: "2016",
      outside: "Ocean View",
      garden: "Private Garden",
      parking: "3-Car Garage",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 4,
    title: "Sunset Terrace",
    location: "Hollywood Hills, LA",
    listingType: "For Rent",
    isFeatured: false,
    price: 2600,
    beds: 4,
    baths: 3,
    sqft: "3,120",
    image:
      "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
    images: {
      frontView: [
        "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Terrace Home",
      hoa: "$220/mo",
      buildingYear: "2014",
      outside: "Hillside View",
      garden: "Patio Garden",
      parking: "2 Spaces",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 5,
    title: "Gardenview Condo",
    location: "Santa Monica, CA",
    listingType: "For Sale",
    isFeatured: false,
    price: 240000,
    beds: 2,
    baths: 2,
    sqft: "1,540",
    image:
      "https://images.pexels.com/photos/17000987/pexels-photo-17000987.jpeg?_gl=1*1r9jx8s*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxNjY2ODkkbzEyJGcxJHQxNzc2MTY3NzIyJGo1OSRsMCRoMA..",
    images: {
      frontView: [
        "https://images.pexels.com/photos/17000987/pexels-photo-17000987.jpeg?_gl=1*1r9jx8s*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxNjY2ODkkbzEyJGcxJHQxNzc2MTY3NzIyJGo1OSRsMCRoMA..",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Condo",
      hoa: "$380/mo",
      buildingYear: "2019",
      outside: "Garden View",
      garden: "Community Garden",
      parking: "1 Space",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 6,
    title: "Cedarline Retreat",
    location: "Beverly Grove, LA",
    listingType: "For Rent",
    isFeatured: false,
    price: 5000,
    beds: 3,
    baths: 3,
    sqft: "2,420",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
    images: {
      frontView: [
        "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Retreat",
      hoa: "No HOA Fee",
      buildingYear: "2017",
      outside: "Neighborhood View",
      garden: "Private Yard",
      parking: "2-Car Garage",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 101,
    title: "Horizon Peak Villa",
    location: "Malibu, California",
    listingType: "For Sale",
    isFeatured: false,
    price: 2450000,
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAewja7GoZSQWSNs6NX84rLiLBsw4yqirc0e8Xqo-cap6wFOp2IDeo4Rcs484K7n9heRTWN_SRNqWF-dPcDjxKAzxtQFjd0QAw5hkMch6NDitCFkaU3WjK987A6xXH6G965vxapORYlFi7_DCpSTq9Ly0QxVyqXegnx8JWE-v6ffXfmZ5Qf0MexfVXr82WI7Ak5304xloJ458qnHno6UySi6cgIVsgP_BSkBZNEF9zelJtJ-Q2WtpDnjmChGpUJsyiPcAXhFZRg7xef",
    images: {
      frontView: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAewja7GoZSQWSNs6NX84rLiLBsw4yqirc0e8Xqo-cap6wFOp2IDeo4Rcs484K7n9heRTWN_SRNqWF-dPcDjxKAzxtQFjd0QAw5hkMch6NDitCFkaU3WjK987A6xXH6G965vxapORYlFi7_DCpSTq9Ly0QxVyqXegnx8JWE-v6ffXfmZ5Qf0MexfVXr82WI7Ak5304xloJ458qnHno6UySi6cgIVsgP_BSkBZNEF9zelJtJ-Q2WtpDnjmChGpUJsyiPcAXhFZRg7xef",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Villa",
      hoa: "No HOA Fee",
      buildingYear: "2020",
      outside: "Clifftop View",
      garden: "Infinity Terrace",
      parking: "3-Car Garage",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 102,
    title: "The Glass Pavilion",
    location: "Austin, Texas",
    listingType: "For Sale",
    isFeatured: true,
    price: 750000,
    beds: 4,
    baths: 3,
    sqft: "3,150",
    image:
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?_gl=1*kk52k9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ1MDgkajMxJGwwJGgw",
    images: {
      frontView: [
        "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?_gl=1*kk52k9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ1MDgkajMxJGwwJGgw",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Pavilion",
      hoa: "$300/mo",
      buildingYear: "2022",
      outside: "Lakeside View",
      garden: "Outdoor Lounge",
      parking: "2 Spaces",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
  {
    id: 103,
    title: "Midnight Manor",
    location: "Seattle, Washington",
    listingType: "For Rent",
    isFeatured: true,
    price: 4500,
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image:
      "https://images.pexels.com/photos/20702842/pexels-photo-20702842.jpeg?_gl=1*1uptjaf*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQzOTIkajUzJGwwJGgw",
    images: {
      frontView: [
        "https://images.pexels.com/photos/20702842/pexels-photo-20702842.jpeg?_gl=1*1uptjaf*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQzOTIkajUzJGwwJGgw",
      ],
      livingRoom: [
        "https://images.pexels.com/photos/32177961/pexels-photo-32177961.png?_gl=1*15hdhw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYxMTE2ODMkbzEwJGcxJHQxNzc2MTExNzI2JGoxNyRsMCRoMA..",
      ],
      bedroom: [
        "https://images.pexels.com/photos/28456462/pexels-photo-28456462.jpeg?_gl=1*1ialftr*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyMjkkajI2JGwwJGgw",
        "https://images.pexels.com/photos/12277956/pexels-photo-12277956.jpeg?_gl=1*i2ieio*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQyNzkkajU5JGwwJGgw",
        "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?_gl=1*bvrvjw*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzMzEkajckbDAkaDA.",
      ],
      bathroom: [
        "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg?_gl=1*1lb7ib9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQ0MzIkajU5JGwwJGgw",
        "https://images.pexels.com/photos/7031571/pexels-photo-7031571.jpeg?_gl=1*irwjjc*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQzOTckajEyJGwwJGgw",
        "https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?_gl=1*yi2z3m*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM5NzQkajU5JGwwJGgw",
      ],
      kitchen: [
        "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?_gl=1*1n3tqe5*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTM4ODEkajYkbDAkaDA.",
      ],
      laundryRoom: [
        "https://images.pexels.com/photos/17158638/pexels-photo-17158638.jpeg?_gl=1*oviy2w*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTUyNDMkajQkbDAkaDA.",
      ],
      hallway: [
        "https://images.pexels.com/photos/7031410/pexels-photo-7031410.jpeg?_gl=1*11y3p3*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQxNTkkajEyJGwwJGgw",
      ],
      backyard: [
        "https://images.pexels.com/photos/7587878/pexels-photo-7587878.jpeg?_gl=1*5me10r*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzYwOTM3NTkkbzkkZzEkdDE3NzYwOTQwNzEkajMxJGwwJGgw",
      ],
    },
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
    highlights: {
      ...defaultHighlights,
      type: "Manor",
      hoa: "No HOA Fee",
      buildingYear: "2015",
      outside: "Forest View",
      garden: "Landscaped Yard",
      parking: "Secure Garage",
    },
    features: defaultFeatures,
    amenities: ["Open Plan", "Guest Suite", "Spa Bath", "Prime Locale"],
    agent: {
      name: "Johnathan Wick",
      role: "Senior Associate",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q",
    },
    mapImage:
      "https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_1280.png",
  },
];
