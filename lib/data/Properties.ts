import type { Property } from "../../components/properties/types";

export const properties: Property[] = [
  {
    id: 1,
    title: "The Obsidian Apartment",
    location: "Bel Air, Los Angeles",
    listingType: "For Sale",
    isFeatured: true,
    price: 12450000,
    beds: 6,
    baths: 8,
    sqft: "12,500",
    image:
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?_gl=1*pk893i*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ4MDMkajM2JGwwJGgw",
    images: [
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?_gl=1*pk893i*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ4MDMkajM2JGwwJGgw",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 4200000,
    beds: 3,
    baths: 4,
    sqft: "3,800",
    image:
      "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 8750000,
    beds: 5,
    baths: 6,
    sqft: "6,200",
    image:
      "https://cdn.pixabay.com/photo/2013/09/25/17/35/holiday-house-186366_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2013/09/25/17/35/holiday-house-186366_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 3190000,
    beds: 4,
    baths: 3,
    sqft: "3,120",
    image:
      "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2017/02/25/18/31/bulgaria-2098435_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 1890000,
    beds: 2,
    baths: 2,
    sqft: "1,540",
    image:
      "https://cdn.pixabay.com/photo/2018/03/20/17/35/furniture-3243991_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2018/03/20/17/35/furniture-3243991_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 2785000,
    beds: 3,
    baths: 3,
    sqft: "2,420",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
    images: [
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAewja7GoZSQWSNs6NX84rLiLBsw4yqirc0e8Xqo-cap6wFOp2IDeo4Rcs484K7n9heRTWN_SRNqWF-dPcDjxKAzxtQFjd0QAw5hkMch6NDitCFkaU3WjK987A6xXH6G965vxapORYlFi7_DCpSTq9Ly0QxVyqXegnx8JWE-v6ffXfmZ5Qf0MexfVXr82WI7Ak5304xloJ458qnHno6UySi6cgIVsgP_BSkBZNEF9zelJtJ-Q2WtpDnjmChGpUJsyiPcAXhFZRg7xef",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 1890000,
    beds: 4,
    baths: 3,
    sqft: "3,150",
    image:
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?_gl=1*kk52k9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ1MDgkajMxJGwwJGgw",
    images: [
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?_gl=1*kk52k9*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQ1MDgkajMxJGwwJGgw",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
    price: 8500,
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image:
      "https://images.pexels.com/photos/20702842/pexels-photo-20702842.jpeg?_gl=1*1uptjaf*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQzOTIkajUzJGwwJGgw",
    images: [
      "https://images.pexels.com/photos/20702842/pexels-photo-20702842.jpeg?_gl=1*1uptjaf*_ga*MzAzODc1OTAxLjE3NzUxNDI1MjI.*_ga_8JE65Q40S6*czE3NzU5MjQzODUkbzUkZzEkdDE3NzU5MjQzOTIkajUzJGwwJGgw",
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    ],
    description:
      "A curated luxury residence in a prime location. Expansive living spaces, modern finishes, and panoramic views come together in this exceptional property. Carefully selected materials, thoughtful layouts, and refined amenities deliver an elevated lifestyle.",
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
