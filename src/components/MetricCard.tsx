import type { Metrica } from "../types";

export function MetricCard({ label, value, note }: Metrica) {
  return (
    <div className="bg-white border border-border rounded-[10px] px-[22px] py-5">
      <div className="text-sm font-medium text-text-secondary mb-2.5">{label}</div>
      <div className="font-heading text-[32px] font-semibold tracking-[-0.02em] leading-none">{value}</div>
      <div className="text-xs font-medium text-brand-green-text mt-2">{note}</div>
    </div>
  );
}
