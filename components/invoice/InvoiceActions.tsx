import React from "react";
import { Download, Mail, CreditCard } from "lucide-react";

export function InvoiceActions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl px-4 pb-20">
      <div className="flex flex-wrap justify-center gap-4 no-print">
        <button 
          onClick={() => {}} 
          className="bg-white border border-[#E1E3E5] px-6 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-wider text-[#6D7175] hover:bg-[#f0f5f0] transition-colors flex items-center gap-2 group"
        >
          <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
          Contact Support
        </button>
        <button 
          onClick={handlePrint}
          className="bg-[#00654b] text-white px-8 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-wider shadow-lg shadow-[#008060]/20 hover:bg-[#008060] transition-all active:scale-95 flex items-center gap-2 group"
        >
          <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          Download PDF
        </button>
        <button 
          className="bg-[#008060] text-white px-10 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-wider shadow-lg shadow-[#008060]/20 hover:bg-[#00654b] transition-all active:scale-95 flex items-center gap-2 group"
        >
          <CreditCard className="w-4 h-4 transition-transform group-hover:scale-110" />
          Pay Securely Online
        </button>
      </div>
      
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: white !important;
            padding: 0 !important;
          }
          main {
            padding: 0 !important;
            background-color: white !important;
          }
          article {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  );
}
