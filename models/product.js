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

  })
  Product.associate = (models) => {
    Product.belongsTo(models.maker, {
      contraint: true,
      foreignKey: 'makerId'
    })
    Product.belongsToMany(models.category, {
      through: {
       model: models.categoryProduct
      },
      foreignKey: 'idProduct',
     constraint: true
    })
  }


   
     
  
  //  maker.hasMany(models.products, {
  //      foreignKey: 'makerId'
  //    })
  //  }
  //  category.belongsToMany(Product, {
  //    through: {
  //     model: categoryProduct
  //    },
  //    foreignKey: 'idcategory',
  //    constraint: true
  //  })

  return Product;
}
