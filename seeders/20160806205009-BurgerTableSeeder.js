'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('burgerSeq_dbs', [{
        burger_name: 'Bacon Burger',
        devoured: false
      },
      {
        burger_name: 'Fish Burger',
        devoured: false
      },
      {
        burger_name: 'Veggie Burger',
        devoured: false
      },
      {
        burger_name: 'Pizza Burger',
        devoured: false
      },
      {
        burger_name: 'Mountain Burger',
        devoured: false
      }
      ], {});
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete('burgerSeq_dbs', null, {});
    
  }
};
