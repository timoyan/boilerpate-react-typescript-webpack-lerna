# FROM node:11.14.0-alpine
FROM base
WORKDIR /app

COPY ./packages ./packages
COPY ./lerna.json ./yarn.lock ./package.json ./

RUN yarn install
RUN yarn bootstrap
RUN yarn build-prod

EXPOSE 80
CMD [ "yarn", "run-prod" ]
