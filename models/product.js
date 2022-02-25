const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameProduct: {
      type: Sequelize.STRING,
      allowNull:false
  },
   typeProduct: {
      type: Sequelize.STRING,
      allowNull:false
  },
  makerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  companyId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

  })
  Product.associate = (models) => {
    Product.belongsTo(models.maker, {
      contraint: true,
      foreignKey: 'makerId',
      as: 'makers'
    })
    Product.belongsTo(models.company, {
      contraint: true,
      foreignKey: 'companyId',
      as: 'companies'
    })
    Product.belongsToMany(models.category, {
      through: {
       model: models.categoryproduct
      },
      foreignKey: 'productId',
      as: 'categories',
     constraint: true
    })   
  }

  return Product;
}
