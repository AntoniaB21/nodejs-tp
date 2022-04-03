'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Show.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    summary: DataTypes.TEXT,
    premiered: DataTypes.DATE,
    ended: DataTypes.DATE,
    genres: {
      type: DataTypes.STRING,
      defaultValue:'',
    },
    language: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('running','ended','inactive'),
      defaultValue:'inactive'
    },
    officialSite: DataTypes.STRING,
    image:DataTypes.JSON,
    rating:DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Shows',
  });
  return Show;
};