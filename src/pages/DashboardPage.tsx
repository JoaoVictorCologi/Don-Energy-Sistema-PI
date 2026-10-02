import { Link } from "react-router-dom";
import { MetricCard } from "../components/MetricCard";
import { StatusBadge } from "../components/StatusBadge";
import { METRICAS, RECENTES } from "../data/mockClientes";

export function DashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-1">Dashboard</h1>
      <p className="text-sm text-text-secondary mb-7">Visão geral da operação — outubro de 2026</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
        {METRICAS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-heading text-base font-semibold">Últimos clientes</h2>
        <Link to="/clientes" className="text-[13px] font-medium text-brand-blue hover:text-brand-orange">
          Ver todos
        </Link>
      </div>

      <div className="bg-white border border-border rounded-[10px] overflow-hidden overflow-x-auto">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-[2fr_1.2fr_1fr] gap-4 px-[22px] py-3.5 border-b border-border bg-[#FAFBFC] text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <div>Nome</div>
            <div>Cidade</div>
            <div className="text-right">Status</div>
          </div>
          {RECENTES.map((r) => (
            <div key={r.nome} className="grid grid-cols-[2fr_1.2fr_1fr] gap-4 px-[22px] py-[15px] border-b border-[#EEF1F5] items-center text-sm">
              <div className="font-medium">{r.nome}</div>
              <div className="text-text-secondary-2">{r.cidade}</div>
              <div className="text-right">
                <StatusBadge status={r.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
