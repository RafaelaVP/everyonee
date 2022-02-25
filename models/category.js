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
  },
  }, {tableName: 'categories'})

  Category.associate = function(models) {
    Category.belongsToMany(models.product, {
      through: 'categoryproduct', 
      foreignKey: 'categoryId',
      as: 'products',
      constraint: true
    })
  };

return Category;
}