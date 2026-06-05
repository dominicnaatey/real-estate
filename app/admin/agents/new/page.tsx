"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import {
  AgentFormHeader,
  AgentMetricsBar,
  PersonalInfoSection,
  ContactSection,
  SocialLinksSection,
  StatusPerformanceSection,
  LicenseSection,
  AgentImageSection,
  useAgentFormState,
} from "../../../../components/admin/agents/form";

export default function AdminCreateAgentPage() {
  const router = useRouter();
  const state = useAgentFormState();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/agents");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <AgentFormHeader mode="create" />

        <AgentMetricsBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <PersonalInfoSection state={state} />
            <ContactSection state={state} />
            <SocialLinksSection state={state} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2 pb-6 custom-scrollbar">
            <StatusPerformanceSection state={state} />
            <LicenseSection state={state} />
            <AgentImageSection state={state} />
          </aside>
        </div>
      </form>
    </div>
  );
}
