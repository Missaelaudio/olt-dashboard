import React, { useState, useEffect } from 'react';

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
}

const DashboardEdicion: React.FC = () => {
  const [olts, setOlts] = useState<Olt[]>([]);
  const [selectedOlt, setSelectedOlt] = useState<number | null>(null);
  const [ports, setPorts] = useState<Port[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [selectedPort, setSelectedPort] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('available');
  const [label, setLabel] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  // Cargar lista de OLTs
  useEffect(() => {
    fetch('http://localhost:4000/api/olts')
      .then((res) => res.json())
      .then((data) => setOlts(data))
      .catch((err) => console.error('Error cargando OLTs:', err));
  }, []);

  // Cargar puertos al seleccionar OLT
  useEffect(() => {
    if (!selectedOlt) return;
    fetch(`http://localhost:4000/api/olts/${selectedOlt}/ports`)
      .then((res) => res.json())
      .then((data) => setPorts(data))
      .catch((err) => console.error('Error cargando puertos:', err));
  }, [selectedOlt]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPort) return;

    try {
      const res = await fetch(`http://localhost:4000/api/ports/${selectedPort}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, label }),
      });
      const data = await res.json();
      setMessage(`Puerto actualizado: ${data.label} (${data.status})`);
    } catch (err) {
      console.error('Error actualizando puerto:', err);
      setMessage('Error al actualizar el puerto');
    }
  };

  // Obtener slots únicos de los puertos cargados
  const slotsDisponibles = Array.from(new Set(ports.map((p) => p.slot))).sort((a, b) => a - b);

  // Filtrar puertos por slot seleccionado
  const puertosDelSlot = selectedSlot
    ? ports.filter((p) => p.slot === selectedSlot)
    : [];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Edición de información existente</h2>

      <form onSubmit={handleEdit} className="space-y-4">
        {/* Selector de OLT */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar OLT</label>
          <select
            value={selectedOlt ?? ''}
            onChange={(e) => {
              setSelectedOlt(Number(e.target.value));
              setSelectedSlot(null);
              setSelectedPort(null);
            }}
            className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione una OLT</option>
            {olts.map((olt) => (
              <option key={olt.id} value={olt.id}>
                {olt.name}
              </option>
            ))}
          </select>
        </div>

        {/* Selector de Slot */}
        {slotsDisponibles.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Slot</label>
            <select
              value={selectedSlot ?? ''}
              onChange={(e) => {
                setSelectedSlot(Number(e.target.value));
                setSelectedPort(null);
              }}
              className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione un Slot</option>
              {slotsDisponibles.map((slot) => (
                <option key={slot} value={slot}>
                  Slot {slot}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Selector de Puerto */}
        {puertosDelSlot.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Puerto</label>
            <select
              value={selectedPort ?? ''}
              onChange={(e) => setSelectedPort(Number(e.target.value))}
              className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione un Puerto</option>
              {puertosDelSlot.map((port) => (
                <option key={port.id} value={port.id}>
                  Puerto {port.portNumber} ({port.status})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Campos de edición */}
        {selectedPort && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
              >
                <option value="available">Disponible</option>
                <option value="occupied">Ocupado</option>
                <option value="maintenance">Mantenimiento</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Etiqueta</label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Guardar cambios
            </button>
          </>
        )}
      </form>

      {/* Mensaje de resultado */}
      {message && (
        <p className="mt-4 text-sm text-gray-700 font-medium">{message}</p>
      )}
    </div>
  );
};

export default DashboardEdicion;