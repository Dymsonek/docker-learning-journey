FROM node:18-alpine

WORKDIR /app

# Kopiuj package.json
COPY package.json ./

# Instaluj zależności
RUN npm install --production

# Kopiuj WSZYSTKIE pliki (server.js, init.sql, etc.)
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]
