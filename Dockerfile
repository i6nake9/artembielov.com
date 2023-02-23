FROM node:18-alpine
WORKDIR /opt/app
ADD *.json .
RUN npm install
ADD . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]