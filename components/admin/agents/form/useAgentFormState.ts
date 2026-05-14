"use client";

import { useState } from "react";
import type { AgentFormState } from "./types";

type InitialAgent = Partial<{
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  email: string;
  phone: string;
  status: "Active" | "On Leave";
  salesYtd: string;
  activeListings: number;
  linkedIn: string;
  website: string;
}>;

export function useAgentFormState(initial?: InitialAgent): AgentFormState {
  const [name, setName] = useState(initial?.name ?? "");
  const [role, setRole] = useState(initial?.role ?? "");
  const [avatarUrl, setAvatarUrl] = useState(initial?.avatarUrl ?? "");
  const [bio, setBio] = useState(initial?.bio ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");
  const [status, setStatus] = useState<"Active" | "On Leave">(initial?.status ?? "Active");
  const [salesYtd, setSalesYtd] = useState(initial?.salesYtd ?? "");
  const [activeListings, setActiveListings] = useState(
    initial?.activeListings !== undefined ? String(initial.activeListings) : "0"
  );
  const [linkedIn, setLinkedIn] = useState(initial?.linkedIn ?? "");
  const [website, setWebsite] = useState(initial?.website ?? "");

  return {
    name, setName,
    role, setRole,
    avatarUrl, setAvatarUrl,
    bio, setBio,
    email, setEmail,
    phone, setPhone,
    status, setStatus,
    salesYtd, setSalesYtd,
    activeListings, setActiveListings,
    linkedIn, setLinkedIn,
    website, setWebsite,
  };
}
