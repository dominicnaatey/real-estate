"use client";

import { UserPlus } from "lucide-react";
import { AdminDropdown } from "../../ui/AdminDropdown";
import type { LeadFormState } from "./types";

const AGENTS = [
  { value: "unassigned", label: "Unassigned" },
  { value: "sarah-jenkins", label: "Sarah Jenkins" },
  { value: "michael-chen", label: "Michael Chen" },
  { value: "david-ross", label: "David Ross" },
];

type Props = {
  state: Pick<LeadFormState, "assignedAgent" | "setAssignedAgent">;
};

export function AssignmentSection({ state }: Props) {
  return (
    <div className="bg-white border border-[#ECECEC] rounded-(--admin-form-card-radius) p-6 space-y-5">
      <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-4">
        <UserPlus className="w-4 h-4 text-[#3e4944]" />
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Internal Assignment
        </h3>
      </div>

      <AdminDropdown
        label="Assigned Agent"
        value={state.assignedAgent}
        onChange={state.setAssignedAgent}
        options={AGENTS}
        placeholder="Unassigned"
      />
    </div>
  );
}
