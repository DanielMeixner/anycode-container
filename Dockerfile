FROM node:alpine
RUN apk update
RUN apk add curl
RUN apk add iputils
RUN apk add strace
RUN mkdir ./app
COPY . ./app
RUN npm install
WORKDIR ./app
EXPOSE 8888
CMD node server.js