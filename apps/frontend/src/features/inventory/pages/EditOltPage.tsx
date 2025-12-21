import React, { useState, useEffect } from "react";
import { api } from "@/core/api/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Save,
  Database,
  Hash,
  X,
  Server,
  Layers,
  Activity,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Olt {
  id: number;
  name: string;
}

interface Port {
  id: number;
  oltId: number;
  slot: number;
  portNumber: number;
  status: string;
  label: string;
}

const EditOltPage: React.FC = () => {
  const [olts, setOlts] = useState<Olt[]>([]);
  const [ports, setPorts] = useState<Port[]>([]);
  const [selectedOlt, setSelectedOlt] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedPort, setSelectedPort] = useState<number | null>(null);

  const [status, setStatus] = useState("available");
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "warning";
  } | null>(null);

  useEffect(() => {
    api.get<Olt[]>("/api/olts").then(setOlts).catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedOlt) {
      api
        .get<Port[]>(`/api/olts/${selectedOlt}/ports`)
        .then(setPorts)
        .catch(console.error);
    } else {
      setPorts([]);
    }
  }, [selectedOlt]);

  useEffect(() => {
    if (selectedPort) {
      const port = ports.find((p) => p.id === selectedPort);
      if (port) {
        setStatus(port.status);
        setLabel(port.label || "");
      }
    }
  }, [selectedPort, ports]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPort) return;

    setLoading(true);
    setMessage(null);
    try {
      await api.put(`/api/ports/${selectedPort}`, { status, label });
      setMessage({
        text: "¡Configuración de nodo actualizada correctamente!",
        type: "success",
      });

      const updatedPorts = await api.get<Port[]>(
        `/api/olts/${selectedOlt}/ports`
      );
      setPorts(updatedPorts);
    } catch (err: any) {
      setMessage({
        text: "Fallo crítico en la actualización del puerto",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const slotsDisponibles = Array.from(new Set(ports.map((p) => p.slot))).sort(
    (a, b) => a - b
  );
  const puertosDelSlot = selectedSlot
    ? ports.filter((p) => p.slot === selectedSlot)
    : [];

  return (
    <div className="space-y-12 max-w-[1300px] mx-auto animate-in fade-in duration-700 h-full flex flex-col relative">
      {/* Header — Enterprise Tier */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
              <Database className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-none">
                Inventario Maestro
              </h2>
              <p className="text-[14px] text-slate-500 font-medium mt-2 leading-relaxed max-w-xl">
                Administración centralizada de infraestructura física. Configura
                estados operativos y etiquetas de referencia.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-brand-purple text-white border-none font-bold uppercase tracking-[0.15em] text-[10px] px-5 py-2.5 rounded-lg">
            Nodo Activo:{" "}
            {selectedOlt
              ? olts.find((o) => o.id === selectedOlt)?.name
              : "Ninguno"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Panel: Localization */}
        <div className="xl:col-span-5">
          <div className="enterprise-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-brand-purple rounded-full"></div>
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                Localización del Nodo
              </h3>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 ml-1">
                  <Server className="h-3.5 w-3.5 text-slate-400" />
                  <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                    Terminal OLT
                  </Label>
                </div>
                <Select
                  onValueChange={(v) => {
                    setSelectedOlt(Number(v));
                    setSelectedSlot(null);
                    setSelectedPort(null);
                  }}
                  value={selectedOlt?.toString() || ""}
                >
                  <SelectTrigger className="h-14 border-slate-200 bg-slate-50/50 rounded-xl focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-[14px] font-semibold">
                    <SelectValue placeholder="Seleccione Terminal..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 shadow-2xl">
                    {olts.map((olt) => (
                      <SelectItem
                        key={olt.id}
                        value={olt.id.toString()}
                        className="py-3 font-semibold"
                      >
                        {olt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedOlt && slotsDisponibles.length > 0 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 ml-1">
                    <Cpu className="h-3.5 w-3.5 text-slate-400" />
                    <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                      Slot de Hardware
                    </Label>
                  </div>
                  <Select
                    onValueChange={(v) => {
                      setSelectedSlot(Number(v));
                      setSelectedPort(null);
                    }}
                    value={selectedSlot?.toString() || ""}
                  >
                    <SelectTrigger className="h-14 border-slate-200 bg-slate-50/50 rounded-xl focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-[14px] font-semibold">
                      <SelectValue placeholder="Seleccione Slot..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-200 shadow-2xl">
                      {slotsDisponibles.map((slot) => (
                        <SelectItem
                          key={slot}
                          value={slot.toString()}
                          className="py-3 font-semibold"
                        >
                          Slot ID #{slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedSlot && puertosDelSlot.length > 0 && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 ml-1">
                    <Layers className="h-3.5 w-3.5 text-slate-400" />
                    <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                      Puerto GPON
                    </Label>
                  </div>
                  <Select
                    onValueChange={(v) => setSelectedPort(Number(v))}
                    value={selectedPort?.toString() || ""}
                  >
                    <SelectTrigger className="h-14 border-slate-200 bg-slate-50/50 rounded-xl focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-[14px] font-semibold">
                      <SelectValue placeholder="Seleccione Puerto..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-200 shadow-2xl max-h-[350px]">
                      {puertosDelSlot.map((port) => (
                        <SelectItem
                          key={port.id}
                          value={port.id.toString()}
                          className="py-3 px-2"
                        >
                          <div className="flex items-center justify-between w-full font-semibold">
                            <span>GPON Port {port.portNumber}</span>
                            <Badge
                              className={`border-none text-[8px] font-bold uppercase tracking-widest py-0.5 px-2 ${
                                port.status === "occupied"
                                  ? "bg-emerald-50 text-emerald-600"
                                  : port.status === "maintenance"
                                    ? "bg-amber-50 text-amber-600"
                                    : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {port.status === "occupied"
                                ? "ACTIVO"
                                : port.status === "maintenance"
                                  ? "MANT"
                                  : "LIBRE"}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Configuration */}
        <div className="xl:col-span-7 h-full">
          {!selectedPort ? (
            <div className="enterprise-card h-64 flex flex-col items-center justify-center p-12 text-center bg-slate-50/20 border-dashed">
              <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-300 mb-4 shadow-sm">
                <Activity className="h-6 w-6" />
              </div>
              <p className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Localización Incompleta
              </p>
              <p className="text-[13px] text-slate-400 font-medium max-w-xs mt-2 leading-relaxed">
                Selecciona una terminal y un puerto para habilitar la consola de
                configuración operativa.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleEdit}
              className="animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <div className="enterprise-card p-10 space-y-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                      Consola de Ajustes
                    </h3>
                  </div>
                  <Badge className="bg-slate-50 text-slate-400 border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                    ID Puerto: #{selectedPort}
                  </Badge>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Estado Operativo en Tiempo Real
                    </Label>
                    <Select onValueChange={setStatus} value={status}>
                      <SelectTrigger className="h-16 border-slate-200 bg-white rounded-xl focus:ring-4 focus:ring-slate-900/5 transition-all text-[15px] font-bold">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-slate-200 shadow-2xl">
                        <SelectItem
                          value="available"
                          className="py-4 font-bold text-slate-500"
                        >
                          DISPONIBLE PARA SERVICIO
                        </SelectItem>
                        <SelectItem
                          value="occupied"
                          className="py-4 font-bold text-emerald-600"
                        >
                          OCUPADO / CLIENTE ACTIVO
                        </SelectItem>
                        <SelectItem
                          value="maintenance"
                          className="py-4 font-bold text-amber-600"
                        >
                          BLOQUEO POR MANTENIMIENTO
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Etiqueta / Identificador de Enlace
                    </Label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                      <Input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="Ingrese Alias o Referencia..."
                        className="h-16 pl-12 border-slate-200 bg-slate-50/50 rounded-xl focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-[15px] font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-xl transition-all active:scale-[0.98] text-[14px] uppercase tracking-[0.2em]"
                  >
                    {loading ? "SINCRONIZANDO..." : "COMPROMETER CAMBIOS"}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {message && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div
            className={`flex items-center h-14 px-6 rounded-2xl border bg-white shadow-2xl min-w-[380px] max-w-[600px] ${
              message.type === "success"
                ? "border-emerald-500/20"
                : "border-rose-500/20"
            }`}
          >
            <div
              className={`h-2.5 w-2.5 rounded-full mr-4 ${message.type === "success" ? "bg-emerald-500" : "bg-rose-500"}`}
            />
            <p className="text-[14px] font-bold text-slate-800 truncate flex-1 leading-none tracking-tight">
              {message.text}
            </p>
            <button
              onClick={() => setMessage(null)}
              className="ml-6 text-slate-300 hover:text-slate-900 transition-colors"
              aria-label="Cerrar mensaje"
              title="Cerrar mensaje"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditOltPage;
