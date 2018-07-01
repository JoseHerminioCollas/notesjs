FROM node:8

RUN npm install webpack -g

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]


# Dockerfile (tag: v3)
# FROM node:0.12.7
# RUN npm install webpack -g
# WORKDIR /tmp
# COPY package.json /tmp/
# RUN npm config set registry http://registry.npmjs.org/ && npm install
# WORKDIR /usr/src/app
# COPY . /usr/src/app/
# RUN cp -a /tmp/node_modules /usr/src/app/
# RUN webpack
# ENV NODE_ENV=production
# ENV PORT=4000
# CMD [ “/usr/local/bin/node”, “./index.js” ]
# EXPOSE 4000