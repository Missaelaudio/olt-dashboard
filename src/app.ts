import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import authRouter from './api/auth/auth.routes';
import mappingsRouter from './api/mappings/mappings.routes';


const app = express();

// Seguridad básica: Ocultar que usamos Express | Helmet
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "script-src": ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
    },
  },
}));

// Configuración de CORS para producción
// Asegúrate de tener una variable FRONTEND_URL en tu .env de producción
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use(express.json());
// Rate Limiting: Limitar a 100 peticiones por 15 minutos por IP
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 100, // Límite de 100 peticiones por IP
	standardHeaders: true, // Devuelve info en las cabeceras `RateLimit-*`
	legacyHeaders: false, // Deshabilita las cabeceras `X-RateLimit-*`
});
app.use(limiter);

// Rutas de la API
app.use(authRouter);
app.use(mappingsRouter);

// Health check endpoint
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Servir archivos estáticos del frontend en producción
const frontendPath = path.resolve(__dirname, '../olt-dashboard-frontend/dist');
app.use(express.static(frontendPath));

// Catch-all para SPA: cualquier ruta no reconocida por la API devuelve el index.html
app.get('*all', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

export default app;