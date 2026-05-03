import type { ReactNode } from "react";

import { Sidebar } from "../../components/admin/Sidebar";
import { TopBar } from "../../components/admin/TopBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="bg-slate-50 text-slate-900 flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-72 min-h-screen flex flex-col">
        <TopBar />
        {children}
      </main>
    </div>
  );
}
