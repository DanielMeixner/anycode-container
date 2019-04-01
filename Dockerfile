FROM node:alpine
RUN mkdir ./app
COPY . ./app
RUN npm install
WORKDIR ./app
EXPOSE 8888
CMD node server.js