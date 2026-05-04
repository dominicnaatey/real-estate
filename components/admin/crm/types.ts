export type LeadStatus =
  | "Offer Pending"
  | "Viewing Scheduled"
  | "Contacted"
  | "New Lead";

export type LeadRow = {
  name: string;
  email: string;
  interest: string;
  budget: string;
  agent: string;
  lastInteraction: string;
  status: LeadStatus;
  avatar?: { kind: "image"; src: string };
};

