# Use an official Nginx image
FROM nginx:alpine

# Set working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy all frontend files to Nginx's HTML directory
COPY . .

# Expose port 80 for the web app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
