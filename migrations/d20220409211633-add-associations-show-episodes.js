'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Episodes',
      'showId',
      {
        type: Sequelize.INTEGER,
        references:{
          model: 'Shows',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Episodes', // name of Source model
      'showId' // key we want to remove
    );
  }
};
