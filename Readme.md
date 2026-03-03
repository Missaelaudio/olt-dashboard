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
  },
  {
    "id": 2,
    "name": "GRN-OLT2",
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
}
```

Response:

```Json
{
  "id": 3,
  "name": "GRN-OLT3",
}
```

### 4. Actualizar una OLT existente

Request:

```Http
PUT /api/olts/1
Content-Type: application/json

{
  "name": "GRN-OLT1-Updated",
}
```

Response:

```Json

{
  "id": 1,
  "name": "GRN-OLT1-Updated",
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

# Reliability plan for the OLT dashboard project
Mapa completo: dónde puede fallar el proyecto, cómo detectarlo y cómo prevenirlo o corregirlo con pruebas y controles concretos.

## Failure modes before development
### Requirements drift: Ambigüedad en slots 9 y 10, formatos de archivo, endpoints, métricas.

#### Prevención:
- Especificación funcional: matriz 16×18, slots 9/10 vacíos, etiquetas solo número, Excel admitido, endpoints exactos.
- Contrato API versionado: OpenAPI/Swagger y ejemplos JSON.
### Entorno inconsistente: Variables de entorno, versiones de Node/PNPM/DB, Tailwind v4 vs v3.
#### Prevención:
- Archivo .nvmrc/engines: Node/PNPM fijados.
- .env.example: claves y URLs requeridas.
- Docker compose opcional: Postgres reproducible.
### Esquema y datos iniciales incoherentes: Campo ip obligatorio, seeds que no reflejan requisitos.
#### Prevención:
- Migraciones atómicas: revisión de schema antes de codificar.
- Seed verificable: slots 1–18 menos 9/10, 16 puertos por slot, etiquetas “1..16”.

# Failure modes during development
### Backend
#### Contratos rotos: Cambios en schema Prisma sin actualizar rutas o cliente.
Prevención: prisma migrate + generate en CI; contract tests (Pact/OpenAPI).
#### Parsing de Excel frágil: Columnas faltantes, tipos incorrectos, hojas múltiples.
Prevención:
- Validación de columnas: slot, portNumber, label obligatorios.
- Límites: rechazar slots 9/10, rango de puertos 1–16.
- Errores claros: lista de filas inválidas.
#### Errores de carga masiva: createMany sin upsert, duplicados.
Prevención:
- Índices únicos opcionales: (oltId, slot, portNumber).
- Upsert por combinación: o borrar/replace por OLT antes de cargar.
#### Migraciones peligrosas: pérdida de datos, bloqueos.
Prevención:
- Plan de rollback: migraciones reversibles + backups automáticos.
- Migration tests: correr migración en DB temporal en CI.
###  Frontend
#### Estado incoherente: Navbar activa vs vista, selector OLT sin sincronizar con matriz.
 Prevención: Fuente única de verdad (id OLT seleccionado), props tipadas estricto.
#### Renderizado incompleto: solo slots 1/2 visibles por falta de datos.
 Prevención: Fallbacks vacíos controlados excepto 9/10; skeleton/loading; consulta de todos los slots.
#### Validación insuficiente: nombre vacío, archivo no seleccionado, formato incorrecto.
Prevención: Validación UI + backend, mensajes de error detallados.
### Seguridad y compliance
####  Datos sensibles en repositorio: IPs, credenciales.
Prevención: Eliminar ip del schema, usar .env y secretos; git-secrets pre-commit.
- CORS y exposición excesiva: endpoints abiertos.
- Prevención: CORS restrictivo por origen; auth si aplica; rate limit básico.
Performance y disponibilidad
- Carga masiva bloqueante: archivos grandes ralentizan el servidor.
- Prevención: Cola de procesamiento (job queue) o streaming; límites de tamaño; timeouts.
- Consultas N+1: obtener puertos y mappings sin include adecuado.
- Prevención: Prisma include/select optimizados; índices en FK.

## Failure modes after deployment
- Regresión visual/funcional: cambios de Tailwind/React rompen layout.
- Prevención: Visual regression tests (Chromatic/Playwright snapshots).
- Datos duplicados o inconsistentes: múltiples cargas Excel.
- Prevención: Idempotencia (hash de archivo, replace por OLT), constraints únicos.
- Pérdida de datos: migraciones mal aplicadas, falta de backup.
- Prevención: Backups programados, verificación de restauración.
- Observabilidad insuficiente: difícil diagnosticar fallas.
- Prevención: Logging estructurado, métricas (req/sec, tiempo de parseo, errores por fila), tracing básico.

## Test plan completo y casos clave
### Tipos de pruebas
Unitarias (backend/frontend):
- Parser Excel: columnas, tipos, filas inválidas, rechazar slots 9/10.
- Validadores: nombre OLT requerido, archivo presente, límites 1–18 y 1–16.
- Integración (API + DB):
- POST /api/olts: crear sin ip.
- POST /api/olts/:id/ports: carga Excel válida; errores por filas; idempotencia opcional.
- GET /api/olts/:id/ports: devuelve 16×(18−2)=256 registros, slots 9/10 vacíos.
- End-to-end (UI):
- Flujo edición: completar nombre, seleccionar archivo, guardar; ver mensaje éxito/error.
- Consulta: seleccionar OLT; matriz muestra todos los slots menos 9/10.
- Contract tests (API):
- Validar respuestas contra OpenAPI y ejemplos JSON del README.

Performance:
- Carga Excel 1k–10k filas; tiempos y memoria; asegurar no bloqueo.
- Migración/seed:
- Aplicar migración de eliminación de ip; seed genera 256 puertos; mappings iniciales válidos.

Seguridad:
- Escaneo secretos; CORS; tamaño máximo archivo; sanitización entrada.
Casos de prueba específicos del proyecto
- Excel válido: hoja 1 con columnas exactas; 256 filas omitidas para 9/10; resultado count esperado.
- Excel inválido columnas: falta portNumber → 400 con detalle y filas afectadas.
- Slots prohibidos: filas con slot 9 o 10 → rechazadas con conteo de descartes.
- Duplicados: misma combinación (oltId, slot, portNumber) dos veces → constraint evita o replace según política.
- Frontend validación: sin archivo → deshabilitar submit y mensajes; nombre vacío → error inline.
- Matriz vacíos controlados: 9/10 renderizan como “reservado” u oculto según diseño.

## Preventive controls, checklists y correcciones rápidas
### Controles preventivos
#### Pre-commit:
- Lint + typecheck: ESLint, tsc --noEmit.
- Unit tests rápidas: parser y validadores.
- git-secrets: bloquear IPs y credenciales.
- CI/CD:
- Instalación reproducible: Node/PNPM fijos.
- Build + test + coverage: umbral mínimo.
- Migration test: migrar DB temporal + seed + smoke tests API.
- Artifact de OpenAPI: validar contract tests.

#### Runtime:
- Rate limit + tamaño máximo upload: p.ej. 10–20 MB.
- Logging estructurado: requestId, usuario, OLT, conteos.
- Alertas: ratio de errores de carga > 5% en 10 min.

#### Playbooks de corrección
- Carga Excel falla por columnas:
- Acción: registrar columnas detectadas; responder 400 con “columnas requeridas: slot, portNumber, label”; adjuntar ejemplo minimal.

#### Se insertaron duplicados:
- Acción: agregar índice único (oltId, slot, portNumber); migración con resolución; actualizar endpoint a upsert o replace.

#### Matriz no muestra slots completos:
- Acción: verificar GET devuelve 256; revisar filtro en frontend; añadir test de render por slot; asegurar include correcto en Prisma.

#### Timeouts en carga:
- Acción: subir límite de body, procesar por lotes, usar createMany en chunks, mover a job async y notificar al usuario.

### Quality gates y documentación viva
- Definition of done por tarea:
- Código + pruebas + actualización README/OpenAPI + chequeo manual UI.
- Tablero de riesgos y fixes:
- Lista de fallos recurrentes y su estado de mitigación.
- Matrices de compatibilidad:
- Node/PNPM/Prisma/Postgres versiones soportadas.

## Next steps inmediatos
- Implementar validación robusta de Excel en backend con lista de errores por fila y cómputos de descartes.
- Añadir índices y política de idempotencia para cargas masivas.
- Crear suite de pruebas mínima: unitarias del parser, integración de endpoints, e2e de flujo edición/consulta.
- Configurar CI con typecheck, tests, migración en DB temporal y smoke tests de API.

#### Preparar ahora los bloques de código para:
- Validación del Excel (backend, con reporte por filas).
- Índice único (oltId, slot, portNumber) y ajuste del endpoint para replace seguro.
- Pruebas de integración básicas de POST/GET con Vitest.




