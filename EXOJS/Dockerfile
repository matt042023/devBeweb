# Install NodeJS
FROM node:18

# Créer un dossier
WORKDIR /usr/src/app

# Copier à l'interieur du container le package.json
COPY package*.json ./

# Lancer l'installation du projet
RUN npm install

# Récuperer tout le code source
COPY . .

# Exposer un port sur le container
EXPOSE 3000 

# Lancer la commande npm start
CMD ["npm", "start"]