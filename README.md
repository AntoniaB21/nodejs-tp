# nodejs-tp
NodeJS TP M2 Dev ECV Digital

# Membres de l'équipe
- BALLUAIS Antonia antonia.balluais@mail-ecv.fr
- RAMBUR Jeanne jeanne.rambur@mail-ecv.fr
- TRAORE Maryam maryam.traore@mail-ecv.fr

# Installation et lancement du projet

## Installation du projet

Ce projet utilise [node](http://nodejs.org) et [npm](https://npmjs.com). Pour installer le projet on utilise la commande suivante:
her
```sh
$ npm install
```
Il faut ensuite modifier la configuration de la base de données dans le fichier `config/config.json` avec la base de données présente localement.
 ```sh
"development": {
    "username": "root",
    "password": null,
    "database": "netflux",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```
On migre ensuite les tables avec la commande :
```sh
$ npx sequelize-cli db:migrate
```

## Lancer le projet

Pour lancer le projet, on utilise la commande :
```sh
$ npm run dev
```
