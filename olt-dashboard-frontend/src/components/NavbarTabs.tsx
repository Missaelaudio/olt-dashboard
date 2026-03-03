import React from 'react';

interface NavbarTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['Consultar', 'Editar', 'Cargar'];

const NavbarTabs: React.FC<NavbarTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">OLT Dashboard</h1>
      </div>
      <nav className="flex justify-center space-x-4 py-3 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default NavbarTabs;