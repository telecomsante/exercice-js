# Exercice JS

## Contenu
Dans ce projet se trouve :
* Une application React dans le dossier client
* Un serveur Fastify dans le dossier server

## Pré-requis

### Node
Il te faudra une node 20 pour lancer les deux applications. Tu peux utiliser nvm pour faciliter l'installation.

### MongoDB
Il te faudra une base de données mongo pour réaliser l'exercice. Tu peux en lancer une avec Docker :
```
docker run --rm -it -p 27017:27017 mongo
```

## Lancement

### Client
Pour lancer le client :
```
cd client
nvm use
npm ci
npm start
```

### Server
Pour lancer le serveur :
```
cd server
nvm use
npm ci
npm start
```

