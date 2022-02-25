'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.addColumn(
        'employees',  
        'companyId',
         Sequelize.INTEGER

      )
      
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('employees', 'companyId', {
      type: Sequelize.INTEGER,
     })
  }
};
