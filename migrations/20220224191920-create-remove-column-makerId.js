'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'employees',  
      'makerId'
    )
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'employees',  
      'makerId'
    ), {
      type: Sequelize.INTEGER,
    }
      
  }
};
