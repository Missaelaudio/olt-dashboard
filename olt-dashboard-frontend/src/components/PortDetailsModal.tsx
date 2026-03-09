import React, { useEffect, useState } from 'react';
import { apiFetch } from '../utils/api';

interface PortDetailData {
  edfa: string;
  comPort: string;
  ponPort: string;
  chasis: string;
  position: string;
  entrada: string;
  splitterOutput: string;
  odf: string;
  buffer: string;
  hilo: string;
  feeder: string;
}

interface PortDetailsModalProps {
  oltId: number;
  oltName: string;
  slot: number;
  portNumber: number;
  onClose: () => void;
}

const PortDetailsModal: React.FC<PortDetailsModalProps> = ({ oltId, oltName, slot, portNumber, onClose }) => {
  const [data, setData] = useState<PortDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [userRole] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved).role : '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Nota: Asegúrate de que este endpoint exista en tu backend (routes/mappings.ts)
        const response = await apiFetch(`http://localhost:4000/api/mappings/details?oltId=${oltId}&slot=${slot}&port=${portNumber}`);
        
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

  const handleEditClick = () => {
    if (!data) return;
    // Preparamos los datos para el formulario, limpiando los guiones '-'
    const clean = (val: string) => (val === '-' ? '' : val);
    
    setEditFormData({
      olt: oltName,
      slot: slot,
      port: portNumber,
      odf: clean(data.odf),
      buffer: clean(data.buffer),
      hilo: clean(data.hilo),
      edfa: clean(data.edfa),
      edfaPon: clean(data.ponPort),
      edfaCom: clean(data.comPort),
      chasis: clean(data.chasis),
      posicion: clean(data.position),
      splitterOutput: clean(data.splitterOutput),
      entrada: clean(data.entrada),
      feeder: clean(data.feeder),
    });
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await apiFetch('http://localhost:4000/api/mappings/manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Error al guardar');
      }

      // Recargar datos
      const refreshRes = await apiFetch(`http://localhost:4000/api/mappings/details?oltId=${oltId}&slot=${slot}&port=${portNumber}`);
      if (refreshRes.ok) {
        const result = await refreshRes.json();
        setData(result);
      }
      setIsEditing(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al guardar cambios');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-bold">
            {isEditing ? 'Editar Puerto' : 'Detalles del Puerto'}: Slot {slot} / Puerto {portNumber}
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

          {data && !loading && isEditing ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Campos de solo lectura (contexto) */}
              <div className="col-span-2 md:col-span-4 bg-gray-50 p-3 rounded border border-gray-200 mb-2">
                <p className="text-sm text-gray-600">
                  <strong>Ubicación:</strong> {oltName} &gt; Slot {slot} &gt; Puerto {portNumber}
                </p>
              </div>

              {/* Formulario dinámico */}
              {[
                { label: 'N° EDFA', name: 'edfa' },
                { label: 'Puerto COM', name: 'edfaCom' },
                { label: 'Puerto PON', name: 'edfaPon' },
                { label: 'Chasis', name: 'chasis' },
                { label: 'Posición', name: 'posicion' },
                { label: 'Entrada', name: 'entrada' },
                { label: 'Salida', name: 'splitterOutput' },
                { label: 'ODF', name: 'odf' },
                { label: 'Feeder', name: 'feeder' },
                { label: 'Buffer', name: 'buffer' },
                { label: 'Hilo', name: 'hilo' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={editFormData[field.name] || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              ))}
            </div>
          ) : (
            data && !loading && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 border-collapse border border-gray-200">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 border">N° EDFA</th>
                    <th className="px-4 py-3 border">Puerto COM</th>
                    <th className="px-4 py-3 border">Puerto PON</th>
                    <th className="px-4 py-3 border">Chasis</th>
                    <th className="px-4 py-3 border">Posición</th>
                    <th className="px-4 py-3 border">Entrada</th>                    
                    <th className="px-4 py-3 border">Salida</th>
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
                    <td className="px-4 py-3 border">{data.entrada}</td>
                    <td className="px-4 py-3 border">{data.splitterOutput}</td>
                    <td className="px-4 py-3 border">{data.odf}</td>
                    <td className="px-4 py-3 border">{data.feeder}</td>
                    <td className="px-4 py-3 border">{data.buffer}</td>
                    <td className="px-4 py-3 border">{data.hilo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            )
          )}
          
          {!data && !loading && !error && (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded border border-dashed border-gray-300">
              No hay información de mapeo disponible para este puerto.
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 flex justify-end border-t">
          {isEditing ? (
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-medium"
                disabled={saving}
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium disabled:bg-green-400"
              >
                {saving ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              {userRole === 'admin' && (
                <button onClick={handleEditClick} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium">
                  Editar
                </button>
              )}
              <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-medium">
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortDetailsModal;