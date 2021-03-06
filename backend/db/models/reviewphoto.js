'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewPhoto = sequelize.define('ReviewPhoto', {
    review_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {});
  ReviewPhoto.associate = function(models) {
    // associations can be defined here
    ReviewPhoto.belongsTo(models.User, {foreignKey: 'user_id'});
    ReviewPhoto.belongsTo(models.Review, {foreignKey: 'review_id'});
  };
  return ReviewPhoto;
};
