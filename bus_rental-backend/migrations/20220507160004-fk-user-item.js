'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Items',{
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fk-user-item',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Items',{
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fk-user-item',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  }
};
