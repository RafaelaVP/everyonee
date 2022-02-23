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
  }
  })
  Maker.associate = function(models) {
    Maker.hasMany(models.employee, {as: 'employees'})
  };
  return Maker;
}
