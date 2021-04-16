'use strict';
const faker = require('faker')

let random_data = []

for (let i = 0; i < 5; i++) {
  random_data[i] = {
    name: faker.name.findName(),
    password: faker.internet.password(),
    nick: faker.internet.userName(),
    trainer: Math.random() > 0.5 ? true : false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

let data = [{
  name: 'Vladimir Otero Mariño',
  nick: 'Kosmo',
  password: '12345678',
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Vladimir Otero Mariño',
  nick: 'Karma',
  password: faker.internet.password(),
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Alfredo Aguilera',
  nick: 'Pain',
  password: faker.internet.password(),
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Alfredo Ramon',
  nick: 'Ramon',
  password: faker.internet.password(),
  trainer: false,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  nick: '_rorok',
  password: faker.internet.password(),
  trainer: false,
  createdAt: new Date(),
  updatedAt: new Date()
}]

data.push(...random_data)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}