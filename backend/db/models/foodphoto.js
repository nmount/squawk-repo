'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodPhoto = sequelize.define('FoodPhoto', {
    user_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {});
  FoodPhoto.associate = function(models) {
    // associations can be defined here
    FoodPhoto.belongsTo(models.User, {foreignKey: 'user_id'});
    FoodPhoto.belongsTo(models.Food, {foreignKey: 'food_id'});
  };
  return FoodPhoto;
};
