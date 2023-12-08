FROM node:alpine
LABEL maintainer="Kilian Bonnet <kilian.bonnet1@etu.univ-cotedazur.fr>"

WORKDIR /app
COPY ../front /app 

RUN npm install -g http-server

EXPOSE 8080
CMD ["npm", "start"]