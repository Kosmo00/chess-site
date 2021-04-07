'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, {
        as: 'posts',
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING(100),
    },
    nick: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    trainer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
      sequelize,
      modelName: 'User',
    });
  return User;
};