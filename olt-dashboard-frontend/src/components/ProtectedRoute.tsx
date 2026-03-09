// src/components/ProtectedRoute.tsx
import React from 'react';
import Login from '../views/Login';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Login />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
