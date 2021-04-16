'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Post, {
        through: 'PostsTags',
        foreignKey: 'Tag_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Tag.init({
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
      sequelize,
      modelName: 'Tag',
    });
  return Tag;
};