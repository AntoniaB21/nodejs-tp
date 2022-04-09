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
      // associations
      Episode.belongsTo(models.Shows)
    }
  }
  Episode.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true,
      autoIncrement:true,
      primaryKey:true,
    },
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
    summary: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    showId: {
      type: DataTypes.UUID,
      foreignKey: true,
      references: {
        model:'Shows',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};