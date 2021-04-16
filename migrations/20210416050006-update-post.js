'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'postType_id', {
      allowNull: false,
      defaultValue: 1,
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'PostTypes'
        },
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'postType_id')
  }
};
