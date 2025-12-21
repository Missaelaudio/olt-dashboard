const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const joinUrl = (base: string, endpoint: string) => {
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${cleanBase}${cleanEndpoint}`;
};

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = joinUrl(BASE_URL, endpoint);
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || "API request failed");
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string) => fetchApi<T>(endpoint, { method: "GET" }),
  post: <T>(endpoint: string, body: any) =>
    fetchApi<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: <T>(endpoint: string, body: any) =>
    fetchApi<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  upload: async <T>(endpoint: string, file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const url = joinUrl(BASE_URL, endpoint);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Unknown error" }));
      throw new Error(error.message || "Upload failed");
    }

    return response.json() as Promise<T>;
  },
};
