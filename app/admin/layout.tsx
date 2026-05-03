import type { ReactNode } from "react";

import { Sidebar } from "../../components/admin/Sidebar";
import { TopBar } from "../../components/admin/TopBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-[#F9FAFB] text-[#181d1a] flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-60 min-h-screen flex flex-col pt-16">
        <TopBar />
        {children}
      </main>
    </div>
  );
}
