const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Comentaries', [{
      user_id: 2,
      post_id: 1,
      body: faker.lorem.paragraph(),
      deep: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      post_id: 1,
      body: faker.lorem.paragraph(),
      deep: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 4,
      post_id: 1,
      body: faker.lorem.paragraph(),
      deep: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Comentaries', null, {})
  }
};
