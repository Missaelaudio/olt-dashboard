import React, { useState, useEffect } from 'react';
import { apiFetch } from '../utils/api';

interface ErrorDetail {
  row: number;
  olt: string | number;
  slot: string | number;
  field: string;
  value: string;
  expected: string;
}

const DashboardCarga: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [sheets, setSheets] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string>('');
  const [replaceData, setReplaceData] = useState(true); // Controla si se reemplazan los datos existentes
  const [result, setResult] = useState<{
    message: string;
    insertedMappings: number;
    errors: ErrorDetail[];
  } | null>(null);

  const [manualData, setManualData] = useState({
    olt: '',
    slot: '',
    port: '',
    odf: '',
    buffer: '',
    hilo: '',
    edfa: '',
    edfaPon: '',
    edfaCom: '',
    chasis: '',
    posicion: '',
    splitterOutput: '',
    entrada: '',
    feeder: '',
  });

  const [olts, setOlts] = useState<{ id: number; name: string }[]>([]);

  const fetchOlts = async () => {
    try {
      const res = await apiFetch('http://localhost:4000/api/olts');
      if (res.ok) {
        const data = await res.json();
        setOlts(data);
      }
    } catch (err) {
      console.error('Error cargando OLTs:', err);
    }
  };

  useEffect(() => {
    fetchOlts();
  }, []);

  const handleDeleteOlt = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar esta OLT y toda su información asociada?')) return;
    try {
      const res = await apiFetch(`http://localhost:4000/api/olts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        alert('OLT eliminada correctamente');
        fetchOlts();
      } else {
        alert('Error al eliminar la OLT');
      }
    } catch (err) {
      console.error('Error eliminando OLT:', err);
      alert('Error al eliminar la OLT');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setResult(null);
      setSheets([]);
      
      // Previsualizar hojas
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      try {
        const res = await apiFetch('http://localhost:4000/api/mappings/sheets', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.sheets && Array.isArray(data.sheets)) {
          setSheets(data.sheets);
          setSelectedSheet(data.sheets[0]); // Seleccionar la primera por defecto
        }
      } catch (err) {
        console.error('Error obteniendo hojas:', err);
      }
    }
  };

  const handleReset = () => {
    setFile(null);
    setResult(null);
    setSheets([]);
    // Resetear el input file visualmente es difícil sin una ref, pero esto limpia el estado interno
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    // Es recomendable añadir los campos de texto antes del archivo
    if (selectedSheet) {
      formData.append('sheetName', selectedSheet);
    }
    formData.append('file', file);

    setLoading(true);
    setResult(null);

    try {
      const url = new URL('http://localhost:4000/api/mappings/upload');
      if (replaceData) {
        url.searchParams.append('replace', 'true');
      }

      const res = await apiFetch(url.toString(), {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResult(data);
      if (res.ok) {
        fetchOlts();
      }
    } catch (err) {
      console.error('Error en la carga:', err);
      setResult({ message: 'Error en la carga', insertedMappings: 0, errors: [] });
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiFetch('http://localhost:4000/api/mappings/manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(manualData),
      });
      const data = await res.json();
      alert(`Carga manual completada: ${data.message}`);
    } catch (err) {
      console.error('Error en carga manual:', err);
      alert('Error al enviar datos manuales');
    }
  };

// Utilidades para render de errores AGREGADO A VERSION ESTABLE 16/12/2025 ELIMINAR SI NO SE USA
  const safeText = (text?: string | number) => {
    const str = String(text ?? '').trim();
    return str.length > 0 ? str : '—';
  };

  const isEmpty = (text?: string | number) => {
    return String(text ?? '').trim().length === 0;
  };

  const errorSummaryByField = (errors: ErrorDetail[]) => {
    const map = new Map<string, number>();
    errors.forEach(e => {
      const key = e.field?.trim() || 'desconocido';
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries()).map(([field, count]) => ({ field, count }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Carga de nueva información</h2>

      {/* Subida de archivo */}
      <form onSubmit={handleUpload} className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {result && (
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Limpiar
            </button>
          )}
        </div>
        
        {/* Selector de Hojas (OLTs) */}
        {sheets.length > 0 && (
          <div className="w-full max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar OLT (Hoja de Excel):</label>
            <select
              value={selectedSheet}
              onChange={(e) => setSelectedSheet(e.target.value)}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {sheets.map((sheet) => (
                <option key={sheet} value={sheet}>{sheet}</option>
              ))}
            </select>
          </div>
        )}

        {/* Checkbox para reemplazar datos */}
        <div className="flex items-center my-4">
          <input
            id="replace-data-checkbox"
            type="checkbox"
            checked={replaceData}
            onChange={(e) => setReplaceData(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="replace-data-checkbox" className="ml-2 block text-sm text-gray-900">
            Reemplazar datos existentes para la OLT seleccionada
          </label>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            disabled={!file || loading}
            className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-medium"
          >
            {loading ? 'Procesando...' : 'Cargar Archivo'}
          </button>
        </div>
      </form>

      {/* Resultado */}
      {result && (
        <div className="mt-6 space-y-2">
          <p className="font-medium text-green-700">{result.message}</p>
          <p className="text-sm text-gray-700">
            Mappings insertados: {result.insertedMappings}
          </p>
          
          {/* Resumen por campo agregado en 16/12/2025 eliminar si presenta error*/}
          {result.errors?.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <h3 className="text-sm font-semibold text-yellow-800 mb-2">Resumen de errores por campo</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {errorSummaryByField(result.errors).map(item => (
                  <span
                    key={item.field}
                    className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded"
                  >
                    {item.field}: {item.count}
                  </span>
                ))}
              </div>
            </div>
          )}

            {/* Detalle de errores agregado en 16/12/2025 eliminar si presenta errores*/}
          {result.errors?.length > 0 && (
            <div className="mt-2 bg-red-50 border border-red-200 rounded-md p-4">
              <h3 className="text-md font-semibold text-red-600 mb-3">Errores encontrados</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-red-200">
                  <thead>
                    <tr className="bg-red-100 text-red-800">
                      <th className="px-3 py-2 border">Fila</th>
                      <th className="px-3 py-2 border">OLT</th>
                      <th className="px-3 py-2 border">Slot</th>
                      <th className="px-3 py-2 border">Campo</th>
                      <th className="px-3 py-2 border">Valor recibido</th>
                      <th className="px-3 py-2 border">Valor esperado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.errors.map((err, idx) => (
                      <tr key={idx} className="bg-white">
                        <td className="px-3 py-2 border text-gray-800">{safeText(err.row)}</td>
                        <td className="px-3 py-2 border text-gray-800">{safeText(err.olt)}</td>
                        <td className="px-3 py-2 border text-gray-800">{safeText(err.slot)}</td>
                        <td className="px-3 py-2 border font-medium text-red-700">
                          {safeText(err.field)}
                        </td>
                        <td
                          className={`px-3 py-2 border ${
                            isEmpty(err.value) ? 'bg-red-50 text-red-700 italic' : 'text-gray-800'
                          }`}
                        >
                          {safeText(err.value)}
                        </td>
                        <td className="px-3 py-2 border text-gray-800">{safeText(err.expected)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Nota útil */}
              <p className="mt-3 text-xs text-red-700">
                Tip: Si “Valor recibido” aparece vacío (—), revisa encabezados del Excel y tipos (número vs texto).
              </p>
            </div>
          )}
        </div>
      )}

      {/* Carga manual */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Carga manual</h3>
        <form onSubmit={handleManualSubmit} className="grid grid-cols-2 gap-4">
          {[
            { key: 'olt', label: 'OLT' },
            { key: 'slot', label: 'Slot' },
            { key: 'port', label: 'Puerto (PON)' },
            { key: 'odf', label: 'O.D.F' },
            { key: 'buffer', label: 'Buffer' },
            { key: 'hilo', label: 'Hilo' },
            { key: 'edfa', label: 'EDFA' },
            { key: 'edfaPon', label: 'Puerto PON (EDFA)' },
            { key: 'edfaCom', label: 'Puerto COM (EDFA)' },
            { key: 'chasis', label: 'Chasis' },
            { key: 'posicion', label: 'Posición (Splitter)' },
            { key: 'splitterOutput', label: 'Salida Splitter' },
            { key: 'entrada', label: 'Entrada' },
            { key: 'feeder', label: 'Feeder' },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type="text"
                value={manualData[field.key as keyof typeof manualData]}
                onChange={(e) =>
                  setManualData({ ...manualData, [field.key]: e.target.value })
                }
                className="px-3 py-2 border rounded-md text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="col-span-2">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Enviar datos manuales
            </button>
          </div>
        </form>
      </div>

      {/* Gestión de OLTs */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Gestión de OLTs Existentes</h3>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-md shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Nombre</th>
                <th className="px-4 py-3 text-center font-medium text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {olts.map((olt) => (
                <tr key={olt.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">{olt.id}</td>
                  <td className="px-4 py-3 text-gray-900">{olt.name}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDeleteOlt(olt.id)}
                      className="text-red-600 hover:text-red-800 font-medium hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              {olts.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-gray-500 italic">
                    No hay OLTs registradas en el sistema.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCarga;