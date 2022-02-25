'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'makerId', {
      type: Sequelize.INTEGER,
        references: {
          model: 'makers',
          key: 'id'
        }
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'makerId', {
      type: Sequelize.INTEGER,
     })
  }
};