import type { ReactNode } from "react";

export type AgentStatus = "Active" | "On Leave" | "Suspended";

export type AgentRow = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  activeListings: number;
  salesYtd: string;
  status: AgentStatus;
  avatar?: { kind: "image"; src: string };
  bio?: string;
  linkedIn?: string;
  instagram?: string;
  website?: string;
  licenseType?: string;
  licenseId?: string;
};

export type AgentMetric = {
  title: string;
  value: ReactNode;
};

