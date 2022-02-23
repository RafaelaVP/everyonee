const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('category', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameCategory: {
      type: Sequelize.STRING,
      allowNull:false
  }
  }, {tableName: 'categories'})

return Category;
}