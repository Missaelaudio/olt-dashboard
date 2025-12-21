import React, { useState } from "react";
import { api } from "@/core/api/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  UploadCloud,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  X,
} from "lucide-react";

interface ErrorDetail {
  row: number;
  olt?: number;
  slot?: number;
  field: string;
  value: string;
  expected: string;
}

const MappingDashboard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "warning";
  } | null>(null);
  const [manualData, setManualData] = useState({
    olt: "",
    slot: "",
    port: "",
    odf: "",
    buffer: "",
    hilo: "",
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setMessage(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/api/mapping/upload", formData);
      setResult(response);
      setMessage({
        text: "¡Base de datos sincronizada correctamente!",
        type: "success",
      });
      setFile(null);
    } catch (err: any) {
      setMessage({
        text:
          err.response?.data?.error ||
          "Falla crítica en la lectura del archivo",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await api.post("/api/mapping/manual", manualData);
      setMessage({
        text: "Registro manual completado exitosamente",
        type: "success",
      });
      setManualData({
        olt: "",
        slot: "",
        port: "",
        odf: "",
        buffer: "",
        hilo: "",
      });
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.error || "Error al procesar el registro",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 max-w-[1300px] mx-auto animate-in fade-in duration-700 h-full flex flex-col relative pb-20">
      {/* Header — Enterprise Polish */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-slate-900 dark:bg-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/5 shrink-0 transition-colors duration-300">
              <UploadCloud className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-none transition-colors duration-300">
                Gestión de Mapeos
              </h2>
              <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium mt-2 leading-relaxed max-w-xl transition-colors duration-300">
                Sincroniza el inventario de la red y mapea terminales OLT con
                ODFs mediante protocolos de importación masiva o manual.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-none font-bold uppercase tracking-[0.15em] text-[10px] px-4 py-2 rounded-lg shadow-none transition-colors duration-300">
            Formato: .XLSX
          </Badge>
          <Badge className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-none font-bold uppercase tracking-[0.15em] text-[10px] px-4 py-2 rounded-lg shadow-none transition-colors duration-300">
            Estado: Seguro
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start pb-8">
        <div className="xl:col-span-5">
          <div className="enterprise-card p-8 group">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-brand-purple rounded-full transition-colors duration-300"></div>
              <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-[0.25em] transition-colors duration-300">
                Importación Masiva
              </h3>
            </div>

            <form onSubmit={handleUpload} className="space-y-8">
              <div
                className={`
                relative group border border-dashed rounded-xl p-10 transition-all duration-300 text-center flex flex-col items-center justify-center gap-4 cursor-pointer
                ${
                  file
                    ? "border-emerald-500 bg-emerald-50/20 dark:bg-emerald-900/10"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-brand-purple/30 dark:hover:border-brand-purple/50"
                }
              `}
              >
                <input
                  id="file-upload"
                  type="file"
                  title="Subir archivo Excel"
                  className="absolute inset-0 opacity-0 cursor-pointer z-20"
                  accept=".xlsx, .xls"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                <div
                  className={`
                  h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300
                  ${file ? "bg-emerald-500 text-white" : "bg-white dark:bg-slate-800 text-brand-purple dark:text-white/90 border border-slate-200 dark:border-slate-700 shadow-sm"}
                `}
                >
                  {file ? (
                    <CheckCircle2 className="h-8 w-8" />
                  ) : (
                    <FileSpreadsheet className="h-8 w-8" />
                  )}
                </div>

                <div className="space-y-2">
                  <p className="text-[14px] font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    {file ? file.name : "Seleccionar Archivo"}
                  </p>
                  <p className="text-[12px] text-slate-400 dark:text-slate-400 font-medium">
                    {file
                      ? "Listo para sincronizar"
                      : "Arrastra tu reporte de mapeo aquí"}
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!file || loading}
                className="w-full h-14 bg-slate-900 dark:bg-brand-purple hover:bg-black dark:hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all active:scale-[0.98] disabled:opacity-20 text-[13px] uppercase tracking-[0.2em] shadow-xl shadow-brand-purple/10"
              >
                {loading ? (
                  <span className="flex items-center gap-2 font-bold animate-pulse">
                    Procesando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Sincronizar Base de Datos
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="xl:col-span-7">
          <div className="enterprise-card p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-slate-900 dark:bg-brand-purple rounded-full transition-colors duration-300"></div>
                <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-[0.25em] transition-colors duration-300">
                  Registro Directo
                </h3>
              </div>
            </div>

            <form
              onSubmit={handleManualSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
            >
              {[
                {
                  id: "olt",
                  label: "Terminal Principal",
                  placeholder: "Ej. OLT-01",
                },
                { id: "slot", label: "Slot Expansión", placeholder: "Slot ID" },
                { id: "port", label: "Puerto GPON", placeholder: "Port No." },
                { id: "odf", label: "Nombre ODF", placeholder: "Ej. ODF-B1" },
                {
                  id: "buffer",
                  label: "Color Buffer",
                  placeholder: "Ej. Azul",
                },
                { id: "hilo", label: "Número Hilo", placeholder: "Cable ID" },
              ].map((field) => (
                <div key={field.id} className="space-y-2.5">
                  <Label
                    htmlFor={`manual-${field.id}`}
                    className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1 transition-colors duration-300"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={`manual-${field.id}`}
                    placeholder={field.placeholder}
                    value={manualData[field.id as keyof typeof manualData]}
                    onChange={(e) =>
                      setManualData({
                        ...manualData,
                        [field.id]: e.target.value,
                      })
                    }
                    className="h-12 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-slate-900/5 dark:focus:ring-brand-purple/10 transition-all text-[14px] font-semibold dark:text-white"
                  />
                </div>
              ))}
              <div className="sm:col-span-2 pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl shadow-lg shadow-brand-purple/10 transition-all active:scale-[0.98] text-[13px] uppercase tracking-[0.2em]"
                >
                  Garantizar Registro Manual
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {(message || (result && result.errors?.length > 0)) && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-50 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div
            className={`flex items-center h-14 px-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-2xl min-w-[380px] max-w-[600px] transition-colors duration-300 ${
              message?.type === "success"
                ? "border-emerald-500/20"
                : message?.type === "warning"
                  ? "border-amber-500/20"
                  : "border-rose-500/20"
            }`}
          >
            <div
              className={`h-2.5 w-2.5 rounded-full mr-4 ${
                message?.type === "success"
                  ? "bg-emerald-500"
                  : message?.type === "warning"
                    ? "bg-amber-500"
                    : "bg-rose-500"
              }`}
            />
            <p className="text-[14px] font-bold text-slate-800 dark:text-white truncate flex-1 leading-none tracking-tight transition-colors duration-300">
              {message?.text}
            </p>
            <button
              onClick={() => setMessage(null)}
              title="Cerrar notificación"
              aria-label="Cerrar notificación"
              className="ml-6 text-slate-300 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {result && result.errors?.length > 0 && (
            <div className="w-[650px] max-h-[220px] overflow-auto grid grid-cols-2 gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl scrollbar-hide animate-in zoom-in-95 transition-colors duration-300">
              {result.errors.slice(0, 10).map((err: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-[12px] bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 border border-slate-100 dark:border-slate-700 group hover:border-slate-300 dark:hover:border-slate-500 transition-all"
                >
                  <span className="font-bold text-slate-400 dark:text-slate-500 shrink-0">
                    #{err.row}
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold shrink-0">
                    {err.field}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                  <span className="font-bold text-rose-500 truncate">
                    {err.expected}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MappingDashboard;
