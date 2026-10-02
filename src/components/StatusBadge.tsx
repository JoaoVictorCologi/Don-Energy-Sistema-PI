import type { StatusInstalacao } from "../types";

interface StatusBadgeProps {
  status: StatusInstalacao;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const verde = status === "Concluída";
  const classes = verde
    ? "bg-badge-green-bg text-badge-green-text"
    : "bg-badge-orange-bg text-badge-orange-text";

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${classes}`}>
      {status}
    </span>
  );
}
