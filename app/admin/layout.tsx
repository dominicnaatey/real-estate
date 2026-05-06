﻿"use client";

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
    <div className="bg-neutral-200/75 text-[#181d1a] flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-60 min-h-screen flex flex-col pt-16">
        <TopBar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
