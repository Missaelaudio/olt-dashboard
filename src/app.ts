import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import oltsRouter from './routes/olts';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('OLT Dashboard API'));
app.use('/api/olts', oltsRouter);

export default app;