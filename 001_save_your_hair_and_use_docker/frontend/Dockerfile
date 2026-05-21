  FROM node:24-alpine

  RUN apk add --no-cache libc6-compat
  RUN corepack enable pnpm
  
  WORKDIR /app
  
  COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
  RUN pnpm install
  
  COPY . .

  EXPOSE 3000
  ENV PORT=3000
  ENV HOSTNAME=0.0.0.0

  CMD ["pnpm", "dev"]
