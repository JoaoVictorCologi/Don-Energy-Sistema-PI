export type Segmento = "Residencial" | "Comercial" | "Rural" | "Usina";
export type StatusInstalacao = "Concluída" | "Em andamento";
export type Screen = "login" | "dashboard" | "clientes" | "instalacoes" | "orcamentos";

export interface Cliente {
  nome: string;
  telefone: string;
  cidade: string;
  segmento: Segmento;
}

export interface ClienteRecente {
  nome: string;
  cidade: string;
  status: StatusInstalacao;
}

export interface Metrica {
  label: string;
  value: string;
  note: string;
}

export interface NavItem {
  key: Screen;
  label: string;
  href: string;
}
