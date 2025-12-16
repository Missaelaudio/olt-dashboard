import { useEffect, useState } from 'react';

interface Port {
  id: number;
  slot: number;
  portNumber: number;
  label: string;
  status?: string; // opcional si backend lo devuelve
}

export default function PortMatrix({ oltId }: { oltId: number }) {
  const [ports, setPorts] = useState<Port[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/olts/${oltId}/ports`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPorts(data);
        } else {
          setPorts([]);
        }
      })
      .finally(() => setLoading(false));
  }, [oltId]);

  if (loading) return <p className="text-gray-500 italic">Cargando puertos...</p>;

  // Matriz 16 filas (puertos) x 18 columnas (slots)
  const matrix: (Port | null)[][] = Array.from({ length: 16 }, () =>
    Array.from({ length: 18 }, () => null)
  );

  ports.forEach(port => {
    matrix[port.portNumber - 1][port.slot - 1] = port;
  });

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 rounded-md shadow-sm text-sm">
        <thead className="bg-blue-50 text-gray-700 font-semibold">
          <tr>
            <th className="px-3 py-2 text-left bg-blue-100">P↓/S→</th>
            {Array.from({ length: 18 }, (_, i) => (
              <th key={i} className="px-3 py-2 text-center bg-blue-100">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, r) => (
            <tr key={r} className="hover:bg-blue-50 transition">
              <td className="px-3 py-2 font-semibold text-center bg-gray-50 text-gray-700">
                {r + 1}
              </td>
              {row.map((port, c) => (
                <td
                  key={c}
                  className={`px-2 py-1 text-center border ${
                    c === 8 || c === 9 ? 'bg-gray-100' : 'bg-white'
                  }`}
                  title={
                    port
                      ? `Slot ${port.slot} | Puerto ${port.portNumber} | Label: ${port.label || 'N/A'}`
                      : ''
                  }
                >
                  {port ? (
                    <span
                      className={`inline-block text-xs font-medium px-2 py-1 rounded-full shadow-sm ${
                        port.status === 'occupied'
                          ? 'bg-red-100 text-red-700'
                          : port.status === 'maintenance'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {port.portNumber}
                    </span>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}