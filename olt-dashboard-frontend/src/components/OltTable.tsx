import { useEffect, useState } from 'react';

type Port = {
  id: number;
  slot: number;
  portNumber: number;
  label: string;
  status: string;
  rx: number;
  tx: number;
  vcc: number;
  brand: string;
};

type Olt = {
  id: number;
  name: string;
  ip: string;
  createdAt: string;
  ports: Port[];
};

export default function OltTable() {
  const [olts, setOlts] = useState<Olt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/olts')
      .then((res) => res.json())
      .then((data) => {
        setOlts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching OLTs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando OLTs...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">OLT Dashboard</h2>
      {olts.length === 0 ? (
        <p>No hay OLTs disponibles.</p>
      ) : (
        olts.map((olt) => (
          <div key={olt.id} className="mb-8">
            <table className="min-w-full border border-gray-300 rounded overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Slot</th>
                  <th className="px-4 py-2 text-left">Puerto</th>
                  <th className="px-4 py-2 text-left">Label</th>
                  <th className="px-4 py-2 text-left">RX</th>
                  <th className="px-4 py-2 text-left">TX</th>
                  <th className="px-4 py-2 text-left">VCC</th>
                  <th className="px-4 py-2 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                {olt.ports.map((port) => (
                  <tr key={port.id} className="border-t">
                    <td className="px-4 py-2">{port.slot}</td>
                    <td className="px-4 py-2">{port.portNumber}</td>
                    <td className="px-4 py-2">{port.label}</td>
                    <td className="px-4 py-2">{port.rx.toFixed(2)} dBm</td>
                    <td className="px-4 py-2">{port.tx.toFixed(2)} dBm</td>
                    <td className="px-4 py-2">{port.vcc.toFixed(2)} V</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-white text-sm ${
                        port.status === 'available' ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {port.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}