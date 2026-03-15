import React from 'react';
import * as XLSX from 'xlsx';
import { ErrorFila } from '../utils/validarExcelLocalmente';

type Props = {
  errores: ErrorFila[];
  onClose: () => void;
};

const ErrorModal: React.FC<Props> = ({ errores, onClose }) => {
  if (!errores || errores.length === 0) return null;

  // Agrupar errores por tipo de campo
  const resumen = errores.reduce((acc: Record<string, number>, err) => {
    acc[err.field] = (acc[err.field] || 0) + 1;
    return acc;
  }, {});

  const exportarErrores = () => {
    const ws = XLSX.utils.json_to_sheet(errores);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Errores');
    XLSX.writeFile(wb, 'errores.xlsx');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md shadow-lg max-w-4xl w-full p-6">
        {/* Encabezado */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-red-600 flex items-center">
            ⚠️ Errores encontrados
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            ✖
          </button>
        </div>

        {/* Resumen por tipo */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Resumen por tipo de error:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {Object.entries(resumen).map(([field, count]) => (
              <li key={field}>
                {field}: {count} errores
              </li>
            ))}
          </ul>
        </div>

        {/* Tabla de errores */}
        <div className="overflow-y-auto max-h-64 border rounded">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-1">Fila</th>
                <th className="px-2 py-1">OLT</th>
                <th className="px-2 py-1">Slot</th>
                <th className="px-2 py-1">Campo</th>
                <th className="px-2 py-1">Valor</th>
                <th className="px-2 py-1">Esperado</th>
                <th className="px-2 py-1">Error</th>
              </tr>
            </thead>
            <tbody>
              {errores.map((err, idx) => {
                const colorMap: Record<string, string> = {
                  OLT: 'text-blue-700',
                  SLOT: 'text-purple-700',
                  PON: 'text-indigo-700',
                  BUFFER: 'text-orange-700',
                  'O.D.F': 'text-pink-700',
                  HILO: 'text-green-700',
                  GENERAL: 'text-gray-700',
                };

                const icon = err.value === '' || err.value === '-' ? '❌' : '⚠️';
                const bg = idx % 2 === 0 ? 'bg-white' : 'bg-gray-50';

                return (
                  <tr key={idx} className={`${bg} border-t`}>
                    <td className="px-2 py-1">{err.row}</td>
                    <td className="px-2 py-1">{err.olt}</td>
                    <td className="px-2 py-1">{err.slot}</td>
                    <td className={`px-2 py-1 font-semibold ${colorMap[err.field] || 'text-gray-800'}`}>
                      {err.field}
                    </td>
                    <td className="px-2 py-1">{err.value}</td>
                    <td className="px-2 py-1">{err.expected}</td>
                    <td className="px-2 py-1 text-red-600">
                      {icon} {err.error}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={exportarErrores}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Descargar errores (.xlsx)
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;