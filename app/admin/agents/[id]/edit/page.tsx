"use client";

import { useRouter, useParams } from "next/navigation";
import { type FormEvent, useMemo } from "react";
import { agents } from "../../../../../lib/data/Agents";
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
} from "../../../../../components/admin/agents/form";

export default function AdminEditAgentPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const agent = useMemo(
    () => agents.find((a) => a.id === params.id),
    [params.id]
  );

  const state = useAgentFormState(
    agent
      ? {
          name: agent.name,
          role: agent.role,
          avatarUrl: agent.avatar?.src ?? "",
          bio: agent.bio ?? "",
          email: agent.email,
          phone: agent.phone,
          status: agent.status,
          salesYtd: agent.salesYtd,
          activeListings: agent.activeListings,
          linkedIn: agent.linkedIn ?? "",
          instagram: agent.instagram ?? "",
          website: agent.website ?? "",
          licenseType: agent.licenseType ?? "",
          licenseId: agent.licenseId ?? "",
        }
      : undefined
  );

  if (!agent) {
    return (
      <div className="w-full max-w-6xl mx-auto my-12 ">
        <p className="text-sm text-[#3e4944]">Agent not found.</p>
      </div>
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/admin/agents");
  }

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <form onSubmit={onSubmit}>
        <AgentFormHeader mode="edit" agentName={agent.name} />

        <AgentMetricsBar
          activeListings={agent.activeListings}
          totalRevenue={agent.salesYtd}
        />

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
