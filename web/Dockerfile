FROM oven/bun:1 AS base

WORKDIR /app

# install dependencies
COPY package.json bun.lockb* ./
RUN bun install

# copy source
COPY . .

# build Next.js app
RUN bun run build

# expose port
EXPOSE 3000

# start production server
CMD ["bun", "run", "start", "--hostname", "0.0.0.0", "--port", "3000"]
