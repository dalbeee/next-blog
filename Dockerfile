# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
RUN mkdir /app
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG NEXT_PUBLIC_URL
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NO_UPDATE_NOTIFIER=true
RUN echo -e "args:\nNEXT_PUBLIC_URL:$NEXT_PUBLIC_URL\nNODE_ENV:$NODE_ENV\nNEXT_TELEMETRY_DISABLED:$NEXT_TELEMETRY_DISABLED"
RUN npm run build

FROM node:alpine AS runner
RUN mkdir /app
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["npm", "start"]
