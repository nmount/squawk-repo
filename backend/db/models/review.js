'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
    body: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'user_id'});
    // Review.belongsTo(models.Food, {foreignKey: 'food_id'});
    Review.hasOne(models.ReviewPhoto, { foreignKey: 'review_id' });

  };
  return Review;
};
