"use client";

import { useState } from "react";
import type { LeadFormState, Priority } from "./types";

export function useLeadFormState(): LeadFormState {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const [leadSource, setLeadSource] = useState("Website");
  const [leadStatus, setLeadStatus] = useState("New");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [assignedAgent, setAssignedAgent] = useState("unassigned");
  const [propertyType, setPropertyType] = useState("Single Family");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [preferredLocations, setPreferredLocations] = useState("");
  const [notes, setNotes] = useState("");

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
