'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.addColumn(
        'products',  
        'companyId',
         Sequelize.INTEGER

      )
      
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'companyId', {
      type: Sequelize.INTEGER,
     })
  }
};
