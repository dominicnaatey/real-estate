"use client";

import { TextField } from "./fields";
import type { ListingFormState } from "./types";

type AgentSectionProps = {
  state: Pick<ListingFormState, "agentName" | "setAgentName" | "agentRole" | "setAgentRole" | "agentImage" | "setAgentImage">;
};

export function AgentSection({ state }: AgentSectionProps) {
  return (
    <div className="bg-white border border-admin-border rounded-2xl p-5 hover:shadow-admin-card-hover transition-shadow">
      <h3 className="text-lg font-serif font-semibold text-[#181d1a] mb-6 border-b border-admin-border pb-4">
        Agent
      </h3>
      <div className="space-y-4">
        <TextField
          id="agentName"
          label="Name"
          value={state.agentName}
          onChange={state.setAgentName}
          placeholder="e.g. Johnathan Wick"
        />
        <TextField
          id="agentRole"
          label="Role"
          value={state.agentRole}
          onChange={state.setAgentRole}
          placeholder="e.g. Senior Associate"
        />
        <TextField
          id="agentImage"
          label="Avatar URL"
          value={state.agentImage}
          onChange={state.setAgentImage}
          type="url"
          placeholder="https://..."
        />
      </div>
    </div>
  );
}
