import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

import { profile, projects } from './data/portfolio.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = process.env.CORS_ORIGINS?.split(',').map((origin) => origin.trim());

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins?.length ? allowedOrigins : '*'
  })
);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/profile', (_req, res) => {
  res.json(profile);
});

app.get('/api/projects', (_req, res) => {
  res.json(projects);
});

app.use((req, res) => {
  res.status(404).json({ message: `Resource not found for ${req.originalUrl}` });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Unexpected server error' });
});

app.listen(port, () => {
  console.log(`Portfolio API running on port ${port}`);
});
