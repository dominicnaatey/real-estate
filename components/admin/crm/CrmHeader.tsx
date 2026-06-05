import Link from "next/link";
import { Download, Plus } from "lucide-react";

export function CrmHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl font-serif font-semibold text-[#181d1a] mb-1">
          {title}
        </h2>
        <p className="text-sm text-[#3e4944]">{subtitle}</p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="px-4 py-2 border-admin border-admin-border bg-white rounded text-[11px] font-semibold uppercase tracking-wider text-[#3e4944] hover:bg-[#F0F5F0] transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
        <Link
          href="/admin/crm/new"
          className="px-4 py-2 bg-[#008060] text-white rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#00654b] transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Lead
        </Link>
      </div>
    </div>
  );
}

