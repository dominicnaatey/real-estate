"use client";

import { TextField } from "../../listings/form/fields";
import type { AgentFormState } from "./types";

type Props = {
  state: Pick<AgentFormState,
    "email" | "setEmail" |
    "phone" | "setPhone"
  >;
};

export function ContactSection({ state }: Props) {
  return (
    <div className="space-y-6 bg-white p-4 md:py-10 md:px-6 rounded-(--admin-form-card-radius)">
      <div className="border-b border-[#ECECEC] pb-4">
        <h3 className="text-admin-heading-color text-admin-heading-size font-admin-heading">
          Contact Details
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TextField
          id="email"
          label="Email Address"
          value={state.email}
          onChange={state.setEmail}
          type="text"
          placeholder="agent@luxmanagement.com"
          required
        />
        <TextField
          id="phone"
          label="Phone Number"
          value={state.phone}
          onChange={state.setPhone}
          placeholder="+1 (416) 555-0100"
          required
        />
      </div>
    </div>
  );
}
