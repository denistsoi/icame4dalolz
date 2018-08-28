FROM node:8.9.4

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
