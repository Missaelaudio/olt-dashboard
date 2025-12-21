import express from 'express';
import cors from 'cors';
import oltsRouter from './routes/olts';
import mappingsRouter from './routes/mappings';

const app = express();

app.use(cors());
app.use(express.json());

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