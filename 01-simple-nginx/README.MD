# 01 - Nginx Hello World

Mój pierwszy projekt Docker - statyczna strona HTML serwowana przez nginx.

## Czego się nauczyłem

- Pisanie Dockerfile
- Budowanie obrazów Docker
- Uruchamianie kontenerów
- Port mapping
- Podstawowe komendy Docker

## Jak uruchomić

### Build obrazu
```bash
docker build -t my-first-nginx .
```

### Uruchom kontener
```bash
docker run -d -p 8080:80 --name my-container my-first-nginx
```

### Otwórz w przeglądarce
http://localhost:8080

### Zatrzymaj
```bash
docker stop my-container
docker rm my-container
```

## Struktura

- `Dockerfile` - definicja obrazu
- `index.html` - strona HTML
- `README.md` - dokumentacja

## Technologie

- Docker
- Nginx (Alpine Linux)
- HTML/CSS
