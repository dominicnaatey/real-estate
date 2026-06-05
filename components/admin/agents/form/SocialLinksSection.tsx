"use client";

import type { AgentFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text outline-none border border-[#ECECEC] focus:ring-2 focus:ring-[#008060]/20 focus:border-[#008060]/40";
const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

type Props = {
  state: Pick<AgentFormState,
    "linkedIn" | "setLinkedIn" |
    "website" | "setWebsite"
  >;
};

export function SocialLinksSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Social &amp; Links
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>LinkedIn URL</span>
          <input
            type="url"
            value={state.linkedIn}
            onChange={(e) => state.setLinkedIn(e.target.value)}
            className={inputCls}
            placeholder="https://linkedin.com/in/..."
          />
        </label>

        <label className="block space-y-2">
          <span className={`block ${labelCls}`}>Personal Website</span>
          <input
            type="url"
            value={state.website}
            onChange={(e) => state.setWebsite(e.target.value)}
            className={inputCls}
            placeholder="https://..."
          />
        </label>
      </div>
    </div>
  );
}
