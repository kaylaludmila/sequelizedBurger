'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgerSeq_db = sequelize.define('burgerSeq_db', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE.NOW()
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgerSeq_db;
};