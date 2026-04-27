FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

#Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/dist ./dist

# Install a static server (serve) globally
RUN npm install -g serve

# Expose the port for the static server
EXPOSE 3000

# Command to serve your application using the static server
CMD ["serve", "-s", "dist"]