'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
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
      season: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      type: {
        type: Sequelize.ENUM('scripted','romantic','horror'),
        defaultValue:'romantic'
      },
      summary: {
        type: Sequelize.TEXT,
        defaultValue:''
      },
      airdate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.NOW
      },
      airtime: {
        type: Sequelize.STRING,
      },
      image:{
        type: Sequelize.JSON
      },
      rating:{
        type: Sequelize.JSON
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Episodes');
  }
};