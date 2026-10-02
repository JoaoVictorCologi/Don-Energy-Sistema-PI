import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-[400px] bg-white border border-border rounded-xl px-9 py-10">
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center mb-2.5">
            <svg width={20} height={20} viewBox="0 0 24 24" fill="#D88739" aria-hidden>
              <polygon points="13,2 4,14 10,14 9,22 20,9 13,9" />
            </svg>
          </div>
          <div className="font-heading font-bold text-[22px] tracking-[-0.01em]">Don Energy</div>
          <div className="text-[13px] text-brand-green-text font-medium">Sistema interno</div>
        </div>

        <label className="block text-[13px] font-medium text-text-secondary-2 mb-1.5">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@donenergy.com.br"
          className="w-full h-11 px-3.5 border border-border-input rounded-lg text-sm outline-none mb-4.5 focus:border-brand-blue"
        />

        <label className="block text-[13px] font-medium text-text-secondary-2 mb-1.5">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="••••••••"
          className="w-full h-11 px-3.5 border border-border-input rounded-lg text-sm outline-none focus:border-brand-blue"
        />

        <div className="flex justify-end my-3 mb-5.5">
          <a href="#" className="text-[13px] text-brand-blue">Esqueceu a senha?</a>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-[46px] rounded-lg bg-brand-orange text-white font-heading text-[15px] font-semibold cursor-pointer hover:bg-brand-orange-hover"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
