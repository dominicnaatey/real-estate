import Image from "next/image";
import { Bell, HelpCircle, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-60 z-50 bg-white backdrop-blur-md border-b border-admin-border flex justify-between items-center px-6 md:px-8 h-16">
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="rounded-lg bg-[#F0F5F0] px-4 py-2 flex items-center gap-2 border border-admin-border focus-within:ring-1 focus-within:ring-[#008060]">
            <Search className="text-[#3e4944] w-5 h-5" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm text-[#181d1a] p-0 w-64 placeholder:text-[#3e4944]/50 outline-none"
              placeholder="Search properties, clients..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-slate-600 hover:text-[#008060] transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-slate-600 hover:text-[#008060] transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Admin User</p>
            <p className="text-[10px] text-slate-500 font-medium">
              Head Curator
            </p>
          </div>
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-admin-border bg-[#d9dff5]">
            <Image
              alt="User profile avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQPW5bZNVPQ_o-jJxakFCGtUeCFbCLnyyLi2Ct90N5v5CyckSV4ELqR-SODSK82_D-ulReChYRXJYny5mUuylYooQ3n_bIk3qA_i_yl2wYw2T_fXc2GD7lPik1Ut7w6I8pcmyNnfvll3MRLowHH3yEykal3AIbKXdfpGGKSnBzFGYRyDAXBCmGR1GKyfX5ReNHghKEbFhf45Xq6WB5Pao4j6KRWGITedlZZGwCNoxWMXN3Oli3awkWTrdVXtiXAkRVm7RzQh9tQjVM"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
