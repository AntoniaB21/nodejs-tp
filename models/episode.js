'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Episode.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    season: DataTypes.NUMBER,
    number: DataTypes.NUMBER,
    type: {
      type: DataTypes.ENUM('scripted','romantic','horror'),
      defaultValue:'scripted'
    },
    airdate: DataTypes.DATE,
    airtime: DataTypes.STRING,
    runtime: DataTypes.NUMBER,
    rating: DataTypes.JSON,
    image: DataTypes.JSON,
    summary: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};