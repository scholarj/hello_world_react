FROM nodesource/centos7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install

ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]
