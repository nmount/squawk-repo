'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    additives: DataTypes.STRING
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
  };
  return Food;
};