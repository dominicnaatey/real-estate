import Image from "next/image";
import { Calendar, Clock, Phone } from "lucide-react";

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
    <aside className="space-y-6">
      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Request a tour</h3>
        <p className="text-sm text-gray-500 mb-6">
          Get a tour of the house as per your time.
        </p>

        <div className="flex gap-2 mb-6">
          <div className="flex-1 flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5">
            <span className="text-sm font-medium text-gray-900">24 Jul, 2023</span>
            <Calendar size={16} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-center text-gray-400 text-sm">
            at
          </div>
          <div className="flex-1 flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5">
            <span className="text-sm font-medium text-gray-900">12: 30 pm</span>
            <Clock size={16} className="text-gray-400" />
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 bg-[#008060] text-white rounded-lg font-medium hover:bg-[#00664d] transition-colors">
            Schedule a Tour
          </button>
          <button className="w-full py-3 border border-[#008060] text-[#008060] rounded-lg font-medium hover:bg-[#008060]/5 transition-colors">
            Request Info
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Agent Information</h3>
        <p className="text-sm text-gray-500 mb-6">
          Get an insight of the house from agent
        </p>

        <div className="flex gap-4 mb-6">
          <div className="relative w-18 h-20 rounded-sm overflow-hidden bg-gray-100 shrink-0">
            <Image
              src={
                agent?.image ||
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD6VjvKduUMIpVRQS_sAquIACrsXp7oEijk7uGzJpKTelxOHGbMcpGPpodPuzQHsLIvfwvYcYE2UB51yQElUrvBgDjesu6kCMBZRgHE01Q_eG5SWSl0x38TL-ygNBqortAJ8zwbTwWTRZRkG71S6xgQDWql_LJjSy4BEpF-ikoEM5G_E3dPVkr9nqp_9XP6epqUgWjojGFnzPhgRV642WLTBnUwcxJtu41pRFRdYRSA1l1YuH5jT0Hvc4Quzm8TKqnJBJdn-m_vQy8q"
              }
              alt={agent?.name || "Agent"}
              fill
              sizes="64px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{agent?.name || "Danial Doe"}</h4>
            <p className="text-xs text-gray-500 mb-2">
              {agent?.role || "Exquisite Properties, LLC | Alabama"}
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded">
                Top Rated
              </span>
              <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded">
                Pro Agent
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-xs font-bold text-gray-900 mb-1">License</p>
            <p className="text-sm text-gray-600">Number: #580573</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 mb-1">Contact</p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Phone size={14} />
              +000 1234 123 123
            </p>
          </div>
        </div>

        <button className="w-full py-3 bg-[#E6F2EF] text-[#008060] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#D1E8E2] transition-colors">
          <Phone size={18} />
          Contact Now
        </button>
      </div>
    </aside>
  );
}
