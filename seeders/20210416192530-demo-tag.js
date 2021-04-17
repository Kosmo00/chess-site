'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [{
      name: 'Ruy López',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Defensa Siciliana',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Finales de torres',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alfiles de distinto color',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alfil contra caballo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Estructura de peones',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Táctica',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
