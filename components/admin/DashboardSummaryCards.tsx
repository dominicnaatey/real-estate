import {
  Clock,
  Handshake,
  Home,
  TrendingDown,
  TrendingUp,
  UserPlus,
  Wallet,
} from "lucide-react";

type SummaryCard = {
  title: string;
  value: string;
  meta: { icon: "up" | "down" | "clock"; label: string; suffix?: string };
  accent: "primary" | "mint" | "tertiary" | "secondary";
  leadingIcon: "wallet" | "home" | "userPlus" | "handshake";
};

const leadingIconMap = {
  wallet: Wallet,
  home: Home,
  userPlus: UserPlus,
  handshake: Handshake,
} as const;

const metaIconMap = {
  up: TrendingUp,
  down: TrendingDown,
  clock: Clock,
} as const;

const accentClassMap: Record<
  SummaryCard["accent"],
  { ring: string; icon: string }
> = {
  primary: { ring: "from-[#008060]/20 to-[#008060]/5 border-[#008060]/10", icon: "text-[#008060]" },
  mint: { ring: "from-[#92f6cf]/30 to-[#92f6cf]/5 border-[#92f6cf]/20", icon: "text-[#00654b]" },
  tertiary: { ring: "from-[#ae564d]/20 to-[#ae564d]/5 border-[#ae564d]/10", icon: "text-[#ae564d]" },
  secondary: { ring: "from-[#d9dff5]/50 to-[#d9dff5]/10 border-[#d9dff5]/30", icon: "text-[#5c6274]" },
};

export function DashboardSummaryCards() {
  const cards: SummaryCard[] = [
    {
      title: "Total Revenue",
      value: "$4.2M",
      meta: { icon: "up", label: "+12.5%", suffix: "vs last month" },
      accent: "primary",
      leadingIcon: "wallet",
    },
    {
      title: "Active Listings",
      value: "84",
      meta: { icon: "up", label: "+3 new", suffix: "this week" },
      accent: "mint",
      leadingIcon: "home",
    },
    {
      title: "New Leads",
      value: "142",
      meta: { icon: "down", label: "-2.1%", suffix: "vs last month" },
      accent: "tertiary",
      leadingIcon: "userPlus",
    },
    {
      title: "Pending Closings",
      value: "12",
      meta: { icon: "clock", label: "Est. $1.8M", suffix: "in pipeline" },
      accent: "secondary",
      leadingIcon: "handshake",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const LeadingIcon = leadingIconMap[card.leadingIcon];
        const MetaIcon = metaIconMap[card.meta.icon];
        const accent = accentClassMap[card.accent];

        const metaTone =
          card.meta.icon === "down"
            ? "text-[#B45309]"
            : card.meta.icon === "clock"
              ? "text-[#3e4944]"
              : "text-[#008060]";

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl border border-admin-border p-5 shadow-admin-card hover:shadow-admin-card-hover transition-shadow duration-300 relative group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${accent.ring} flex items-center justify-center border`}
              >
                <LeadingIcon className={`w-5 h-5 ${accent.icon}`} />
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold uppercase tracking-wider text-[#008060] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View More
              </button>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm text-[#3e4944]">{card.title}</h3>
              <div className="text-[32px] leading-none font-bold text-[#181d1a] tracking-tight">
                {card.value}
              </div>
              <div className={`flex items-center gap-1 text-sm ${metaTone}`}>
                <MetaIcon className="w-4 h-4" />
                <span className="font-medium text-inherit">{card.meta.label}</span>
                {card.meta.suffix ? (
                  <span className="text-[#3e4944] text-xs">{card.meta.suffix}</span>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

