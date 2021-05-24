'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    keywords: DataTypes.STRING
  }, {});
  Search.associate = function(models) {
    // associations can be defined here
  };
  return Search;
};