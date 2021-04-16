'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'role_id', {
      allowNull: false,
      defaultValue: 1,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Roles'
        },
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'role_id')
  }
};
