import React, { useState, useEffect } from "react";
import { api } from "@/core/api/client";
import PortMatrix from "../components/PortMatrix";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, MapPin, Activity, ShieldCheck, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Olt {
  id: number;
  name: string;
}

const TopologyDashboard: React.FC = () => {
  const [olts, setOlts] = useState<Olt[]>([]);
  const [selectedOlt, setSelectedOlt] = useState<number | null>(null);

  useEffect(() => {
    api.get<Olt[]>("/api/olts").then(setOlts).catch(console.error);
  }, []);

  const handleConsultar = () => {
    if (!selectedOlt) return;
  };

  return (
    <div className="space-y-6 sm:space-y-8 h-full flex flex-col relative">
      {/* Top Section — Header & Status - Responsive */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 px-1">
        <div className="space-y-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
              <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                Matriz de Topología
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5 leading-relaxed">
                Diagnóstico visual de infraestructura física y puertos GPON.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-50 border border-slate-200/60 p-1.5 rounded-xl">
          <Badge className="bg-white text-slate-600 border border-slate-200 flex items-center gap-2 px-3 sm:px-4 py-1.5 shadow-sm rounded-lg">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[0.625rem] font-bold uppercase tracking-widest mt-0.5">
              SISTEMA ACTIVO
            </span>
          </Badge>
        </div>
      </div>

      {/* Control Module — Responsive Selector Centered */}
      <div className="enterprise-card p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl space-y-4">
          <div className="space-y-2 text-left">
            <Label className="text-[0.688rem] font-bold text-slate-500 uppercase tracking-widest ml-1">
              Terminal OLT de Referencia
            </Label>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <Server className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 z-10" />
                <Select
                  onValueChange={(value) => setSelectedOlt(Number(value))}
                  value={selectedOlt?.toString() || ""}
                >
                  <SelectTrigger className="w-full h-12 sm:h-14 pl-11 bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-slate-900/5 transition-all text-sm font-bold">
                    <SelectValue placeholder="Seleccione Terminal de Red..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 shadow-2xl">
                    {olts.map((olt) => (
                      <SelectItem
                        key={olt.id}
                        value={olt.id.toString()}
                        className="py-3 font-bold text-sm"
                      >
                        {olt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleConsultar}
                disabled={!selectedOlt}
                className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all active:scale-[0.97] disabled:opacity-30 text-xs uppercase tracking-[0.2em] whitespace-nowrap"
              >
                <Search className="mr-2 sm:mr-3 h-4 w-4" />
                EXPLORAR NODO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Matrix Visualizer - Responsive */}
      {selectedOlt && (
        <div className="mt-6 flex-1 flex flex-col animate-in slide-in-from-bottom-4 duration-700 min-h-0">
          <div className="flex items-center justify-between px-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-brand-purple rounded-full"></div>
              <h3 className="text-[0.688rem] font-bold text-slate-400 uppercase tracking-[0.25em]">
                Segmentación por Slot de Hardware
              </h3>
            </div>
          </div>
          <div className="enterprise-card p-4 sm:p-6 lg:p-8 flex-1 overflow-auto bg-white/50 border-slate-100 min-h-[400px]">
            <PortMatrix oltId={selectedOlt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopologyDashboard;
