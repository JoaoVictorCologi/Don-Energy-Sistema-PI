import { Link, useLocation, useNavigate } from "react-router-dom";
import type { NavItem, Screen } from "../types";

const NAV: NavItem[] = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "clientes", label: "Clientes", href: "/clientes" },
  { key: "instalacoes", label: "Instalações", href: "/instalacoes" },
  { key: "orcamentos", label: "Orçamentos", href: "/orcamentos" },
];

const ICON_PATHS: Record<Screen, string[]> = {
  login: [],
  dashboard: ["M4 20V10", "M10 20V4", "M16 20v-7", "M22 20H3"],
  clientes: [
    "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1",
    "M9.5 6.5a3 3 0 1 1-3 3 3 3 0 0 1 3-3",
    "M21 19v-1a3.5 3.5 0 0 0-2.6-3.4",
  ],
  instalacoes: ["M3 4h18v6H3z", "M2 14h20l-1.5 6h-17z", "M9 4v6", "M15 4v6"],
  orcamentos: ["M6 3h8l4 4v14H6z", "M14 3v4h4", "M9 12h6", "M9 16h4"],
};

function Icon({ nome, cor }: { nome: Screen; cor: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={cor} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      {ICON_PATHS[nome].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-full md:w-[236px] md:flex-none bg-brand-blue px-4 py-6 flex flex-col">
      <div className="flex items-center gap-2.5 px-2 pb-7">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="#D88739" aria-hidden>
          <polygon points="13,2 4,14 10,14 9,22 20,9 13,9" />
        </svg>
        <span className="font-heading font-semibold text-base text-white">Don Energy</span>
      </div>

      <nav className="flex flex-col gap-1">
        {NAV.map((item) => {
          const isActive = location.pathname.startsWith(item.href);
          return (
            <Link
              key={item.key}
              to={item.href}
              className={`flex items-center gap-[11px] w-full px-3 py-2.5 rounded-lg text-sm ${
                isActive ? "bg-white/15 text-white font-semibold" : "text-nav-inactive font-medium hover:bg-white/10"
              }`}
            >
              <span className="flex w-[18px] justify-center">
                <Icon nome={item.key} cor={isActive ? "#FFFFFF" : "#C6D7EC"} />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 px-2 border-t border-white/15">
        <div className="text-sm font-medium text-white">Rafael Don</div>
        <div className="text-xs text-[#B9CDE8] mb-2.5">Administrador</div>
        <button onClick={() => navigate("/login")} className="bg-transparent border-none p-0 text-xs text-[#B9CDE8] hover:text-white cursor-pointer">
          Sair
        </button>
      </div>
    </aside>
  );
}
