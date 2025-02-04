FROM node:latest

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

# !important not to copy the node_modules folder
# created .dockerignore file
COPY . .

EXPOSE 8800

CMD ["npm", "start"]
