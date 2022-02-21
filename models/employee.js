const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
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
   }
  })
}


