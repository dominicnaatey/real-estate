import type { ReactNode } from "react";

function MetricCard({
  title,
  value,
  meta,
  metaClassName = "text-[#008060]",
  footer,
}: {
  title: string;
  value: string;
  meta?: ReactNode;
  metaClassName?: string;
  footer?: ReactNode;
}) {
  return (
    <div className="bg-white border-admin border-admin-border rounded-2xl p-5">
      <p className="text-[11px] font-semibold text-[#3e4944] uppercase tracking-wider mb-3">
        {title}
      </p>
      <p className="text-3xl font-bold text-[#181d1a] tracking-tight">{value}</p>
      {meta ? <div className={`mt-2 text-sm ${metaClassName}`}>{meta}</div> : null}
      {footer ? <div className="mt-3">{footer}</div> : null}
    </div>
  );
}

export type CrmMetric = {
  title: string;
  value: string;
  meta?: ReactNode;
  metaClassName?: string;
  footer?: ReactNode;
};

export function CrmMetrics({ metrics }: { metrics: CrmMetric[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((m) => (
        <MetricCard
          key={m.title}
          title={m.title}
          value={m.value}
          meta={m.meta}
          metaClassName={m.metaClassName}
          footer={m.footer}
        />
      ))}
    </div>
  );
}
