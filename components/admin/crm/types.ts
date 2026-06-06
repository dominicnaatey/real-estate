export type LeadStatus =
  | "Offer Pending"
  | "Viewing Scheduled"
  | "Contacted"
  | "New Lead";

export type LeadRow = {
  id: string;
  name: string;
  email: string;
  interest: string;
  budget: string;
  agent: string;
  lastInteraction: string;
  status: LeadStatus;
  avatar?: { kind: "image"; src: string };
  phone?: string;
  contactMethod?: string;
  leadSource?: string;
  priority?: string;
  propertyType?: string;
  minBudget?: string;
  maxBudget?: string;
  preferredLocations?: string;
  notes?: string;
  assignedAgent?: string;
};

