'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    // additives: DataTypes.STRING
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Categories',
      foreignKey: 'food_id',
      otherKey: 'search_id'
    }
    Food.belongsToMany( models.Search, columnMapping);
    Food.hasMany(models.FoodPhoto, { foreignKey: 'food_id'});
    Food.hasMany(models.Review, {foreignKey: 'food_id'});
    Food.hasMany(models.Additive, {foreignKey: 'food_id'})
  };
  return Food;
};
