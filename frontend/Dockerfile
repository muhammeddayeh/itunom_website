# Frontend Dockerfile for Create React App with CRACO
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps flag (fixes React 19 conflicts)
RUN npm install --legacy-peer-deps

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV HOST=0.0.0.0
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Start development server
CMD ["npm", "start"]