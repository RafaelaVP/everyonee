const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define('company', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameCompany: {
      type: Sequelize.STRING,
      allowNull:false,
      unique: true
  },
 

  })
  Company.associate = function(models) {
    Company.hasMany(models.employee, {as: 'employees'})
    Company.hasMany(models.product, {as: 'products'})
    Company.hasMany(models.maker, {as: 'makers'})
  };
  
    
  
  
    
  

  return Company;
}