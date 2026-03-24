const BASE_URL = (import.meta as any).env.VITE_API_URL || '';

// src/utils/api.ts
export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  
  // Preparamos los encabezados
  const headers = new Headers(options.headers);
  
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  try {
    const response = await fetch(url, { ...options, headers });

    // Si el token expiró o es inválido (401), cerramos sesión automáticamente
    if (response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/'; // Recarga forzada para volver al Login
      return response; // Retornamos la respuesta para que el caller pueda manejarlo si es necesario, aunque la redirección ocurrirá
    }

    return response;
  } catch (error) {
    throw error;
  }
};
