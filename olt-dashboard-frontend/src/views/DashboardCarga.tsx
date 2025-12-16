import React, { useState } from 'react';

interface ErrorDetail {
  row: number;
  olt: number;
  slot: number;
  field: string;
  value: string;
  expected: string;
}

const DashboardCarga: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
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
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('http://localhost:4000/api/mappings/upload?replace=true', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResult(data);
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
      const res = await fetch('http://localhost:4000/api/mappings/manual', {
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
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Subiendo...' : 'Subir Excel'}
        </button>
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
          {['olt', 'slot', 'port', 'odf', 'buffer', 'hilo'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                type="text"
                value={manualData[field as keyof typeof manualData]}
                onChange={(e) =>
                  setManualData({ ...manualData, [field]: e.target.value })
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
    </div>
  );
};

export default DashboardCarga;