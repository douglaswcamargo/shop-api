 FROM node:14-alpine
 RUN apk update && \
     apk add mariadb-client mariadb-connector-c
COPY . /api
WORKDIR /api
RUN npm install
EXPOSE 3333:3333
CMD ["npm", "run", "start:docker"]