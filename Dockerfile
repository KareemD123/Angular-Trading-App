# Stage 1: Set up Angular project in Docker

# Pull node image
FROM node:14.15.4 as build

# Set working directory inside container
WORKDIR /app

#Copy source code from current directory to container directory (/app)
COPY . .

# Install all dependencies in container
RUN npm install

# Create build of application
RUN npm run build --prod

# Stage 2: Serve app with nginx server

# Pull nginx image
FROM nginx:latest

# Copy build output from current directory to nginx 
COPY --from=build /app/dist/angular-trading-app /usr/share/nginx/html

# Export port 80
EXPOSE 80


