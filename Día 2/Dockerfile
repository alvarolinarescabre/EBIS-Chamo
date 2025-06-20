FROM node:24.2.0-alpine3.22

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --production

COPY app.js ./

EXPOSE 3000

CMD ["node", "app.js"]
