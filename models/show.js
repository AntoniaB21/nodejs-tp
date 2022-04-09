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
      Show.hasMany(models.Episode)
    }
  }
  Show.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      unique:true,
    },
    name: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      isUrl: true,
      allowNull:false
    },
    type: {
      type: DataTypes.ENUM('scripted','not scripted'),
      defaultValue:'scripted',
      allowNull:false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    premiered: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ended: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Shows',
  });
  return Show;
};