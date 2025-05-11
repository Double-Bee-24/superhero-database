# 🛠️ Build stage – install dependencies and build frontend
FROM node:23-alpine AS builder

WORKDIR /usr/src/app

# Copy dependency files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the full source code
COPY . .

# Build the frontend (Vite or similar)
RUN npm run build

# Runtime stage – serve static files with a lightweight server
FROM node:23-alpine

WORKDIR /usr/src/app

# Install only a static file server (e.g., serve)
RUN npm install -g serve

# Copy built frontend from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose port that frontend will be served on
EXPOSE 5173

# Serve the production build
CMD ["serve", "-s", "dist", "-l", "5173"]
