FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE ${CLIENT_PORT_EXTERNAL}
RUN npm run build
CMD npm run start
