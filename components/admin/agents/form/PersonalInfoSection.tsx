"use client";

import type { AgentFormState } from "./types";

const inputCls = "w-full h-11 px-4 rounded-(--admin-field-radius) bg-(--admin-field-bg) text-admin-field-text outline-none border border-[#ECECEC] focus:ring-2 focus:ring-[#008060]/20 focus:border-[#008060]/40";
const labelCls = "block text-admin-label-color text-admin-label-size font-admin-label";

type Props = {
  state: Pick<AgentFormState,
    "name" | "setName" |
    "role" | "setRole" |
    "avatarUrl" | "setAvatarUrl" |
    "bio" | "setBio"
  >;
};

export function PersonalInfoSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius) border border-[#ECECEC]">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Personal Information
        </h3>
      </div>

      <label className="block space-y-2">
        <span className={`block ${labelCls}`}>Full Name</span>
        <input
          type="text"
          value={state.name}
          onChange={(e) => state.setName(e.target.value)}
          className={inputCls}
          placeholder="eg. Jonathan Pierce"
          required
        />
      </label>

      <label className="block space-y-2">
        <span className={`block ${labelCls}`}>Bio</span>
        <textarea
          rows={4}
          maxLength={2000}
          value={state.bio}
          onChange={(e) => state.setBio(e.target.value)}
          className={`${inputCls} resize-y min-h-[100px] py-2`}
          placeholder="A brief professional bio about the agent..."
        />
      </label>
    </div>
  );
}
