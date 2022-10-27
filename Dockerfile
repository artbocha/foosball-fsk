# see https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:alpine as build

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

# install deps
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# build and export
COPY . .
RUN npm run build


# -------------------- #
FROM nginx:alpine as run

COPY --from=build /app/out /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]