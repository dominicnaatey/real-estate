"use client";

import { useState } from "react";
import type { LeadFormState, Priority } from "./types";

type InitialLead = Partial<{
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  leadSource: string;
  leadStatus: string;
  priority: Priority;
  assignedAgent: string;
  propertyType: string;
  minBudget: string;
  maxBudget: string;
  preferredLocations: string;
  notes: string;
}>;

export function useLeadFormState(initial?: InitialLead): LeadFormState {
  const [fullName, setFullName] = useState(initial?.fullName ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [contactMethod, setContactMethod] = useState(initial?.contactMethod ?? "Email");
  const [leadSource, setLeadSource] = useState(initial?.leadSource ?? "Website");
  const [leadStatus, setLeadStatus] = useState(initial?.leadStatus ?? "New");
  const [priority, setPriority] = useState<Priority>(initial?.priority ?? "Medium");
  const [assignedAgent, setAssignedAgent] = useState(initial?.assignedAgent ?? "unassigned");
  const [propertyType, setPropertyType] = useState(initial?.propertyType ?? "Single Family");
  const [minBudget, setMinBudget] = useState(initial?.minBudget ?? "");
  const [maxBudget, setMaxBudget] = useState(initial?.maxBudget ?? "");
  const [preferredLocations, setPreferredLocations] = useState(initial?.preferredLocations ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");

  return {
    fullName, setFullName,
    email, setEmail,
    phone, setPhone,
    contactMethod, setContactMethod,
    leadSource, setLeadSource,
    leadStatus, setLeadStatus,
    priority, setPriority,
    assignedAgent, setAssignedAgent,
    propertyType, setPropertyType,
    minBudget, setMinBudget,
    maxBudget, setMaxBudget,
    preferredLocations, setPreferredLocations,
    notes, setNotes,
  };
}
