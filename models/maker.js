const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('maker', {
    id: {
      type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true
  },
   nameMaker: {
      type: Sequelize.STRING,
      allowNull:false
  }
  })
}
