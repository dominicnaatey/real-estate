import type { AgentRow } from "../../components/admin/agents/types";

export const agents: AgentRow[] = [
  {
    id: "eleanor-sterling",
    name: "Eleanor Sterling",
    role: "Senior Partner",
    email: "e.sterling@estatepro.com",
    phone: "+1 (555) 123-4567",
    activeListings: 14,
    salesYtd: "$42.5M",
    status: "Active",
    bio: "Eleanor brings over 15 years of luxury real estate expertise to every transaction.",
    avatar: {
      kind: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByRVa1npTdvh4i7v5__DHyn2mk3NkK66p4tZkq21bIbrb-F_60kg0YWBQIyPgX0le4BUO5FRCRaJecOX8mBUQ4xDQVpgqvbHRrU-LcVjFS2T72ZWAnmB8oGWJYFztir6a4M4obbAe9z2SP586v4I9GE3LEFYqS1X34jH7PUge1gb5kBUSwvkHWKnQjHojulD3IoKguQGZ5nL9KqmunkgyHnh5ZjHbNPiOVxlk6gbcKaBtpFMdSYtjGKK2vjj39BvC3ecq30qtIWHdz",
    },
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Director of Sales",
    email: "m.vance@estatepro.com",
    phone: "+1 (555) 987-6543",
    activeListings: 8,
    salesYtd: "$28.1M",
    status: "Active",
    bio: "Marcus leads our sales division with a focus on high-net-worth clientele.",
    avatar: {
      kind: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvP0bSA4IvsDip9IwYx9_wvJGlktDgUG6Y5nCi31epJZgJxTdsIsyZr8YPXSOPPZVIHkGlU4651SCUqPSf2QF8NcX99sLa90pOxOledq_dsnioUTPM6bPhHIa2LzwLuGuMocZCTEIOB7ZAWU4v3A7ocaWacWknn7BQIIRXNGctDFbBhkTOQRE55SApFHdGGFrxXojld4r5FxT5PMp4I94ELamKwgIx1DAJ-1yzi7LkSsSpuUGrOb48APNPyzvwW1f312RIdTgGTODW",
    },
  },
  {
    id: "chloe-larson",
    name: "Chloe Larson",
    role: "Luxury Specialist",
    email: "c.larson@estatepro.com",
    phone: "+1 (555) 234-5678",
    activeListings: 5,
    salesYtd: "$15.2M",
    status: "On Leave",
    bio: "Chloe specialises in ultra-premium residential properties across the downtown core.",
  },
];
