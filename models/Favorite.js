const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wiki_id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
        // This references the `wiki` model, which we set in `Wiki.js` as its `modelName` property
        model: 'wiki',
        key: 'id',
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This references the `user` model, which we set in `User.js` as its `modelName` property
        model: 'user',
        key: 'id',
      },
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite;