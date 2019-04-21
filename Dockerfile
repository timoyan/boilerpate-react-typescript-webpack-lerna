# FROM node:11.14.0-alpine
FROM base
WORKDIR /app

COPY ./packages ./packages
COPY ./lerna.json ./yarn.lock ./package.json ./

# RUN ["tsc", "--version"]
# RUN echo $PATH

RUN yarn install
RUN yarn bootstrap
# RUN cd ./packages/app && set PORT=80 && node server.js
RUN yarn build-prod

EXPOSE 80
CMD [ "yarn", "run-prod" ]
