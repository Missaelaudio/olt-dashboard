import React, { useState } from "react";
import MainLayout from "@/shared/layout/MainLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import TopologyDashboard from "@/features/topology/pages/TopologyDashboard";
import EditOltPage from "@/features/inventory/pages/EditOltPage";
import MappingDashboard from "@/features/mapping/pages/MappingDashboard";

import ProfilePage from "@/features/profile/pages/ProfilePage";
import SettingsPage from "@/features/settings/pages/SettingsPage";

const App = () => {
  // Initialize dark mode class on first mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // Empty dependency array - runs only once on mount

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("lumenhive_auth") === "true";
  });
  const [activeTab, setActiveTab] = useState("Consultar");

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("lumenhive_auth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("lumenhive_auth");
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <MainLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={handleLogout}
    >
      {activeTab === "Consultar" && <TopologyDashboard />}
      {activeTab === "Editar" && <EditOltPage />}
      {activeTab === "Cargar" && <MappingDashboard />}
      {activeTab === "Profile" && <ProfilePage />}
      {activeTab === "Settings" && <SettingsPage />}
    </MainLayout>
  );
};

export default App;
