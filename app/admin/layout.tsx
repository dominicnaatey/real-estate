import type { ReactNode } from "react";

import { Sidebar } from "../../components/admin/Sidebar";
import { TopBar } from "../../components/admin/TopBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-gray-50/40 text-[#131b2e] flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-72 min-h-screen flex flex-col">
        <TopBar />
        {children}
      </main>
    </div>
  );
}
