import type { Cliente, ClienteRecente, Metrica } from "../types";

export const CLIENTES_INICIAIS: Cliente[] = [
  { nome: "Sonia Capellari", telefone: "(19) 99812-4407", cidade: "Mococa", segmento: "Residencial" },
  { nome: "Carlos Moraes", telefone: "(19) 99745-1120", cidade: "Mococa", segmento: "Comercial" },
  { nome: "Israel Spalato", telefone: "(19) 98230-7761", cidade: "Casa Branca", segmento: "Rural" },
  { nome: "Agropecuária Vale Verde", telefone: "(19) 3656-2210", cidade: "São José do Rio Pardo", segmento: "Usina" },
  { nome: "Marcia Bertolucci", telefone: "(19) 99187-3345", cidade: "Tapiratiba", segmento: "Residencial" },
  { nome: "Padaria Central", telefone: "(19) 3651-8890", cidade: "Mococa", segmento: "Comercial" },
  { nome: "Sítio Boa Vista", telefone: "(19) 99402-5518", cidade: "Arceburgo", segmento: "Rural" },
  { nome: "Eduardo Nakamura", telefone: "(19) 99633-0072", cidade: "Guaxupé", segmento: "Residencial" },
];

export const RECENTES: ClienteRecente[] = [
  { nome: "Sonia Capellari", cidade: "Mococa", status: "Concluída" },
  { nome: "Carlos Moraes", cidade: "Mococa", status: "Em andamento" },
  { nome: "Israel Spalato", cidade: "Casa Branca", status: "Concluída" },
  { nome: "Agropecuária Vale Verde", cidade: "São José do Rio Pardo", status: "Em andamento" },
  { nome: "Marcia Bertolucci", cidade: "Tapiratiba", status: "Concluída" },
];

export const METRICAS: Metrica[] = [
  { label: "Clientes", value: "48", note: "+6 neste mês" },
  { label: "Instalações ativas", value: "35", note: "3 em campo hoje" },
  { label: "Orçamentos abertos", value: "9", note: "4 aguardando visita" },
  { label: "Taxa de aprovação", value: "72%", note: "+5 p.p. vs. agosto" },
];

export const SEGMENTOS: Array<"Todos" | Cliente["segmento"]> = ["Todos", "Residencial", "Comercial", "Rural", "Usina"];
