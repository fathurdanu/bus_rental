'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Items',{
      fields: ['BrandId'],
      type: 'foreign key',
      name: 'fk-brand-item',
      references: {
        table: 'Brands',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Items',{
      fields: ['BrandId'],
      type: 'foreign key',
      name: 'fk-brand-item',
      references: {
        table: 'Brands',
        field: 'id'
      }
    });
  }
};
