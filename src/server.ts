import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import oltsRouter from './routes/olts';
import mappingsRouter from './routes/mappings';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';


const app = express();

// Seguridad básica: Ocultar que usamos Express | Helmet
app.disable('x-powered-by');
app.use(helmet());
// Configuración de CORS (En producción, restringir 'origin' a tu dominio frontend)
app.use(cors());
app.use(express.json());

// Rate Limiting: Limitar a 100 peticiones por 15 minutos por IP
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutos
	max: 100, // Límite de 100 peticiones por IP
	standardHeaders: true, // Devuelve info en las cabeceras `RateLimit-*`
	legacyHeaders: false, // Deshabilita las cabeceras `X-RateLimit-*`
});
app.use(limiter);

app.use(oltsRouter);
app.use(mappingsRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

export default app;

if (require.main === module) {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}