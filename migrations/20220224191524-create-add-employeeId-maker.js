'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.addColumn(
        'makers',  
        'employeeId',
         Sequelize.INTEGER

      )
      
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'employeeId', {
      type: Sequelize.INTEGER,
     })
  }
};
