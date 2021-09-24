FROM node

WORKDIR /usr/challengerletalk/app/backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
