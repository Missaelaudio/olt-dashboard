import React from "react";
import {
  Shield,
  Mail,
  Fingerprint,
  Key,
  History,
  Smartphone,
  BadgeCheck,
  SearchX,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfilePage: React.FC = () => {
  const stats = [
    {
      label: "Nivel de Acceso",
      value: "Root Admin",
      icon: Shield,
      color: "text-brand-purple",
    },
    {
      label: "Sesiones Activas",
      value: "1 Dispositivo",
      icon: Smartphone,
      color: "text-brand-blue",
    },
    {
      label: "MFA Check",
      value: "Verificado",
      icon: Fingerprint,
      color: "text-emerald-500",
    },
  ];

  // Historial vacío por defecto como solicitó el usuario
  const activityLog: any[] = [];

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 dark:bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/5 dark:bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 p-8 md:p-10">
          {/* Avatar Container */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-2xl opacity-50 blur group-hover:opacity-80 transition duration-500"></div>
            <div className="relative h-32 w-32 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-inner overflow-hidden transition-colors duration-300">
              <span className="text-4xl font-bold text-brand-purple dark:text-white tracking-widest transition-colors duration-300">
                AD
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-emerald-500 rounded-lg border-4 border-white dark:border-slate-900 flex items-center justify-center text-white shadow-sm transition-colors duration-300">
              <BadgeCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                Perfil del gestor
              </h1>
              <p className="text-slate-500 dark:text-slate-300 font-medium flex items-center justify-center md:justify-start gap-2 transition-colors duration-300">
                <Mail className="h-4 w-4 text-slate-400 dark:text-slate-400" />{" "}
                admin@lumenhive.net
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                >
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  <div className="text-xs">
                    <span className="text-slate-500 dark:text-slate-400 block uppercase text-[10px] tracking-wider leading-none transition-colors duration-300">
                      {stat.label}
                    </span>
                    <span className="text-slate-900 dark:text-white font-bold leading-none transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <Badge className="bg-brand-purple text-white border-none py-2 px-4 shadow-sm hover:bg-brand-purple/90">
              LumenHive ID: 994-22X-QA
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Security Context */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-1">
            <Shield className="h-4 w-4 text-slate-400 dark:text-slate-400" />
            <span className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-widest transition-colors duration-300">
              Credenciales & Seguridad
            </span>
          </div>

          <div className="enterprise-card p-6 space-y-6 shadow-sm bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                <Key className="h-5 w-5 text-slate-400 dark:text-slate-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  Contraseña Maestra
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3 transition-colors duration-300">
                  Ultima actualización: Hace 45 días.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-md cursor-not-allowed opacity-50 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
                  Cambio restringido
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-slate-100 dark:bg-slate-800 transition-colors duration-300" />

            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/30 transition-colors duration-300">
                <Fingerprint className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300">
                  Biometría
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-300">
                  TouchID habilitado para inicio de sesión rápido.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-5 transition-colors duration-300">
            <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed font-medium transition-colors duration-300">
              <strong>Nota de Seguridad:</strong> Su rol de{" "}
              <span className="underline">Solo Lectura Avanzada</span> no le
              permite modificar la arquitectura de red ni los parámetros de
              hardware OLT.
            </p>
          </div>
        </div>

        {/* Right Column: Audit Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-slate-400 dark:text-slate-400" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-widest transition-colors duration-300">
                Auditoría de Sesión
              </span>
            </div>
            <Badge
              variant="outline"
              className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold border-slate-200 dark:border-slate-700 transition-colors duration-300"
            >
              En Vivo
            </Badge>
          </div>

          <div className="enterprise-card p-0 overflow-hidden shadow-sm min-h-[300px] flex flex-col bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 px-6 py-3 flex items-center gap-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider transition-colors duration-300">
              <span className="w-24">Timestamp</span>
              <span className="flex-1">Evento</span>
              <span>Detalles</span>
            </div>

            <div className="flex-1 flex flex-col">
              {activityLog.length > 0 ? (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Log Item Template (Hidden when empty) */}
                  {activityLog.map((log, idx) => (
                    <div
                      key={idx}
                      className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors p-6 flex flex-col sm:flex-row gap-4 sm:items-center"
                    >
                      <div className="w-24 shrink-0 flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white text-sm font-mono transition-colors duration-300">
                          {log.time}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium transition-colors duration-300">
                          {log.date}
                        </span>
                      </div>

                      <div className="flex-1 flex items-start gap-3">
                        <div
                          className={`mt-0.5 h-2 w-2 rounded-full shrink-0 ${
                            log.status === "security"
                              ? "bg-brand-purple"
                              : log.status === "download"
                                ? "bg-brand-blue"
                                : log.status === "write"
                                  ? "bg-amber-500"
                                  : "bg-emerald-500"
                          }`}
                        ></div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-none transition-colors duration-300">
                            {log.action}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5 transition-colors duration-300">
                            {log.status === "security" && (
                              <Shield className="h-3 w-3" />
                            )}
                            {log.status === "download" && (
                              <SearchX className="h-3 w-3" />
                            )}
                            {log.target}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <code className="text-[10px] bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 font-mono transition-colors duration-300">
                          {log.details}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center opacity-60">
                  <div className="h-16 w-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                    <SearchX className="h-8 w-8 text-slate-300 dark:text-slate-600" />
                  </div>
                  <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">
                    Sin Actividad Reciente
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs transition-colors duration-300">
                    Las acciones de consulta y exportación que realice en esta
                    sesión aparecerán aquí automáticamente.
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 text-center border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <p className="text-[10px] text-slate-400 dark:text-slate-400 font-medium transition-colors duration-300">
                Historial sincronizado con servidor de auditoría central.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
