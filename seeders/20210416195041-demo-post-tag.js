'use strict';

data = []

for (let i = 0; i < 15; i++) {
  data[i] = {
    post_id: Math.floor(Math.random() * 32 + 1),
    tag_id: Math.floor(Math.random() * 7 + 1),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PostsTags', data);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PostsTags', null, {});
  }
};
