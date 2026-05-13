"use client";

import type { ListingFormState } from "./types";

type AgentSectionProps = {
  state: Pick<ListingFormState, "agentName" | "setAgentName" | "agentRole" | "setAgentRole" | "agentImage" | "setAgentImage">;
};

export function AgentSection({ state }: AgentSectionProps) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-(--admin-heading-color) text-(--admin-heading-size) font-(--admin-heading-weight)">
          Realtor/Agent
        </h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={state.agentImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"}
            alt="Agent Avatar"
            className="w-16 h-16 rounded-xl object-cover hover:scale-[1.01] transition-transform duration-300"
          />
          <div>
            <p className="text-lg font-medium text-[#181d1a]">
              {state.agentName || "Jacob Brent"}
            </p>
            <p className="text-[15px] text-[#181d1a]">
              {state.agentRole || "Realtor"}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <button type="button" className="text-[15px] font-medium text-[#181d1a] hover:opacity-70 transition-opacity">
            Change
          </button>
          <button type="button" className="text-[15px] font-medium text-[#181d1a] hover:opacity-70 transition-opacity">
            + New
          </button>
        </div>
      </div>
    </div>
  );
}
