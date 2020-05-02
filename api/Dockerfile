FROM node:10-alpine

# Install dep for bcrypt: https://github.com/kelektiv/node.bcrypt.js/issues/736
RUN apk --no-cache add --virtual builds-deps build-base python

# Sources folder
WORKDIR /app

# Copy sources folder
COPY . .

# Install dependecies
RUN npm install

# Use 3000 port
ENV PORT=3000

# And expose it
EXPOSE 3000

CMD ["npm", "start"]
