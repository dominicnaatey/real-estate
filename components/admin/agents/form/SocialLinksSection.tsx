"use client";

import { TextField } from "../../listings/form/fields";
import type { AgentFormState } from "./types";

type Props = {
  state: Pick<AgentFormState,
    "linkedIn" | "setLinkedIn" |
    "website" | "setWebsite"
  >;
};

export function SocialLinksSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Social &amp; Links
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextField
          id="linkedIn"
          label="LinkedIn URL"
          value={state.linkedIn}
          onChange={state.setLinkedIn}
          type="url"
          placeholder="https://linkedin.com/in/..."
        />
        <TextField
          id="website"
          label="Personal Website"
          value={state.website}
          onChange={state.setWebsite}
          type="url"
          placeholder="https://..."
        />
      </div>
    </div>
  );
}
