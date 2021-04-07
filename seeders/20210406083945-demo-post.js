const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Posts', [{
      user_id: 1,
      category_id: 2,
      title: 'Mediojuego_tipico',
      game: faker.lorem.paragraphs(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      category_id: 1,
      title: 'Aperturas_cerradas',
      game: faker.lorem.paragraphs(),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Posts', null, {})
  }
};
