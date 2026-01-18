# 04 - Monitoring Stack

Complete monitoring solution with Prometheus and Grafana for homelab.

## Architecture
```
Grafana (visualization) :3001
    ↓
Prometheus (metrics) :9090
    ↓
├─ Node Exporter (system metrics) :9100
├─ cAdvisor (container metrics) :8080
└─ TODO App (application metrics) :5000
```

## Stack

- **Grafana** - Beautiful dashboards
- **Prometheus** - Time-series database & metrics collection
- **Node Exporter** - Hardware and OS metrics (CPU, RAM, Disk)
- **cAdvisor** - Container metrics (Docker stats)

## What we monitor

- CPU, Memory, Disk usage
- Network traffic
- Docker containers
- System temperature
- Application performance

## Status

🚧 Work in progress...
