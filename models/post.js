'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        as: post,
        foreignKey: user_id
      })

      this.belongsTo(models.Category, {
        as: post,
        foreignKey: category_id
      })
    }
  };
  Post.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    game: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
      sequelize,
      modelName: 'Post',
    });
  return Post;
};