const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Maker = sequelize.define('maker', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameMaker: {
      type: Sequelize.STRING,
      allowNull:false
  },
  employeeId:{
    type: Sequelize.INTEGER,
      allowNull:false
  }
  })
  Maker.associate = function(models) {
    Maker.belongsTo(models.employee, {foreignKey: 'employeeId', as: 'employees'})
  };
  
  Maker.associate = function(models) {
    Maker.hasMany(models.product, {as: 'products'})
  }

  return Maker;
}
