# Oliver Harrison Portfolio

Modern single-page portfolio engineered with a React frontend and a lightweight Express API. The frontend delivers an Apple-inspired experience with animated gradients, glassmorphism, and theme toggling while the backend exposes structured JSON ready for future CMS or database integrations.

## Project structure

```
frontend/  # Vite + React single-page application
backend/   # Express server powering /api endpoints
```

## Getting started

### Requirements

- Node.js 18+
- npm 9+

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The API runs on http://localhost:5000 by default.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The React dev server proxies `/api/*` requests to the backend when both are running locally.

## Available API routes

- `GET /api/profile`
- `GET /api/projects`
- `GET /api/health`

### Environment variables

- `backend/.env`
  - `PORT` — optional custom port
  - `CORS_ORIGINS` — comma-separated list of allowed origins
- `frontend/.env`
  - `VITE_API_URL` — URL of the deployed backend (defaults to `/api` for local proxy)

## Deployment notes

- Host the backend on a Node-compatible platform (Render, Railway, Fly.io, etc.).
- Deploy the frontend to Vercel, Netlify, or GitHub Pages. Provide `VITE_API_URL` so it can reach the hosted backend.
- Tune the JSON payloads or wire them to a CMS when you are ready for dynamic content.
