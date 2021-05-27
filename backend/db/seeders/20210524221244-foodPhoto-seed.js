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
    return queryInterface.bulkInsert('FoodPhotos', [
      {user_id: 1, caption:'Hawaiian Pizza Food Photo', imageUrl: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg'},
      {user_id: 1, caption:'Everything Pizza Food Photo', imageUrl: 'https://cdn.bluefoot.com/starvin/images/Every-Topping-Pizza/everything-topping-pizza.jpg'},
      {user_id: 1, caption:'Fettuccine Alfredo Food Photo', imageUrl: 'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg'},
      {user_id: 1, caption: 'Maki Sushi Food Photo', imageUrl: 'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201'},
      {user_id: 1, caption:'Flan Food Photo', imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190410-flan-173-1555947946.jpg'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FoodPhotos', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
