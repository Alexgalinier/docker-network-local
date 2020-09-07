FROM node:12.18-alpine as build

WORKDIR /app

ADD . .
RUN npm install

CMD ["node", "index.js"]