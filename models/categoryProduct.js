const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoryProduct', {
    categoryId: {
      type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey:true
  },
  productId: {
    type: Sequelize.INTEGER,
     allowNull: false,
     primaryKey:true
}


  })
}
