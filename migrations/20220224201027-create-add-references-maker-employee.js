'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'employeeId', {
      type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id'
        }
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('makers', 'employeeId', {
      type: Sequelize.INTEGER,
     })
  }
};