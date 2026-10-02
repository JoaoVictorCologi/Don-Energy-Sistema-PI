import { useState } from "react";
import { CLIENTES_INICIAIS, SEGMENTOS } from "../data/mockClientes";
import type { Cliente } from "../types";

export function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>(CLIENTES_INICIAIS);
  const [busca, setBusca] = useState("");
  const [segmento, setSegmento] = useState<(typeof SEGMENTOS)[number]>("Todos");

  const q = busca.trim().toLowerCase();
  const filtrados = clientes.filter(
    (c) =>
      (segmento === "Todos" || c.segmento === segmento) &&
      (!q || c.nome.toLowerCase().includes(q) || c.cidade.toLowerCase().includes(q))
  );

  function excluirCliente(nome: string) {
    setClientes((cs) => cs.filter((c) => c.nome !== nome));
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
        <div>
          <h1 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-1">Clientes</h1>
          <p className="text-sm text-text-secondary">
            {filtrados.length} de {clientes.length} clientes
          </p>
        </div>
        <button className="h-[42px] px-5 rounded-lg bg-brand-orange text-white font-heading text-sm font-semibold cursor-pointer hover:bg-brand-orange-hover">
          Novo cliente
        </button>
      </div>

      <div className="flex gap-2.5 flex-wrap mb-4.5">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por nome ou cidade"
          className="flex-1 min-w-[260px] h-[42px] px-3.5 border border-border-input rounded-lg bg-white text-sm outline-none focus:border-brand-blue"
        />
        {SEGMENTOS.map((s) => {
          const ativo = segmento === s;
          return (
            <button
              key={s}
              onClick={() => setSegmento(s)}
              className={`h-[42px] px-4 rounded-lg text-[13px] font-medium cursor-pointer ${
                ativo ? "bg-brand-blue border border-brand-blue text-white" : "bg-white border border-border-input text-text-secondary-2"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-border rounded-[10px] overflow-hidden overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[1.8fr_1.2fr_1.2fr_1fr_96px] gap-4 px-[22px] py-3.5 border-b border-border bg-[#FAFBFC] text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <div>Nome</div>
            <div>Telefone</div>
            <div>Cidade</div>
            <div>Segmento</div>
            <div className="text-right">Ações</div>
          </div>

          {filtrados.map((c) => (
            <div key={c.nome} className="grid grid-cols-[1.8fr_1.2fr_1.2fr_1fr_96px] gap-4 px-[22px] py-3.5 border-b border-[#EEF1F5] items-center text-sm">
              <div className="font-medium">{c.nome}</div>
              <div className="text-text-secondary-2">{c.telefone}</div>
              <div className="text-text-secondary-2">{c.cidade}</div>
              <div className="text-text-secondary-2">{c.segmento}</div>
              <div className="flex gap-2 justify-end">
                <button title="Editar" className="w-[30px] h-[30px] flex items-center justify-center border border-border rounded-md bg-white text-text-secondary-2 hover:border-brand-blue hover:text-brand-blue cursor-pointer">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M4 20h4L20 8l-4-4L4 16v4z" />
                  </svg>
                </button>
                <button
                  title="Excluir"
                  onClick={() => excluirCliente(c.nome)}
                  className="w-[30px] h-[30px] flex items-center justify-center border border-border rounded-md bg-white text-text-secondary-2 hover:border-red-600 hover:text-red-600 cursor-pointer"
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {filtrados.length === 0 && (
            <div className="px-[22px] py-9 text-center text-sm text-text-secondary">Nenhum cliente encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
}
