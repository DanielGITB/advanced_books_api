'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'Node thanks',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'NodeJS with the boys',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};