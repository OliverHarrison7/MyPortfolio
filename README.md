# Oliver Harrison Portfolio

Modern portfolio platform built with a React frontend and an Express API backend. The frontend delivers a high-impact UI with theme switching, motion design, and data visualisation, while the backend exposes structured endpoints that can evolve into dynamic or CMS-driven content.

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

- `GET /api/overview`
- `GET /api/skills`
- `GET /api/projects`
- `GET /api/experience`
- `GET /api/health`

These ship with static data but are designed for easy replacement with database or CMS integrations.

## Deployment notes

- Host the backend on a Node-compatible platform (Render, Railway, Fly.io, etc.).
- Deploy the frontend to Vercel, Netlify, or GitHub Pages. Provide `VITE_API_URL` in frontend environment variables to point at the hosted backend.
- Configure `CORS_ORIGINS` in the backend for production domains.

Feel free to extend with authentication, a blog feed, or admin tooling for managing portfolio entries.
