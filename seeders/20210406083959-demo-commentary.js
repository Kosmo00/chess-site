const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Commentaries', [{
      user_id: 2,
      post_id: 1,
      body: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      post_id: 1,
      body: faker.lorem.paragraph(),
      reference_to: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 4,
      post_id: 1,
      body: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Commentaries', null, {})
  }
};
