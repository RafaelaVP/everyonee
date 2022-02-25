'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.addColumn(
        'makers',  
        'companyId',
         Sequelize.INTEGER

      )
      
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'companyId', {
      type: Sequelize.INTEGER,
     })
  }
};
