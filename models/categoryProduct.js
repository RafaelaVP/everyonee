const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const CategoryProduct = sequelize.define('categoryproduct', {
      id: {
      type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement: true,
       primaryKey: true
      
  },
  categoryId: {
    type: Sequelize.INTEGER,
     allowNull: false,
    
},
  productId: {
    type: Sequelize.INTEGER,
     allowNull: false,
     
}
  },{tableName:'categoryproduct'})
  CategoryProduct.associate = function(models) {
    CategoryProduct.belongsTo(models.product, {foreignKey: 'productId'})
    CategoryProduct.belongsTo(models.category, {foreignKey: 'categoryId'})
  };
  return CategoryProduct;
}
