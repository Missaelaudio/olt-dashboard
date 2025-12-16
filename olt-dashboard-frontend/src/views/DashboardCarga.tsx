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

          {result.errors.length > 0 && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
              <h3 className="text-md font-semibold text-red-600 mb-2">Errores encontrados:</h3>
              <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
                {result.errors.map((err, idx) => (
                  <li key={idx}>
                    Fila {err.row}: OLT {err.olt}, Slot {err.slot}: {err.field} inválido. Contiene: "{err.value}", se espera: "{err.expected}"
                  </li>
                ))}
              </ul>
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