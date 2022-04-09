'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    lastName: {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    email: {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
      },
    },
    password: {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    roles: {
      type: {
        type: DataTypes.ENUM('ADMIN','USER'),
        defaultValue:'USER'
      },
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};