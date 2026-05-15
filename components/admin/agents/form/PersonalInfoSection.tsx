"use client";

import { TextField, TextAreaField } from "../../listings/form/fields";
import type { AgentFormState } from "./types";

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
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Personal Information
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextField
          id="name"
          label="Full Name"
          value={state.name}
          onChange={state.setName}
          placeholder="eg. Jonathan Pierce"
          required
        />
        <TextField
          id="role"
          label="Role / Title"
          value={state.role}
          onChange={state.setRole}
          placeholder="eg. Senior Associate"
          required
        />
      </div>

      <TextAreaField
        id="bio"
        label="Bio"
        value={state.bio}
        onChange={state.setBio}
        placeholder="A brief professional bio about the agent..."
        rows={4}
      />
    </div>
  );
}
