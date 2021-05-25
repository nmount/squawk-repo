'use strict';
module.exports = (sequelize, DataTypes) => {
  const Additive = sequelize.define('Additive', {
    ingredient: DataTypes.STRING
  }, {});
  Additive.associate = function(models) {
    // associations can be defined here
    Additive.belongsTo(models.Food, {foreignKey: 'food_id'});
  };
  return Additive;
};
