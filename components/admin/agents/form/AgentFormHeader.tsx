"use client";

import Link from "next/link";
import { Save } from "lucide-react";

type Props = {
  mode: "create" | "edit";
  agentName?: string;
};

export function AgentFormHeader({ mode, agentName }: Props) {
  const heading = mode === "create" ? "Add New Agent" : `Edit Agent${agentName ? ` — ${agentName}` : ""}`;
  const subheading =
    mode === "create"
      ? "Register a new agent in the LuxManagement system."
      : "Update agent details and save changes.";

  return (
    <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#181d1a] mb-1 leading-tight">
          {heading}
        </h2>
        <p className="text-sm text-[#3e4944]">{subheading}</p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/admin/agents"
          className="px-4 py-2 border-admin border-admin-border rounded text-[#3e4944] text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-[#F9FAFB] transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Save className="w-4.5 h-4.5" />
          {mode === "create" ? "Save Agent" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
