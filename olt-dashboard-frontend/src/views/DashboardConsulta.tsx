import React, { useState, useEffect } from 'react';
import PortMatrix from '../components/PortMatrix';

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
  label?: string;
  rx?: number;
  tx?: number;
  vcc?: number;
  brand?: string;
}

const DashboardConsulta: React.FC = () => {
  const [olts, setOlts] = useState<Olt[]>([]);
  const [selectedOlt, setSelectedOlt] = useState<number | null>(null);
  const [ports, setPorts] = useState<Port[]>([]);
  const [loading, setLoading] = useState(false);

  // Cargar lista de OLTs al montar
  useEffect(() => {
    fetch('http://localhost:4000/api/olts')
      .then((res) => res.json())
      .then((data) => setOlts(data))
      .catch((err) => console.error('Error cargando OLTs:', err));
  }, []);

  const handleConsultar = () => {
    if (!selectedOlt) return;
    setLoading(true);
    fetch(`http://localhost:4000/api/olts/${selectedOlt}/ports`)
      .then((res) => res.json())
      .then((data) => {
        setPorts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error cargando puertos:', err);
        setLoading(false);
      });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Consulta de OLT</h2>

      {/* Selector y botón */}
      <div className="flex items-center space-x-4">
        <select
          value={selectedOlt ?? ''}
          onChange={(e) => setSelectedOlt(Number(e.target.value))}
          className="px-3 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione una OLT</option>
          {olts.map((olt) => (
            <option key={olt.id} value={olt.id}>
              {olt.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleConsultar}
          disabled={!selectedOlt}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Consultando...' : 'Consultar'}
        </button>
      </div>

      {/* Estado de carga */}
      {loading && (
        <p className="text-gray-500 italic">Cargando puertos...</p>
      )}

      {/* Matriz de puertos */}
      {!loading && ports.length > 0 && selectedOlt !== null && (
        <div className="mt-6">
          <PortMatrix oltId={selectedOlt} />
        </div>
      )}
    </div>
  );
};

export default DashboardConsulta;