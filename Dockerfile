FROM node:8

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "emacs", "git", "screen"]

RUN npm install webpack webpack-cli -g

WORKDIR /app
COPY . /app

RUN npm install
# # If you are building your code for production
# # RUN npm install --only=production
# COPY . .

ENV NODE_ENV=development
ENV PORT=4000

# CMD webpack
# CMD emacs
CMD webpack --watch --watch-polling

# CMD [ “npm”, “start” ]
# EXPOSE 4000
