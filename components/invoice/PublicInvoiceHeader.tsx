"use client";

import React from "react";
import { Download } from "lucide-react";

export function PublicInvoiceHeader() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E1E3E5] h-16 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00654b] rounded flex items-center justify-center text-white">
            <span className="text-xs font-bold">EP</span>
          </div>
          <span className="font-serif text-lg font-semibold text-[#202E3B]">EstatePro Elite</span>
        </div>
        <button 
          className="bg-[#008060] hover:bg-[#00654b] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 active:scale-95 text-[11px] font-semibold uppercase tracking-wider"
          onClick={handlePrint}
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>
    </header>
  );
}
