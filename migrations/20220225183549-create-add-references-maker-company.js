'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'companyId', {
      type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        }
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'companyId', {
      type: Sequelize.INTEGER,
     })
  }
};