FROM node:20-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

FROM node:20-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --omit=dev && npm cache clean --force

USER node

FROM node:20-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["npm", "start:prod"]


# # Use Node.js as the base image
# FROM node:20-alpine

# # Set the working directory inside the container
# WORKDIR /usr/src/app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the application port
# EXPOSE 3000

# # Define the default command
# CMD ["npm", "start:prod"]