import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

import { experience, overview, projects, skills } from './data/portfolio.js';

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

app.get('/api/overview', (_req, res) => {
  res.json(overview);
});

app.get('/api/skills', (_req, res) => {
  res.json(skills);
});

app.get('/api/projects', (_req, res) => {
  res.json(projects);
});

app.get('/api/experience', (_req, res) => {
  res.json(experience);
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
