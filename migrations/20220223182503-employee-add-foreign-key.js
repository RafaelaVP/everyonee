'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('employees', 'makerId', {
      type: Sequelize.INTEGER,
        references: {
          model: 'makers',
          key: 'id'
        }
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('employees', 'makerId', {
      type: Sequelize.INTEGER,
     })
  }
};