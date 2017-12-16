FROM node:7

WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000
