# 🛠️ Build stage – install dependencies
FROM node:23-alpine AS builder

WORKDIR /usr/src/app

# Copy only dependency files to leverage Docker cache
COPY package*.json ./
RUN npm ci

# Copy the full application source
COPY . .

RUN npm run build

# Development stage – run the app in dev mode
FROM node:23-alpine

WORKDIR /usr/src/app

# Copy installed node_modules from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

EXPOSE 4000

# Run the app in development mode
CMD ["npm", "run", "start:dev"]
