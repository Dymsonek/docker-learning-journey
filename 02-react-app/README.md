# 02 - React App in Docker

React application with multi-stage Docker build.

## Czego się nauczyłem

- Multi-stage builds (builder + production)
- Optymalizacja rozmiaru obrazu (500MB → 50MB)
- Dockerizacja React app
- Production build z nginx
- .dockerignore

## Jak uruchomić

### Build
```bash
docker build -t react-docker-app .
```

### Run
```bash
docker run -d -p 3000:80 --name react-container react-docker-app
```

### Open
http://localhost:3000

### Stop & Remove
```bash
docker stop react-container
docker rm react-container
```

## Multi-stage Build Explained

**Stage 1 (Builder):**
- Node.js 18
- npm install
- npm run build
- Output: /app/build folder

**Stage 2 (Production):**
- Nginx Alpine (tiny!)
- Copy ONLY /app/build from Stage 1
- Serve static files
- Result: 50MB image instead of 500MB!

## Tech Stack

- React 18
- Docker multi-stage build
- Nginx Alpine
- Node.js 18 (build only)
