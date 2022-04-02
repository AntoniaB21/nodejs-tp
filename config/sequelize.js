const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('netflux', 'antonia', 'azertyuiop', {
    host: 'localhost',
    dialect: 'mysql'
  });

(async() => {
    await sequelize.sync();
})();

class Show extends Model{}

Show.init({
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    language: DataTypes.STRING,
    status: DataTypes.STRING,
    premiered: DataTypes.DATE,
    ended: DataTypes.DATE,
    officialSite: DataTypes.STRING,
    image:DataTypes.STRING
},{ sequelize, modelName: 'show'});

module.exports = {
    Show
}
