FROM node:5.12.0-slim

RUN mkdir -p /home
WORKDIR /home
ADD . .

RUN npm install --all \
 && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]