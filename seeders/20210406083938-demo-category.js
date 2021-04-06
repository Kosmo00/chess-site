module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Categories', [{
      name: 'apertura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'mediojuego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'final',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Categories', null, {})
  }
};
