import React, { useState, useEffect } from "react";
import {
  Monitor,
  Bell,
  Download,
  Globe,
  Clock,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Moon,
  Sun,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SettingsPage: React.FC = () => {
  const [pdfExport, setPdfExport] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
  };

  const handleClearCache = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      {/* Introduction */}
      <div className="flex flex-col gap-1 px-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight dark:text-white transition-colors duration-300">
          Preferencias Locales
        </h2>
        <p className="text-sm text-slate-500 font-medium dark:text-slate-400 transition-colors duration-300">
          Personalice su experiencia de visualización y exportación. Estos
          ajustes solo afectan a su navegador actual.
        </p>
      </div>

      {/* Service Status Monitor */}
      <div className="w-full bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
        <div className="flex items-center gap-6">
          <div className="h-14 w-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/30 shrink-0 transition-colors duration-300">
            <CheckCircle2 className="h-7 w-7 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white transition-colors duration-300">
              Sistema Operativo
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium transition-colors duration-300">
              Todos los servicios de red están activos y operativos.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-300 transition-colors duration-300">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 py-2 px-4 rounded-lg border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <Clock className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span>Uptime: 99.9%</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 py-2 px-4 rounded-lg border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <Globe className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <span>v2.4.0</span>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Export Preferences */}
        <div className="enterprise-card p-8 flex flex-col h-full shadow-sm hover:border-brand-purple/30 transition-colors bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors duration-300">
              <Download className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide transition-colors duration-300">
              Exportación
            </h4>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4 flex-1 leading-relaxed transition-colors duration-300">
            Defina el formato predeterminado para los reportes de inventario.
          </p>

          <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2 font-medium transition-colors duration-300">
            {pdfExport
              ? "Se generarán archivos .PDF (Solo Lectura)"
              : "Se generarán archivos .XLSX (Editables)"}
          </p>

          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors duration-300">
              Formato PDF
            </span>
            <Switch
              checked={pdfExport}
              onCheckedChange={setPdfExport}
              className="data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700 data-[state=checked]:bg-brand-purple border-none"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="enterprise-card p-8 flex flex-col h-full shadow-sm hover:border-brand-purple/30 transition-colors bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 transition-colors duration-300">
              <Bell className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide transition-colors duration-300">
              Alertas
            </h4>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 flex-1 leading-relaxed transition-colors duration-300">
            Reciba notificaciones emergentes en pantalla cuando una operación
            finalice.
          </p>

          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors duration-300">
              Notificaciones
            </span>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              className="data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700 data-[state=checked]:bg-brand-purple border-none"
            />
          </div>
        </div>

        {/* Interface Settings */}
        <div className="enterprise-card p-8 flex flex-col h-full shadow-sm hover:border-brand-purple/30 transition-colors bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-violet-600 dark:text-violet-400 transition-colors duration-300">
              <Monitor className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide transition-colors duration-300">
              Interfaz
            </h4>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 flex-1 leading-relaxed transition-colors duration-300">
            Cambie entre el modo claro y oscuro para adaptar la visualización.
          </p>

          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2 transition-colors duration-300">
              {darkMode ? (
                <Moon className="h-4 w-4 text-violet-500 dark:text-violet-400" />
              ) : (
                <Sun className="h-4 w-4 text-amber-500" />
              )}
              Modo Oscuro
            </span>
            <Switch
              checked={darkMode}
              onCheckedChange={handleDarkModeToggle}
              className="data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700 data-[state=checked]:bg-brand-purple border-none"
            />
          </div>
        </div>
      </div>

      {/* Cache & Session */}
      <div className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700 shrink-0 transition-colors duration-300">
            <AlertCircle className="h-5 w-5 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
            Si experimenta problemas de visualización, puede limpiar la memoria
            local del navegador.
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="shrink-0 font-bold text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:text-rose-600 hover:border-rose-200 transition-all duration-300"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Limpiar Caché
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white dark:bg-slate-900 border dark:border-slate-800 transition-colors duration-300">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-slate-900 dark:text-white">
                ¿Está seguro que desea limpiar la caché?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-slate-500 dark:text-slate-400">
                Esta acción eliminará los datos de sesión y preferencias
                locales. Tendrá que iniciar sesión nuevamente en la plataforma.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors duration-300">
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleClearCache}
                className="bg-rose-600 hover:bg-rose-700 text-white border-none"
              >
                Sí, limpiar caché
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default SettingsPage;
