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
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.TEXT
      },
      premiered: {
        type: Sequelize.DATE
      },
      ended: {
        type: Sequelize.DATE
      },
      language: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('running','ended','inactive'),
        defaultValue:'inactive'
      },
      officialSite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  }
};