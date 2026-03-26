"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Navbar";

export function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <div className="flex-1">{children}</div>
      {!isAdmin && <Footer />}
    </>
  );
}
