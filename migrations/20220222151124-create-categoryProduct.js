'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CategoryProduct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'categories',
           key: 'id'
         }
         
    },
    productId: {
      type: Sequelize.INTEGER,
       allowNull: false,
       references: {
        model: 'products',
        key: 'id'
      }
       
  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CategoryProduct');
  }
};