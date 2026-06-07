import React from "react";

interface InvoiceLayoutProps {
  children: React.ReactNode;
}

export function InvoiceLayout({ children }: InvoiceLayoutProps) {
  return (
    <main className="py-12 px-4 flex flex-col items-center bg-[#F9FAFB] min-h-screen">
      <article className="bg-white max-w-4xl w-full p-8 md:p-16 mb-12 shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-[#E1E3E5]">
        {children}
      </article>
    </main>
  );
}
