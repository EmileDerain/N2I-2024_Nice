FROM node:alpine
LABEL maintainer="Kilian Bonnet <kilian.bonnet1@etu.univ-cotedazur.fr>"

WORKDIR /app
COPY ./back /app 

RUN npm install

EXPOSE 3008 3007
CMD ["npm", "start"]