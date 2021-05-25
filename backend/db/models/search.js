'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    keywords: DataTypes.STRING
  }, {});
  Search.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'Categories',
      foreignKey: 'search_id',
      otherKey: 'food_id'
    }
    Search.belongsToMany( models.Food, columnMapping);
  };
  return Search;
};
