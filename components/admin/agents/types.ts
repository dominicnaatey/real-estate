import type { ReactNode } from "react";

export type AgentStatus = "Active" | "On Leave";

export type AgentRow = {
  name: string;
  role: string;
  email: string;
  phone: string;
  activeListings: number;
  salesYtd: string;
  status: AgentStatus;
  avatar?: { kind: "image"; src: string };
};

export type AgentMetric = {
  title: string;
  value: ReactNode;
};

