import type { ReactNode } from "react";

export type AgentStatus = "Active" | "On Leave";

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
  website?: string;
};

export type AgentMetric = {
  title: string;
  value: ReactNode;
};

