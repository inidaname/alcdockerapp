FROM node:7

WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app

COPY bower.json /app

RUN npm install

RUN bower install

COPY . /app

EXPOSE 3000
