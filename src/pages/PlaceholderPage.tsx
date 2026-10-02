interface PlaceholderPageProps {
  titulo: string;
}

export function PlaceholderPage({ titulo }: PlaceholderPageProps) {
  return (
    <div>
      <h1 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-1">{titulo}</h1>
      <p className="text-sm text-text-secondary mb-7">Módulo em construção.</p>
      <div className="bg-white border border-dashed border-border-input rounded-[10px] px-6 py-16 text-center font-mono text-xs text-[#8B96A5]">
        tela de {titulo}
      </div>
    </div>
  );
}
