'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [{
      name: 'Vladimir Otero Mariño',
      nick: 'Kosmo',
      trainer: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vladimir Otero Mariño',
      nick: 'Karma',
      trainer: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alfredo Aguilera',
      nick: 'Pain',
      trainer: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alfredo Ramon',
      nick: 'Ramon',
      trainer: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nick: '_rorok',
      trainer: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {})
  }
};
