FROM node:21.7.3-alpine3.20
WORKDIR /app-blog
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]