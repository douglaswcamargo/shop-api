# FROM node:14-alpine
# RUN apk update && \
#     apk add mysql-client
FROM ubuntu:20.04
RUN export DEBIAN_FRONTEND=noninteractive; apt update && apt install -y libmysqlclient-dev nodejs npm
COPY . /api
WORKDIR /api
RUN npm install
CMD ["npm", "run", "start:docker"]