FROM node:20-alpine as install-dependencies
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY --from=install-dependencies /usr/src/app ./
RUN npm run build
USER node

FROM node:20-alpine as production
WORKDIR /usr/src/app
COPY --from=install-dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY package.json ./
CMD ["npm", "run", "start:prod"]