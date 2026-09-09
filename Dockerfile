FROM node:20-alpine
WORKDIR /app

COPY package.json ./
COPY client/package.json client/package.json
COPY server/package.json server/package.json

RUN npm install --prefix client
RUN npm install --prefix server

COPY client client
COPY server server

RUN npm run build

ENV NODE_ENV=production
EXPOSE 10000
CMD ["npm","start"]
