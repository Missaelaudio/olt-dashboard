import { useEffect, useState } from "react";
import { api } from "@/core/api/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Port {
  id: number;
  slot: number;
  portNumber: number;
  label: string;
  status?: string;
}

interface PortMatrixProps {
  oltId: number;
}

export default function PortMatrix({ oltId }: PortMatrixProps) {
  const [ports, setPorts] = useState<Port[][]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!oltId) return;
    setLoading(true);
    api
      .get<Port[]>(`/api/olts/${oltId}/ports`)
      .then((data) => {
        const matrix: Port[][] = Array.from({ length: 16 }, () =>
          Array.from({ length: 18 }, (_, j) => ({
            id: 0,
            slot: j + 1,
            portNumber: 0,
            label: "",
            status: "available",
          }))
        );

        data.forEach((port) => {
          if (
            port.portNumber >= 1 &&
            port.portNumber <= 16 &&
            port.slot >= 1 &&
            port.slot <= 18
          ) {
            matrix[port.portNumber - 1][port.slot - 1] = port;
          }
        });
        setPorts(matrix);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [oltId]);

  if (loading) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex gap-3">
          <Skeleton className="h-12 w-20 rounded-xl bg-slate-100" />
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-xl bg-slate-100" />
          ))}
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full rounded-xl bg-slate-50" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="overflow-auto scrollbar-hide flex-1">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-b border-slate-100 sticky top-0 z-30">
              <th className="px-4 py-4 border-r border-slate-50 font-bold text-slate-400 uppercase text-[10px] tracking-[0.2em] text-center sticky left-0 bg-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.03)]">
                SLOT → <br /> PORT ↓
              </th>
              {Array.from({ length: 18 }, (_, i) => (
                <th
                  key={i}
                  className={`px-2 py-4 border-r border-slate-50 font-bold text-slate-500 uppercase text-[10px] tracking-[0.25em] text-center ${
                    i + 1 === 9 || i + 1 === 10 ? "bg-slate-50/50" : ""
                  }`}
                >
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {ports.map((row, r) => (
              <tr
                key={r}
                className="group border-b border-slate-50 hover:bg-slate-50/30 transition-colors"
              >
                <td className="px-4 py-3 font-bold text-center bg-white text-slate-800 border-r border-slate-50 text-[11px] sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.03)] group-hover:bg-slate-50 transition-colors">
                  {r + 1}
                </td>
                {row.map((port, c) => {
                  const isReserved = port.slot === 9 || port.slot === 10;
                  return (
                    <td
                      key={c}
                      className={`p-1.5 text-center border-r border-slate-50 ${isReserved ? "bg-slate-50/20" : ""}`}
                    >
                      {port.id > 0 && (
                        <div className="flex justify-center group/port">
                          <span
                            title={port.label || `Port ${port.portNumber}`}
                            className={`
                              inline-flex items-center justify-center
                              w-[28px] h-[28px] 
                              text-[10px] font-bold 
                              rounded-lg transition-all duration-300
                              ${
                                port.status === "occupied"
                                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                                  : port.status === "maintenance"
                                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                                    : "bg-slate-100 text-slate-400 border border-slate-200 group-hover/port:bg-white group-hover/port:text-brand-purple group-hover/port:border-brand-purple"
                              }
                              hover:scale-110 cursor-help
                            `}
                          >
                            {port.id}
                          </span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
