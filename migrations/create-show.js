'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:''
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:''
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:''
      },
      summary: {
        type: Sequelize.TEXT,
        defaultValue:''
      },
      premiered: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.NOW
      },
      ended: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.NOW
      },
      genres: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('running','ended','inactive'),
        defaultValue:'inactive'
      },
      officialSite: {
        type:  Sequelize.STRING,
        defaultValue:''
      },
      image:{
        type: Sequelize.JSON
      },
      rating: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  }
};