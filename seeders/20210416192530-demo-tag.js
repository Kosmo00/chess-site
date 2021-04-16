'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [{
      tag: 'Ruy López',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Defensa Siciliana',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Finales de torres',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Alfiles de distinto color',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Alfil contra caballo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Estructura de peones',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tag: 'Táctica',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
