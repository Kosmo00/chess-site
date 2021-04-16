const faker = require('faker')

random_data = []

for (let i = 0; i < 150; i++) {
  random_data[i] = {
    user_id: Math.floor(Math.random() * 9 + 1),
    post_id: Math.floor(Math.random() * 32 + 1),
    body: faker.lorem.paragraph(),
    cursor: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

data = [{
  user_id: 2,
  post_id: 1,
  body: faker.lorem.paragraph(),
  cursor: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  user_id: 3,
  post_id: 1,
  body: faker.lorem.paragraph(),
  reference_to: 1,
  cursor: 5,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  user_id: 4,
  post_id: 1,
  body: faker.lorem.paragraph(),
  cursor: 5,
  createdAt: new Date(),
  updatedAt: new Date()
}]

data.push(...random_data)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Commentaries', data)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Commentaries', null, {})
  }
}
