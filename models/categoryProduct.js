const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const CategoryProduct = sequelize.define('categoryProduct', {
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
  CategoryProduct.associate = function(models) {
    CategoryProduct.belongsTo(models.product, {foreignKey: 'productId'})
    CategoryProduct.belongsTo(models.category, {foreignKey: 'categoryId'})
  };
  return CategoryProduct;
}
