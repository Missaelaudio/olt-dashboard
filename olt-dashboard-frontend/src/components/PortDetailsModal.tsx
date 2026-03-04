import React, { useEffect, useState } from 'react';

interface PortDetailData {
  edfa: string;
  comPort: string;
  ponPort: string;
  chasis: string;
  position: string;
  odf: string;
  buffer: string;
  hilo: string;
  feeder: string;
}

interface PortDetailsModalProps {
  oltId: number;
  slot: number;
  portNumber: number;
  onClose: () => void;
}

const PortDetailsModal: React.FC<PortDetailsModalProps> = ({ oltId, slot, portNumber, onClose }) => {
  const [data, setData] = useState<PortDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Nota: Asegúrate de que este endpoint exista en tu backend (routes/mappings.ts)
        const response = await fetch(`http://localhost:4000/api/mappings/details?oltId=${oltId}&slot=${slot}&port=${portNumber}`);
        
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del puerto');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [oltId, slot, portNumber]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-bold">
            Detalles del Puerto: Slot {slot} / Puerto {portNumber}
          </h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
        </div>
        
        <div className="p-6">
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md border border-red-200 mb-4">
              {error}
            </div>
          )}

          {data && !loading && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 border">N° EDFA</th>
                    <th className="px-4 py-3 border">Puerto COM</th>
                    <th className="px-4 py-3 border">Puerto PON</th>
                    <th className="px-4 py-3 border">Chasis</th>
                    <th className="px-4 py-3 border">Posición</th>
                    <th className="px-4 py-3 border">ODF</th>
                    <th className="px-4 py-3 border">Feeder</th>
                    <th className="px-4 py-3 border">Buffer</th>
                    <th className="px-4 py-3 border">Hilo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="px-4 py-3 border font-medium text-gray-900">{data.edfa}</td>
                    <td className="px-4 py-3 border">{data.comPort}</td>
                    <td className="px-4 py-3 border">{data.ponPort}</td>
                    <td className="px-4 py-3 border">{data.chasis}</td>
                    <td className="px-4 py-3 border">{data.position}</td>
                    <td className="px-4 py-3 border">{data.odf}</td>
                    <td className="px-4 py-3 border">{data.feeder}</td>
                    <td className="px-4 py-3 border">{data.buffer}</td>
                    <td className="px-4 py-3 border">{data.hilo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {!data && !loading && !error && (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded border border-dashed border-gray-300">
              No hay información de mapeo disponible para este puerto.
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 flex justify-end border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-medium"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortDetailsModal;