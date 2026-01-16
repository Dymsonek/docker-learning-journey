# ============================================
# STAGE 1: Build Stage
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

# ============================================
# STAGE 2: Production Stage
# ============================================
FROM nginx:alpine

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
