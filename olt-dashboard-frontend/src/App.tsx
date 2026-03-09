import React, { useState } from 'react';
import NavbarTabs from './components/NavbarTabs';
import DashboardConsulta from './views/DashboardConsulta';
import DashboardEdicion from './views/DashboardEdicion';
import DashboardCarga from './views/DashboardCarga';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  // Leemos el usuario guardado para obtener su rol
  const [user, setUser] = useState<{ role: string; username: string } | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState('Consultar');
  const [erroresPreventivos, setErroresPreventivos] = useState<Array<{ olt: string }>>([]);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // Definimos las pestañas disponibles según el rol
  const tabs = ['Consultar', 'Editar'];
  if (user?.role === 'admin') {
    tabs.push('Cargar');
  }

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800">Herramientas del OLT</h1>
          {erroresPreventivos.length > 0 && (
            <div className="text-center text-red-700 font-medium cursor-pointer hover:underline mt-2" onClick={() => setShowModal(true)}>⚠️ Errores encontrados en carga de datos en OLT "{erroresPreventivos[0].olt}". Haga click aquí para ver detalles.
            </div>
          )}
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm font-medium text-gray-900">{user?.username}</div>
              <div className="text-xs text-gray-500 capitalize">{user?.role}</div>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-800 font-medium border border-red-200 px-3 py-1 rounded hover:bg-red-50 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="max-w-7xl mx-auto p-4 bg-white shadow rounded-md mt-6">
        {/* Pestañas internas */}
        <NavbarTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

        {/* Contenido dinámico */}
        <div className="mt-6">
          {activeTab === 'Consultar' && <DashboardConsulta />}
          {activeTab === 'Editar' && <DashboardEdicion />}
          {activeTab === 'Cargar' && user?.role === 'admin' && <DashboardCarga />}
        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
};

export default App;
