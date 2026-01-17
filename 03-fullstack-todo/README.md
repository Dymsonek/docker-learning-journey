# 03 - Fullstack TODO App

Complete full-stack application with React, Node.js, PostgreSQL orchestrated with Docker Compose.

## 🏗️ Architecture
```
┌─────────────┐      ┌─────────────┐      ┌──────────────┐
│   Frontend  │─────▶│   Backend   │─────▶│  PostgreSQL  │
│ React :3000 │      │ Node.js     │      │    :5432     │
│             │◀─────│ Express     │◀─────│              │
│             │      │   :5000     │      │              │
└─────────────┘      └─────────────┘      └──────────────┘
      │                     │                      │
      └─────────────────────┴──────────────────────┘
                   Docker Compose
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Git

### Run the app
```bash
# Clone and enter directory
cd ~/projects/docker-learning-journey/03-fullstack-todo

# Start all services
docker-compose up -d

# Check logs
docker-compose logs -f

# Open in browser
http://localhost:3000
```

### Stop the app
```bash
docker-compose down
```

### Stop and remove all data
```bash
docker-compose down -v
```

## 📦 Services

| Service | Port | Description |
|---------|------|-------------|
| Frontend | 3000 | React app with nginx |
| Backend | 5000 | Express REST API |
| Database | 5432 | PostgreSQL 15 |

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/todos` | Get all todos |
| GET | `/api/todos/:id` | Get single todo |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |

## 🛠️ Development

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

### Rebuild after changes
```bash
# Rebuild specific service
docker-compose up -d --build backend

# Rebuild everything
docker-compose up -d --build
```

### Access database directly
```bash
docker exec -it todo-db psql -U postgres -d tododb

# Inside psql:
\dt                    # List tables
SELECT * FROM todos;   # Query todos
\q                     # Quit
```

### Access backend container
```bash
docker exec -it todo-backend sh
```

## 📁 Project Structure
```
03-fullstack-todo/
├── docker-compose.yml       # Orchestration
├── .env.example            # Environment variables template
├── README.md               # This file
├── backend/
│   ├── Dockerfile          # Backend container
│   ├── .dockerignore
│   ├── package.json
│   ├── server.js           # Express API
│   └── init.sql           # Database schema
└── frontend/
    ├── Dockerfile          # Frontend container (multi-stage)
    ├── .dockerignore
    ├── nginx.conf          # Nginx configuration
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js          # Main component
        ├── App.css         # Styles
        ├── index.js        # Entry point
        └── index.css       # Global styles
```

## 🎯 Features

- ✅ Create, Read, Update, Delete (CRUD) todos
- ✅ Mark todos as completed
- ✅ Persistent data storage (PostgreSQL)
- ✅ REST API with Express
- ✅ Modern React UI
- ✅ Docker Compose orchestration
- ✅ Multi-stage builds for optimization
- ✅ Health checks
- ✅ Auto-initialization of database

## 🧪 Testing

### Test backend API directly
```bash
# Health check
curl http://localhost:5000/api/health

# Get all todos
curl http://localhost:5000/api/todos

# Create todo
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Test from curl","description":"Testing API"}'
```

## 🐛 Troubleshooting

### Services won't start
```bash
# Check logs
docker-compose logs

# Check if ports are available
lsof -i :3000
lsof -i :5000
lsof -i :5432
```

### Database connection issues
```bash
# Wait for database to be ready
docker-compose logs db

# Check health
docker-compose ps
```

### Frontend can't connect to backend
```bash
# Check nginx proxy configuration
docker exec -it todo-frontend cat /etc/nginx/conf.d/default.conf

# Check backend is running
curl http://localhost:5000/api/health
```

## 📚 What I Learned

- Docker Compose orchestration
- Multi-container applications
- Service dependencies and health checks
- Volume management for persistent data
- Environment variables in Docker
- Multi-stage builds for frontend
- Nginx as reverse proxy
- PostgreSQL in Docker
- Full-stack development workflow
- CRUD operations with REST API

## 🚀 Next Steps

- [ ] Add user authentication
- [ ] Implement due dates
- [ ] Add categories/tags
- [ ] Dark mode toggle
- [ ] Deploy to cloud (AWS/GCP)
- [ ] Add Kubernetes manifests
- [ ] Implement CI/CD pipeline
