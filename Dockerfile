# see https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:alpine as builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

# install deps
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# build and export
COPY . .
RUN npm run build


#--------------#
FROM node:alpine

ENV NODE_ENV production
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]