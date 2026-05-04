"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Sidebar } from "../../components/admin/Sidebar";
import { TopBar } from "../../components/admin/TopBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="bg-[#F9FAFB] text-[#181d1a] flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-60 min-h-screen flex flex-col pt-16">
        <TopBar />
        <div className="relative">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={pathname}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
