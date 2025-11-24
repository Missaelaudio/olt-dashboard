# OLT Dashboard Frontend

Interfaz web para la gestión y consulta de **Optical Line Terminals (OLTs)** y sus puertos.  
Construido con **React + Vite + TypeScript** y estilizado con **Tailwind CSS v4**.

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/olt-dashboard-frontend.git
cd olt-dashboard-frontend
```
### 2. Instalar dependencias
Usando pnpm
```bash
pnpm install
```
### 3. Ejecutar modo desarrollador
```bash
pnpm dev

## La aplicación estará disponible en
```bash
http://localhost:5173
```

## 📂 Estructura del proyecto.

olt-dashboard-frontend/
│   index.html
│   package.json
│   tailwind.config.js
│   tsconfig.json
│   vite.config.ts
│   postcss.config.js
│
└───src/
    │   App.tsx
    │   main.tsx
    │   index.css
    │
    ├───components/
    │       Navbar.tsx
    │       OltList.tsx
    │       PortMatrix.tsx
    │
    └───pages/
            DashboardConsulta.tsx
            DashboardEdicion.tsx

## 🧭 Funcionalidades principales

### - Navbar: barra superior con navegación entre secciones:
	- Consultar: vista principal con selector de OLT y matriz de puertos.
	- Editar / Cargar: formulario para editar información de OLTs y cargar datos nuevos.
### - DashboardConsulta:
	- Selector desplegable de OLTs.
	- Visualización de matriz de puertos (16 filas × 18 slots).
	- Etiquetas simplificadas (solo número de puerto).
### - DashboardEdicion:
	- Formulario para editar nombre e IP de OLT.
	- Carga de archivo de puertos.
	- Botón para guardar cambios.

## 🔌 API Backend

El frontend se conecta a un backend REST en http://localhost:4000/api.
Endpoints disponibles:

	- GET /api/olts → lista de OLTs.
	- GET /api/olts/:id/ports → puertos de un OLT específico.
	- POST /api/olts → crear un nuevo OLT.
	- PUT /api/olts/:id → actualizar un OLT existente.
	- POST /api/olts/:id/ports → cargar puertos para un OLT.

##📖 Ejemplos de requests/responses

### 1. Obtener Lista de OLTs

Request:

```Http
GET /api/olts
```

Response:

```Json

[
  {
    "id": 1,
    "name": "GRN-OLT1",
    "ip": "10.2.166.150"
  },
  {
    "id": 2,
    "name": "GRN-OLT2",
    "ip": "10.2.166.151"
  }
]	
```

### 2. Obtener Puertos de un OLT

Request:

```Http
GET /api/olts/1/ports
```

Response:

```Json

[
  {
    "id": 1,
    "slot": 1,
    "portNumber": 1,
    "label": "1"
  },
  {
    "id": 2,
    "slot": 2,
    "portNumber": 1,
    "label": "1"
  }
]
```
### 3. Crear un OLT nuevo

Request:

```Http
POST /api/olts
Content-Type: application/json

{
  "name": "GRN-OLT3",
  "ip": "10.2.166.152"
}
```

Response:

```Json
{
  "id": 3,
  "name": "GRN-OLT3",
  "ip": "10.2.166.152"
}
```

### 4. Actualizar una OLT existente

Request:

```Http
PUT /api/olts/1
Content-Type: application/json

{
  "name": "GRN-OLT1-Updated",
  "ip": "10.2.166.160"
}
```

Response:

```Json

{
  "id": 1,
  "name": "GRN-OLT1-Updated",
  "ip": "10.2.166.160"
}
```

### 5. Cargar puertos para una OLT

Request:

```Http
POST /api/olts/1/ports
Content-Type: application/json

[
  { "slot": 1, "portNumber": 1, "label": "1" },
  { "slot": 2, "portNumber": 1, "label": "1" },
  { "slot": 1, "portNumber": 2, "label": "2" }
]
```

Response:

```Json
{
  "message": "Puertos cargados correctamente",
  "count": 3
}
```

## 📖 Próximos pasos
- Conectar el formulario de DashboardEdicion.tsx al backend (POST y PUT).
- Validar campos (nombre, IP, archivo).
- Agregar feedback visual (mensajes de éxito/error).
- Documentar modelos de datos (Olt, Port) y ejemplos de payloads JSON.
- Incluir capturas de pantalla en este README.

## 👨🏻‍💻 Tecnologías utilizadas 
- React
- Vite
- TypeScript
- Tailwind CSS V4
- pnpm




