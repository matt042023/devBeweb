#installer nodeJS / install nodeJS(en anglais pour recherche)
FROM node:18

#créer un dossier
WORKDIR /usr/src/app

# copier à l'intérieur du container le package.json
COPY package*.json ./

#lancer l'installation du projet dans le cantainer
RUN npm install

#récupérer tout le code source
COPY . .

#exposer un port sur le container
EXPOSE 80

#lancer la commande npm start
CMD ["npm", "start"]