FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . /server/

EXPOSE 3333

CMD ["yarn", "dev"]
