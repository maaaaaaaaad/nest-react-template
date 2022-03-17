FROM node:alpine AS builder
WORKDIR /app/client
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/client/build /usr/share/nginx/html
