'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burgerSeq_db = sequelize.define('burgerSeq_db', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
  createdAt: {
     allowNull: false,
     type: Sequelize.DATE,
     defaultValue: Date.now()
   },
   updatedAt: {
     allowNull: false,
     type: Sequelize.DATE,
     defaultValue: Date.now()
    }
  }, {
    classMethods: {
      associate: function(models) {
    
      }
    }
  });
  return burgerSeq_db;
};