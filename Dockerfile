FROM node:boron

MAINTAINER Reekoh

RUN apt-get update && apt-get install -y build-essential

RUN mkdir -p /home/node/raygun-exception-handler
COPY . /home/node/raygun-exception-handler

WORKDIR /home/node/raygun-exception-handler

# Install dependencies
RUN npm install pm2 yarn -g
RUN yarn install

CMD ["pm2-docker", "--json", "app.yml"]