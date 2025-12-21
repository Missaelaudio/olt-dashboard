import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, Eye, EyeOff } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="h-screen w-full flex flex-col relative bg-white dark:bg-slate-950 font-sans overflow-hidden select-none transition-colors duration-300">
      {/* Background Section — Minimalist Gradient */}
      <div
        className="absolute inset-0 z-0 bg-neutral-50/50 dark:bg-slate-900/50 transition-colors duration-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 65%)",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#211C52] via-[#6150E1] to-[#211C52] dark:from-[#1a1640] dark:via-[#5442d0] dark:to-[#1a1640] opacity-100 transition-colors duration-300" />
      </div>

      {/* Header — Clean and minimal - Responsive */}
      <header className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex items-center shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-black dark:bg-white flex items-center justify-center shadow-lg shadow-black/5 dark:shadow-white/5 transition-colors duration-300">
            <Layers className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-white dark:text-black transition-colors duration-300" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tighter text-black dark:text-white uppercase transition-colors duration-300">
            LumenHive
          </span>
        </div>
      </header>

      {/* Main Content — Centered Form - Responsive */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Login Container — Responsive */}
        <div className="w-full max-w-[26.25rem] bg-white dark:bg-slate-900 border border-neutral-100 dark:border-slate-800 shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.02)] dark:shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.4)] rounded-xl sm:rounded-2xl flex flex-col items-center p-6 sm:p-8 lg:p-12 transition-all duration-300">
          <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-[2rem] font-semibold text-black dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Acceso al Sistema
            </h1>
            <p className="text-xs sm:text-sm md:text-[0.875rem] text-neutral-400 dark:text-slate-500 font-medium tracking-wide transition-colors duration-300">
              La forma rápida y sencilla de automatizar su red
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-0">
            {/* Input Group — Responsive stacked design */}
            <div className="space-y-0 border border-neutral-200 dark:border-slate-700 rounded-md sm:rounded-lg transition-colors duration-300">
              {/* Email Field */}
              <div className="p-4 sm:p-5 md:p-6 border-b border-neutral-200 dark:border-slate-700 hover:bg-neutral-50/30 dark:hover:bg-slate-800/30 transition-colors group">
                <Label
                  htmlFor="email"
                  className="text-[0.625rem] font-bold text-neutral-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-2 sm:mb-2.5 block group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                >
                  Correo Electrónico
                </Label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@lumenhive.net"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-black dark:text-white font-medium text-sm sm:text-base md:text-[1rem] placeholder:text-neutral-200 dark:placeholder:text-slate-700 outline-none transition-colors duration-300"
                />
              </div>

              {/* Password Field */}
              <div className="p-4 sm:p-5 md:p-6 relative hover:bg-neutral-50/30 dark:hover:bg-slate-800/30 transition-colors group">
                <Label
                  htmlFor="password"
                  className="text-[0.625rem] font-bold text-neutral-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-2 sm:mb-2.5 block group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                >
                  Contraseña Maestra
                </Label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-black dark:text-white font-medium text-sm sm:text-base md:text-[1rem] placeholder:text-neutral-200 dark:placeholder:text-slate-700 pr-8 sm:pr-10 outline-none transition-colors duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Ver contraseña"
                    }
                    title={
                      showPassword ? "Ocultar contraseña" : "Ver contraseña"
                    }
                    className="absolute right-0 h-4 w-4 sm:h-5 sm:w-5 text-neutral-300 dark:text-slate-600 hover:text-black dark:hover:text-white transition-colors outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Checkbox — Responsive */}
            <div className="flex items-center space-x-2 sm:space-x-3 py-6 sm:py-8 md:py-10">
              <div className="relative flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5">
                <Checkbox
                  id="remember"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-none border-neutral-300 dark:border-slate-700 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:border-black dark:data-[state=checked]:border-white dark:data-[state=checked]:text-black focus-visible:ring-0 transition-all"
                />
              </div>
              <label
                htmlFor="remember"
                className="text-[0.688rem] sm:text-[0.75rem] font-medium text-neutral-500 dark:text-slate-400 leading-none cursor-pointer select-none transition-colors duration-300"
              >
                Acepto los términos de servicio y políticas de red
              </label>
            </div>

            {/* Botón de Ingreso — Responsive */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 sm:h-13 md:h-14 bg-[#1A1C21] hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-black font-bold rounded-lg sm:rounded-xl transition-all active:scale-[0.99] disabled:opacity-50 text-xs sm:text-[0.8125rem] uppercase tracking-[0.2em] shadow-none"
            >
              {loading ? (
                <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white/20 dark:border-black/20 border-t-white dark:border-t-black rounded-full animate-spin"></div>
              ) : (
                "Ingresar al Sistema"
              )}
            </Button>
          </form>

          {/* Bottom Divider and Support — Responsive */}
          <div className="w-full flex flex-col items-center mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8">
            <div className="w-full h-[0.0625rem] bg-neutral-100 dark:bg-slate-800 relative flex justify-center items-center transition-colors duration-300">
              <span className="bg-white dark:bg-slate-900 px-3 sm:px-5 text-[0.625rem] font-bold text-neutral-300 dark:text-slate-600 uppercase tracking-widest transition-colors duration-300">
                Ó
              </span>
            </div>
            <p className="text-[0.688rem] sm:text-[0.688rem] font-bold text-neutral-300 dark:text-slate-600 uppercase tracking-[0.25em] hover:text-neutral-400 dark:hover:text-slate-500 cursor-pointer transition-colors text-center">
              Soporte Técnico NOC
            </p>
          </div>
        </div>
      </div>

      {/* Footer — Responsive */}
      <footer className="relative z-20 w-full py-6 sm:py-8 md:py-10 flex flex-col items-center shrink-0">
        <p className="text-[0.625rem] sm:text-[0.688rem] font-medium text-neutral-400 dark:text-slate-600 uppercase tracking-[0.1em] opacity-80 text-center px-4 transition-colors duration-300">
          © 2024 - 2025 LumenHive. Todos los Derechos Reservados.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
