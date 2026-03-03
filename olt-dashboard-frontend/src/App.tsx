import React, { useState } from 'react';
import NavbarTabs from './components/NavbarTabs';
import DashboardConsulta from './views/DashboardConsulta';
import DashboardEdicion from './views/DashboardEdicion';
import DashboardCarga from './views/DashboardCarga';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Consultar');
  const [erroresPreventivos, setErroresPreventivos] = useState<Array<{ olt: string }>>([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800">Herramientas del OLT</h1>
          {erroresPreventivos.length > 0 && (
            <div className="text-center text-red-700 font-medium cursor-pointer hover:underline mt-2" onClick={() => setShowModal(true)}>⚠️ Errores encontrados en carga de datos en OLT "{erroresPreventivos[0].olt}". Haga click aquí para ver detalles.
            </div>
          )}
          <span className="text-sm text-green-600">✔ Servicio funcionando con normalidad</span>
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="max-w-7xl mx-auto p-4 bg-white shadow rounded-md mt-6">
        {/* Pestañas internas */}
        <NavbarTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Contenido dinámico */}
        <div className="mt-6">
          {activeTab === 'Consultar' && <DashboardConsulta />}
          {activeTab === 'Editar' && <DashboardEdicion />}
          {activeTab === 'Cargar' && <DashboardCarga />}
        </div>
      </main>
    </div>
  );
};

export default App;

