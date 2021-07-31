FROM node:14-alpine

ARG APP_DIR=/usr/src/app
WORKDIR ${APP_DIR}

COPY package.json ${APP_DIR}
COPY yarn.lock ${APP_DIR}

RUN yarn

COPY . . 

RUN yarn build2

CMD ["yarn", "start"]
