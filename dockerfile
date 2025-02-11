FROM node:18-alpine AS build
LABEL authors="vladcomarlau"

WORKDIR /app
# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json* ./
RUN npm install
# Copy the rest of the application code
COPY . .
# CREATE STATIC FILES
RUN npm run build

# NGINX SERVER 
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
# COPY STATIC FILES
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
