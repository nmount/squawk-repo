'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('ReviewPhotos', [
        {user_id: 1, review_id:1, caption:'Hawaiian Pizza', imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-10/5/18/asset/buzzfeed-prod-web10/sub-buzz-4967-1475705302-1.png?downsize=900:*&output-format=auto&output-quality=auto'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ReviewPhotos', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
