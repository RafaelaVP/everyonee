const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define('employee', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   firstName: {
      type: Sequelize.STRING,
      allowNull:false
  },
   lastName: {
      type: Sequelize.STRING,
      allowNull:false
  },
   email: {
     type: Sequelize.STRING,
     allowNull:false
   },
   companyId: {
     type: Sequelize.STRING,
     allowNull: false
   }
  })
  Employee.associate = function(models) {
    Employee.hasMany(models.maker, {as: 'makers'})
    Employee.belongsTo(models.company, {foreignKey: 'companyId', as: 'companies'})
  }
  
    
  
  return Employee;
}


