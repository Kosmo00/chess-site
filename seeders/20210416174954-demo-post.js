const faker = require('faker')

let random_data = []

for (let i = 0; i < 30; i++) {
  random_data[i] = {
    user_id: Math.floor(Math.random() * 9 + 1),
    category_id: Math.floor(Math.random() * 2 + 1),
    title: faker.company.catchPhrase(),
    game: faker.lorem.paragraphs(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

let data = [{
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
}]

data.push(...random_data)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Posts', data)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Posts', null, {})
  }
};
