FROM node:20-alpine as install-dependencies
WORKDIR /usr/src/app
COPY public-dao-api/package.json public-dao-api/package-lock.json ./
RUN npm ci
COPY public-dao-api ./

FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY --from=install-dependencies /usr/src/app ./
RUN npm run build
USER node

FROM node:20-alpine as production
WORKDIR /usr/src/app
COPY --from=install-dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY public-dao-api/package.json ./
CMD ["npm", "run", "start:prod"]