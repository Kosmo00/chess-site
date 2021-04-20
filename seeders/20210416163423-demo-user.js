'use strict';
const faker = require('faker')
const bcrypt = require('bcryptjs')

let random_data = []

for (let i = 0; i < 5; i++) {
  random_data[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    nick: faker.internet.userName(),
    trainer: Math.random() > 0.5 ? true : false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

let data = [{
  name: 'Vladimir Otero Mariño',
  email: '123@123.123',
  nick: 'Kosmo',
  password: '12345678',
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Vladimir Otero Mariño',
  email: faker.internet.email(),
  nick: 'Karma',
  password: faker.internet.password(),
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Alfredo Aguilera',
  email: faker.internet.email(),
  nick: 'Pain',
  password: faker.internet.password(),
  trainer: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Alfredo Ramon',
  email: faker.internet.email(),
  nick: 'Ramon',
  password: faker.internet.password(),
  trainer: false,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  email: faker.internet.email(),
  nick: '_rorok',
  password: faker.internet.password(),
  trainer: false,
  createdAt: new Date(),
  updatedAt: new Date()
}]

data.push(...random_data)

for (let i = 0; i < data.length; i++) {
  let salt = bcrypt.genSaltSync(10)
  data[i].password = bcrypt.hashSync(data[i].password, salt)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}