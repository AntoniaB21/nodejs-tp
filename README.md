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

# Dépendances

Les dépendances utilisées pour ce projet, présentes dans `package.json` sont les suivantes :

### Depedencies
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-joi-validation](https://www.npmjs.com/package/express-joi-validation)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [joi](https://www.npmjs.com/package/joi)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [semver](https://www.npmjs.com/package/semver)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [validator](https://www.npmjs.com/package/validator)

### Dev Dependecies
- [nodemon](https://www.npmjs.com/package/nodemon)
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)