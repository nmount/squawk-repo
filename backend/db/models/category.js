'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    food_id: DataTypes.INTEGER,
    search_id: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
