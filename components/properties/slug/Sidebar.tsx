import Image from "next/image";
import { Calendar, Clock, Mail } from "lucide-react";

type Agent = {
  name: string;
  image: string;
  role: string;
};

type SidebarProps = {
  agent?: Agent;
};

export function Sidebar({ agent }: SidebarProps) {
  return (
    <aside className="space-y-8">
      <div className="sticky top-28 space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(19,27,46,0.06)] border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-navy">
            Experience the Estate
          </h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Select Date
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                </span>
                <input
                  className="w-full bg-gray-50 rounded-full px-10 py-4 focus:ring-2 focus:ring-accent/40 border border-gray-200 font-medium outline-none"
                  type="date"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Preferred Time
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Clock className="w-4 h-4" />
                </span>
                <select className="w-full bg-gray-50 rounded-full px-10 py-4 focus:ring-2 focus:ring-accent/40 border border-gray-200 font-medium outline-none appearance-none">
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>
            </div>
            <button
              className="w-full bg-accent text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
              type="submit"
            >
              Request Tour
            </button>
            <p className="text-center text-xs text-gray-500 italic">
              No commitment required for initial inquiry.
            </p>
          </form>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
              <Image
                alt={agent?.name || "Agent"}
                src={
                  agent?.image ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q"
                }
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-lg text-navy">
                {agent?.name || "Johnathan Wick"}
              </h4>
              <p className="text-accent text-sm font-semibold uppercase tracking-wide">
                {agent?.role || "Senior Associate"}
              </p>
            </div>
          </div>
          <button className="w-full bg-white text-navy py-4 rounded-full font-bold hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Agent
          </button>
        </div>
      </div>
    </aside>
  );
}