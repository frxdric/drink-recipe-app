# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.15.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

FROM base as frontend 
COPY ./drink-app-frontend /usr/src/app/
RUN npm install 
RUN npm run build
################################################################################
# Create a stage for installing production dependecies.
FROM base as deps

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=./recipe-app-backend/package.json,target=package.json \
    --mount=type=bind,source=./recipe-app-backend/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a stage for building the application.
FROM deps as build

# Download additional development dependencies before building, as some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.
RUN --mount=type=bind,source=./recipe-app-backend/package.json,target=package.json \
    --mount=type=bind,source=./recipe-app-backend/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source files into the image.
COPY ./recipe-app-backend .
# Run the build script.
RUN npm run build
RUN npx prisma generate

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base as final


ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY ./recipe-app-backend/package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules/.prisma/client ./node_modules/.prisma/client
COPY --from=frontend /usr/src/app/dist ./client

COPY ./recipe-app-backend/prisma ./prisma

RUN npm install --no-save --ignore-scripts prisma@5.16.2

EXPOSE 3000

USER node

CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && npm run start:prod"]

